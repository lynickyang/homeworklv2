$(document).ready(function(){

    $('.qabl').click(function(e){
        e.preventDefault();
    $(this).find('.qa-text').slideToggle(200);
    $(this).find('.qabl-img').toggleClass('qabl-img-open');
    $(this).find('p').toggleClass('color-green');
    $(this).find('p').toggleClass('textbl');
    });
  });