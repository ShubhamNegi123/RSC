$(function(){    
    $('.products .img-wrapper img').click(function(){
        var c = $(this).attr('src');
        console.log(c);
    });
});