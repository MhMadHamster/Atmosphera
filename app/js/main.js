// B.M. id-1054

$(document).ready(function() {

    // Top Menu
    $('.top-menu__item > a').on('mouseover', function(e) {

        var clickedItem = $(this);
        var siblingSubMenu = clickedItem.siblings('.sub-menu');
        var animationSpeed = 300;

        if(siblingSubMenu.length) {

            e.preventDefault();

            if (clickedItem.hasClass('active')) {

                siblingSubMenu.slideUp(animationSpeed, function() {
                    clickedItem.removeClass('active');
                })

            } else {

                clickedItem.addClass('active');
                siblingSubMenu.css({'top': $(this).outerHeight() + 'px'}).slideDown(animationSpeed);

            }

        }

    });

    $(".sub-menu__item").on('mouseover', function() {

        $(this).find('.sub-sub-menu').slideDown(300);
    });

    $(".top-menu__item").on("mouseleave", function() {
        if ($(this).find(".sub-sub-menu").length) {
            $(this).find(".sub-sub-menu").slideUp(300, function() {
                $(this).closest('.sub-menu').slideUp(300, function() {
                    $(this).siblings('.active').removeClass('active');
                });
            });
        } else {
            $(this).find(".sub-menu").slideUp(300, function() {
                $(this).siblings('.active').removeClass('active');
            });
        }
    });


    // Popup
    $('.js-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup').bPopup();
    });


    // equal height
    equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }

            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }

        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });

    }


    $(window).load(function() {
        var maxHeight = 0;

        $('.future-content__item-inner .future-content__item-person:first-child').each(function() {
            var currentHeight = $(this).height();
            if(maxHeight < currentHeight) {
                maxHeight = currentHeight;
            }
        });

        $('.future-content__item-inner .future-content__item-person:first-child').each(function() {
            var currentHeight = $(this).height();
            if(maxHeight > currentHeight) {
                $(this).css('height', maxHeight+'px');
            }
        });

        var maxHeight = 0;

        $('.future-content__item-inner .future-content__item-person:last-child').each(function() {
            var currentHeight = $(this).height();
            if(maxHeight < currentHeight) {
                maxHeight = currentHeight;
            }
        });

        $('.future-content__item-inner .future-content__item-person:last-child').each(function() {
            var currentHeight = $(this).height();
            if(maxHeight > currentHeight) {
                $(this).css('height', maxHeight+'px');
            }
        });

        equalheight('.top-content__item-inner > div');

        setTimeout(function() {
            $(window).resize(function(){
                equalheight('.top-content__item-inner > div');
            });
        }, 0);

        equalheight('.news-content .news-content__item');

        setTimeout(function() {
            $(window).resize(function(){
                equalheight('.news-content .news-content__item');
            });
        }, 0);
    });


    setTimeout(function() {
        $('input').styler({
            wrapper: 'div.input-group'
        });
    }, 100)

})