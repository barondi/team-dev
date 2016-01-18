$(function () {
    var flag = true;
    $('.header-menu').on('click', function () {
        var oUl = $('.slide-box').children('ul');
        if(!oUl.is(':animated')){
            oUl.animate({left:flag?550:0},400);
            flag  = !flag //550
        }
    });
    var oLis = $('.list li');
    oLis.on('mouseenter',function () {
        var oLH =$(this).height();
        var oLW= $(this).width();
        //公式 353/236 = 10/oDH; 353*oDH = 2360
        var oDiv =$(this).children('div');
        var oDW = 0,oDH = 0,index = 0;
        var timer = setInterval(function () {
            oDW>=oLW?(oDW=oLW,index++):oDW+=10;
            oDH>=oLH?oDH=oLH: oDH+=2360/353;
            if(index)clearInterval(timer);
            oDiv.css({width:oDW,height:oDH,'margin-left':-oDW/2,'margin-top':-oDH/2});
        },10);
        $(this).attr('timer',timer);
    });
    oLis.on('mouseleave',function () {
    var oDiv =$(this).children('div');
    var oDH =oDiv.height();
    var oDW= oDiv.width();
    var index = 0;
    var t = $(this).attr('timer');
    clearInterval(t);
    var timer = setInterval(function () {
        oDW<=0?(oDW=0,index++):oDW-=10;
        oDH<=0?oDH=0:oDH-=2360/353;
        if(index)clearInterval(timer);
        oDiv.css({width:oDW,height:oDH,'margin-left':-oDW/2,'margin-top':-oDH/2});
    },10);
    });
})