function getRandomColor(num) {

let colorArray =[];

for(let i =0;i<=num;i++){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colorArray.push(color);
}
  return colorArray
}

let randomColors = getRandomColor(10);


var getRevenue = document.getElementById("revenue").getContext('2d');
var revenue = new Chart(getRevenue, {
  type: 'pie',
  data: {
      labels: ['ACZ NANO',
      'ACN NEURO',
      'ACS SILVER',
      'ACM METABO',
      'ACP PROSTATE',
      'ACC CARDIO',
      'PURE ENERGY',
      'ACJ JOINT',
      'ACG GLUCO',
      'ACR REGEN'],
        datasets: [
          {
              fill: true,
              backgroundColor:
                  randomColors,
              data: [
                1073357,
                878162,
                1193784,
                420345,
                1175811,
                1015766,
                733751,
                955983,
                924075,
                1061074
              ],


          }
      ]
  },
  options: {
    legend: {
      display: false
    },
          title: {
                    display: true,
                    text: 'Revenue',
                    position: 'top'
                },
          rotation: -0.7 * Math.PI
  }
});


  // Global Options:

  //  Chart.defaults.global.defaultFontColor = 'black';
  //  Chart.defaults.global.defaultFontSize = 16;


  // Notice the rotation from the documentation.



  // Chart declaration:














//
//
var getNetExpenses = document.getElementById("net-expenses").getContext('2d');

var netExpenses = new Chart(getNetExpenses, {
type: 'pie',
data: {
    labels: ['ACZ NANO',
    'ACN NEURO',
    'ACS SILVER',
    'ACM METABO',
    'ACP PROSTATE',
    'ACC CARDIO',
    'PURE ENERGY',
    'ACJ JOINT',
    'ACG GLUCO',
    'ACR REGEN'],
      datasets: [
        {
            fill: true,
            backgroundColor:
            randomColors,
            data: [
              280796,
              96216,
              274786,
              313960,
              194395,
              264057,
              94837,
              143906,
              140610,
              267534
            ],


        }
    ]
},
options: {
  legend: {
    display: false
  },
        title: {
                  display: true,
                  text: 'Net Expenses',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
}
});









var getBudget = document.getElementById("budget").getContext('2d');

var budget = new Chart(getBudget, {
  type: 'pie',
  data: {
      labels: ['ACZ NANO',
      'ACN NEURO',
      'ACS SILVER',
      'ACM METABO',
      'ACP PROSTATE',
      'ACC CARDIO',
      'PURE ENERGY',
      'ACJ JOINT',
      'ACG GLUCO',
      'ACR REGEN'],
        datasets: [
          {
              fill: true,
              backgroundColor:
                  randomColors,
              data: [
                256513,
                85618,
                264259,
                293368,
                174003,
                249567,
                79255,
                122300,
                119943,
                255187
              ],


          }
      ]
  },
  options: {
    legend: {
      display: false
    },
          title: {
                    display: true,
                    text: 'Budget',
                    position: 'top'
                },
          rotation: -0.7 * Math.PI
  }
});















var lineChartData = {
			labels: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'],
			datasets: [{
				label: "Equity",
				pointBackgroundColor: '#1644bd',
        borderColor: '#288a1c',
				fill: false,
				data: [
					3293202,
          3441854,
          3531844,
          3354051,
          3476155,
          3538468,
          3727037,
          3425405,
          3734041,
          3677074
				]
			}, {
				label: "Debt",
				pointBackgroundColor: 'black',
        borderColor: '#cf0c0c',
				fill: false,
				data: [
          3613439,
          3508776,
          3719457,
          3310212,
          3945202,
          3938152,
          3733706,
          3526698,
          3632971,
          3206487
				]
			}]
		};



var getDebtToEquity = document.getElementById("debt-to-equity").getContext('2d');


var myLineChart = new Chart(getDebtToEquity, {
  type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        title:{
          display:true,
          text:'Debt to Equity'
        }

      }
    })
