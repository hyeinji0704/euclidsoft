$(document).ready(function(){
    
    const swiper = new Swiper('.slide_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            480: {    
                slidesPerView: 2,
                spaceBetween: 18,
            },
            1024: {   
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '#popup-zone .left-arrow',
            prevEl: '#popup-zone .right-arrow',
        },
    });

	
})