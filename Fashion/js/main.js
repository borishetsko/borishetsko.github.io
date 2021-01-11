$(document).ready(function(){

$('.avone-item').hover(
    function(){ 
        $(this).toggleClass('active');
        $(this).children('.avone-styles-box-item').toggleClass('d-flex');

});

});



