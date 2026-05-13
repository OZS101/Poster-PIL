const UTIL = '#1a5c2a', DEON = '#1a4a6e', EGO = '#8b4510';
const NAMES = ['Utilitarianism', 'Deontological', 'Egoism'];

let votes = [10, 4, 4];
let active = [false, false, false];

function total() { return votes[0] + votes[1] + votes[2]; }

function pct(i) { return total() > 0 ? Math.round(votes[i] / total() * 100) : 0; }

const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: NAMES,
    datasets: [{
      label: 'Votes',
      data: [...votes],
      backgroundColor: [UTIL, DEON, EGO],
      borderWidth: 0,
      borderRadius: 3
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#5c4f36', font: { size: 11 } }, max: 18 },
      y: { grid: { display: false }, ticks: { color: '#5c4f36', font: { size: 11 } } }
    }
  }
});

const pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: NAMES.map((n, i) => `${n} (${pct(i)}%)`),
    datasets: [{
      data: [...votes],
      backgroundColor: [UTIL, DEON, EGO],
      borderColor: '#f5f2ea',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ` ${ctx.label}: ${ctx.raw} vote${ctx.raw > 1 ? 's' : ''}`
        }
      }
    }
  }
});

function toggleVote(el) {
  const i = parseInt(el.dataset.voteIndex);
  active[i] = !active[i];

  if (active[i]) {
    votes[i]++;
    el.classList.add('selected');
  } else {
    votes[i]--;
    el.classList.remove('selected');
  }

  document.getElementById('vote-' + i).textContent = votes[i];

  barChart.data.datasets[0].data = [...votes];
  barChart.update();

  const t = total();
  pieChart.data.datasets[0].data = [...votes];
  pieChart.data.labels = NAMES.map((n, i) => `${n} (${t > 0 ? Math.round(votes[i] / t * 100) : 0}%)`);
  pieChart.update();
}
