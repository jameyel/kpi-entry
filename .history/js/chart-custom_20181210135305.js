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
  var osBar = new ldBar('.ldbar-overall-sales', {
    preset: 'energy'
  });
  osBar.set(getPercentage(data.overall_sales_goal, data.overall_sales));

  // Overall Transactions
  var otBar = new ldBar('.ldbar-overall-transactions', {
    preset: 'energy'
  });
  otBar.set(
    getPercentage(data.overall_transactions_goal, data.overall_transactions)
  );

  // AOV
  var aovBar = new ldBar('.ldbar-aov', {
    preset: 'energy'
  });
  aovBar.set(getPercentage(data.aov_goal, data.aov));
}

function getPercentage(goal, actual) {
  if (goal && actual) {
    return Math.floor((actual / goal) * 100);
  }
}
