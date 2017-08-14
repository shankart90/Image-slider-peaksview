$(function () {
   'use strict';

    $('.peaksview_img').find('img:first').addClass('top');

    $("#btn-forward").click(function() {
        var curr_element = $('.peaksview_img img.top');
        var next_element = curr_element.next();

        if (!next_element.length) {
            next_element = $('.peaksview_img img:first');
            next_element.addClass('top');

            curr_element.animate({
                opacity: 0.0
            }, 500, function () {
                curr_element.removeClass('top');
                curr_element.css({
                    opacity: 1.0
                });
            });
        } else {
            next_element.css({
                opacity: 0.0
            }).addClass('top')
              .animate({
                opacity: 1.0
            }, 500, function () {
                curr_element.removeClass('top');
            });
        }
    });

    $("#btn-prev").click(function() {
        var curr_element = $('.peaksview_img img.top');
        var next_element = curr_element.prev();

        if (!next_element.length) {
            next_element = $('.peaksview_img img:last');
            next_element.css({
                opacity: 0.0
            }).addClass('top');
            next_element.animate({
                opacity: 1.0
            }, 1000, function () {
                curr_element.removeClass('top');
                curr_element.css({
                    opacity: 1.0
                });
            });
        } else {
            next_element.addClass('top');
            curr_element.animate({
                opacity: 0.0
            }, 1000, function () {
                curr_element.removeClass('top');
                curr_element.css({
                    opacity: 1.0
                });
            });
        }
    });

});
