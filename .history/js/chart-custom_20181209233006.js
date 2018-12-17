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
      //   bar.set(newPercent);
      if (newPercent > 100) {
        $('.ldbar-overall-sales').empty();
        bar = new ldBar('.ldbar-overall-sales', {
          preset: 'rainbow',
          max: newPercent,
          value: '0'
        });
      }
      bar.set(newPercent);
    }
  });
});
