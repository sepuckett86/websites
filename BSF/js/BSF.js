
// Will do after page loaded
$(document).ready(function(){
// Scrolling with offset of navbar

// To add CSS class depending on scroll location
// To add box shadow after scroll

  var scrollLocation = $(window).scrollTop();
  var introHeight = $('.intro').height();
  // On scroll
  $(window).scroll(function(){
    // Set scroll location
    scrollLocation = $(window).scrollTop();
    if (scrollLocation >= introHeight) {
      $('.navbar').addClass('scrolled-nav');
    } else if (scrollLocation < introHeight) {
      $('.navbar').removeClass('scrolled-nav');
    }
  });
});
