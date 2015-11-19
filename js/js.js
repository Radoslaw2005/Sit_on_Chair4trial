/**
 * Created by User on 2015-11-16.
 */

//$(document).ready(function() {
//
//    function setMenu() {
//        $(window).on('resize', function() {
//            if ($(window).width() < 700) {
//                $('.menus').hide();
//                $('.menuBtn').show();
//            } else {
//                $('.nav').show();
//                $('.menuBtn').hide();
//                $('.mobileMenu').hide();
//            }
//        });
//    }
//
//    function setClick() {
//        $('.menuBtn').on('click', function() {
//            $('.mobileMenu').toggle();
//        });
//    }
//
//    setMenu();
//    setClick();
//
//});

$(document).ready(function() {


    function showDropMenus() {
        $('.menus').mouseover( function() {
            console.log(this);
            $(this).siblings('.dropdown').fadeIn(100,'linear');
        });

        $('.dropdown').mouseleave( function() {
            $(this).fadeOut(300,'linear');
        });




    }
    showDropMenus();




    /*formularz*/

    function checkValidate() {

        var imie = $('#form').find("input#imie");
        var email = $('#form').find("input#email");
        var text = $('#form').find("input#text");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var imieSpan = $('#form').find("span.formName");
        var emailSpan = $('#form').find("span.formEmail");
        var textSpan = $('#form').find("span.formText");


        $("#button").click(function () {

            //sprawdzenie poprawnosci imienia

            if ((imie.val().length >= 3) && (imie.val().length <= 10)) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                imieSpan.show();
            }

            // sprawdzenie poprawnosci e-mail
            if (re.test(email.val())) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                emailSpan.show();
            }

            // sprawdzenie poprawnosci wiadomosci
            if ((text.val().length > 0) && (text.val().length <= 100)) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                textSpan.show();
            }
        })
    }
    checkValidate();



});

