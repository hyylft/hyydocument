

function tyt_qd(levelObj){
	document.getElementById(levelObj.tyt_oBDiv).style.display="none";

}

function ThreeLevelData(tyt_type2,position2,oBDiv2,oneLevel ,twoLevel ,threeLevel ,iframeNbr2){
				this.status=false;
				this.tyt_position = position2;
				this.tyt_oBDiv = oBDiv2;
				this.tyt_oneLevel =oneLevel ;
				this.tyt_twoLevel = twoLevel;
				this.tyt_threeLevel = threeLevel;
				this.tyt_type=tyt_type2;
				this.iframeNbr=iframeNbr2;
				this.openLevel=function(evt){
					//hyy
					// if(this.status){
						// document.getElementById(this.tyt_oBDiv).style.display="none";
						// this.status=false;
					// }else{
						//hyy
						tyt_open_Level(this,document.getElementById(this.tyt_oneLevel).value,document.getElementById(this.tyt_twoLevel).value,document.getElementById(this.tyt_threeLevel).value);
						document.getElementById(this.tyt_oBDiv).style.display="block";
						this.status=true;	
						/**
						$("#"+this.tyt_oBDiv).bind("click", function(event) { event.stopPropagation(); });

						$(document).bind("click", this,function(event) {
							//	alert(event.data.tyt_oBDiv);
								$("#"+event.data.tyt_oBDiv).hide();
								event.data.status=false;
								$(document).unbind("click");							
								});
						**/
					//hyy
					// }
					//hyy
					   /* evt = evt || window.event;
						evt.stopPropagation?evt.stopPropagation():evt.cancelBubble=true;*/
				}
				
				
				this.setLevelData=function (levelObj,oneLevel,oneLevelId,twoLevel,twoLevelId,threeLeve1,threeLevelId){
								if("类型"!=oneLevel){
									document.getElementById(levelObj.tyt_position).value=oneLevel;

									document.getElementById(levelObj.tyt_oneLevel).value=oneLevelId;
									document.getElementById(levelObj.tyt_twoLevel).value='';
									document.getElementById(levelObj.tyt_threeLevel).value='';		
								}
								if("设备"!=twoLevel){
									document.getElementById(levelObj.tyt_position).value=document.getElementById(levelObj.tyt_position).value+" "+twoLevel;
									document.getElementById(levelObj.tyt_twoLevel).value=twoLevelId;
									document.getElementById(levelObj.tyt_threeLevel).value='';
								}
								else{
									if(this.tyt_type=='1'){
										document.getElementById(levelObj.tyt_position).value="";

										document.getElementById(levelObj.tyt_oneLevel).value="";
										document.getElementById(levelObj.tyt_twoLevel).value='';
										document.getElementById(levelObj.tyt_threeLevel).value='';	
									}
								}
								if("规格"!=threeLeve1&&threeLevelId!=""){
									if(this.tyt_type=='0'){
										if(threeLeve1!=twoLevel){
											document.getElementById(levelObj.tyt_position).value=document.getElementById(levelObj.tyt_position).value+" "+threeLeve1;
									
											document.getElementById(levelObj.tyt_threeLevel).value=threeLevelId;	
										}else{
											document.getElementById(levelObj.tyt_threeLevel).value="";
										}
									}else{
											document.getElementById(levelObj.tyt_position).value=document.getElementById(levelObj.tyt_position).value+" "+threeLeve1;
									
											document.getElementById(levelObj.tyt_threeLevel).value=threeLevelId;	
									}
								}else{
										document.getElementById(levelObj.tyt_threeLevel).value="";
								}
								
								//document.getElementById(levelObj.tyt_position).value=(document.getElementById(tyt_sheng).value+" "+document.getElementById(tyt_shi).value+" "+document.getElementById(tyt_xian).value);


								if (document.getElementById(levelObj.tyt_oneLevel).value==""&&document.getElementById(levelObj.tyt_twoLevel).value==''&&document.getElementById(levelObj.tyt_threeLevel).value=='') {
									document.getElementById(levelObj.tyt_position).value="";
								}
								document.getElementById(levelObj.tyt_oBDiv).style.display="none";
								this.status=false;
							};
}

function _tyt_close(levelObj){
document.getElementById(levelObj.tyt_oBDiv).style.display="none";
levelObj.status=false;
}


function setLevelData(levelObj,oneLevel,oneLevelId,twoLevel,twoLevelId,threeLeve1,threeLevelId){
	levelObj.setLevelData(levelObj,oneLevel,oneLevelId,twoLevel,twoLevelId,threeLeve1,threeLevelId);
	
}
function tyt_open_Level(levelObj,oneLevelId,twoLevelId,threeLevelId){
	//window.tyt_area_iframe.setAreaValues(sheng1,shi1,xian1);

	$("#"+levelObj.iframeNbr)[0].contentWindow.setLevelData(levelObj,oneLevelId,twoLevelId,threeLevelId);
}

// 发布或是提交时清空控件中的高亮   //重置初始化
function shebei_reset(){
	
	$(".tyt_shebei iframe").each(function(){
		//字符串转换成对象
		eval($(this).attr('name')).window.tyt_qk();
	})
}