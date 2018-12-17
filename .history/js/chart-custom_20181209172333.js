$(document).ready(() => {
  $('.ld-overall-sales').attr('data-value', '00');
  $('.overall-sales').on('blur', () => {
    $('.ld-overall-sales').attr('data-value', '20');
  });
});
