  $(document).ready(function() {
   $("#Title").typed({
        strings: ["Workspace"],
        typeSpeed: 15,
        backSpeed: 0,
        startDelay: 400,
    });

   setTimeout(function() {
        $('#Title').toggleClass('changed');
    }, 1000);

   setTimeout(function() {
        $('#grey').css('opacity','0.68');
    }, 1000);

      setTimeout(function() {
        $('.facebook').addClass('animated fadeInUp');
    }, 1400);
      setTimeout(function() {
        $('.new').addClass('animated fadeInUp');
    }, 1800);
  });