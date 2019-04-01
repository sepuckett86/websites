// To add CSS class depending on scroll location
// To add box shadow after scroll
// Will do after page loaded
$(document).ready(function(){
  var scrollLocation = 0;
  // Returns
  var introHeight = $('#intro').height();
  console.log(introHeight);
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
