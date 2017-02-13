$(function() {
    //自动获取左侧栏不同窗口高度
    $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    window.onresize = function() {
        $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    }

    //头像+姓名下面的修改密码控制
    $(".userInfo").mouseenter(function() {
        $(".user_lists").show();
    });
    $(".user_lists,.userInfo").mouseleave(function() {
        $(".user_lists").hide();

    });

    //点击的标记
    $(".tree_box h4 a").click(function() {
        $(".tree_box h4 a").removeClass('clickActive');
        $(this).addClass('clickActive');
    })

    //左侧菜单的展示和隐藏时的样式改变
    $(".page_left_click").click(function() {
        $('.tree').find('.tree_one').hide();
        $(".tree_box").find("h3").find('em').removeClass('bottom_active').addClass('right_active')
        if ($(this).hasClass('closeColor')) {
            $(".tree_tit").find('a').find('.icon').css('margin', '0 8px 0 30px');
            $(".tree").find(".right_active,.bottom_active").show(500);
            $('.tree').find('.tree_one').removeClass('left_nav_bar');
            $('.logo_nav').removeClass('mixleft');
            $(this).find('i').removeClass('onImg').css('right', '24px');
            $('.page_left').stop().animate({
                'left': '0'
            })
            $('.tree_tit').stop().animate({
                'width': '216px'
            })
            $(".tree").css({
                'overflow-x': 'hidden',
                'width': '216px'
            });
            $(".tree_page_nav").attr('id', '');
            $(this).removeClass('closeColor');
        } else {
            $(".tree_tit").find('a').find('.icon').css('margin', '0 20px 0 12px');
            $(".tree").find(".right_active,.bottom_active").hide(500);
            $('.tree').find('.tree_one').addClass('left_nav_bar');
            $('.logo_nav').addClass('mixleft');
            $(this).find('i').addClass('onImg').css('right', '14px');
            $('.page_left').stop().animate({
                'left': '-166px'
            });
            $('.tree_tit').stop().animate({
                'width': '50px'
            });
            $(".tree").css({
                'overflow': 'visible'
            });
            $('.tree').stop().animate({
                'width': '50px'
            });
            $(".tree_page_nav").attr('id', 'tree_page_nav');
            $(this).addClass('closeColor');
        }
    });

    // 菜单选项hover效果
    $(".tree_one h4,.tree_two li").click(function() {
            if ($(this).find('em').hasClass('right_active') || $(this).find('em').hasClass('bottom_active')) {
                return false;
            }
            $(".tree_one h4 ,.tree_two li").find('a').removeClass('color_style');
            $(this).find('a').addClass('color_style');
        })
        //对是否收起做判断   并且调整相应的样式
    $(".tree_box").mouseenter(function() {
        if ($(".page_left_click").hasClass('closeColor')) {
            listHeight($(this).find(".tree_one"), $(this).find(".tree_tit"));
            $(this).find(".tree_tit").addClass('close_color_style').siblings('.tree_one').show();
        }
    });
    $(".tree_box").mouseleave(function() {
        if ($(".page_left_click").hasClass('closeColor')) {
            $(this).find(".tree_tit").removeClass('close_color_style').siblings('.tree_one').hide();
        }
        $(this).find(".tree_one .borderAll").remove();

    })

    //做左右滚动条层级的兼容
    $(".tree_page_nav h3,.tree_page_nav h4,.page_left").mouseenter(function() {
        if ($(".page_left_click").hasClass('closeColor')) {
            $(".hi_sh_nav").css('z-index', '20');
            $(".show_tit_content").css('z-index', '10');
        }
    });
    $(".tree_page_nav h3,.tree_page_nav h4,.page_left").mouseleave(function() {
        if ($(".page_left_click").hasClass('closeColor')) {
            $(".hi_sh_nav").css('z-index', '10');
            $(".show_tit_content").css('z-index', '20');
        }
    });
    $(".show_tit_content").mouseleave(function() {
        if ($(".page_left_click").hasClass('closeColor')) {
            $(".hi_sh_nav").css('z-index', '20');
            $(".show_tit_content").css('z-index', '10');
        }

    });

    //左侧菜单导航切换
    $(".user_lists a").mouseenter(function() {
        $(this).addClass('color_style');
    });
    $(".user_lists a").mouseleave(function() {
        $('.user_lists').find('a').removeClass('color_style');
    })

    //左侧菜单导航切换
    var h3 = $(".tree_box").find("h3");
    var tree_one = $(".tree_box").find(".tree_one");
    var h4 = $(".tree_one").find("h4");
    var tree_two = $(".tree_one").find(".tree_two");

    //一级菜单
    h3each();
    // 二级菜单
    h4each();

    function h3each() {
        h3.each(function(i) {
            $(this).click(function() {
                if ($(".page_left_click").hasClass('closeColor')) {
                    return false;
                }
                h3.find('em').removeClass('bottom_active').addClass('right_active')
                if ($(this).siblings().is(":hidden")) {
                    $(this).find('em').removeClass('right_active').addClass('bottom_active');
                } else {
                    $(this).find('em').removeClass('bottom_active').addClass('right_active');
                }
                tree_one.eq(i).stop().slideToggle();
                tree_one.eq(i).parents().siblings().find(".tree_one").stop().slideUp();
            })
        })
    }

    function h4each() {
        h4.each(function(i) {
            $(this).click(function() {

                $(this).parent().siblings().find('em').removeClass('bottom_active').addClass('right_active');
                if ($(this).siblings().is(":hidden")) {
                    $(this).find('em').removeClass('right_active').addClass('bottom_active');
                } else {
                    $(this).find('em').removeClass('bottom_active').addClass('right_active');
                }
                $(this).siblings().stop().slideToggle();
                $(this).parent().siblings().find('.tree_two').stop().slideUp();
            })
        })
    }
    //判断高度 避免二级列表显示不全
    function listHeight(_this, _thistop) {
        var thisH_t_b = $(window).height() - _thistop.offset().top,
            listH = _this.height();
        if (listH > thisH_t_b) {
            var contH = listH - thisH_t_b;
            _this.css('top', -contH);
        }
    }

})