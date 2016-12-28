    var beach;
    var party3;

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 43.6532, lng: -79.3832 },
            zoom: 14
        });
        beach = {
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 35)
        };

        beach = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: {
                lat: 43.645604,
                lng: -79.372969
            },
            map: map,
            icon: beach,
            size: new google.maps.Size(20, 32),
            scaledSize: new google.maps.Size(25, 25)

        });

        var dot = {
            url: '../images/blue.png',
            size: new google.maps.Size(31, 31),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(10, 10)
        };

        var dot = new google.maps.Marker({
            position: {
                lat: 43.645364,
                lng: -79.380969
            },
            map: map,
            icon: dot,
            size: new google.maps.Size(20, 20),
            scaledSize: new google.maps.Size(25, 25),
            zIndex: google.maps.Marker.MAX_ZINDEX + 1
        });
        var hotel = {
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 35)
        };

        var hotel = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: {
                lat: 43.645553,
                lng: -79.395393
            },
            map: map,
            icon: hotel,
            size: new google.maps.Size(20, 32),
            scaledSize: new google.maps.Size(25, 25)
        });
        var exhibition = {
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 35)
        }

        var exhibition = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: {
                lat: 43.652532,
                lng: -79.373042
            },
            map: map,
            icon: exhibition,
            size: new google.maps.Size(20, 32),
            scaledSize: new google.maps.Size(25, 25)
        });
        var party1 = {

            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 35)
        }

        var party1 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: {
                lat: 43.655532,
                lng: -79.383042
            },
            map: map,
            icon: party1,
            size: new google.maps.Size(20, 32),
            scaledSize: new google.maps.Size(25, 25)
        });
        var party2 = {
            url: '../images/government.png',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 35)
        }

        var party2 = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: {
                lat: 43.685532,
                lng: -79.387042
            },
            map: map,
            icon: party2,
            size: new google.maps.Size(20, 32),
            scaledSize: new google.maps.Size(25, 25)
        });

        $(".")
        beach.addListener('click', function() {
            document.querySelector('#blurry').click();
        });

    }



    (function($) {

        $(window).scroll(function() {
            $('.pic2:in-viewport(400)').run(function() {
                $('#centered2').addClass('animated fadeInUp');
                $(".pic2 > .list").addClass('animated fadeInRight');
                $(".pic2 > .Map").addClass('animated fadeInLeft');
            });
        });
        $(window).scroll(function() {
            $('.pic1:in-viewport(400)').run(function() {
                $('#centered1').addClass('animated fadeInUp');
                $(".pic1 > .list").addClass('animated fadeInRight');
                $(".pic1 > .Map").addClass('animated fadeInLeft');
            });
            $('.pic3:in-viewport(400)').run(function() {
                $('#centered3').addClass('animated fadeInUp');
                $(".pic3 > .list").addClass('animated fadeInRight');
                $(".pic3 > .Map").addClass('animated fadeInLeft');
            });
        });
    }(jQuery));

    $(document).ready(function() {

        $('.main-carousel').flickity({});
        $(".pic1").on("swipeleft", function() {
            $(".pic1").addClass('animated fadeOutLeftBig');
            $(".places").removeClass('animated fadeOutRight');
            $(".places").css('left', 0);
            setTimeout(function() {
                $('#bob').addClass('animated fadeInLeft');
                $('.logo').addClass('animated fadeOutUp');
                $('.prev').addClass('animated fadeInUp');
            }, 750);

            setTimeout(function() {
                $("#banner").addClass('animated fadeOutUp');
                $(".pic2").addClass('animated fadeOutDown');
                $(".pic3").addClass('animated fadeOutDown');
            }, 950);
            setTimeout(function() {
                $("#one1").addClass("animated fadeInLeft")
            }, 950);
            setTimeout(function() {
                $("#two").addClass("animated fadeInLeft")
            }, 1150);
            setTimeout(function() {
                $("#three").addClass("animated fadeInLeft")
            }, 1350);
            setTimeout(function() {
                $("#four").addClass("animated fadeInLeft")
            }, 1550);
            setTimeout(function() {
                $("#bob1").addClass("animated fadeInLeft")
            }, 1750);
            setTimeout(function() {
                $("#five").addClass("animated fadeInLeft")
            }, 1950);

            setTimeout(function() {
                $("#six").addClass("animated fadeInLeft")
            }, 2150);

            setTimeout(function() {
                $("#seven").addClass("animated fadeInLeft")
            }, 2350);

            setTimeout(function() {
                $("body").css("overflow", "hidden");
            }, 1050);
        });
        $(".pic1").on("swiperight", function() {
            $(".pic1").addClass('animated fadeOutRight');
            $(".pic2").addClass('animated fadeOutDown');
            $(".pic3").addClass('animated fadeOutDown');
            $("#map").css("left", "0");
        });

        $(".prev").click(function() {
            $(".places").addClass("animated fadeOutRight");
            $("#banner").removeClass("animated fadeOutUp")
            $("#banner").addClass('animated fadeInDown');
            $(".pic1").removeClass("animated fadeOutLeftBig");
            $(".pic1").addClass('animated fadeInUp');
            $(".pic2").removeClass("animated fadeOutDown");
            $(".pic2").addClass('animated fadeInUp');
            $(".pic3").removeClass("animated fadeOutDown");
            $(".pic3").addClass('animated fadeInUp');
            $("body").css("overflow", "scroll");
            $('.logo').removeClass('animated fadeOutUp');
            $('.prev').removeClass('animated fadeInUp');
            $(".places").css('left', "100" + "%");
            $("#bob").removeClass("animated fadeInLeft")
            $("#bob1").removeClass("animated fadeInLeft")
            $("#one1").removeClass("animated fadeInLeft")
            $("#two").removeClass("animated fadeInLeft")
            $("#three").removeClass("animated fadeInLeft")
            $("#four").removeClass("animated fadeInLeft")
            $("#five").removeClass("animated fadeInLeft")
            $("#six").removeClass("animated fadeInLeft")
            $("#seven").removeClass("animated fadeInLeft")
        });


    });