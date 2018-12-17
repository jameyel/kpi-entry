$(document).ready(() => {
  $.get('http://localhost:8080/api/v1/kpis', (response, status) => {
    if (response.data) {
      response.data.sort((a, b) => {
        return new Date(b.create_date) - new Date(a.create_date);
      });
      createCharts(response.data[0]);
    }
  });
});

function createCharts(data) {
  // Overall Sales
  var bar = new ldBar('.ldbar-overall-sales', {
      preset: 'energy'
    });
    bar.set(getPercentage(data.overall_sales_goal, data.overall_sales));
  }

  // Overall Transactions
  const otVal = data.overall_transactions;
  const otgVal = data.overall_transactions_goal;
  if (otVal && osgVal) {
    const percentage = Math.floor((osVal / osgVal) * 100);
    var bar = new ldBar('.ldbar-overall-sales', {
      preset: 'energy'
    });
    bar.set(percentage);
  }
}

function getPercentage(goal, actual) {
    if(goal && actual) {
        return Math.floor((actual / goal) * 100);
    }
}