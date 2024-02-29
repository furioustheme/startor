/**
 * WEBSITE: https://furioustheme.com
 * GITHUB: https://github.com/furioustheme/
 */

(function ($) {
  "use strict";

  $(".testimonial-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // PRELOADER
  $(window).on("load", function () {
    $("#page-loader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // SCROLL TO TOP

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".scroll-to-top").addClass("reveal");
    } else {
      $(".scroll-to-top").removeClass("reveal");
    }
  });

  /* ----------------------------------------------------------- */
  /*  Fixed header
    /* ----------------------------------------------------------- */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".site-navigation,.trans-navigation").addClass("header-white");
    } else {
      $(".site-navigation,.trans-navigation").removeClass("header-white");
    }
  });

  // Smooth scrolling using jQuery easing
  // jQuery for page scrolling feature - requires jQuery Easing plugin

  $("a.js-scroll-trigger").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "ease"
      );
    event.preventDefault();
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
  });

  /*START GOOGLE MAP*/
  function initialize() {
    var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      center: new google.maps.LatLng(40.7127837, -74.00594130000002),
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: "assets/img/map_pin.png",
      map: map,
    });
  }
  google.maps.event.addDomListener(window, "load", initialize);
  /*END GOOGLE MAP*/
})(jQuery); // End of use strict
