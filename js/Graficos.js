
function Grafico(data) {
  fetch('http://localhost:5257/api/Log?data_criacao=' + data)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const label = data.map(item => item.id_log)
      const dados = data.map(item => parseInt(item.mensagem))


      // Destrua o gráfico anterior antes de criar um novo
      var myChart = Chart.getChart("myChart");
      console.log(myChart)

      if (myChart != null) {
        myChart.destroy();

      }


      const canvas = document.getElementById('myChart');
      const ctx = canvas.getContext('2d');

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: label,
          datasets: [{
            label: 'Valores',
            data: dados,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {

        }
      })

    })



};