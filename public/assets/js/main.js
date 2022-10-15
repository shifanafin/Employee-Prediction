/**
* Template Name: Impact - v1.0.0
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

//AdminLogin


console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			signupBtn.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

signupBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			loginBtn.parentNode.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

/**
 * Main
 */

 'use strict';

 let menu, animate;
 
 (function () {
   // Initialize menu
   //-----------------
 
   let layoutMenuEl = document.querySelectorAll('#layout-menu');
   layoutMenuEl.forEach(function (element) {
     menu = new Menu(element, {
       orientation: 'vertical',
       closeChildren: false
     });
     // Change parameter to true if you want scroll animation
     window.Helpers.scrollToActive((animate = false));
     window.Helpers.mainMenu = menu;
   });
 
   // Initialize menu togglers and bind click on each
   let menuToggler = document.querySelectorAll('.layout-menu-toggle');
   menuToggler.forEach(item => {
     item.addEventListener('click', event => {
       event.preventDefault();
       window.Helpers.toggleCollapsed();
     });
   });
 
   // Display menu toggle (layout-menu-toggle) on hover with delay
   let delay = function (elem, callback) {
     let timeout = null;
     elem.onmouseenter = function () {
       // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
       if (!Helpers.isSmallScreen()) {
         timeout = setTimeout(callback, 300);
       } else {
         timeout = setTimeout(callback, 0);
       }
     };
 
     elem.onmouseleave = function () {
       // Clear any timers set to timeout
       document.querySelector('.layout-menu-toggle').classList.remove('d-block');
       clearTimeout(timeout);
     };
   };
   if (document.getElementById('layout-menu')) {
     delay(document.getElementById('layout-menu'), function () {
       // not for small screen
       if (!Helpers.isSmallScreen()) {
         document.querySelector('.layout-menu-toggle').classList.add('d-block');
       }
     });
   }
 
   // Display in main menu when menu scrolls
   let menuInnerContainer = document.getElementsByClassName('menu-inner'),
     menuInnerShadow = document.getElementsByClassName('menu-inner-shadow')[0];
   if (menuInnerContainer.length > 0 && menuInnerShadow) {
     menuInnerContainer[0].addEventListener('ps-scroll-y', function () {
       if (this.querySelector('.ps__thumb-y').offsetTop) {
         menuInnerShadow.style.display = 'block';
       } else {
         menuInnerShadow.style.display = 'none';
       }
     });
   }
 
   // Init helpers & misc
   // --------------------
 
   // Init BS Tooltip
   const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
   tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl);
   });
 
   // Accordion active class
   const accordionActiveFunction = function (e) {
     if (e.type == 'show.bs.collapse' || e.type == 'show.bs.collapse') {
       e.target.closest('.accordion-item').classList.add('active');
     } else {
       e.target.closest('.accordion-item').classList.remove('active');
     }
   };
 
   const accordionTriggerList = [].slice.call(document.querySelectorAll('.accordion'));
   const accordionList = accordionTriggerList.map(function (accordionTriggerEl) {
     accordionTriggerEl.addEventListener('show.bs.collapse', accordionActiveFunction);
     accordionTriggerEl.addEventListener('hide.bs.collapse', accordionActiveFunction);
   });
 
   // Auto update layout based on screen size
   window.Helpers.setAutoUpdate(true);
 
   // Toggle Password Visibility
   window.Helpers.initPasswordToggle();
 
   // Speech To Text
   window.Helpers.initSpeechToText();
 
   // Manage menu expanded/collapsed with templateCustomizer & local storage
   //------------------------------------------------------------------
 
   // If current layout is horizontal OR current window screen is small (overlay menu) than return from here
   if (window.Helpers.isSmallScreen()) {
     return;
   }
 
   // If current layout is vertical and current window screen is > small
 
   // Auto update menu collapsed/expanded based on the themeConfig
   window.Helpers.setCollapsed(true, false);
 })();
 
