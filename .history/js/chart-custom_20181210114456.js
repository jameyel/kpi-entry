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
  debugger;
  const osVal = data.overall_sales;
  const osgVal = data.overall_sales_goal;
  if (osVal && osgVal) {
    const percentage = Math.floor((osVal / osgVal) * 100);
    if (percentage > 100) {
      new ldBar('.ldbar-overall-sales', {
        preset: 'rainbow',
        max: percentage,
        value: percentage
      });
      // bar.set(percentage);
    } else {
      new ldBar('.ldbar-overall-sales', {
        preset: 'line',
        value: percentage
      });
      // bar.set(percentage);
    }
  }
}
