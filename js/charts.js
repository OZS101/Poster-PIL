const UTIL = '#1a5c2a', DEON = '#1a4a6e', EGO = '#8b4510';

new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Utilitarianism', 'Deontological', 'Egoism'],
    datasets: [{
      label: 'Votes',
      data: [7, 2, 1],
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
      x: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#5c4f36', font: { size: 11 } }, max: 9 },
      y: { grid: { display: false }, ticks: { color: '#5c4f36', font: { size: 11 } } }
    }
  }
});

new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Utilitarianism (70%)', 'Deontological (20%)', 'Egoism (10%)'],
    datasets: [{
      data: [7, 2, 1],
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