$(function() {
    //自动获取左侧栏不同窗口高度
    $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    window.onresize = function() {
        $(".hi_sh_nav").height($(window).height() - $(".top_nav").height());
    }

    // 菜单选项hover效果
    $(".tree_one h4 ,.tree_two li").click(function() {
            //移交给排除有子选项的
            if ($(this).find('em').hasClass('right_active') || $(this).find('em').hasClass('bottom_active')) {
                return false;
            }
            $(".tree_one h4 ,.tree_two li").find('a').removeClass('color_style');
            $(this).find('a').addClass('color_style');
        })
        //对是否收起做判断   并且调整相应的样式
    $(".tree_box").mouseenter(function(event) {
        listHeight($(this).find(".tree_one"), $(this).find(".tree_tit"));
        $(this).find(".tree_tit").addClass('color_style').siblings('.tree_one').show();
        pushInit($(this).find(".tree_one h4"));
        pushInit($(this).find(".tree_two li"));
        border_fx('.tree_one h4');
        border_fx('.tree_two li');
    })
    $(".tree_box").mouseleave(function() {
            $(this).find(".tree_tit").removeClass('color_style').siblings('.tree_one').hide();
            $(this).find(".tree_one .borderAll").remove();

        })
        //左侧和顶部的导航切换
    $(".page_left").click(function() {
            if ($(this).hasClass('activeClass')) {
                $("#bor .tree_one").siblings(".tree_one").css('top', '50px');
                $(this).parents('.bor').animate({
                    top: -310
                }, 500, function() {
                    $(this).attr('id', 'bor');
                    $(".top_nav_box").append($('.bor'));
                    $(this).animate({
                        left: -850
                    }, 100, function() {
                        $(this).animate({
                            top: 0
                        }, 100, function() {
                            $(this).animate({
                                left: 40
                            }, 500)
                        });
                    })
                });
                $(this).removeClass("activeClass");
            } else {
                $(this).parents('.bor').animate({
                    left: -850
                }, 500, function() {
                    $(this).attr('id', '');
                    $(".tree").append($('.bor'));
                    $(this).animate({
                        top: -360
                    }, 100, function() {
                        $(this).animate({
                            left: 0
                        }, 100, function() {
                            $(this).animate({
                                top: 0
                            }, 500)
                        });
                    })
                });
                $(this).addClass("activeClass");
            }
        })
        //标题图标动画切换
    $(".tree_tit").mouseenter(function(event) {
        if (!$(".page_left").hasClass("activeClass")) {
            $(this).siblings(".tree_one").css('top', '50px');
        } else {
            $(this).siblings(".tree_one").css('top', '0');
        }
        $(this).find('i').stop(true).animate({
            top: 50
        }, 200)

        $(this).find('span').stop(true).animate({
            top: 0
        }, 200);
    });
    $(" .tree").find(".tree_tit").mouseleave(function(event) {
        $(this).find('i').stop(true).animate({
            top: 0
        }, 200);

        $(this).find('span').stop(true).animate({
            top: -50,

        }, 200)
    });
    // 导航切换按钮hide/show
    $(".bor").mouseenter(function(event) {
        $(this).find(".page_left").fadeIn(200);
    });
    $(".bor").mouseleave(function(event) {
        $(this).find(".page_left").fadeOut(200);
    });
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

    // 二级菜单
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

    //判断高度 避免二级列表显示不全
    function listHeight(_this, _thistop) {
        var thisH_t_b = $(document).height() - _thistop.offset().top,
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
                }, 100);
                $(this).find('.border-bottom').stop(true).delay(300).animate({
                    width: lanren_width + 'px'
                }, 200);
                $(this).find('.border-left').stop(true).delay(500).animate({
                    height: lanren_height + 'px'
                }, 100);

            }, function() {
                $(this).find('.border-top').stop(true).animate({
                    width: '0'
                }, 200);
                $(this).find('.border-right').stop(true).delay(200).animate({
                    height: '0'
                }, 100);
                $(this).find('.border-bottom').stop(true).delay(300).animate({
                    width: '0'
                }, 200);
                $(this).find('.border-left').stop(true).delay(500).animate({
                    height: '0'
                }, 100);


            });
        });
    }

})