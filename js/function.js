//고정바
//스크롤시 헤더

//스크롤시 헤더
//  $tgnb.hide();
const $header = $("#wrap > header > .header-section ");
const $mnu = $("#wrap > header > .gnb-container > nav > .gnb > li > a  "); //메뉴셀렉팅 -> DOM 선택
const arrTopVal = []; //배열은 여러 데이터를 한번에 저장, 관리

//셀렉팅 집합을 순회하며 처리하는 .each() 메소드
$("section").each(function (idx) {
  //어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 방법 => .offset().top
  arrTopVal[idx] = $(this).offset().top;
});

const $fade = $(" #wrap > header > .header-section>.header-section-wrap ");
$(window).scroll(function () {
  if ($("body, html").scrollTop() > 170) {
    $(".header-section-wrap").fadeIn();
  }
  if ($("body, html").scrollTop() > 0) {
    $(".header-section-wrap").hide();
  }
});

$(window).on({
  scroll: function () {
    //scrollTop 값에 소수점이 발생할 경우를 대비
    const scrollTop = Math.ceil($(window).scrollTop());

    //1. 스크롤탑값에 따른 header 고정처리
    if (scrollTop > 80) {
      $header.addClass("fixed");
      $header.next().css({ marginBottom: 0});
    } else {
      $header.removeClass("fixed");
      $header.next().css({ marginBottom: 0 });
    }

    //2. 스크롤탑값에 따른 메뉴 활성화 표시
    for (let i = 0; i < $mnu.length; i++) {
      //for문을 이용하여 5개의 if문을 하나로 작성
      if (scrollTop >= arrTopVal[i] - 200) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      } else if (scrollTop < arrTopVal[0] - 200) {
        $mnu.parent().removeClass("on");
      }
    }
  },
});

//네비게이션
const $gnb = $("header .gnb");
const $lnb = $gnb.find(".lnb");

const navFadeIn = function () {
  $lnb.stop().slideDown(50);
  $lnb.stop().fadeIn(50);
};

const navFadeOut = function () {
  $lnb.stop().slideUp(50);
  $lnb.stop().fadeOut(50);
};

$gnb.on("mouseenter", function () {
  navFadeIn();
});

$gnb.on("mouseleave", function () {
  navFadeOut();
});

//

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4, //한 화면에 보이는 슬라이드의 개수
  spaceBetween: 20, //슬라이드간의 간격
  slidesPerGroup: 1, //한번에 슬라이드 되는 개수

  loop: true, //무한반복

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //인디케이터 클릭가능 여부
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
