$(function(){

    //ARRAY OF IMAGES
    var images=['/images/1.png', '/images/2.jpg', '/images/3.png'];

    //CREATE RANDOM NUMBER
    var random = Math.floor(Math.random() * images.length);

    //BUILD URL TAG TO INSERT INTO CSS
    var bg = 'url(' + images[random] + ')';

    //GRAB BODY AND INSERT BACKGROUND IMAGE
    //SET THE SIZE TO COVER
    $('body').css({'background':bg, 'background-size':'cover', });

});