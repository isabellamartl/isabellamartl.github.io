fetch('data/energy_transition_clean.json')
  .then(res => res.json()) 
  .then(data => {
    const countries = [...new Set(data.map(d => d.Country))]; // 
    const paises = [];
    const renovables = [];

    countries.forEach(pais => {
      const datospais = data.filter(d => d.Country === pais);

      const promedio = datospais.reduce((a, b) => a + (b.Renewable_Share_percent || 0), 0) / datospais.length;

      paises.push(pais);
      renovables.push(promedio.toFixed(2)); // toFixed se debe aplicar al número antes de push
    });

    const ctx1 = document.getElementById('graficaRenovable');

    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: paises,
        datasets: [{
          label: '% renovable',
          data: renovables,
          backgroundColor: 'rgba(46, 204, 113, 0.3)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Promedio de energías renovables por país' }
        }
      }
    });
  });