$(function() {
$('.item-demo').on('click',function(){
    $('.popup-demo').addClass('popup-show').fadeIn();
});
$('.close').on('click',function(){
    $('.popup-demo').fadeOut();
});
});


$(".inline").colorbox({
     inline:true,
     rel:'group'
});