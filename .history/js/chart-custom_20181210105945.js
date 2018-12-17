$(document).ready(() => {
  debugger;
  $.get('//localhost:8080/api/v1/kpis', response => {
    console.log(JSON.stringify(response));
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
