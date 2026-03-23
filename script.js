const demoData = {
  diario: {
    receita: 18290,
    receitaVar: 6.2,
    atendimentos: 146,
    atendimentosVar: 2.8,
    usuarios: 23,
    usuariosVar: -1.4,
    nps: 78,
    npsVar: 2,
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    revenueSeries: [2100, 2500, 2400, 2800, 3000, 2700, 2790],
    goals: [
      { team: "Comercial", progress: 81 },
      { team: "Suporte", progress: 74 },
      { team: "Operacoes", progress: 68 }
    ],
    units: [
      { name: "Centro", revenue: 7120, appointments: 55, conversion: "34%" },
      { name: "Zona Sul", revenue: 5580, appointments: 42, conversion: "31%" },
      { name: "Zona Norte", revenue: 5590, appointments: 49, conversion: "29%" }
    ]
  },
  semanal: {
    receita: 126430,
    receitaVar: 9.8,
    atendimentos: 1032,
    atendimentosVar: 4.9,
    usuarios: 178,
    usuariosVar: 1.7,
    nps: 80,
    npsVar: 3,
    labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
    revenueSeries: [12200, 13600, 14400, 15030, 16200, 17000, 17800, 20200],
    goals: [
      { team: "Comercial", progress: 88 },
      { team: "Suporte", progress: 79 },
      { team: "Operacoes", progress: 73 }
    ],
    units: [
      { name: "Centro", revenue: 46280, appointments: 356, conversion: "36%" },
      { name: "Zona Sul", revenue: 38820, appointments: 314, conversion: "33%" },
      { name: "Zona Norte", revenue: 41330, appointments: 362, conversion: "32%" }
    ]
  },
  mensal: {
    receita: 512980,
    receitaVar: 12.1,
    atendimentos: 4180,
    atendimentosVar: 7.4,
    usuarios: 684,
    usuariosVar: 3.2,
    nps: 82,
    npsVar: 5,
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    revenueSeries: [68400, 74200, 79600, 83200, 89400, 98200],
    goals: [
      { team: "Comercial", progress: 91 },
      { team: "Suporte", progress: 84 },
      { team: "Operacoes", progress: 78 }
    ],
    units: [
      { name: "Centro", revenue: 185400, appointments: 1510, conversion: "37%" },
      { name: "Zona Sul", revenue: 163200, appointments: 1310, conversion: "34%" },
      { name: "Zona Norte", revenue: 164380, appointments: 1360, conversion: "33%" }
    ]
  }
};

const refs = {
  periodo: document.getElementById("periodo"),
  receita: document.getElementById("kpi-receita"),
  receitaVar: document.getElementById("kpi-receita-var"),
  atendimentos: document.getElementById("kpi-atendimentos"),
  atendimentosVar: document.getElementById("kpi-atendimentos-var"),
  usuarios: document.getElementById("kpi-usuarios"),
  usuariosVar: document.getElementById("kpi-usuarios-var"),
  nps: document.getElementById("kpi-nps"),
  npsVar: document.getElementById("kpi-nps-var"),
  goals: document.getElementById("lista-metas"),
  tableBody: document.getElementById("corpo-tabela"),
  dataFile: document.getElementById("data-file"),
  dataUrl: document.getElementById("data-url"),
  loadUrlBtn: document.getElementById("load-url"),
  statusMsg: document.getElementById("data-status")
};

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

const periodAliases = {
  diario: ["diario", "dia", "daily", "d"],
  semanal: ["semanal", "semana", "weekly", "w"],
  mensal: ["mensal", "mes", "monthly", "m"]
};

let revenueChart;
let currentData = JSON.parse(JSON.stringify(demoData));

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findColumnKey(headers, candidates) {
  const normalizedHeaders = headers.map((header) => ({
    raw: header,
    normalized: normalizeText(header)
  }));
  for (const candidate of candidates) {
    const target = normalizeText(candidate);
    const direct = normalizedHeaders.find((item) => item.normalized === target);
    if (direct) {
      return direct.raw;
    }
    const partial = normalizedHeaders.find((item) => item.normalized.includes(target));
    if (partial) {
      return partial.raw;
    }
  }
  return null;
}

function parseNumber(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }
  const raw = String(value || "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^0-9.-]/g, "");
  const num = Number(raw);
  return Number.isFinite(num) ? num : 0;
}

function formatVariation(value, suffix = "%") {
  const safeValue = Number.isFinite(value) ? value : 0;
  const signal = safeValue > 0 ? "+" : "";
  return `${signal}${safeValue.toFixed(1).replace(".0", "")}${suffix}`;
}

function setVariationStyle(element, value) {
  element.classList.remove("positive", "negative");
  element.classList.add(value >= 0 ? "positive" : "negative");
}

function renderKPIs(data) {
  refs.receita.textContent = moneyFormatter.format(data.receita);
  refs.receitaVar.textContent = formatVariation(data.receitaVar);
  setVariationStyle(refs.receitaVar, data.receitaVar);

  refs.atendimentos.textContent = data.atendimentos.toLocaleString("pt-BR");
  refs.atendimentosVar.textContent = formatVariation(data.atendimentosVar);
  setVariationStyle(refs.atendimentosVar, data.atendimentosVar);

  refs.usuarios.textContent = data.usuarios.toLocaleString("pt-BR");
  refs.usuariosVar.textContent = formatVariation(data.usuariosVar);
  setVariationStyle(refs.usuariosVar, data.usuariosVar);

  refs.nps.textContent = data.nps.toString();
  refs.npsVar.textContent = formatVariation(data.npsVar, " pts");
  setVariationStyle(refs.npsVar, data.npsVar);
}

function renderGoals(data) {
  refs.goals.innerHTML = data.goals
    .map(
      (goal) => `
      <li>
        <div class="goal-label">
          <span>${goal.team}</span>
          <strong>${goal.progress}%</strong>
        </div>
        <div class="progress-track">
          <span class="progress-fill" style="width: ${goal.progress}%"></span>
        </div>
      </li>
    `
    )
    .join("");
}

function renderTable(data) {
  refs.tableBody.innerHTML = data.units
    .map(
      (unit) => `
      <tr>
        <td>${unit.name}</td>
        <td>${moneyFormatter.format(unit.revenue)}</td>
        <td>${unit.appointments.toLocaleString("pt-BR")}</td>
        <td>${unit.conversion}</td>
      </tr>
    `
    )
    .join("");
}

function createOrUpdateChart(data) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Receita",
        data: data.revenueSeries,
        fill: true,
        tension: 0.3,
        borderColor: "#44d18f",
        backgroundColor: "rgba(68, 209, 143, 0.15)",
        pointRadius: 3
      }
    ]
  };

  if (!revenueChart) {
    const ctx = document.getElementById("revenueChart");
    revenueChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            ticks: {
              callback(value) {
                return moneyFormatter.format(value);
              }
            },
            grid: { color: "rgba(255,255,255,0.08)" }
          },
          x: {
            grid: { color: "rgba(255,255,255,0.08)" }
          }
        }
      }
    });
    return;
  }

  revenueChart.data = chartData;
  revenueChart.update();
}

function renderDashboard(periodKey) {
  const data = currentData[periodKey];
  if (!data) {
    return;
  }

  renderKPIs(data);
  renderGoals(data);
  renderTable(data);
  createOrUpdateChart(data);
}

function detectPeriod(rawPeriod) {
  const value = normalizeText(rawPeriod);
  for (const [period, aliases] of Object.entries(periodAliases)) {
    if (aliases.includes(value)) {
      return period;
    }
  }
  return "mensal";
}

function buildModelFromRows(rows) {
  const cleanRows = rows.filter((row) => Object.values(row).some((value) => String(value || "").trim() !== ""));
  if (!cleanRows.length) {
    throw new Error("Base vazia.");
  }

  const headers = Object.keys(cleanRows[0]);
  const periodKey = findColumnKey(headers, ["periodo", "period", "nivel"]) || headers[0];
  const teamKey = findColumnKey(headers, ["equipe", "team", "area"]);
  const unitKey = findColumnKey(headers, ["unidade", "filial", "nome", "empresa"]);
  const revenueKey = findColumnKey(headers, ["receita", "faturamento", "vendas", "resultado"]);
  const appointmentsKey = findColumnKey(headers, ["atendimentos", "qtd_atendimentos", "clientes", "volume"]);
  const usersKey = findColumnKey(headers, ["usuarios", "novos_usuarios", "novos usuarios", "cadastros"]);
  const npsKey = findColumnKey(headers, ["nps", "satisfacao", "satisfacao_nps"]);
  const conversionKey = findColumnKey(headers, ["conversao", "taxa_conversao", "conversion"]);
  const dateKey = findColumnKey(headers, ["data", "mes", "label", "periodo_label"]);
  const goalKey = findColumnKey(headers, ["meta", "progresso", "goal"]);

  if (!revenueKey) {
    throw new Error("Nao foi possivel identificar a coluna de receita.");
  }

  const grouped = { diario: [], semanal: [], mensal: [] };
  cleanRows.forEach((row) => {
    const period = detectPeriod(row[periodKey]);
    grouped[period].push(row);
  });

  const nextModel = {};
  Object.entries(grouped).forEach(([period, periodRows]) => {
    const safeRows = periodRows.length ? periodRows : cleanRows;
    const totalRevenue = safeRows.reduce((sum, row) => sum + parseNumber(row[revenueKey]), 0);
    const totalAppointments = appointmentsKey
      ? safeRows.reduce((sum, row) => sum + parseNumber(row[appointmentsKey]), 0)
      : 0;
    const totalUsers = usersKey ? safeRows.reduce((sum, row) => sum + parseNumber(row[usersKey]), 0) : 0;
    const averageNps = npsKey
      ? safeRows.reduce((sum, row) => sum + parseNumber(row[npsKey]), 0) / Math.max(safeRows.length, 1)
      : 0;

    const labels = dateKey
      ? safeRows.map((row, idx) => String(row[dateKey] || `P${idx + 1}`))
      : safeRows.map((_, idx) => `P${idx + 1}`);
    const revenueSeries = safeRows.map((row) => parseNumber(row[revenueKey]));

    const groupedTeams = {};
    if (teamKey) {
      safeRows.forEach((row) => {
        const team = String(row[teamKey] || "Nao informado");
        if (!groupedTeams[team]) {
          groupedTeams[team] = [];
        }
        groupedTeams[team].push(row);
      });
    }
    const goals = Object.entries(groupedTeams)
      .slice(0, 6)
      .map(([team, teamRows]) => {
        const avgGoal = goalKey
          ? teamRows.reduce((sum, row) => sum + parseNumber(row[goalKey]), 0) / Math.max(teamRows.length, 1)
          : (teamRows.reduce((sum, row) => sum + parseNumber(row[revenueKey]), 0) / Math.max(totalRevenue, 1)) * 100;
        return {
          team,
          progress: Math.min(100, Math.max(0, Math.round(avgGoal)))
        };
      });

    const groupedUnits = {};
    const unitSourceKey = unitKey || teamKey;
    if (unitSourceKey) {
      safeRows.forEach((row) => {
        const unit = String(row[unitSourceKey] || "Nao informado");
        if (!groupedUnits[unit]) {
          groupedUnits[unit] = { revenue: 0, appointments: 0, conversion: [] };
        }
        groupedUnits[unit].revenue += parseNumber(row[revenueKey]);
        groupedUnits[unit].appointments += appointmentsKey ? parseNumber(row[appointmentsKey]) : 0;
        if (conversionKey) {
          groupedUnits[unit].conversion.push(parseNumber(row[conversionKey]));
        }
      });
    }

    const units = Object.entries(groupedUnits)
      .map(([name, values]) => {
        const conversionAvg = values.conversion.length
          ? values.conversion.reduce((sum, val) => sum + val, 0) / values.conversion.length
          : values.revenue > 0 && values.appointments > 0
            ? (values.appointments / values.revenue) * 100
            : 0;
        return {
          name,
          revenue: values.revenue,
          appointments: values.appointments,
          conversion: `${conversionAvg.toFixed(1).replace(".0", "")}%`
        };
      })
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 8);

    nextModel[period] = {
      receita: Math.round(totalRevenue),
      receitaVar: 0,
      atendimentos: Math.round(totalAppointments),
      atendimentosVar: 0,
      usuarios: Math.round(totalUsers),
      usuariosVar: 0,
      nps: Math.round(averageNps),
      npsVar: 0,
      labels,
      revenueSeries,
      goals: goals.length ? goals : [{ team: "Geral", progress: 100 }],
      units: units.length
        ? units
        : [
            {
              name: "Consolidado",
              revenue: Math.round(totalRevenue),
              appointments: Math.round(totalAppointments),
              conversion: "0%"
            }
          ]
    };
  });

  return nextModel;
}

async function parseCsvText(text) {
  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => resolve(result.data),
      error: (error) => reject(error)
    });
  });
}

async function parseFileToRows(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "json") {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) {
      throw new Error("JSON deve ser um array de objetos.");
    }
    return parsed;
  }

  if (extension === "csv") {
    const text = await file.text();
    return parseCsvText(text);
  }

  if (extension === "xlsx" || extension === "xls") {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    const firstSheet = workbook.Sheets[firstSheetName];
    return XLSX.utils.sheet_to_json(firstSheet, { defval: "" });
  }

  throw new Error("Formato nao suportado. Use CSV, JSON ou XLSX.");
}

async function parseUrlToRows(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Falha ao carregar URL informada.");
  }
  const contentType = (response.headers.get("content-type") || "").toLowerCase();
  if (contentType.includes("application/json") || url.toLowerCase().endsWith(".json")) {
    const parsed = await response.json();
    if (!Array.isArray(parsed)) {
      throw new Error("JSON remoto deve ser um array de objetos.");
    }
    return parsed;
  }
  const text = await response.text();
  return parseCsvText(text);
}

function applyExternalData(model, sourceDescription) {
  currentData = model;
  refs.statusMsg.textContent = `Base carregada com sucesso: ${sourceDescription}`;
  renderDashboard(refs.periodo.value);
}

function setErrorStatus(message) {
  refs.statusMsg.textContent = `Erro ao carregar dados: ${message}`;
}

refs.periodo.addEventListener("change", (event) => {
  renderDashboard(event.target.value);
});

refs.dataFile.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }
  try {
    refs.statusMsg.textContent = "Processando arquivo...";
    const rows = await parseFileToRows(file);
    const model = buildModelFromRows(rows);
    applyExternalData(model, `arquivo ${file.name}`);
  } catch (error) {
    setErrorStatus(error.message);
  }
});

refs.loadUrlBtn.addEventListener("click", async () => {
  const url = refs.dataUrl.value.trim();
  if (!url) {
    setErrorStatus("Informe uma URL valida.");
    return;
  }
  try {
    refs.statusMsg.textContent = "Carregando URL...";
    const rows = await parseUrlToRows(url);
    const model = buildModelFromRows(rows);
    applyExternalData(model, "URL remota");
  } catch (error) {
    setErrorStatus(error.message);
  }
});

renderDashboard(refs.periodo.value);
