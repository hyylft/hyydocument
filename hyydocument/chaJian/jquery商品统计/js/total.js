	//点击"-"或者"+" 修改件数
	$(document).on("click",".less,.more",function(event) {
		var _this = $(this).parents('.navBox');
		var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));
		//点击"+" 修改件数的判断
		if($(this).hasClass('more')){
			//点击"+" 修改件数的判断
			if(_this.find(".onlyPay>input").val()==''){
				alert('请先选择单价');
				return false;
			}else{
				newNum = newNum + 1;
				_this.find(".toTal>input").val(newNum);
				_this.find(".less,.more").removeClass('noBuy');
			}
		}else {
			if(_this.find(".onlyPay>input").val()==''){
				if( newNum == 1 ) {
					return false;
				}
				alert('请先选择单价')
			}
			if(newNum>1){
				$(this).removeClass('noBuy');
				newNum = newNum - 1;
				_this.find(".toTal>input").val(newNum);
			}
			if( newNum == 1 ) {
				$(this).addClass('noBuy');
			}
			if( newNum < 1 ) {
				alert('请选择正确的件数')
			}
			
		}
		_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val()*_this.find(".toTal>input").val()))
		allTal();
	});
	// 单价的修改   输入数字修改件数
	$(document).on("focus",".onlyPay>input,.toTal>input",function(event) {
		var _this = $(this).parents('.navBox');
		var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));

		$('body').keyup(function(){
			// 发现单价格式错误
			if(isNaN(_this.find(".onlyPay>input").val())) {
				alert('请输入正确的数字');
				_this.find(".onlyPay>input").val('');
				_this.find(".toTal>input").val('1');
				_this.find(".morePay").html('0')
				return false;
			}
			// 发现件数格式错误
			if(isNaN(_this.find(".toTal>input").val())) {
				alert('请输入正确的件数');
				_this.find(".onlyPay>input").val('');
				_this.find(".toTal>input").val('1');
				_this.find(".morePay").html('')
				return false;
			}
		_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val()*_this.find(".toTal>input").val()))
			allTal();
		})
	})
	// 控制件数不小于'1'
	$(document).on("blur",".toTal>input",function(event) {
		var newNum = Math.abs(parseInt($(this).parents('.navBox').find(".toTal>input").val()));
		if( newNum < 1 ){
			$(this).parents('.navBox').find(".toTal>input").val('1')
		}
	})
	//动态添加单项
	$(document).on("click",".appendLi",function(event) {
		var _this = $(this).parents('.navBox');
		var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));
		var _html = '<li class="navBox cf">\
	    	<div class="onlyPay fl"><label>单价:&nbsp;&nbsp;</label><input placeholder="请先选择单价" type="text"></div>\
	    	<div class="fl">\
	    		<label class="fl">件数:&nbsp;&nbsp;</label>\
	    		<div class="toTal fl"><a class="less fl" onclick="less();" href="javascript:;">-</a><input value="1" minnum="1" type="text"><a class="more fr" href="javascript:;">+</a></div>\
	    	</div>\
	    	<div class="fl">单品总价:&nbsp;&nbsp;<span class="morePay">0</span></div>\
	    	<div class="remove fl">删除本条</div>\
	    </li>';
		$(this).parents('.navBox').before(_html);
		_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val()*_this.find(".toTal>input").val()))
	})
	// 避免值未负
	$(document).on("blur","input",function(event) {
		$(this).val(Math.abs($(this).val()))
	})
	//删除本条数据
	$(document).on("click",".remove",function(event) {
		if($(".navBox").size() > 2){
			$(this).parents('.navBox').remove();
			allTal();
		}else {
			alert("已经最后一条了")
			return false;
		}
	})
	// 统计全部的'单品总价'
	function allTal(){
		var sum = 0;
		$.each($(".morePay"),function(){
			sum += parseInt($(this).html());
		})

		$(".allTal").html(Math.abs(sum));
	}
