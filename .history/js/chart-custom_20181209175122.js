$(document).ready(() => {
  var bar = new ldBar('.ld-overall-sales', {
    preset: 'energy',
    value: '0'
  });
  //   $('.ld-overall-sales').attr('data-value', '00');
  $('.overall-sales').on('blur', () => {
    // $('.ld-overall-sales').attr('data-value', '20');
    bar.set(20);
  });
});
