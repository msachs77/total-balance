
function updateChart() {
  //fetch block
    async function fetchdata(){
      const url = 'https://raw.githubusercontent.com/msachs77/total-balance/main/data.json';
      const response = await fetch(url);
  //wait for response 
      const datapoints = await response.json();
      console.log(datapoints);
      return datapoints;
  };

  fetchdata().then(datapoints => {
    const day = datapoints.map(function(index){
      return index.day;
    })
    const amount = datapoints.map(function(index){
      return index.amount;
    })
    console.log(day);
    console.log(amount);
    myChart.data.labels = day;
    myChart.data.datasets[0].data = amount;
    myChart.update();
    });
}
  // setup block
  let labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: '7 Days Spend',
      backgroundColor: 'hsl(10, 79%, 65%)',
      hoverBackgroundColor: 'hsl(27, 66%, 92%)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 20, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {

    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

