$(function(){
      
  //加载日历
  $(".date-form").calendar({
      value: ['2016-03-01']
  });
  $(".date-to").calendar({
      value: ['2016-03-17']
  });
  
  //缴费类别
  $(".type-cost").picker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">缴费类别</h1>\
    </header>',
    cols: [
      {
        textAlign: 'center',
        values: ['门诊缴费', '网上缴费']
      }
    ]
  });
  //收缩二级内容
  $(".expmenu li > div.header").click(function(){
                           
    var arrow = $(this).find("span.arrow");
  
    if(arrow.hasClass("up")){
      arrow.removeClass("up");
      arrow.addClass("down");
    }else if(arrow.hasClass("down")){
      arrow.removeClass("down");
      arrow.addClass("up");
    }
  
    $(this).parent().find("ul.menu").toggle();
    $(this).parents(".expmenu li").siblings('.expmenu li').find(".menu").hide();
    
    $(this).parent("li").siblings().find("span.arrow").removeClass("down").addClass("up");
  });

});