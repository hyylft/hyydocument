;(function() {
	//定义csstype的构造函数
	var csstype = function(ele, opt) {
		this.$element = ele, 
		this.defaults = {
			'width':350, 
			'color':'#000', 
			'fontSize':'14px',
			'tit':'温馨提示',
			'content':'',
			'falsebtn':'取消',
			'truebtn':'确定',
			'btntype':'twobtn'
		}, 
		this.options = $.extend({}, this.defaults, opt)
	}
	//定义csstype的方法
	csstype.prototype = {
		typeName:function(options) {
			//在其动态添加代码
			this._html = '<h3>'+this.options.tit+'</h3>\
						<a class="BtnClose"><img src="http://www.teyuntong.com/gw/public_images/closeBtn.png" width="47" height="46" alt="关闭"></a>\
						<p>'+this.options.content+'</p>\
						<div class="btnBox cf">\
							<button class="btnFalse fl">'+this.options.falsebtn+'</button>\
							<button class="btnTure fr" data-true="258">'+this.options.truebtn+'</button>\
						</div>';

			$('.innerLook').append(this._html);
			$(document).on("click",".BtnClose,.btnFalse",function(){
				$(".outLook,.innerLook").hide();
			})
			$(document).on("click",".btnTure",function(){
				$(".outLook,.innerLook").hide();
				console.log($(this).attr('data-true'))
			})
			if (this.options.btntype=='truebtn') {
				$(".btnFalse").hide();
				$(".btnTure").css({'margin':'0 auto','display':'block'});
			}else if (this.options.btntype=='falsebtn') {
				$(".btnTure").hide();
				$(".btnFalse").css({'margin':'0 auto','display':'block'});
			}
			return this.$element.css({
				'width':this.options.width, 
				'margin-left':-this.options.width/2, 
				'margin-top':-($('.innerLook').height()/2), 
				'color':this.options.color, 
				'fontSize':this.options.fontSize, 
				'tit':this.options.tit, 
				'content':this.options.content, 
				'falsebtn':this.options.falsebtn, 
				'truebtn':this.options.truebtn, 
				'btntype':this.options.btntype
			});


		}
	}
	
	//在插件中使用csstype对象
	$.fn.outLook = function(options,callback) {
		if(callback){
		    callback();
		}
		//创建csstype的实体
		var varType = new csstype(this, options);
		//调用其方法
		return varType.typeName();

	}


})(jQuery)