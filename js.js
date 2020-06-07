'use strict';

$(document).ready(function () {
  let menu_item = 0;
  /*увеличение поста*/
  $('#zoom_in1').click(function () {
    $('.item:nth-child(1)').animate({
      width: '31%',
    });
  });
  $('#zoom_in6').click(function () {
    $('.item:nth-child(6)').animate({
      width: '31%',
    });
  });
  $('#zoom_in2').click(function () {
    $('.item:nth-child(2)').animate({
      width: '31%',
    });
  });
  $('#zoom_in3').click(function () {
    $('.item:nth-child(3)').animate({
      width: '31%',
    });
  });
  $('#zoom_in4').click(function () {
    $('.item:nth-child(4)').animate({
      width: '31%',
    });
  });
  $('#zoom_in5').click(function () {
    $('.item:nth-child(5)').animate({
      width: '31%',
    });
  });

  /*уменьшение поста*/
  $('#zoom_out1').click(function () {
    $('.item:nth-child(1)').animate({
      width: '27%',
    });
  });
  $('#zoom_out2').click(function () {
    $('.item:nth-child(2)').animate({
      width: '27%',
    });
  });
  $('#zoom_out3').click(function () {
    $('.item:nth-child(3)').animate({
      width: '27%',
    });
  });
  $('#zoom_out4').click(function () {
    $('.item:nth-child(4)').animate({
      width: '27%',
    });
  });
  $('#zoom_out5').click(function () {
    $('.item:nth-child(5)').animate({
      width: '27%',
    });
  });
  $('#zoom_out6').click(function () {
    $('.item:nth-child(6)').animate({
      width: '27%',
    });
  });

  $('.search').hide('fast'); // автоматически прячет поле для поиска при загрузке сайта
  $('#search_logo').click(function () {
    $(this).hide(0.3); // при клике на значок лупы  прячет лупу
    $('.search').show(0.5); // показывает поле поиска
  });

  $('.search_close').click(function () {
    $('.search').hide(0.3); // при клике на крестик, поле поиска исчезает
    $('#search_logo').show(0.3); // и появляется лупа
  });

  $('.post_like').click(function () {
    // анимация нажатия на сердечко
    $(this).find('.heart_logo').toggleClass('far fa-heart');
    $(this).find('.heart_logo').toggleClass('fas fa-heart');
    $(this).toggleClass('heart');
  });

  $('.item_header').on('click', function (event) {
    // делает активным элемент навигации, если по нему кликнули
    event.preventDefault();
    $('.item_header').removeClass('active');
    $(this).toggleClass('active');
  });
});
