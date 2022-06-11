$(document).ready(function(){
    $('#btn1000').click(function(e){
        e.preventDefault();
    $('#submunber').html('<h2>1000<span>位</span></h2>')
    $('#pricemonth').html("<h2>800<span>TWD</span></h2>")
    $('#submunber0').html('<h2>1000<span>位</span></h2>')
    $('#pricemonth0').html("<h2>600<span>TWD</span></h2>")
    });
  
    $('#btn1500').click(function(e){
        e.preventDefault();
    $('#submunber').html('<h2>1500<span>位</span></h2>')
    $('#pricemonth').html("<h2>1000<span>TWD</span></h2>")
    $('#submunber0').html('<h2>1500<span>位</span></h2>')
    $('#pricemonth0').html("<h2>800<span>TWD</span></h2>")
    });
  
    $('#btn2000').click(function(e){
        e.preventDefault();
    $('#submunber').html('<h2>2000<span>位</span></h2>')
    $('#pricemonth').html("<h2>1200<span>TWD</span></h2>")
    $('#submunber0').html('<h2>2000<span>位</span></h2>')
    $('#pricemonth0').html("<h2>1000<span>TWD</span></h2>")
    });
  
    $('#btn2500').click(function(e){
        e.preventDefault();
    $('#submunber').html('<h2>2500<span>位</span></h2>')
    $('#pricemonth').html("<h2>1400<span>TWD</span></h2>")
    $('#submunber0').html('<h2>2500<span>位</span></h2>')
    $('#pricemonth0').html("<h2>1200<span>TWD</span></h2>")
    });
  
  
    $('#btn2500up').click(function(e){
        e.preventDefault();
    $('#submunber').html('<h2>>2500<span>位</span></h2>')
    $('#pricemonth').html("<h2>1600<span>TWD</span></h2>")
    $('#submunber0').html('<h2>>2500<span>位</span></h2>')
    $('#pricemonth0').html("<h2>1400<span>TWD</span></h2>")
    });
  


    $('.qabl').click(function(e){
        e.preventDefault();
        $(this).find('.qa-text').slideToggle(200);
        $(this).find('.qabl-img').toggleClass('qabl-img-open');
        $(this).find('p').toggleClass('color-green');
        $(this).find('p').toggleClass('textbl');
    });


    $('#gotop').click(function(){
        $('html').scrollTop(500);
    });



  });