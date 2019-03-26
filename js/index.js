$(function() {
  $('#searchfield').keyup(filter);

  $('.pressable-day').click(function() {
    $(this).toggleClass('active');

    filter();
  });

  function filter() {
    var rex = new RegExp($('#searchfield').val(), 'i');
    var rows = $('.searchable tr');

    rows.hide();

    rows.filter(function() {

      var tester = true;

      tester = rex.test($(this).text());

      tester = tester && filterOnDays(this);

      return tester;
    }).show();
  }

  function filterOnDays(selector) {
    var all = $('#days .pressable-day.active');
    if (!all.length) return true
    let yearsList = Array.from($(selector).find('[data-schedule]'))
    for (var i = 0; i < all.length; i++) {
       if (!yearsList.find(year =>  year.classList.contains('active') && year.dataset.schedule.split(',').find(id => id === all[i].id))) return false
    }
    return true
  }
});