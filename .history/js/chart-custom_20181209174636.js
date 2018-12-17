$(document).ready(() => {
  new ldBar('.kpi100-chart', {
    preset: 'energy',
    value: '0'
  });
  //   $('.ld-overall-sales').attr('data-value', '00');
  $('.overall-sales').on('blur', () => {
    // $('.ld-overall-sales').attr('data-value', '20');
    new ldBar('.kpi100-chart', {
      preset: 'energy',
      value: '20'
    });
  });
});
