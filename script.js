const dashboardData = {
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
  tableBody: document.getElementById("corpo-tabela")
};

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

let revenueChart;

function formatVariation(value, suffix = "%") {
  const signal = value > 0 ? "+" : "";
  return `${signal}${value}${suffix}`;
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
  const data = dashboardData[periodKey];
  if (!data) {
    return;
  }

  renderKPIs(data);
  renderGoals(data);
  renderTable(data);
  createOrUpdateChart(data);
}

refs.periodo.addEventListener("change", (event) => {
  renderDashboard(event.target.value);
});

renderDashboard(refs.periodo.value);
