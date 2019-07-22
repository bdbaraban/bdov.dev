'use strict';

$('document').ready(function () {
  // Scroll progress bar
  var h = document.documentElement;
  var b = document.body;
  var progress = document.querySelector('.scroll');
  document.addEventListener('scroll', function () {
    var place = h.scrollTop || b.scrollTop;
    var height = (h.scrollHeight || b.scrollHeight) - h.clientHeight;
    var scroll = place / height * 100;
    progress.style.setProperty('--scroll', scroll + '%');
  });

  // Navbar burger functionality
  $('.navbar-burger').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('borders');
    $('.navbar-menu').toggleClass('is-active');
  });

  // Footer arrow scroll functionality
  $('#scroll-to-work').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#work').offset().top
    }, 1100);
  });
  $('#scroll-to-blog').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#blog').offset().top
    }, 1100);
  });
  $('#scroll-to-social').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#social').offset().top
    }, 1100);
  });
  $('#scroll-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1250);
  });
});