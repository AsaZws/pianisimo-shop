// 导航
(function () {

    $('#nav li').hover(function () {
        $(this).find('div.nav-x').stop().toggle(200);
        $(this).find('div.nav-x-6').stop().toggle(200);
    })

})();

// 推荐导航
$(function () {  
    $('.drop').click(function (event) {  
        //取消事件冒泡  
        event.stopPropagation();  
        //按钮的toggle,如果是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
        $('.drop ul').toggle();  
        return false;
    });  
    //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
    $(document).click(function(event){
            var _con = $('.drop ul');   // 设置目标区域
            if(!_con.is(event.target) && _con.has(event.target).length === 0){ 
                $('.drop ul').hide();          //消失
            }
    });
});


(function banner() {

    var clone = $('.banner-l li').first().clone(); // 克隆第一张图
    $('.banner-l').append(clone);
    var i = 0;
    var size = $('.banner-l li').size(); // 获取图片长度
    // 点击向上
    $('#banner .prev').click(function () {
        i--;
        if ( i == -1 ) {
            $('.banner-l').css({ top: -(size-1)*300 });
            i = size - 2;
        }
        $('.banner-l').stop().animate({ top: -i*300 }, 500);
        $('.banner-r li').eq(i).addClass('banneractive').siblings().removeClass('banneractive');
    })
    // 点击向下
    $('#banner .next').click(function () {
        moveR();
    });
    // 向下函数
    function moveR() {
        i++;
        if( i == size ) {
            $('.banner-l').css({ top:0 });
            i = 1;
        }
        $('.banner-l').stop().animate({ top: -i*300 }, 500);
        if( i == size-1 ) {
            $('.banner-r li').eq(0).addClass("banneractive").siblings().removeClass('banneractive');
        }else {
            $('.banner-r li').eq(i).addClass("banneractive").siblings().removeClass("banneractive");
        }
    }
    // 鼠标滑过伪类
    $('.banner-r li').click(function () {
        var index = $(this).index();
        i = index;
        $('.banner-l').stop().animate({ top:-i*300 }, 500);
        $(this).addClass('banneractive').siblings().removeClass('banneractive');
    });
    // 定时自动轮播
    var t = setInterval(function () {
        moveR();
    }, 3000);
    // 鼠标移入停止轮播
    $('#banner').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(function () {
            moveR();
        }, 3000);
    });

    // 鼠标移入显示箭头
    $(".banner").hover(function () {
        $('#banner .prev').stop().show().animate({ top: 10, opacity: 0.7 }, 400);
        $('#banner .next').stop().show().animate({ bottom: 10, opacity: 0.7 }, 400);
    },function () {
        $('#banner .prev').stop().hide().animate({ top: -10 });
        $('#banner .next').stop().hide().animate({ bottom: -10 });
    });

})();

// 优惠券
(function coupon() {

    var clone = $('.coupon-l li').first().clone(); // 克隆第一张图
    $('.coupon-l').append(clone); // 将克隆的追加到最后
    var i = 0;
    var size = $('.coupon-l li').size(); // 获取图片节点长度
    // 点击向左
    $('.coupon .prev').click(function () {
        i--;
        if(i == -1) {
            $('.coupon-l').css({ left:-(size - 1)*360 });
            i = size - 2;
        }
        $('.coupon-l').stop().animate({ left: -i*360 }, 500);
    });
    // 点击向右
    $('.coupon .next').click(function () {
        moveR();
    });
    // 向右的函数
    function moveR() {
        i++;
        if(i == size) {
            $('.coupon-l').css({ left:0 });
            i = 1;
        }
        $('.coupon-l').stop().animate({ left:-i*360 }, 500);
    }
    // 定时器自动轮播
    var t = setInterval(function () {
        moveR();
    }, 3000);
    // 鼠标移入停止轮播
    $('.coupon').hover(function () {
        clearInterval(t);
        $('.coupon .prev').stop().show().animate({ left: 10 }, 300);
        $('.coupon .next').stop().show().animate({ right: 10 }, 300);
    }, function () {
        t = setInterval(function () {
            moveR();
        }, 3000);
        $('.coupon .prev').stop().hide().animate({ left: -20 });
        $('.coupon .next').stop().hide().animate({ right: -20 });
    });

})();

// 20主图的展示
function showR(id, width) {

    var liFirst = $(id).find('li:first');
    $(id).animate({ "left": width }, 300, function() {
        var clone = liFirst.clone();
        $(id).append(clone);
        liFirst.remove();
        $(id).css('left', '0');
    });

};
// 20主图的展示
setInterval("showR('.show','-107px')", 4000);

// 排名展示 
setInterval("showR('.ranking-r','-215px')", 4100);

