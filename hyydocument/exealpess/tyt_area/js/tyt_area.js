var tyt_position ="";
var tyt_oBDiv ="";
var tyt_sheng ="";
var tyt_shi ="";
var tyt_xian="" ;
var tyt_type="0" ;//0是不带市
var iframeNbr="tyt_area_iframe";
var tyt_need='3';
function tyt_qd(){
	document.getElementById(tyt_oBDiv).style.display="none";

}


function tyt_open_area(tyt_type2,position2,oBDiv2,sheng2,shi2,xian2,iframeNbr2,tyt_need2){
		if(tyt_oBDiv!=''){
			document.getElementById(tyt_oBDiv).style.display="none";
		}
 tyt_position = position2;
   tyt_oBDiv = oBDiv2;
    tyt_sheng =sheng2;
     tyt_shi = shi2;
	  tyt_xian = xian2;
		tyt_type=tyt_type2;
		iframeNbr=iframeNbr2;
		tyt_need=tyt_need2;
		// setAreaValues2(document.getElementById(tyt_sheng).value,document.getElementById(tyt_shi).value,document.getElementById(tyt_xian).value);
		document.getElementById(tyt_oBDiv).style.display="block";
}

function tyt_close(){
document.getElementById(tyt_oBDiv).style.display="none";
}


function tyt_fuzhi(sheng1,shi1,xian1){
	if("省份"!=sheng1){
		document.getElementById(tyt_sheng).value=sheng1;
		document.getElementById(tyt_shi).value='';
		document.getElementById(tyt_xian).value='';		
	}
	if("城市"!=shi1){
		document.getElementById(tyt_shi).value=shi1;
		document.getElementById(tyt_xian).value='';
	}
	else{
		if(tyt_type=='1'){
			document.getElementById(tyt_sheng).value='';
			document.getElementById(tyt_shi).value='';
			document.getElementById(tyt_xian).value='';
		}
	}
	if("县区"!=xian1){
		if(tyt_type=='0'){
			if(xian1!=shi1){
				document.getElementById(tyt_xian).value=xian1;
			}
		}else{
				document.getElementById(tyt_xian).value=xian1;
		}

	}

			//省市县的简化显示
		var sheng = document.getElementById(tyt_sheng).value,
			shi = document.getElementById(tyt_shi).value,
			xian = document.getElementById(tyt_xian).value,
			position = document.getElementById(tyt_position).value,
			//去除省市县在拼接是留下的空格
			k_sheng = sheng.replace(/(^\s*)|(\s*$)/g,''),
			k_shi = shi.replace(/(^\s*)|(\s*$)/g,''),
			k_xian = xian.replace(/(^\s*)|(\s*$)/g,'');
		if(shi){
			document.getElementById(tyt_position).value=document.getElementById(tyt_sheng).value+" "+document.getElementById(tyt_shi).value;
		}
		//tyt_need值:   3:(选择三级,按照所选值赋值,选择两级,第三级默认赋值)   2:(选择三级,按照所选值赋值,选择两级,赋值前两级,第三级无值)
		if(tyt_need=='3'&&xian&&shi!=xian){
				document.getElementById(tyt_position).value=document.getElementById(tyt_sheng).value+" "+document.getElementById(tyt_shi).value+" "+document.getElementById(tyt_xian).value;
		//选择前两级  赋值前两级   第三级无值  显示两级
		}else if(tyt_need=='2'&&xian&&shi==xian){
			document.getElementById(tyt_position).value=document.getElementById(tyt_sheng).value+" "+document.getElementById(tyt_shi).value;
			document.getElementById(tyt_xian).value='';
		//选择三级  按照所选值赋值
		}else if(tyt_need=='2'&&xian&&shi!=xian){
			document.getElementById(tyt_position).value=document.getElementById(tyt_sheng).value+" "+document.getElementById(tyt_shi).value+" "+document.getElementById(tyt_xian).value;
		}
		// 省市相同名,显示省名  如: 澳门 澳门  --->澳门
		if(k_sheng == k_shi){
			document.getElementById(tyt_position).value=document.getElementById(tyt_sheng).value;
		}
		//省市有相同字段时,显示市名   如: 北京  北京市  --->北京市
		if(k_sheng==k_shi.substring(0,2)){
			document.getElementById(tyt_position).value=document.getElementById(tyt_shi).value;
		}

		// 省市县共同存在 且省市有相同字段时  显示 市名+县名 如: 北京 北京市 海淀区 ---> 北京市  海淀区
		if(k_sheng==k_shi.substring(0,2)&&xian&&shi!=xian){
			document.getElementById(tyt_position).value=(document.getElementById(tyt_shi).value+" "+document.getElementById(tyt_xian).value);

		}



		//假定为空值,去除空格空字符
	if(document.getElementById(tyt_sheng).value==''&&document.getElementById(tyt_shi).value==''&&document.getElementById(tyt_xian).value=='') {
		document.getElementById(tyt_position).value='';
	}
	if(document.getElementById(tyt_position).value==''){

	}

	document.getElementById(tyt_position).style.color = '#333';

	document.getElementById(tyt_oBDiv).style.display="none";
	
	n=false;
	
	if ((typeof _execTytFun) == "function") {
		_execTytFun();
	}
	if ((typeof tyt_main) == "function") {
	  tyt_main();
	}
}
function setAreaValues2(sheng1,shi1,xian1){
	//window.tyt_area_iframe.setAreaValues(sheng1,shi1,xian1);

	$("#"+iframeNbr)[0].contentWindow.setAreaValues(sheng1,shi1,xian1);
}
// 发布或是提交时清空控件中的高亮   //重置初始化
function diqu_reset(){
	
	$(".areaDiv iframe").each(function(){
		//字符串转换成对象
		eval($(this).attr('name')).window.tyt_qk();
	})
	// 清空所有的input
	$('.publishMessage input').val('')
}
