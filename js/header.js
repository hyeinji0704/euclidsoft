$(document).ready(function () {
    // 헤더 고정
    fix(".header");

    // GNB 메뉴 작동
    gnb();
});


// 헤더 고정 함수 (부드러운 등장 효과 포함)
function fix(elem) {
    var $header = $(".header");
    const FIX_TRIGGER = 100; // 스크롤이 100px 이상일 때 고정 시작

    $(window).on("scroll", function () {
        var scrollT = $(window).scrollTop();

        if (scrollT > FIX_TRIGGER) {
            if (!$header.hasClass("fixed")) {
                $header
                    .addClass("fixed-entering") // 등장 전 상태
                    .removeClass("fixed")
                    .stop(true) // queue 중복 방지
                    .delay(100)
                    .queue(function (next) {
                        $(this).removeClass("fixed-entering").addClass("fixed");
                        next();
                    });
            }
        } else {
            $header.removeClass("fixed fixed-entering");
        }
    });
}


// GNB 메뉴 함수 (PC 전용)
function gnb() {
    var AC = "active",
        $header = $(".header"),
        $depth1 = $(".topmenu .depth1"),
        $topM = $(".topmenu");

    $topM.addClass("fullmenu");

    // 전체 메뉴 영역에 마우스 진입 시 열기
    $topM.on("mouseenter focusin", function () {
        $header.add($depth1).addClass(AC);
    }).on("mouseleave", function () {
        $header.add($depth1).removeClass(AC);
    });

    // 각 1depth li에 호버 시 하위 메뉴 강조
    $depth1.on("mouseenter focusin", function () {
        $(this).addClass("on");
    }).on("mouseleave focusout", function () {
        $(this).removeClass("on");
    });

    // 탭 이동 시 GNB 닫기
    $topM.find(".depth1 > a").on("keydown", function (e) {
        if (e.keyCode === 9 && e.shiftKey) {
            $header.add($depth1).removeClass(AC);
        }
    }).next().find("a:last").on("keydown", function (e) {
        if (e.keyCode === 9) {
            $header.add($depth1).removeClass(AC);
        }
    });
}
