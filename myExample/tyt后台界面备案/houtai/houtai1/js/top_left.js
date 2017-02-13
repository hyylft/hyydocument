$(function() {
    //自动获取左侧栏不同窗口高度
    $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    window.onresize = function() {
        $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    }

    //左侧菜单的展示和隐藏时的样式改变
    $(".page_left").click(function() {
        $('.tree').find('.tree_one').hide();
        $(".tree_box").find("h3").find('em').removeClass('bottom_active').addClass('right_active')
        $('.tree').find('.tree_one h4 a').css('padding-left', '16px');
        if ($(this).hasClass('closeColor')) {
            $(".tree").css('overflow-y', 'auto');
            $(".tree").find("h4").css('width', '196px');
            $(".tree").find(".tree_two li").css('width', '196px');
            $(".tree").find(".right_active,.bottom_active").show(500);
            $('.tree').find('.tree_one').removeClass('left_nav_bar');
            $('.logo_nav').removeClass('mixleft');
            $('.tree_tit').stop().animate({
                'width': '200px'
            })
            $(this).removeClass('closeColor');
        } else {
            $(".tree").css('overflow-y', 'inherit');
            $('.tree').find('.tree_one h4 a').css('padding-left', '2px');
            $(".tree").find("h4").css('width', '176px');
            $(".tree").find(".tree_two li").css('width', '176px');
            $(".tree").find(".right_active,.bottom_active").hide(500);
            $('.tree').find('.tree_one').addClass('left_nav_bar');
            $('.logo_nav').addClass('mixleft')
            $('.tree_tit').stop().animate({
                'width': '40px'
            })
            $(this).addClass('closeColor')
        }
    });

    // 菜单选项hover效果
    $(".tree_one h4 ,.tree_two li").click(function() {
            if ($(this).find('em').hasClass('right_active') || $(this).find('em').hasClass('bottom_active')) {
                return false;
            }
            $(".tree_one h4 ,.tree_two li").find('a').removeClass('color_style');
            $(this).find('a').addClass('color_style');
        })
        //对是否收起做判断   并且调整相应的样式
    $(".tree_box").mouseenter(function() {
        if ($(".page_left").hasClass('closeColor')) {
            listHeight($(this).find(".tree_one"), $(this).find(".tree_tit"));
            $(this).find(".tree_tit").addClass('close_color_style').siblings('.tree_one').show();
        }
        pushInit($(this).find(".tree_one h4"));
        pushInit($(this).find(".tree_two li"));
        border_fx('.tree_one h4');
        border_fx('.tree_two li');
    })
    $(".tree_box").mouseleave(function() {
        if ($(".page_left").hasClass('closeColor')) {
            $(this).find(".tree_tit").removeClass('close_color_style').siblings('.tree_one').hide();
        }
        $(this).find(".tree_one .borderAll").remove();

    })

    //左侧菜单导航切换
    $(".user_lists a").mouseenter(function() {
        $(this).addClass('color_style');
    })
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
                if ($(".page_left").hasClass('closeColor')) {
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
    //边框的DOM添加
    function pushInit(_t) {
        var pushHtml = '<div class="borderAll border-left"></div><div class="borderAll border-bottom"></div><div class="borderAll border-top"></div><div class="borderAll border-right"></div>';
        _t.append(pushHtml);
    }
    //边框的的动画效果
    function border_fx(obj) {
        var lanren_width = $(obj).width() + 2;
        var lanren_height = $(obj).height() + 2;
        $(".tree_box").find(obj).each(function() {
            //去除有子选项的(有右箭头)的高亮效果
            $(this).hover(function() {
                if ($(this).find('em').hasClass('right_active') || $(this).find('em').hasClass('bottom_active')) {
                    return false;
                }
                $(this).find('.border-top').stop().animate({
                    width: lanren_width + 'px'
                }, 200);
                $(this).find('.border-right').stop(true).delay(200).animate({
                    height: lanren_height + 'px'
                }, 200);
                $(this).find('.border-bottom').stop(true).delay(400).animate({
                    width: lanren_width + 'px'
                }, 200);
                $(this).find('.border-left').stop(true).delay(600).animate({
                    height: lanren_height + 'px'
                }, 200);

            }, function() {
                $(this).find('.border-top').stop(true).animate({
                    width: '0'
                }, 200);
                $(this).find('.border-right').stop(true).delay(200).animate({
                    height: '0'
                }, 200);
                $(this).find('.border-bottom').stop(true).delay(400).animate({
                    width: '0'
                }, 200);
                $(this).find('.border-left').stop(true).delay(600).animate({
                    height: '0'
                }, 200);


            });
        });
    }

})