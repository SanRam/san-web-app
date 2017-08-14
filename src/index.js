/* eslint-disable no-unused-vars, no-console, no-debugger*/
/* eslint-disable */
//import $ from 'jquery';

import css from './index.css';




$(document).ready(function () {


  $(".button-collapse").sideNav();
  console.log('initialized side nav');


  var index = 0;
  $(document).scroll(function () {
    var top = $('.technical').height() - $(window).scrollTop();
    console.log(top)
    if (top < -300) {
      if (index == 0) {

        $('.chart').easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });




      }
      index++;
    }
  })

  // for banner height js
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $('.banner').css({ 'width': windowWidth, 'height': windowHeight - "60" });



  // chart loding
  $(window).load(function () {

    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function () {
      chart.update(Math.random() * 100);
    });

  });

  $(window).resize(function () {
    // for banner height js
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.banner').css({ 'width': windowWidth, 'height': windowHeight - "60" });

  });

});



