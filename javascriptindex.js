$(document).ready(function () {
    'use strict';
// Activate Carousel
    $("#myCarousel").carousel({interval: 10000, pause: "hover"});
    
    
    
//Menu nav to show and hide on mouse over
    $('#residentialMenuID').mouseover(function () {
        $('.paint-land').css("display", "block");
    });
    $('#residentialMenuID').mouseout(function () {
        $('.paint-land').css("display", "none");
    });
  
    $('#paintingID').mouseover(function () {
        $('#paintingMenuId').css("display", "block");
    });
    $('#paintingID').mouseout(function () {
        $('#paintingMenuId').css("display", "none");
    });
    $('#landID').mouseover(function () {
        $('#landMEnuID').css("display", "block");
    });
    $('#landID').mouseout(function () {
        $('#landMEnuID').css("display", "none");
    });
    
/* When scroll down to 0px the logo hide*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('.tothemiddle').addClass('totheleft');
            
            $('.sectionclass1').addClass('sectionclass2');
            $('#logoTextID').addClass('headerclass3');
            $('#logotextIdH1').addClass('fontsize');
            
            $('#Brand').addClass('hideBrand');
            $('nav').addClass('navPos');
        } else {
            $('.tothemiddle').removeClass('totheleft');
            
            $('.sectionclass1').removeClass('sectionclass2');
            $('#logoTextID').removeClass('headerclass3');
            $('#logotextIdH1').removeClass('fontsize');
            
            $('#Brand').removeClass('hideBrand');
            $('nav').removeClass('navPos');
        }
    });
    
//Parallax image
    $('.parallax-window').parallax({imageSrc: 'Picture/commercial-Painting.jpg'});
    
//on mouse over image plastering , show the black window.
    $('#plasteringID1').mouseover(function () {
        $('#coatingID01').css("display", "block");
    });
    $('#plasteringID1').mouseout(function () {
        $('#coatingID01').css("display", "none");
    });
    
    $('#plasteringID2').mouseover(function () {
        $('#coatingID02').css("display", "block");
    });
    $('#plasteringID2').mouseout(function () {
        $('#coatingID02').css("display", "none");
    });
    
    $('#plasteringID3').mouseover(function () {
        $('#coatingID03').css("display", "block");
    });
    $('#plasteringID3').mouseout(function () {
        $('#coatingID03').css("display", "none");
    });
    
    
// Scroll to the Id for the navigation bar
    $(".NavHom").click(function () {
        $('html, body').animate({
            scrollTop: $("#BodyId").offset().top
        }, 2000);
        
    });
    $(".NavResi").click(function () {
        $('html, body').animate({
            scrollTop: $("#paintinResidential").offset().top
        }, 2000);
    });
    $(".NavCom").click(function () {
        $('html, body').animate({
            scrollTop: $("#CommercialId").offset().top
        }, 2000);
    });
    $(".NavIndu").click(function () {
        $('html, body').animate({
            scrollTop: $("#Industrial").offset().top
        }, 2000);
    });
    $(".NavPlas").click(function () {
        $('html, body').animate({
            scrollTop: $("#plastering").offset().top
        }, 2000);
    });
    $(".NavLand").click(function () {
        $('html, body').animate({
            scrollTop: $("#LandScaping").offset().top
        }, 2000);
    });
    $(".NavAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
    $(".NavGallery").click(function () {
        $('html, body').animate({
            scrollTop: $("#GalleryAnchor").offset().top
        }, 2000);
    });

    
// Push the body and the nav over by 285px over
    $('.closeMenu02, .NavHom, .NavResi, .NavCom, .NavIndu, .NavPlas, .NavLand, .NavAbout, .NavGallery, .NavCont').click(function () {
        $('#nav02Menu').animate({left: '-285px'}, 200);
    });
    $('#nav02').click(function () {
        $('#nav02Menu').animate({left: '0px'}, 200);
    });
//Nav 02 Toggle serices
    $('html').click(function () {
        $('#underMenuResidIdM').hide();
    });
    $('#residentialMenuIDM').click(function (e) {
        e.stopPropagation();
    });
    $('#link').click(function (e) {
        $('#underMenuResidIdM').toggle();
    });
//Painting
    $('html, #landID').click(function () {
        $('#paintingMenuIdM').hide();
    });
    $('#paintingIDM').click(function (e) {
        e.stopPropagation();
    });
    $('#link2').click(function (e) {
        $('#paintingMenuIdM').toggle();
    });
//Landscaping
    $('html, #paintingIDM').click(function () {
        $('#landMEnuIDM').hide();
    });
    $('#landID').click(function (e) {
        e.stopPropagation();
    });
    $('#link3').click(function (e) {
        $('#landMEnuIDM').toggle();
    });
//Gallery
    $("#TextButtonGalleryID1").mouseover(function () {
        $('#ImgButtonGalID1').css({"box-shadow": "0px 0px 20px black",
                                   "border-radius": "12%"});
    });
    $("#TextButtonGalleryID1").mouseout(function () {
        $("#ImgButtonGalID1").css({"box-shadow": "0px 0px 0px black",
                                   "border-radius": "12%"});
    });
    $("#TextButtonGalleryID2").mouseover(function () {
        $('#ImgButtonGalID2').css({"box-shadow": "0px 0px 20px black",
                                   "border-radius": "12%"});
    });
    $("#TextButtonGalleryID2").mouseout(function () {
        $("#ImgButtonGalID2").css({"box-shadow": "0px 0px 0px black",
                                   "border-radius": "12%"});
    });
    $(" .ImgButtonGal").mouseover(function () {
        $(this).css({"box-shadow": "0px 0px 20px black",
                     "border-radius": "12%"});
    });
    $(" .ImgButtonGal").mouseout(function () {
        $(this).css({"box-shadow": "0px 0px 0px black",
                     "border-radius": "12%"});
    });

});