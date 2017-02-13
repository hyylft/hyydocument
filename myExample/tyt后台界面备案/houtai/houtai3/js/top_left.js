$(function(){
    //自动获取左侧栏不同窗口高度
    $(".hi_sh_nav").height($(window).height()-$(".top_nav").height());
    window.onresize = function(){
        $(".hi_sh_nav").height($(window).height()-$(".top_nav").height());
    }

    // 向左收起的动画效果 
    jQuery.fn.slideLeftHide = function( speed, callback ) {  
        this.stop().animate({  
            width : "hide",  
            paddingLeft : "hide",  
            paddingRight : "hide",  
            marginLeft : "hide",  
            marginRight : "hide"  
        }, speed, callback );  
    };  
    //从左侧展开的动画效果 
    jQuery.fn.slideLeftShow = function( speed, callback ) {  
        this.stop().animate({  
            width : "show",  
            paddingLeft : "show",  
            paddingRight : "show",  
            marginLeft : "show",  
            marginRight : "show"  
        }, speed, callback );  
    }; 

    //左侧菜单的展示和隐藏
    $(".page_left,.page_right").click(function(){
        if($(".hi_sh_nav").is(":hidden")){
            $('.hi_sh_nav').slideLeftShow(500);
            $('.page_left,.page_right').stop().animate({'left': '186px'}, 500);
            $(".page_left").show(100);
            $(".page_right").hide(100);
            $('.show_tit_content').stop().animate({'margin-left': '200px'}, 500);
        }else{
            $('.hi_sh_nav').slideLeftHide(500);
            $('.page_left,.page_right').stop().animate({'left': 0}, 500);
            $(".page_left").hide(100);
            $(".page_right").show(100);
            $('.show_tit_content').stop().animate({'margin-left': 0}, 500);
        }
    });

    //顶部导航为一级菜单,点击控制各项二级菜单展开
    $(".tit_nav a").click(function(){
        var data_el = $(this).attr('data-el');
        $("#tree").find('.tree_tit').eq(data_el).trigger('click');
    });

    //左侧菜单导航切换
    var h3 = $(".tree_box").find("h3");
    var tree_one = $(".tree_box").find(".tree_one");
    var h4 = $(".tree_one").find("h4");
    var tree_two = $(".tree_one").find(".tree_two");
    //一级菜单
    h3.each(function(i){
        $(this).click(function(){
            // h3.find('em').css('background',plus);
            h3.find('em').removeClass('bottom_active').addClass('right_active')
            if($(this).siblings().is(":hidden")){
                $(this).find('em').removeClass('right_active').addClass('bottom_active');
            }else{
                $(this).find('em').removeClass('bottom_active').addClass('right_active');
            }
            tree_one.eq(i).stop().slideToggle();
            tree_one.eq(i).parents().siblings().find(".tree_one").stop().slideUp();
        })
    })
    // 二级菜单
    h4.each(function(i){
        $(this).click(function(){
            $(this).parent().siblings().find('em').removeClass('bottom_active').addClass('right_active');
            if($(this).siblings().is(":hidden")){
                $(this).find('em').removeClass('right_active').addClass('bottom_active');
            }else{
                $(this).find('em').removeClass('bottom_active').addClass('right_active');
            }
            $(this).siblings().stop().slideToggle();
            $(this).parent().siblings().find('.tree_two').stop().slideUp();
        })
    })
    // 菜单选项hover效果
    $(".tree_one a").click(function(){
        $(".tree_one a").removeClass('color_style');
        $(this).addClass('color_style');
    })
    // $(".open_icon").mouseleave(function(){
    //     $('.open_icon').parent().css('background','');
    // });
    // $(".open_icon").mouseenter(function(){
    //     // $(this).parent().css('background','#14f7f4');
    // });
    // $(".tree_box h3,.tree_box h4,.tree_two a").mouseleave(function(){
    //     $(".tree_box h3,.tree_box h4,.tree_two a").css('background','')
    // });
    // $(".tree_box h3,.tree_box h4,.tree_two a").mouseenter(function(){
    //     // $(this).css('background','#14f7f4');
    // });
})
 
