/**
 * Created by godown on 2016/12/17.
 */
$(function(){
    //轮播图切换
    var i=0,
        size=$('.txt').size();
    $('.txt').eq(0).show();
    $('.banner_node li').eq(0).addClass('on');

    $('.btn_r').click(function(){
        i++;
        move()
    });
    $('.btn_l').click(function(){
        i--;
        move();
    });
    $('.banner_node li').hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index=$(this).index();

        $('.txt').eq(index).fadeIn(500).siblings().fadeOut(500);
        i=index;
    });
    function move(){
        if(i==size){
            i=0;
        }else if(i<0){
            i=size-1;
        }
        $('.txt').eq(i).fadeIn(500).siblings().fadeOut(500);
        $('.banner_node li').eq(i).addClass('on').siblings().removeClass('on');
    };

    //导航特效
    var width_li=$('.nav ul li.active').outerWidth(),
        left_li=$('.nav ul li.active').position().left;
    $('.nav .ul_bg').css({width:width_li,left:left_li});   //当前位置

    $('.nav ul li').hover(function(){
        var width_li=$(this).outerWidth(),
            left_li=$(this).position().left;
        $('.nav .ul_bg').stop().animate({width:width_li,left:left_li});
    },function(){
        $('.nav .ul_bg').stop().animate({width:width_li,left:left_li});
    })

    //work轮播
    $('.arrow_btn b').last().click(function(){
        $('.work_con').stop().animate({left:-1090},1000);
        $(this).toggleClass('clo');
        $(this).siblings().addClass('clo');
    })
    $('.arrow_btn b').first().click(function(){
        $('.work_con').stop().animate({left:0},1000);
        $(this).toggleClass('clo');
        $(this).siblings().addClass('clo');
    })
})