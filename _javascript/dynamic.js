$('document').ready(() => {
  // Scroll progress bar
  const h = document.documentElement;
  const b = document.body;
  const progress = document.querySelector('.scroll');
  document.addEventListener('scroll', () => {
    const place = h.scrollTop || b.scrollTop;
    const height = (h.scrollHeight || b.scrollHeight) - h.clientHeight;
    const scroll = (place / height) * 100;
    progress.style.setProperty('--scroll', `${scroll}%`);
  });

  // Navbar burger functionality
  $('.navbar-burger').click(() => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('borders');
    $('.navbar-menu').toggleClass('is-active');
  });

  // Footer arrow scroll functionality
  $('#scroll-to-work').click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#work').offset().top
      },
      1100
    );
  });
  $('#scroll-to-blog').click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#blog').offset().top
      },
      1100
    );
  });
  $('#scroll-to-social').click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#social').offset().top
      },
      1100
    );
  });
  $('#scroll-to-top').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 1250);
  });
});
