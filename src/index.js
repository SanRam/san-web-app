/* eslint-disable no-unused-vars, no-console, no-debugger*/
/* eslint-disable */
//import $ from 'jquery';

import css from './index.css';
import * as resume from './assets/pdf/SanthoshRamaiahResumeIndia2017v1.0.pdf';
import * as profilePic from './assets/images/profile_pic.jpg';
import * as linkedin from './assets/images/linkedin.svg';
import * as facebook from './assets/images/facebook.svg';
import * as github from './assets/images/github-box.svg';
import * as stackof from './assets/images/stackoverflow.svg';


console.log(profilePic.default);

$(document).ready(function () {


  $(".button-collapse").sideNav();
  console.log('initialized side nav');

  $("#downloadBtn")[0].href = resume.default;

  var img = document.createElement('img');
  img.src = profilePic.default;
  img.className += ' img-circle topmar'
  $("#profilePic")[0].appendChild(img);

  $("#linkedin")[0].src = linkedin.default;
  $("#facebook")[0].src = facebook.default;
  $("#github")[0].src = github.default;
  $("#stackof")[0].src = stackof.default;


  console.log(profilePic.default);

  var index = 0;
  $(document).scroll(function () {
    var top = $('.technical').height() - $(window).scrollTop();
    console.log(top)
    if (top < -300) {
      if (index == 0) {

        $('.chart').easyPieChart({
          //easing: 'easeOutBounce',
          'lineWidth' : 6, 
          'barColor' : '#ef1e25',
          'trackColor' : '#f2f2f2',
          'scaleColor' : '#dfe0e0',
          
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });




      }
      index++;
    }
  }
)


   /*
 * Replace all SVG images with inline SVG
 */
$('img.svg').each(function () {
  var $img = $(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  $.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});

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



