$(document).ready(function() { //固定元素可以放在任何位置
	var navH = $(".bd_right").offset().top; //+ $(".bd_right").height(); //获取最后一个元素距离浏览器顶部的距离，还要加上元素的高度
				//自身离页面顶部的高度 + 自身的高度
				//注意：单独只要一个自身离页面顶部的高度的值效果会更好点，$(".bd_right").height()可以不要
	 //alert(navH);
	 $(window).scroll(function() {
		 //获取滚动条的滑动距离
		 var scroH = $(this).scrollTop();

		 //alert(offsetTop);

		 //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		 if (scroH > navH) {

			 $(".bd_right").css({"position": "fixed","top": "0"});

		 } else if (scroH < navH) {

			 $(".bd_right").css({"position": "static"});

		 }
        if($(window).scrollTop()>200){  
            $("#goTotop").fadeIn(1500);  
        }  
        else{  
            $("#goTotop").fadeOut(1500);  
        }
	})

    $("#goTotop").click(function(){  
        $('body,html').animate({scrollTop:0},1000);  
        return false;  
    });

});