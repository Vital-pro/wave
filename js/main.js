$(function () {

  $('.blog__slider-body').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });


  $(".menu a, .header__logo, .footer__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__btn, .menu a, .menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');

  });

  var mixer = mixitup('.gallery__content');

});

























//   $(".menu, body").on("click","a", function (event) {
// 		//отменяем стандартную обработку нажатия по ссылке
// 		event.preventDefault();

// 		//забираем идентификатор бока с атрибута href
// 		var id  = $(this).attr('href'),

// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
// 			top = $(id).offset().top;

// 		//анимируем переход на расстояние - top за 1500 мс
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});



// $('.menu__btn, .menu a').on('click',function(){
//   $('.menu__list').toggleClass('menu__list--active');

// });




// });

// $('.blog__slider').slick({
//   arrows: false,
//   dots: true,



// });



