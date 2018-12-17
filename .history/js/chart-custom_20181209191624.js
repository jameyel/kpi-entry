$(document).ready(() => {
  var bar = new ldBar('.ldbar-overall-sales', {
    preset: 'energy',
    value: '0'
  });
  //   $('.ld-overall-sales').attr('data-value', '00');
  $('.overall-sales, .overall-sales-goal').on('blur', () => {
    // $('.ldbar-overall-sales').attr('data-value', '20');
    const osVal = $('.overall-sales').val();
    const osgVal = $('.overall-sales-goal').val();

    if (osVal && osgVal) {
      const newPercent = Math.floor((osVal / osgVal) * 100);
      bar.set(newPercent);
      if (newPercent > 100) {
        $('.ldbar-overall-sales .ldBar-label').html(newPercent);
      }
    }
  });
});
