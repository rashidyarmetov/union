// qamburger

$(".hamburger").on("click", function () {
  $(this).toggleClass("active");
  $("header .menu").toggleClass("active");
});

// меню при ресайзе
let mobile = false;
let filter = $(".asaid");

if ($(window).width() < 976) {
  mobile = true;
  $(".overflow").prepend(filter);
}

$(window).on("resize", function () {
  if ($(window).width() < 976 && !mobile) {
    mobile = true;
    $(".overflow").prepend(filter);
  }

  if ($(window).width() >= 976 && mobile) {
    mobile = false;
    $('.content_right').before(filter);
  }
});

// ===================modalka==============

document.querySelectorAll("[data-btn]").forEach((item) => {
  item.addEventListener("click", function () {
    document.body.style.overflow = "hidden";

    let dataValue = this.getAttribute("data-btn");

    let modal = document.querySelector("." + dataValue);

    modal.style.display = "flex";
  });
});

document.querySelectorAll(".modal").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.target === this || e.target.classList.contains("close")) {
      document.body.style.overflow = "visible";
      this.style.display = "none";
    }
  });
});

// =============selekt===============

$(".select .visual_part").on("click", function () {
  $(".select .list").slideToggle();
});

$(".select .list a").on("click", function (e) {
  e.preventDefault();
  a = $(this).text();
  $(this).closest(".select").find(".visual_part span").text(a);
  $(this).parents(".list").slideToggle();
});

$(window).scroll(function () {
  // При прокрутке попадаем в эту функцию
  /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
  if ($(this).scrollTop() > 50) {
    $(".goToTop_btn").fadeIn();
  } else {
    $(".goToTop_btn").fadeOut();
  }
});

$(".goToTop_btn").click(function () {
  // При клике по кнопке "Наверх" попадаем в эту функцию
  /* Плавная прокрутка наверх */
  scrollto(0, 800);
});

// scrollto ПЛАВНЫЕ ЯКОРИ
window.scrollto = function (destination, speed) {
  if (typeof speed == "undefined") {
    speed = 800;
  }
  jQuery("html:not(:animated),body:not(:animated)").animate(
    {
      scrollTop: destination - 60,
    },
    800
  );
};

$("a.scrollto").click(function () {
  let elementClick = $(this).attr("href");
  let destination = $(elementClick).offset().top;
  scrollto(destination);
  return false;
});

// Фильтры в каталоге(catalog.html)

$(".filter h3.title").on("click", function () {
  $(this).children(".rotate_icon").toggleClass("active");

  $(this).toggleClass("open");
  $(this).siblings(".inner").slideToggle();
});

$(".filters .close").on("click", function () {
  $(".catalog_page .filters").toggleClass("open");
});

$(".filters_btn button").on("click", function () {
  $(".catalog_page .filters").toggleClass("open");
});
