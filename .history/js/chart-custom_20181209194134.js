$(document).ready(() => {
  var bar = new ldBar('.ldbar-overall-sales', {
    preset: 'text',
    value: '0'
  });
  $('.overall-sales, .overall-sales-goal').on('blur', () => {
    const osVal = $('.overall-sales').val();
    const osgVal = $('.overall-sales-goal').val();

    if (osVal && osgVal) {
      const newPercent = Math.floor((osVal / osgVal) * 100);
      bar.set(newPercent);
      if (newPercent > 100) {
        console.log(newPercent);
      }
    }
  });
});
