$(document).ready(function(){
    AOS.init();
    // Grapic 팝업창
  

   $('#snsbtn > a').click(function(e){
    e.preventDefault();    
    $($(this).attr('href')).show().siblings().hide();
    $('body').addClass('shadow');
   })

   $('.popup_wrap > div').click(function(){
    $('.popup_wrap > div').hide();
    $('body').removeClass('shadow');

   })
  
	
})