// //jQuery
// //eq(0) => eq는 n번째 라는 메소드

$('.gnb > li').mouseover(function(){
  $(this).find('.box').stop().fadeIn(300);
})
$('.gnb > li').mouseleave(function(){
  $(this).find('.box').stop().fadeOut(300);
})

/*
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox').stop().fadeOut(300);
})
//2번째 메뉴
$('.gnb > li').eq(1).mouseover(function(){
  $('.gnbSubBox2').stop().fadeIn(300);
})
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox2').stop().fadeOut(300);     
})
//3번째 메뉴
$('.gnb > li').eq(2).mouseenter(function(){
  $('.gnbSubBox3').stop().fadeIn(500);
})
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox3').stop().fadeOut(500);     
})                                    
//4번째 메뉴
$('.gnb > li').eq(3).mouseenter(function(){
  $('.gnbSubBox4').stop().fadeIn(500);
})
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox4').stop().fadeOut(500);     
})             
//5번째 메뉴
$('.gnb > li').eq(4).mouseenter(function(){
  $('.gnbSubBox5').stop().fadeIn(500);
})
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox5').stop().fadeOut(500);     
})            
//7번째 메뉴
$('.gnb > li').eq(6).mouseenter(function(){
  $('.gnbSubBox7').stop().fadeIn(500);
})
$('#gnb_wrap').mouseleave(function(){
  $('.gnbSubBox7').stop().fadeOut(500);     
})
*/         