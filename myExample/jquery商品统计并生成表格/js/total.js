	//点击"-"或者"+" 修改件数
	$(document).on("click", ".less,.more", function(event) {
		var _this = $(this).parents('.navBox');
		var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));
		//点击"+" 修改件数的判断
		if ($(this).hasClass('more')) {
			//点击"+" 修改件数的判断
			if (_this.find(".onlyPay>input").val() == '') {
				alert('请先选择单价');
				return false;
			} else {
				newNum = newNum + 1;
				_this.find(".toTal>input").val(newNum);
				_this.find(".less,.more").removeClass('noBuy');
			}
		} else {
			if (_this.find(".onlyPay>input").val() == '') {
				if (newNum == 1) {
					return false;
				}
				alert('请先选择单价')
			}
			if (newNum > 1) {
				$(this).removeClass('noBuy');
				newNum = newNum - 1;
				_this.find(".toTal>input").val(newNum);
			}
			if (newNum == 1) {
				$(this).addClass('noBuy');
			}
			if (newNum < 1) {
				alert('请选择正确的件数')
			}

		}
		_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val() * _this.find(".toTal>input").val()))
		allTal();
	});
	// 单价的修改   输入数字修改件数
	$(document).on("focus", ".onlyPay>input,.toTal>input", function(event) {
			var _this = $(this).parents('.navBox');
			var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));

			$('body').keyup(function() {
				// 发现单价格式错误
				if (isNaN(_this.find(".onlyPay>input").val())) {
					alert('请输入正确的数字');
					_this.find(".onlyPay>input").val('');
					_this.find(".toTal>input").val('1');
					_this.find(".morePay").html('0')
					return false;
				}
				// 发现件数格式错误
				if (isNaN(_this.find(".toTal>input").val())) {
					alert('请输入正确的件数');
					_this.find(".onlyPay>input").val('');
					_this.find(".toTal>input").val('1');
					_this.find(".morePay").html('');
					return false;
				}
				//件数不能是小数(键盘操作的控制)
				validate(_this.find(".toTal>input"));
				//单价必须是小数后两位
				var val = parseFloat(_this.find(".onlyPay>input").val());
				if (val.toString().split(".")[1] != undefined) {
					if (val.toString().split(".")[1].length > 2) {
						var re = /([0-9]+\.[0-9]{2})[0-9]*/;
						_this.find(".onlyPay>input").val(_this.find(".onlyPay>input").val().replace(re, "$1"))
					}
				}

				_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val() * _this.find(".toTal>input").val()))
				allTal();
			})
		})
		// 控制件数不小于'1'   价格不小于'0'
	$(document).on("blur", ".onlyPay>input,.toTal>input", function(event) {
		var _this = $(this).parents('.navBox');
		//单价blur时的数据判断
		if ($(this).parent('div').hasClass('onlyPay')) {
			if (parseFloat(_this.find(".onlyPay>input").val()) == '0') {
				_this.find(".onlyPay").find("input").val('');
			} else {
				_this.find(".onlyPay>input").val(_this.find(".onlyPay>input").val())
			}
		} else {
			//件数blur时的数据判断
			var newNum = Math.abs(
				parseInt($(this).parents('.navBox').find(".toTal>input").val()));
			if (newNum < 1) {
				$(this).parents('.navBox').find(".toTal>input").val('1')
			} else {
				_this.find(".toTal>input").val(parseFloat(_this.find(".toTal>input").val()))
			}
		}
		allTal();
	});
	//动态添加单项
	$(document).on("click", ".appendLi", function(event) {
			var _this = $(this).parents('.contentBox');
			var newNum = Math.abs(parseInt(_this.find(".toTal>input").val()));
			var _html = '<li class="navBox cf">\
					    	<div class="namePay fl">\
					    		<input class="nameType" placeholder="请输入物品名称" type="text">\
					    	</div>\
					    	<div class="onlyPay fl">\
					    		<label>单价:&nbsp;&nbsp;</label><input class="onlyType" data-ind="1" placeholder="请先选择单价" type="text">\
					    	</div>\
					    	<div class="fl">\
					    		<label class="fl">件数:&nbsp;&nbsp;</label>\
					    		<div class="toTal fl">\
					    			<a class="less fl" href="javascript:;">-</a>\
					    			<input class="numType" value="1" minnum="1" type="text">\
					    			<a class="more fr" href="javascript:;">+</a>\
					    		</div>\
					    	</div>\
					    	<div class="morePaydiv fl">单品总价:&nbsp;&nbsp;<span   class="morePay">0</span></div>\
					    	<div class="remove fl">删除本条</div>\
					    	<input class="addpage fl" placeholder="添加备注" >\
					    </li>';
			_this.before(_html);
			_this.find(".morePay").html(Math.abs(_this.find(".onlyPay>input").val() * _this.find(".toTal>input").val()))
		})
		//删除本条数据
	$(document).on("click", ".remove", function(event) {
			if ($(".navBox").size() > 2) {
				$(this).parents('.navBox').remove();
				allTal();
			} else {
				alert("已经最后一条了")
				return false;
			}
		})
		//值未空的边框变红提示
	$(document).on('blur', '.navBox input', function() {
		borderError($(this));
	});
	//自动生成表格
	var tab1 = '<table class="paymentTable" width="900"><tbody>\
				<tr><th width="200">物品名称</th><th>单价(元)</th><th>件数(件)</th><th>单品总价(元)</th><th width="300">备注</th></tr>',
		tab3 = '</tbody><tfoot><td>合计</td><td colspan="2"></td><td class="sum"></td><td></td></tfoot></table>';
	$(".makeTab").on('click', function() {
			$(".paymentTable").remove();
			var arr = new Array();
			$(".navBox").each(function(index, el) {
				var arrx = [];
				$(this).find("input").each(function(index, el) {
					var _this = $(this).parents('.navBox').find('input');
					arrx[index] = _this.eq(index).val();
					borderError($(this));
				});
				$(this).find(".morePay").each(function(index, el) {
					arrx[4] = $(this).html();
				});
				arr.push(arrx)
			});
			console.log(arr)
			var st = '';
			$.each(arr, function(i, n) {
				st += '<tr><td>' + arr[i][0] + '</td><td>' + arr[i][1] + '</td><td>' + arr[i][2] + '</td><td>' + arr[i][4] + '</td><td>' + arr[i][3] + '</td></tr>';
			});
			$(".divUl").after(tab1 + st + tab3);
			//求和
			$('.sum').html($(".allTal").html());
		})
		// 红色边框提示
	function borderError(thisobj) {
		if (thisobj.hasClass('borderError')) {
			thisobj.removeClass('borderError');
		}
		if (thisobj.val() == '') {
			thisobj.addClass('borderError');
		}
	}
	//统计全部的'单品总价'
	function allTal() {
		var sum = 0;
		$.each($(".morePay"), function() {
			sum += parseFloat($(this).html());
		})

		$(".allTal").html(Math.abs(sum).toFixed(2));
	}

	function validate(obj) {
		var reg = new RegExp("^[0-9]*$");
		if (!reg.test(obj.val())) {
			alert("请输正整数字!");
			obj.val(obj.val().substr(0, obj.val().length - 1))
				// obj.val('1');
		}
	}
	//只能输入数字
	function keyPress() {
		var keyCode = event.keyCode;
		if ((keyCode >= 48 && keyCode <= 57)) {
			event.returnValue = true;
		} else {
			event.returnValue = false;
		}
	}