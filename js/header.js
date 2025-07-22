// $(document).ready(function () {
//     // 헤더 고정
//     fix(".header");

//     // GNB 메뉴 작동
//     gnb();
// });


// // 헤더 고정 함수 (부드러운 등장 효과 포함)
// function fix(elem) {
//     var $header = $(".header");
//     const FIX_TRIGGER = 100; // 스크롤이 100px 이상일 때 고정 시작

//     $(window).on("scroll", function () {
//         var scrollT = $(window).scrollTop();

//         if (scrollT > FIX_TRIGGER) {
//             if (!$header.hasClass("fixed")) {
//                 $header
//                     .addClass("fixed-entering") // 등장 전 상태
//                     .removeClass("fixed")
//                     .stop(true) // queue 중복 방지
//                     .delay(100)
//                     .queue(function (next) {
//                         $(this).removeClass("fixed-entering").addClass("fixed");
//                         next();
//                     });
//             }
//         } else {
//             $header.removeClass("fixed fixed-entering");
//         }
//     });
// }


// // GNB 메뉴 함수 (PC 전용)
// function gnb() {
//     var AC = "active",
//         $header = $(".header"),
//         $depth1 = $(".topmenu .depth1"),
//         $topM = $(".topmenu");

//     $topM.addClass("fullmenu");

//     // 전체 메뉴 영역에 마우스 진입 시 열기
//     $topM.on("mouseenter focusin", function () {
//         $header.add($depth1).addClass(AC);
//     }).on("mouseleave", function () {
//         $header.add($depth1).removeClass(AC);
//     });

//     // 각 1depth li에 호버 시 하위 메뉴 강조
//     $depth1.on("mouseenter focusin", function () {
//         $(this).addClass("on");
//     }).on("mouseleave focusout", function () {
//         $(this).removeClass("on");
//     });

//     // 탭 이동 시 GNB 닫기
//     $topM.find(".depth1 > a").on("keydown", function (e) {
//         if (e.keyCode === 9 && e.shiftKey) {
//             $header.add($depth1).removeClass(AC);
//         }
//     }).next().find("a:last").on("keydown", function (e) {
//         if (e.keyCode === 9) {
//             $header.add($depth1).removeClass(AC);
//         }
//     });
// }



/* =======================================================================================
   header  style 2
======================================================================================= */


$(document).ready(function(){
    /*********************************************************
     브라우저가 스크롤이 되면 header fixed 클래스 추가
     근데 맨위로 다시 올라가면 header에 fixed 클래스 삭제
    ********************************************************/
    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){//조금이라도 스크롤 함
            $('.header').addClass('fixed')
        }else{//상단에 있는 경우 -- 스크롤 안한 경우 또는 다시 올라간 경우
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //문서 로드되었을 때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })
    /*********************************************************
        pc버전 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
        이벤트 대상 : .header .gnb ,
                     .header .gnb ul.depth01 > li --- 대상
                     .header .gnb ul.depth01 > li > a
        1차메뉴 li에 마우스를 오버하면 해당 li에 on 클래스 추가
        이벤트 대상 : .header .gnb ul.depth01 > li --- 대상
                     .header .gnb ul.depth01 > li > a
        이전에 마우스를 오버했던 li에는 on클래스 삭제
        ----> 이전에 오버했던 대상을 찾는 것보다 모든 li에 on을 삭제하고 마우스를 오버한 li에만 클래스 추가
    *********************************************************/
    let device_status
    let window_w
    function device_chk(){
        let window_w = $(window).width()
        if(window_w > 1024 ){ //pc
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk()//문서가 로딩되고 1번 실행
    $(window).resize(function(){ //문서가 리사이즈될 때마다 1번씩 실행
        device_chk()
    })

   $('.header .gnb ul.depth01 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth01 > li').removeClass('on')
            $(this).addClass('on')
        }
   })
   $('.header .gnb_area').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth01 > li').removeClass('on')
        }
   })
   $('.header .gnb_search .btn_sch').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth01 > li').removeClass('on')
        }
    })
})//$(document).ready