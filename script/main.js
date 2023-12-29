$(function(){

    /* 메뉴 영역 */
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })// main > li hover

    /* 이미지 슬라이드 영역 */
    // var n = 0;// 현재 보이는 이미지 인덱스번호 0 1 2

    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //         // n+=1;
    //         // n=n+1;
    //     }// if
    //     console.log("n :", n);

    //     pos = -n * 300 + "px";
    //     console.log("pos :", pos);

    //     $(".move").animate({top: pos}, 500);
    // }, 2500);// setInterval

    /* 이미지 슬라이드 영역 */
    setInterval(move, 2500);

    function move(){
        $(".move").animate({top: "-300px"}, 500, function(){
            $(".move").css({top: "0"});
            $(".move").append($(".move li").eq(0));
            // $(".move").append($(".move li").first());
            // $(".move").append($(".move li:nth-child(1)"));
        })// move animate
    }// function move

    /* 탭메뉴 영역 */
    $(".noti_gall h2").click(function(){
        $(".noti_gall h2").addClass("off");
        $(this).removeClass("off");
        $(".noti_gall ul").hide();
        $(this).next().css({display: "flex"});
    })// noti_gall h2 click

    /* 팝업 영역 */
    $(".p_click").click(function(){
        $(".pop").show();
    })// p_click click

    $(".close").click(function(){
        $(".pop").hide();
    })// close click

})// jquery