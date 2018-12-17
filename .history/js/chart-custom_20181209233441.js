$(document).ready(() => {
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
        debugger;
        $('.ldbar-overall-sales').empty();
        $('.ldbar-overall-sales').removeClass('ldBar');
        var bar2 = new ldBar('.ldbar-overall-sales', {
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