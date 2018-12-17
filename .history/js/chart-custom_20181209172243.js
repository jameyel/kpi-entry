$(document).ready(() => {
  $('.ld-overall-sales').attr('data-value', '0');
  $('.overall-sales').on('blur', () => {
    $('.ld-overall-sales').attr('data-value', '20');
  });
});
