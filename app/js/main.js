// B.M. id-1054

$(document).ready(function() {

    // Top Menu
    $('.top-menu__item > a').on('click', function(e) {

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


    $(document).mouseup(function (e)
    {

        var animationSpeed = 300;
        var subMenu = $(".sub-menu");

        if (!subMenu.is(e.target) // if the target of the click isn't the container...
            && subMenu.has(e.target).length === 0) // ... nor a descendant of the container

        {   
            subMenu.slideUp(animationSpeed, function() {
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
        equalheight('.top-content__item-inner > div');

        setTimeout(function() {
            $(window).resize(function(){
                equalheight('.top-content__item-inner > div');
            });
        }, 0);
    });


    $(window).load(function() {
        equalheight('.future-content__item > future-content__item-inner > .future-content__item-person');

        setTimeout(function() {
            $(window).resize(function(){
                equalheight('.future-content__item > future-content__item-inner > .future-content__item-person');
            });
        }, 0);
    });


    $(window).load(function() {
        equalheight('.news-content .news-content__item');

        setTimeout(function() {
            $(window).resize(function(){
                equalheight('.news-content .news-content__item');
            });
        }, 0);
    });

})