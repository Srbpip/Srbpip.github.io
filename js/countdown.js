// Javascript
$(function() {
  var currentDate = new Date();
  var d = new Date();
  var n = d.getTime();
  n=1531859000000-n;
  $('.countdown').countdown(n+currentDate.valueOf(), function(event) {
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('div.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
