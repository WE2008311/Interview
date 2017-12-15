/**
 * Created by Administrator on 2016/4/7 0007.
 */
$(function(){
    $(".open").click(function(){
        $(".black_box").fadeIn();
        $(".sheet").fadeIn();
    });
    $(".sheet").find("i").click(function(){
        $(".black_box").fadeOut();
        $(".sheet").fadeOut();
    })
})