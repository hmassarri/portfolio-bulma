$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });


  //  Menu item active
  switch ( $('body').attr('id')) {
      case "index":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#index').addClass('');
          break;

      case "aboutme":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#aboutme').addClass('currentLink');
          break;

      case "portfolio":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#portfolio').addClass('currentLink');
          break;

      case "process":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#process').addClass('currentLink');
          break;

      case "discography":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#discography').addClass('currentLink');
          break;

      case "contact":
          $('.navbar-menu a').removeClass('currentLink');
          $('.navbar-menu a#contact').addClass('currentLink');
          break;
  }



});
