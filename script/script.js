$(document).ready(function(){
  history.scrollRestoration = "manual"
 
  //서브메뉴
  $('#trigger').click(function(){
    $('.submenu').toggleClass('active')
    $('.bar').toggleClass('on')
    $('.logo-outside').toggleClass('size')
  });
  $('#trigger').click(function(){
  });

  //sec-4
  $('.sec4_btn').mouseover(function(){
    $('.intxt4').css({
      top:23,
      left:24
    })
  });

  $('.sec4_btn').mouseout(function(){
    $('.intxt4').css({
      top:23,
      left:6
    })
  });

  
      
  //sec-5
  $('.sec5_btn').mouseover(function(){
    $('.intxt5').css({
      top:28,
      left:55
    })
  });
  $('.sec5_btn').mouseout(function(){
    $('.intxt5').css({
      top:28,
      left:4
    })
  });
 var ww = $(window).width();
  if(ww<550){
    $('.sec5_btn').mouseover(function(){
      $('.intxt5').css({
        top:28,
        left:60
      })
    });
    $('.sec5_btn').mouseout(function(){
      $('.intxt5').css({
        top:28,
        left:4
      })
    });
  }
  





  //스크롤
  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    var wh = $(window).height();
    var con1 = $('.container').height();
    var ww = $(window).width();
    console.log(sct);
    const bannerimgh = $('.banner_img').offset().top;
    const bannerh = $('.banner').height();
    const sec1h = $('.sec-1').height();
    const sec2h = $('.sec-2').height();
    const sec2 = $('.sec2_j').offset().top;

    const sec2jh = $('.sec2_j').height();
    const sec2img = $('.sec2_img').height();
    const sec3 = $('.sec3_j').offset().top;
    const sec3h = $('.sec-3').height();
    // const sec3hhh = $('.sec3')
    const sec4 = $('.sec-4').offset().top;
    const sec5 = $('.sec-5').offset().top;



    //sec-2
    if(sct >= sec2){
      $('.sec2_img').css({
            position:'fixed',
            top:10,
            right:0
          })
        }else if(sct < sec2){
          $('.sec2_img').css({
            position:'static',
          })
        }if(sct > parseInt(con1 - wh - sec2h -90)){
            $('.sec2_img').css({
              position:'absolute',
              top:387
            })
    }
    if(ww<1750 && sct > parseInt(con1 - wh - sec2h - 140)){
      $('.sec2_img').css({
        position:'absolute',
        top:320
      })
    }
    if(ww<1600 && sct > parseInt(con1 - wh - sec2h - 260)){
      $('.sec2_img').css({
        position:'absolute',
        top:200
      })
    }
    
    // if(ww<1300 && sct > parseInt(con1 - wh - 600)){
    //   $('.sec2_img').css({
    //     position:'absolute',
    //     top:200
    //   })
    // }

    if(ww<1300 && sct >= sec2){
      $('.sec2_img').css({
            position:'static',
          })
        }else if(ww<1300 && sct < sec2){
          $('.sec2_img').css({
            position:'static',
          })
        }
    


    //sec-3
    if(sct >= sec3){
      $('.sec3_img').css({
        position:'fixed',
        top:10,
        left:0
      })
      $('.ab_img').css({
        position:'absolute',
        top:0,
        right:0
      })
    }else if(sct < sec3){
      $('.sec3_img').css({
        position:'static',
      })
    }if(sct > con1 - wh){
      $('.sec3_img').css({
        position:'absolute',
        top:387
      })
    }
    if(ww<1750 && sct > parseInt(con1 - wh -50)){
      $('.sec3_img').css({
        position:'absolute',
        top:320
      })
    }
    if(ww<1600 && sct > parseInt(con1 - wh - 150)){
      $('.sec3_img').css({
        position:'absolute',
        top:210
      })
    }
    if(ww<1300 && sct > parseInt(con1 - wh -50)){
      $('.sec3_img').css({
        position:'absolute',
        top:320
      })
    }
    if( ww<1300 && sct >= sec3){
      $('.sec3_img').css({
        position:'static',
      })
      $('.ab_img').css({
        position:'static',
      })
    }else if(sct < sec3){
      $('.sec3_img').css({
        position:'static',
      })
    }



    //sec-4
    let bgsize1 = 50 +(sct/100)
    let bgsize2 = 30 +(sct/100)
    let bgsize3 = 40 +(sct/100)
    let bgsize4 = 60 +(sct/100)
    let bgsize5 = 60 +(sct/90)
    let bgsize6 = 70 +(sct/90)
    let bgsize7 = 70 + (sct/100)
    let bgsize8 = 100 + (sct/100)
    if(sct > sec4 - wh + 300){
      $('.sec-4_img').css({
        backgroundSize : `${bgsize1}%`
      })
    }
    
    if(sct > sec5 -200){
      $('.sec-5_img').css({
        backgroundSize : `${bgsize2}%`
      })
    }
    if(ww < 1800){
      $('.sec-5_img').css({
        backgroundSize : `${bgsize3}%`
      })
    }
    if(ww< 1700){
      $('.sec-4_img').css({
        backgroundSize : `${bgsize4}%`
      })
      $('.sec-5_img').css({
        backgroundSize : `${bgsize1}%`
      })
    }
    if(ww< 1600){
      $('.sec-4_img').css({
        backgroundSize : `${bgsize5}%`
      })
      $('.sec-5_img').css({
        backgroundSize : `${bgsize4}%`
      })
    }
    if(ww<1400){
      $('.sec-4_img').css({
        backgroundSize : `${bgsize7}%`
      })
      $('.sec-5_img').css({
        backgroundSize : `${bgsize5}%`
      })
    }
    if(ww<1300){
      $('.sec-4_img').css({
        backgroundSize : `${bgsize8}%`
      })
    }
    if(ww<1200){
      $('.sec-5_img').css({
        backgroundSize : `${bgsize7}%`
      })
    }if(ww<1150){
      $('.sec-5_img').css({
        backgroundSize : `${bgsize8}%`
      })
    }
    if(ww<1050){
      $('.sec-4_img').css({
        backgroundSize : 'cover'
      })
      $('.sec-5_img').css({
        backgroundSize : 'cover'
      })
    }

    
    

    //로고
    //0~290
    //1= a * 0 + b
    //0.2 = a * 290 + b
    //a = -2/725 b = 1
    const z =  -2/725 * sct + 1;
    
    if(sct < bannerimgh - 90){
    $('.logo').css('transform',`scale(${z})`);
    $('.logo').css({
      position:'inherit'
    })
    }else if(sct >= bannerimgh - 90){
      $('.logo').css({
        position:'fixed',
        top:5,
      });
    }

    if(ww < 1300 && sct >= bannerimgh - 90){
      $('.logo').css({
        position:'fixed',
        top:15,
      });
    }
    if(ww<800 && sct >= bannerimgh - 90){
      $('.logo').css({
        position:'fixed',
        top:24,
      });
    }
    if(ww<501 && sct >= bannerimgh - 90){
      $('.logo').css({
        position:'fixed',
        top:27,
      });
    }



  });

  $(window).resize(function(){
    ww = $(window).width();
    swiper()
  });
    //스와이프
    // var swiper = undefined;
    // typeof(swiper)
    function swiper(){
      var ww = $(window).width();
      if(ww>1000 && swiper == undefined){
        var swiper = new Swiper(".secondSwiper", {
          slidesPerView: "auto",
          spaceBetween: 52,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        var swiper = new Swiper(".firstSwiper", {
          slidesPerView: 5,
          spaceBetween: 60,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        
      }else if(ww<=1000 && swiper != undefined){
        swiper.destroy();
        // swiper=undefined
      }
    }
    swiper();
    
    
      




  


  
});


