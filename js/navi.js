$(document).ready(function(){
  $('#quickMenu a').click(function(e){
    e.preventDefault();

    $('#quickMenu li').removeClass('on');
    $(this).parent().addClass('on');

    $('body, html').animate({
      scrollTop : $($(this).attr('href')).offset().top
      },
      400,
      function(){

      })
  })


   
  
  $('#quickMenu a').eq(0).click();

  //휠에 따라 메뉴 활성화 하기
  $(window).scroll(function(){
      $('.jy_contents').each(function(){
        if($(this).offset().top <= $(window).scrollTop() ){
          $('#quickMenu li').removeClass('on');
          $('[href="#'+$(this).attr('id')+'"]').parent().addClass('on')

        }
      })
  })
})