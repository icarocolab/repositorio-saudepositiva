const defaultSalesPlan = [
  {
    action: "Campanhas segmentadas de marketing digital",
    detail: "Ativar campanhas por UF e perfil de MPME para aumentar leads qualificados."
  },
  {
    action: "Treinamento avancado em e-commerce para MPMEs",
    detail: "Capacitacao operacional em funil, precificacao, midias e conversao."
  },
  {
    action: "Conversao assistida por Agente Virtual",
    detail: "Uso de WhatsApp e IA para recuperar abandono e acelerar fechamento."
  },
  {
    action: "Ritual semanal de performance",
    detail: "Acompanhar conversao, CAC, ticket medio e ajustes rapidos de campanha."
  }
];

const defaultData = {
  diario: {
    kpis: {
      maturidade: { t0: 34.6, t1: 41.4, var: 19.7, meta: "10-20%", status: "Atingido" },
      produtividade: { t0: 4702.8, t1: 5579.1, var: 18.6, meta: "15-20%", status: "Atingido" },
      vendasOnline: { t0: 3520.4, t1: 2410.7, var: -31.5, meta: "20-30%", status: "Nao Atingido" }
    },
    mpmesAtivas: 132,
    mpmesMeta: 500,
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    salesSeries: [420.3, 401.2, 383.5, 361.7, 329.4, 278.8, 235.8],
    impactGoals: [
      { title: "Reducao de tempo de espera", current: 21, target: 30, unit: "%" },
      { title: "Aumento de produtividade", current: 11, target: 15, unit: "%" },
      { title: "Adocao de programas preventivos", current: 30, target: 50, unit: "%" },
      { title: "MPMEs ativas na escala", current: 132, target: 500, unit: "" }
    ],
    editalIndicators: [
      { name: "Maturidade Digital", t0: 34.6, t1: 41.4, var: 19.7, meta: "10-20%", status: "Atingido" },
      { name: "Produtividade", t0: 4702.8, t1: 5579.1, var: 18.6, meta: "15-20%", status: "Atingido" },
      { name: "Vendas Online", t0: 3520.4, t1: 2410.7, var: -31.5, meta: "20-30%", status: "Nao Atingido" }
    ],
    salesPlan: defaultSalesPlan,
    units: [
      { name: "PB - Joao Pessoa", revenue: 9310, appointments: 163, conversion: "29.4%" },
      { name: "PE - Recife", revenue: 8840, appointments: 149, conversion: "28.1%" },
      { name: "PB - Campina Grande", revenue: 7930, appointments: 141, conversion: "27.3%" }
    ]
  },
  semanal: {
    kpis: {
      maturidade: { t0: 35.0, t1: 41.8, var: 19.4, meta: "10-20%", status: "Atingido" },
      produtividade: { t0: 4748.3, t1: 5660.2, var: 19.2, meta: "15-20%", status: "Atingido" },
      vendasOnline: { t0: 3479.5, t1: 1930.1, var: -44.5, meta: "20-30%", status: "Nao Atingido" }
    },
    mpmesAtivas: 188,
    mpmesMeta: 500,
    labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
    salesSeries: [3390, 3120, 2880, 2620, 2380, 2120, 1990, 1930],
    impactGoals: [
      { title: "Reducao de tempo de espera", current: 23, target: 30, unit: "%" },
      { title: "Aumento de produtividade", current: 12, target: 15, unit: "%" },
      { title: "Adocao de programas preventivos", current: 36, target: 50, unit: "%" },
      { title: "MPMEs ativas na escala", current: 188, target: 500, unit: "" }
    ],
    editalIndicators: [
      { name: "Maturidade Digital", t0: 35.0, t1: 41.8, var: 19.4, meta: "10-20%", status: "Atingido" },
      { name: "Produtividade", t0: 4748.3, t1: 5660.2, var: 19.2, meta: "15-20%", status: "Atingido" },
      { name: "Vendas Online", t0: 3479.5, t1: 1930.1, var: -44.5, meta: "20-30%", status: "Nao Atingido" }
    ],
    salesPlan: defaultSalesPlan,
    units: [
      { name: "PB - Joao Pessoa", revenue: 28690, appointments: 493, conversion: "30.2%" },
      { name: "PE - Recife", revenue: 27410, appointments: 467, conversion: "29.3%" },
      { name: "CE - Fortaleza", revenue: 24680, appointments: 438, conversion: "27.9%" }
    ]
  },
  mensal: {
    kpis: {
      maturidade: { t0: 35.16, t1: 42.19, var: 20.0, meta: "10-20%", status: "Atingido" },
      produtividade: { t0: 4771.7, t1: 5726.03, var: 20.0, meta: "15-20%", status: "Atingido" },
      vendasOnline: { t0: 3438.19, t1: 839.68, var: -33.86, meta: "20-30%", status: "Nao Atingido" }
    },
    mpmesAtivas: 220,
    mpmesMeta: 500,
    labels: ["T0", "M1", "M2", "M3", "M4", "T1"],
    salesSeries: [3438.19, 2860.2, 2210.4, 1692.1, 1210.7, 839.68],
    impactGoals: [
      { title: "Reducao de tempo de espera", current: 26, target: 30, unit: "%" },
      { title: "Aumento de produtividade", current: 14, target: 15, unit: "%" },
      { title: "Adocao de programas preventivos", current: 42, target: 50, unit: "%" },
      { title: "MPMEs ativas na escala", current: 220, target: 500, unit: "" }
    ],
    editalIndicators: [
      { name: "Maturidade Digital", t0: 35.16, t1: 42.19, var: 20.0, meta: "10-20%", status: "Atingido" },
      { name: "Produtividade", t0: 4771.7, t1: 5726.03, var: 20.0, meta: "15-20%", status: "Atingido" },
      { name: "Vendas Online", t0: 3438.19, t1: 839.68, var: -33.86, meta: "20-30%", status: "Nao Atingido" }
    ],
    salesPlan: defaultSalesPlan,
    units: [
      { name: "PB - Joao Pessoa", revenue: 88410, appointments: 1510, conversion: "31.4%" },
      { name: "PE - Recife", revenue: 81120, appointments: 1380, conversion: "30.1%" },
      { name: "CE - Fortaleza", revenue: 76440, appointments: 1290, conversion: "28.7%" }
    ]
  }
};

const refs = {
  periodo: document.getElementById("periodo"),
  maturidade: document.getElementById("kpi-receita"),
  maturidadeVar: document.getElementById("kpi-receita-var"),
  produtividade: document.getElementById("kpi-atendimentos"),
  produtividadeVar: document.getElementById("kpi-atendimentos-var"),
  vendasOnline: document.getElementById("kpi-usuarios"),
  vendasOnlineVar: document.getElementById("kpi-usuarios-var"),
  mpmes: document.getElementById("kpi-nps"),
  mpmesVar: document.getElementById("kpi-nps-var"),
  impactList: document.getElementById("lista-impacto"),
  indicadorRows: document.getElementById("corpo-indicadores-edital"),
  salesPlanList: document.getElementById("lista-plano-vendas"),
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
let currentData = JSON.parse(JSON.stringify(defaultData));

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

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data));
}

function calcVariation(t0, t1) {
  if (!Number.isFinite(t0) || t0 === 0) {
    return 0;
  }
  return ((t1 - t0) / Math.abs(t0)) * 100;
}

function formatDecimal(value, maxFraction = 2) {
  return Number(value || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFraction
  });
}

function formatVariation(value, suffix = "%") {
  const safeValue = Number.isFinite(value) ? value : 0;
  const signal = safeValue > 0 ? "+" : "";
  return `${signal}${safeValue.toFixed(1).replace(".0", "")}${suffix}`;
}

function normalizeStatus(value) {
  const text = normalizeText(value);
  if (!text) {
    return "Em acompanhamento";
  }
  if (text.includes("nao") || text.includes("não")) {
    return "Nao Atingido";
  }
  if (text.includes("ating")) {
    return "Atingido";
  }
  return String(value);
}

function getStatusClass(status) {
  return normalizeText(status).includes("nao") ? "status-fail" : "status-success";
}

function setVariationStyle(element, value) {
  element.classList.remove("positive", "negative");
  element.classList.add(value >= 0 ? "positive" : "negative");
}

function renderKPIs(data) {
  refs.maturidade.textContent = formatDecimal(data.kpis.maturidade.t1);
  refs.maturidadeVar.textContent = formatVariation(data.kpis.maturidade.var);
  setVariationStyle(refs.maturidadeVar, data.kpis.maturidade.var);

  refs.produtividade.textContent = formatDecimal(data.kpis.produtividade.t1);
  refs.produtividadeVar.textContent = formatVariation(data.kpis.produtividade.var);
  setVariationStyle(refs.produtividadeVar, data.kpis.produtividade.var);

  refs.vendasOnline.textContent = moneyFormatter.format(data.kpis.vendasOnline.t1);
  refs.vendasOnlineVar.textContent = formatVariation(data.kpis.vendasOnline.var);
  setVariationStyle(refs.vendasOnlineVar, data.kpis.vendasOnline.var);

  refs.mpmes.textContent = formatDecimal(data.mpmesAtivas, 0);
  refs.mpmesVar.textContent = `${formatDecimal(data.mpmesAtivas, 0)}/${formatDecimal(data.mpmesMeta, 0)}`;
  setVariationStyle(refs.mpmesVar, data.mpmesAtivas >= data.mpmesMeta ? 1 : -1);
}

function renderImpactGoals(data) {
  refs.impactList.innerHTML = data.impactGoals
    .map(
      (goal) => {
        const progress = goal.target > 0 ? Math.min(100, (goal.current / goal.target) * 100) : 0;
        const suffix = goal.unit || "";
        return `
      <li>
        <div class="goal-label">
          <span>${goal.title}</span>
          <strong>${formatDecimal(goal.current)}${suffix} / ${formatDecimal(goal.target)}${suffix}</strong>
        </div>
        <div class="progress-track">
          <span class="progress-fill" style="width: ${progress}%"></span>
        </div>
      </li>
    `;
      }
    )
    .join("");
}

function renderEditalIndicators(data) {
  refs.indicadorRows.innerHTML = data.editalIndicators
    .map(
      (item) => `
      <tr>
        <td>${item.name}</td>
        <td>${formatDecimal(item.t0)}</td>
        <td>${formatDecimal(item.t1)}</td>
        <td class="${item.var >= 0 ? "positive" : "negative"}">${formatVariation(item.var)}</td>
        <td>${item.meta}</td>
        <td><span class="status-pill ${getStatusClass(item.status)}">${item.status}</span></td>
      </tr>
    `
    )
    .join("");
}

function renderSalesPlan(data) {
  refs.salesPlanList.innerHTML = data.salesPlan
    .map(
      (step) => `
      <li>
        <strong>${step.action}</strong>
        <span>${step.detail}</span>
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
        label: "Vendas Online",
        data: data.salesSeries,
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
  renderImpactGoals(data);
  renderEditalIndicators(data);
  renderSalesPlan(data);
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

function emptyToDefault(value, fallback) {
  return value === null || value === undefined || value === "" ? fallback : value;
}

function selectIndicator(rows, names) {
  return rows.find((row) => names.some((name) => normalizeText(row.indicator).includes(name)));
}

function parseMetaStatus(row, fallbackMeta, fallbackStatus) {
  return {
    meta: String(emptyToDefault(row.meta, fallbackMeta)),
    status: normalizeStatus(emptyToDefault(row.status, fallbackStatus))
  };
}

function buildPeriodDataFromIndicatorRows(rows, fallbackPeriod) {
  const fallback = defaultData[fallbackPeriod];
  const matRow = selectIndicator(rows, ["maturidade"]);
  const prodRow = selectIndicator(rows, ["produtiv"]);
  const salesRow = selectIndicator(rows, ["vendas"]);

  const matT0 = matRow ? parseNumber(matRow.t0) : fallback.kpis.maturidade.t0;
  const matT1 = matRow ? parseNumber(matRow.t1) : fallback.kpis.maturidade.t1;
  const matVar = matRow ? parseNumber(matRow.var) || calcVariation(matT0, matT1) : fallback.kpis.maturidade.var;
  const matMetaStatus = parseMetaStatus(matRow || {}, fallback.kpis.maturidade.meta, fallback.kpis.maturidade.status);

  const prodT0 = prodRow ? parseNumber(prodRow.t0) : fallback.kpis.produtividade.t0;
  const prodT1 = prodRow ? parseNumber(prodRow.t1) : fallback.kpis.produtividade.t1;
  const prodVar = prodRow ? parseNumber(prodRow.var) || calcVariation(prodT0, prodT1) : fallback.kpis.produtividade.var;
  const prodMetaStatus = parseMetaStatus(prodRow || {}, fallback.kpis.produtividade.meta, fallback.kpis.produtividade.status);

  const salesT0 = salesRow ? parseNumber(salesRow.t0) : fallback.kpis.vendasOnline.t0;
  const salesT1 = salesRow ? parseNumber(salesRow.t1) : fallback.kpis.vendasOnline.t1;
  const salesVar = salesRow ? parseNumber(salesRow.var) || calcVariation(salesT0, salesT1) : fallback.kpis.vendasOnline.var;
  const salesMetaStatus = parseMetaStatus(salesRow || {}, fallback.kpis.vendasOnline.meta, fallback.kpis.vendasOnline.status);

  return {
    kpis: {
      maturidade: { t0: matT0, t1: matT1, var: matVar, ...matMetaStatus },
      produtividade: { t0: prodT0, t1: prodT1, var: prodVar, ...prodMetaStatus },
      vendasOnline: { t0: salesT0, t1: salesT1, var: salesVar, ...salesMetaStatus }
    },
    mpmesAtivas: fallback.mpmesAtivas,
    mpmesMeta: fallback.mpmesMeta,
    labels: ["T0", "T1"],
    salesSeries: [salesT0, salesT1],
    impactGoals: fallback.impactGoals,
    editalIndicators: [
      { name: "Maturidade Digital", t0: matT0, t1: matT1, var: matVar, meta: matMetaStatus.meta, status: matMetaStatus.status },
      { name: "Produtividade", t0: prodT0, t1: prodT1, var: prodVar, meta: prodMetaStatus.meta, status: prodMetaStatus.status },
      { name: "Vendas Online", t0: salesT0, t1: salesT1, var: salesVar, meta: salesMetaStatus.meta, status: salesMetaStatus.status }
    ],
    salesPlan: fallback.salesPlan,
    units: fallback.units
  };
}

function groupByPeriod(rows, periodKey) {
  const grouped = { diario: [], semanal: [], mensal: [] };
  rows.forEach((row) => {
    const period = periodKey ? detectPeriod(row[periodKey]) : "mensal";
    grouped[period].push(row);
  });
  return grouped;
}

function buildModelFromIndicatorTable(rows, headers) {
  const periodKey = findColumnKey(headers, ["periodo", "periodo_base", "period"]);
  const indicatorKey = findColumnKey(headers, ["indicador", "indicator", "nome"]);
  const t0Key = findColumnKey(headers, ["media t0", "t0"]);
  const t1Key = findColumnKey(headers, ["media t1", "t1"]);
  const varKey = findColumnKey(headers, ["aumento percentual", "variacao", "var", "percentual"]);
  const metaKey = findColumnKey(headers, ["meta piloto", "meta"]);
  const statusKey = findColumnKey(headers, ["status"]);
  const mpmesKey = findColumnKey(headers, ["mpmes", "clinicas ativas", "empresas ativas"]);

  const normalizedRows = rows.map((row) => ({
    period: periodKey ? row[periodKey] : "mensal",
    indicator: row[indicatorKey],
    t0: row[t0Key],
    t1: row[t1Key],
    var: varKey ? row[varKey] : "",
    meta: metaKey ? row[metaKey] : "",
    status: statusKey ? row[statusKey] : "",
    mpmes: mpmesKey ? row[mpmesKey] : ""
  }));

  const grouped = groupByPeriod(normalizedRows, "period");
  const model = deepCopy(defaultData);

  Object.keys(model).forEach((period) => {
    const periodRows = grouped[period].length ? grouped[period] : normalizedRows;
    model[period] = buildPeriodDataFromIndicatorRows(periodRows, period);
    const explicitMpmes = periodRows.find((row) => parseNumber(row.mpmes) > 0);
    if (explicitMpmes) {
      model[period].mpmesAtivas = parseNumber(explicitMpmes.mpmes);
      model[period].impactGoals = model[period].impactGoals.map((goal) =>
        normalizeText(goal.title).includes("mpmes")
          ? { ...goal, current: parseNumber(explicitMpmes.mpmes) }
          : goal
      );
    }
  });

  return model;
}

function buildModelFromOperationalRows(rows, headers) {
  const periodKey = findColumnKey(headers, ["periodo", "period"]);
  const dateKey = findColumnKey(headers, ["data", "mes", "label", "periodo_label"]);
  const teamKey = findColumnKey(headers, ["equipe", "team", "area"]);
  const unitKey = findColumnKey(headers, ["unidade", "filial", "empresa", "clinica"]);
  const revenueKey = findColumnKey(headers, ["vendas online", "vendas", "receita", "faturamento", "resultado"]);
  const appointmentsKey = findColumnKey(headers, ["atendimentos", "volume", "clientes"]);
  const conversionKey = findColumnKey(headers, ["conversao", "taxa_conversao", "conversion"]);
  const maturityT0Key = findColumnKey(headers, ["maturidade t0", "maturidade_t0", "media t0 maturidade"]);
  const maturityT1Key = findColumnKey(headers, ["maturidade t1", "maturidade_t1", "maturidade digital"]);
  const productivityT0Key = findColumnKey(headers, ["produtividade t0", "produtividade_t0", "media t0 produtividade"]);
  const productivityT1Key = findColumnKey(headers, ["produtividade t1", "produtividade_t1", "produtividade"]);
  const salesT0Key = findColumnKey(headers, ["vendas online t0", "vendas_t0", "media t0 vendas"]);
  const salesT1Key = findColumnKey(headers, ["vendas online t1", "vendas_t1", "media t1 vendas"]);
  const mpmesKey = findColumnKey(headers, ["mpmes", "clinicas ativas", "empresas ativas"]);

  if (!revenueKey && !salesT1Key && !maturityT1Key && !productivityT1Key) {
    throw new Error("Nao foi possivel identificar colunas para indicadores da proposta.");
  }

  const grouped = groupByPeriod(rows, periodKey);
  const model = deepCopy(defaultData);

  Object.keys(model).forEach((period) => {
    const periodRows = grouped[period].length ? grouped[period] : rows;
    const fallback = defaultData[period];

    const maturityT1 = maturityT1Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[maturityT1Key]), 0) / Math.max(periodRows.length, 1)
      : fallback.kpis.maturidade.t1;
    const maturityT0 = maturityT0Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[maturityT0Key]), 0) / Math.max(periodRows.length, 1)
      : fallback.kpis.maturidade.t0;

    const productivityT1 = productivityT1Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[productivityT1Key]), 0) / Math.max(periodRows.length, 1)
      : appointmentsKey
        ? periodRows.reduce((sum, row) => sum + parseNumber(row[appointmentsKey]), 0)
        : fallback.kpis.produtividade.t1;
    const productivityT0 = productivityT0Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[productivityT0Key]), 0) / Math.max(periodRows.length, 1)
      : fallback.kpis.produtividade.t0;

    const salesT1 = salesT1Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[salesT1Key]), 0) / Math.max(periodRows.length, 1)
      : revenueKey
        ? periodRows.reduce((sum, row) => sum + parseNumber(row[revenueKey]), 0)
        : fallback.kpis.vendasOnline.t1;
    const salesT0 = salesT0Key
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[salesT0Key]), 0) / Math.max(periodRows.length, 1)
      : fallback.kpis.vendasOnline.t0;

    const labels = dateKey
      ? periodRows.map((row, idx) => String(row[dateKey] || `P${idx + 1}`))
      : ["T0", "T1"];
    const salesSeries = dateKey && revenueKey
      ? periodRows.map((row) => parseNumber(row[revenueKey]))
      : [salesT0, salesT1];

    const groupedUnits = {};
    const unitSourceKey = unitKey || teamKey;
    if (unitSourceKey && revenueKey) {
      periodRows.forEach((row) => {
        const name = String(row[unitSourceKey] || "Nao informado");
        if (!groupedUnits[name]) {
          groupedUnits[name] = { revenue: 0, appointments: 0, conversion: [] };
        }
        groupedUnits[name].revenue += parseNumber(row[revenueKey]);
        groupedUnits[name].appointments += appointmentsKey ? parseNumber(row[appointmentsKey]) : 0;
        if (conversionKey) {
          groupedUnits[name].conversion.push(parseNumber(row[conversionKey]));
        }
      });
    }

    const units = Object.entries(groupedUnits)
      .map(([name, values]) => ({
        name,
        revenue: values.revenue,
        appointments: values.appointments,
        conversion: `${(
          values.conversion.length
            ? values.conversion.reduce((sum, value) => sum + value, 0) / values.conversion.length
            : 0
        ).toFixed(1).replace(".0", "")}%`
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 8);

    const mpmesAtivas = mpmesKey
      ? periodRows.reduce((sum, row) => sum + parseNumber(row[mpmesKey]), 0) / Math.max(periodRows.length, 1)
      : unitSourceKey
        ? new Set(periodRows.map((row) => row[unitSourceKey])).size
        : fallback.mpmesAtivas;

    model[period] = {
      ...fallback,
      kpis: {
        maturidade: {
          t0: maturityT0,
          t1: maturityT1,
          var: calcVariation(maturityT0, maturityT1),
          meta: fallback.kpis.maturidade.meta,
          status: fallback.kpis.maturidade.status
        },
        produtividade: {
          t0: productivityT0,
          t1: productivityT1,
          var: calcVariation(productivityT0, productivityT1),
          meta: fallback.kpis.produtividade.meta,
          status: fallback.kpis.produtividade.status
        },
        vendasOnline: {
          t0: salesT0,
          t1: salesT1,
          var: calcVariation(salesT0, salesT1),
          meta: fallback.kpis.vendasOnline.meta,
          status: fallback.kpis.vendasOnline.status
        }
      },
      labels,
      salesSeries,
      mpmesAtivas: Math.round(mpmesAtivas),
      impactGoals: fallback.impactGoals.map((goal) =>
        normalizeText(goal.title).includes("mpmes")
          ? { ...goal, current: Math.round(mpmesAtivas) }
          : goal
      ),
      editalIndicators: [
        {
          name: "Maturidade Digital",
          t0: maturityT0,
          t1: maturityT1,
          var: calcVariation(maturityT0, maturityT1),
          meta: fallback.kpis.maturidade.meta,
          status: fallback.kpis.maturidade.status
        },
        {
          name: "Produtividade",
          t0: productivityT0,
          t1: productivityT1,
          var: calcVariation(productivityT0, productivityT1),
          meta: fallback.kpis.produtividade.meta,
          status: fallback.kpis.produtividade.status
        },
        {
          name: "Vendas Online",
          t0: salesT0,
          t1: salesT1,
          var: calcVariation(salesT0, salesT1),
          meta: fallback.kpis.vendasOnline.meta,
          status: calcVariation(salesT0, salesT1) >= 0 ? "Em acompanhamento" : "Nao Atingido"
        }
      ],
      units: units.length ? units : fallback.units
    };
  });

  return model;
}

function buildModelFromRows(rows) {
  const cleanRows = rows.filter((row) => Object.values(row).some((value) => String(value || "").trim() !== ""));
  if (!cleanRows.length) {
    throw new Error("Base vazia.");
  }

  const headers = Object.keys(cleanRows[0]);
  const indicatorKey = findColumnKey(headers, ["indicador", "indicator"]);
  const t0Key = findColumnKey(headers, ["media t0", "t0"]);
  const t1Key = findColumnKey(headers, ["media t1", "t1"]);
  if (indicatorKey && t0Key && t1Key) {
    return buildModelFromIndicatorTable(cleanRows, headers);
  }
  return buildModelFromOperationalRows(cleanRows, headers);
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
