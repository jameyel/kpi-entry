$(document).ready(() => {
  $.get('http://localhost:8080/api/v1/kpis', (data, status) => {
    if (data) {
      debugger;
      data.sort((a, b) => {
        return new Date(b.create_date) - new Date(a.create_date);
      });
    }
    console.log(`${data}`);
  });

  var bar = new ldBar('.ldbar-overall-sales', {
    preset: 'line',
    value: '0'
  });

  $('.overall-sales, .overall-sales-goal').on('blur', () => {
    const osVal = $('.overall-sales').val();
    const osgVal = $('.overall-sales-goal').val();
    if (osVal && osgVal) {
      const newPercent = Math.floor((osVal / osgVal) * 100);
      if (newPercent > 100) {
        bar = new ldBar('.ldbar-overall-sales', {
          preset: 'rainbow',
          max: newPercent,
          value: '0'
        });
        bar2.set(newPercent);
      } else {
        bar.set(newPercent);
      }
    }
  });
});
