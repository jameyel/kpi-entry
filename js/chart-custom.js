$(document).ready(() => {
  $.get(
    'https://ew-kpi-service.herokuapp.com/api/v1/kpis',
    (response, status) => {
      if (response.data && response.data.length > 0) {
        response.data.sort((a, b) => {
          return new Date(b.create_date) - new Date(a.create_date);
        });
        createCharts(response.data[0]);
      }
    }
  );
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

  // Web Sessions
  var wsBar = new ldBar('.ldbar-web-sessions', {
    preset: 'energy'
  });
  wsBar.set(getPercentage(data.web_sessions_goal, data.web_sessions));

  // Conversion Rate
  var crBar = new ldBar('.ldbar-conv-rate', {
    preset: 'energy'
  });
  crBar.set(getPercentage(data.conv_rate_goal, data.conv_rate));

  // Total Spend
  $('.total-spend').html(`$${data.total_spend}`);

  // New Customer CAC
  $('.new-cust-cac').html(`$${data.new_cust_cac}`);

  // Spend vs. Sales
  $('.spend-vs-sales').html(`$${data.spend_vs_sales}`);
}

function getPercentage(goal, actual) {
  if (goal && actual) {
    return Math.floor((actual / goal) * 100);
  }
}
