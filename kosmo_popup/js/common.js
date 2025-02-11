$(document).ready(function(){
    function updatePopupCount() {
        const popupCount = swiper.slides.length - swiper.loopedSlides * 2; // Swiper가 가상으로 추가한 슬라이드 제외
        $('.slide_page b').text(popupCount); // HTML에 반영
    }
        // 페이지 로드 시 팝업 개수 업데이트
    $(document).ready(function() {
        updatePopupCount();
    });


    const swiper = new Swiper('.slide_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            480: {    
                slidesPerView: 2,
            },
            1024: {   
                slidesPerView: 3,
            }
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.slide_box .left-arrow',
            prevEl: '.slide_box .right-arrow',
        },
    });

    

   
    // body에 .on_popup 클래스 추가 (첫 로딩 시)
    const body = $('body');
    body.addClass('on_popup');

    // popupClose 함수 정의
    function popupClose() {
        body.removeClass("on_popup");
    }

    // '닫기' 버튼 클릭 시 팝업 닫기
    $('#popupzone_cookie').on('click', function(e) {
        e.preventDefault(); // 기본 동작 방지
        popupClose();
    });

    // '오늘 하루 열지 않기' 버튼 클릭 시 팝업 닫기 및 쿠키 설정
    $('.day-close-button').on('click', function(e) {
        e.preventDefault(); // 기본 동작 방지
        popupClose();
        // 쿠키 설정 (예: 하루 동안 팝업 열지 않기)
        document.cookie = "popup_closed=true; path=/; max-age=" + (24 * 60 * 60); // 하루 동안 유지
    });

    // 팝업 외부 화면 클릭 시 팝업 닫기
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#popup_zone').length) {
            popupClose();
        }
    });

    // 팝업 내부 클릭 이벤트 방지 (팝업 닫힘 방지용)
    $('#popup_zone').on('click', function(e) {
        e.stopPropagation();
    });

    // 쿠키 확인 후 팝업 표시 제어
    function getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    if (getCookie('popup_closed')) {
        body.removeClass('on_popup'); // 쿠키가 있으면 팝업 닫음
    }


    
})