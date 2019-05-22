/* Icon column slide-in-and-out functionality */
function reveal(slider) {
  $(slider).find('div.reveal').show(1250);
}
function hide(slider) {
  $(slider).find('div.reveal').hide(1250);
}
function revealThenHide(slider) {
  async function first() {
    reveal(slider);
  }
  first().then(setTimeout(() => {
    hide(slider);
  }, 2000));
}

/* Automatically slide-out icons upon first scrolling to page */
const revealed = {
  '#work-slider': false,
  '#blog-slider': false,
  '#social-slider': false,
};
function revealOnScroll(sliderId) {
  $(window).on('scroll', () => {
    const screenHeight = $(window).height();
    const scrollPos = window.pageYOffset;
    const inView = scrollPos > $(sliderId).offset().top - (screenHeight * 0.5);
    if (!revealed[sliderId] && inView) {
      setTimeout(() => {
        revealThenHide($(sliderId));
      }, 700);
      revealed[sliderId] = true;
    }
  });
}

$('document').ready(() => {
  /* Scroll progress bar */
  const h = document.documentElement;
  const b = document.body;
  const progress = document.querySelector('.scroll');
  document.addEventListener('scroll', () => {
    const place = (h.scrollTop || b.scrollTop);
    const height = ((h.scrollHeight || b.scrollHeight) - h.clientHeight);
    const scroll = place / height * 100;
    progress.style.setProperty('--scroll', `${scroll}%`);
  });

  /* Initial title slide-in animation */
  async function first() {
    setTimeout(() => {
      $('div.entry-slide').show(1250);
    }, 1500);
  }
  first().then(setTimeout(() => {
    $('div.entry-slide').hide(1250);
  }, 4500));

  /* Footer arrow scroll functionality */
  $('#scroll-to-work').click(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#work').offset().top,
    }, 1100);
  });
  $('#scroll-to-blog').click(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#blog').offset().top,
    }, 1100);
  });
  $('#scroll-to-social').click(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#social').offset().top,
    }, 1100);
  });
  $('#scroll-to-top').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 1250);
  });

  /* Initial icon column slide-outs */
  $(window).on('scroll', () => {
    revealOnScroll('#work-slider');
  });
  $(window).on('scroll', () => {
    revealOnScroll('#blog-slider');
  });
  $(window).on('scroll', () => {
    revealOnScroll('#social-slider');
  });

  $('h3.underline').click(function slideInandOut() {
    $(this).parent().find('div.reveal').toggle(1250, 'swing');
  });
});
