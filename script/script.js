$(function(){
  // 사이트켤때 배너이미지 효과
  $('.kat_img').animate({
    opacity : '1'
  },2000)

  // 메뉴클릭시 해당 섹션으로 이동
  $('.a1').click(function(){
    $('html').animate({
      scrollTop: $('.sec01').offset().top
    })
  }),
  $('.a2').click(function(){
    $('html').animate({
      scrollTop: $('.sec02').offset().top
    })
  }),
  $('.a3').click(function(){
    $('html').animate({
      scrollTop: $('.sec03').offset().top
    })
  }),
  $('.a4').click(function(){
    $('html').animate({
      scrollTop: $('.sec04').offset().top
    })
  })

  // sec02 슬릭효과
  $('.posterbox').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
    ]
  });

  // 메뉴바 클릭시 nav 나타나게
  $('.h_menu').click(function(){
    $('nav').css({
      right: '0'
    })
  })
  $('.close').click(function(){
    $('nav').css({
      right: '-100%'
    })
  })
  $(window).resize(function(){
    $('nav').css({
      right: '-100%'
    })
  })

  // sec02, 마우스오버 시 more박스 나타나게
  $('.p1').on({
    mouseover: function(){
      $('.m1').css({
        opacity: '1'
      })
    },
    mouseout: function(){
      $('.m1').css({
        opacity: '0'
      })
    }
  })
  $('.p2').on({
    mouseover: function(){
      $('.m2').css({
        opacity: '1'
      })
    },
    mouseout: function(){
      $('.m2').css({
        opacity: '0'
      })
    }
  })
  $('.p3').on({
    mouseover: function(){
      $('.m3').css({
        opacity: '1'
      })
    },
    mouseout: function(){
      $('.m3').css({
        opacity: '0'
      })
    }
  })
  $('.p4').on({
    mouseover: function(){
      $('.m4').css({
        opacity: '1'
      })
    },
    mouseout: function(){
      $('.m4').css({
        opacity: '0'
      })
    }
  })
  $('.p5').on({
    mouseover: function(){
      $('.m5').css({
        opacity: '1'
      })
    },
    mouseout: function(){
      $('.m5').css({
        opacity: '0'
      })
    }
  })

  // sec04, 화살표 클릭시 이미지 슬라이드
  let w = $('.vbox').outerWidth();
  console.log(w)

  $('.right_A').click(function(){
    let vl = $('.videobox').offset().left;
    console.log(vl)
    let stop = w*3
    $('.videobox').animate({
      left: '-=' + w
    },1000)
    $('.left_A').css({
      display: 'block'
    })

    if(vl < '-' + stop){
      $('.right_A').css({
        display: 'none'
      })
    }
  })

  $('.left_A').click(function(){
    let vl = $('.videobox').offset().left;
    console.log(vl)
    $('.videobox').animate({
      left: '+=' + w
    },1000)
    $('.right_A').css({
      display: 'block'
    })
    $('.left_A').css({
      display: 'block'
    })

    if(vl > '-' + w){
      $('.left_A').css({
        display: 'none'
      })
    }
  })

  // 탑버튼 클릭시 화면 맨위로
  $('.top').click(function(){
    $('html').animate({
      scrollTop: 0
    })
  })

  // 스크롤시 탑버튼 보이게
  $(window).scroll(function(){
    let h = $(document).scrollTop();
    // console.log(h)
    if(h>400){
      $('.top').css({
        display: 'block'
      })
    } else{
      $('.top').css({
        display: 'none'
      })
    }
  })


});