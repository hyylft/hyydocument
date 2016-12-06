// JavaScript Document
  
  var oBDiv = $("#boxDiv");
  // var closeBtn = $("#closeBtn");
  var oTab = $("#tabs");	
  var aTab = $("input",oTab);
  var oDiv = $("#divs");
  var aDiv = $("div",oDiv);
  var div1 = $("#div1");
  var div2 = $("#div2");
  var div3 = $("#div3");
  var u1=$("#u1");
  var u2=$("#u2");
  var u3=$("#u3");
  var oneLevel = $("#oneLevel");	
  var oneLevelId = $("#oneLevelId");
  var twoLevel = $("#twoLevel");
  var twoLevelId = $("#twoLevelId");	
  var threeLevel = $("#threeLevel");
  var threeLevelId = $("#threeLevelId");	
  var levelObj;
	  

 //  closeBtn.click(function(){
	// // oBDiv.style.display = "none";  
	//  window.parent._tyt_close(levelObj)
	//   }
	//   );
 
	

function oneLevelInitData(){
	$.each(_tyt_sb,function(n,v){
		 var li1 = document.createElement("li");
		 li1.innerHTML = v.name;
		 li1.setAttribute("groupCode",v.groupCode);
		 li1.id=v.id;
		 u1.append(li1);
		 //u1.append("<li groupCode='"+v.groupCode+"' id='"+v.id+"'>"+ v.name+"</li>");

	});
		 div2.hide();
		 div3.hide();
	div1.append(u1);
	oneLevelInitClick();
}
function oneLevelInitClick(){
	var li1=$("li",u1);	
	for(i=0;i<li1.length;i++){ 
		 li1[i]=$(li1[i]);
         li1[i].click( function(){	
		for(i=0;i<li1.length;i++){
			li1[i].removeClass("active");
			}
			
		 this.className="active";
		 oneLevel.val(this.innerHTML);
         oneLevelId.val(this.id);
		 oneLevelId.attr("name",this.innerHTML);

		 div1.hide();
		 div2.show();
		 div3.hide();

		 twoLevel.val("设备");
		 twoLevelId.val("");
		 twoLevelId.attr("name","");

		 threeLevel.val("规格");
		 threeLevelId.val("");
		 threeLevelId.attr("name","");

		 twoLevelInitData(this.id);
		 var u3=$("#u3");
		 u3.html("");
		 
		  });
		};
		
}

function twoLevelInitData(pro){
	var u2=$("#u2");
	u2.html("");	

	$.each(_tyt_sb,function(n,value){
		if(pro==value.id){
			//value.subset;
			$.each(value.subset,function(n,v){			
				var li2 = document.createElement("li");
				li2.innerHTML = v.name;
				li2.setAttribute("groupCode",v.groupCode);
				li2.id=v.id;
				u2.append(li2);
			});
		}
	});

    div2.append(u2);
	
    twoLevelInitClick(pro);
	
	aTab[0].className = "";
	aTab[1].className = "active";
	// div2.show();

	
	aTab[1].value = "设备";
//	aTab[2].className = "active";
	aTab[2].value = "规格";
	//style.display="block";
}

function twoLevelInitClick(pro){
	var aLi2=$("li",u2);
	for(var i=0;i<aLi2.length;i++){
    aLi2[i].index=i;
    aLi2[i].onclick = function(){	
	for(i=0;i<aLi2.length;i++){
		aLi2[i].className = "";
		}
	 this.className = "active";
		twoLevel.val(this.innerHTML);
		 twoLevelId.val(this.id);
		 twoLevelId.attr("name",this.innerHTML);

		 threeLevel.val("规格");
		 threeLevelId.val("");
		 threeLevelId.attr("name","");
		 threeLevelInitData(pro,this.id);
		 div1.hide();
		 div2.hide();
		 div3.show();
		 //判断最后一级是否存在
		 if (u3.html()=='') {
		 	var _ht = '<li>暂无内容</li>';
		 	u3.append(_ht);
		 }	   
	  };
  };
}

function threeLevelInitData(pro,city){
	var u3=$("#u3");
	u3.html(""); 
	
	$.each(_tyt_sb,function(n,value){
			if(pro==value.id){
				if(value.subset&&value.subset.length>0){
				$.each(value.subset,function(n,v){		
					if(city==v.id){
					  if(v.subset&&v.subset.length>0){
						$.each(v.subset,function(n,v3){
							var li3 = document.createElement("li");
							li3.innerHTML = v3.name;
							li3.setAttribute("groupCode",v3.groupCode);
							li3.id=v3.id;
							u3.append(li3);
						});
						div3.append(u3);
						//aTab[2].className = "active";
						if(levelObj.tyt_type!='0'){
							aTab[2].className = "active";
						aTab[2].value = v.subset[0].name;
						threeLevel.val(v.subset[0].name);
						 threeLevelId.val(v.subset[0].id);
						 threeLevelId.attr("name",v.subset[0].name);
						 $("li",u3)[0].className="active";
						}
						//aTab[2].value=twoLevel.val();
						 div3.show();
						}else{
							threeLevel.val("规格");
						}
					}					
				});
			   }
			}
		});
	threeLevelInitClick();
	
}


function threeLevelInitClick(){
	var u3=$("#u3");
	var aLi3=$("li",u3);
	for(var i=0;i<aLi3.length;i++){
	 aLi3[i].index=i;
	 aLi3[i].onclick = function(){	
	for(i=0;i<aLi3.length;i++){
		aLi3[i].className = "";
		}
	 this.className = "active";	 
	 threeLevel.val(this.innerHTML);
	 threeLevelId.val(this.id);
	 threeLevelId.attr("name",this.innerHTML);
	 tyt_qd();
	  };
  };
	aTab[1].className = "";
	aTab[2].className = "active";
}

 //循环点击标签
for(var i=0;i<aTab.length;i++){
	aTab[i].index=i;
	aTab[i].onclick = function(){
    if(oneLevel.val()=='类型'){
      return false;
    }	
    if(twoLevel.val()=='设备'&&this.index=='2'){
      return false;
    }	
	for(i=0;i<aTab.length;i++){
		aTab[i].className = "";
		aDiv[i].style.display = "none"; 
		}
	 this.className = "active";
	 //this.style.display="block";
	 aDiv[this.index].style.display = "block";
	 aDiv[this.index].className = "active";
	
	 };	
			
};	
function tyt_qd(){
	if(twoLevel.val()=='设备'){
		return false;
	}else{
		window.parent.setLevelData(levelObj,oneLevel.val(),oneLevelId.val(),twoLevel.val(),twoLevelId.val(),threeLevel.val(),threeLevelId.val());
	}
}
function tyt_qk(){
	oneLevel.val("类型");
	twoLevel.val("设备");
	threeLevel.val("规格");
	div2.hide();//style.display="none";
	div3.hide();//style.display="none";
	window.parent.setLevelData(levelObj,"","","","","","");
}


function setLevelData(level,oneLevelIdValue,twoLevelIdValue,threeLevelIdValue){
	levelObj=level;
	oneLevelId.val(oneLevelIdValue);
	twoLevelId.val(twoLevelIdValue);
	threeLevelId.val(threeLevelIdValue);

	if(oneLevelIdValue!=""&&oneLevelIdValue!="类型"){
		var li1=$("li",u1);
		for(i=0;i<li1.length;i++){ 
			if(li1[i].id==oneLevelIdValue){
				li1[i].className = "active";
				aTab[0].className = "active";
				aTab[0].value = li1[i].innerHTML;
				oneLevel.val(li1[i].innerHTML);
				aTab[1].className = "";
				aTab[2].className = "";
			}else{
			li1[i].className = "";
			}	
		}			
	    twoLevelInitData(oneLevelIdValue);
	}else{
		aDiv[0].style.display = "block";
		aTab[0].className = "active";	
		aDiv[0].className = "active";
		
		oneLevel.value="类型";
		twoLevel.value="设备";
		threeLevel.value="规格";
		div2.hide();//style.display="none";
		div3.hide();//style.display="none";
	
		aTab[1].className = "";
		aTab[2].className = "";
		var li1=$("li",u1);
		for(i=0;i<li1.length;i++){ 
		li1[i].className = "";
		}
		//var u2=$("#u2");
		u2.html("");
		u3.html("");
		return;
}
	if(twoLevelIdValue!=""&&twoLevelIdValue!="设备"){
		var li2=$("li",u2);		
		for(i=0;i<li2.length;i++){ 
			if(li2[i].id==twoLevelIdValue){
				li2[i].className = "active";				
				twoLevel.val(li2[i].innerHTML);
				threeLevel.val("规格");
				
			}else{
				li2[i].className = "";
			}	
		}
		threeLevelInitData(oneLevelIdValue,twoLevelIdValue)
	}else{
		aTab[2].className = "";
		twoLevel.val("设备");
		aDiv[0].style.display = "block";
		aTab[0].className = "active";	
		aDiv[0].className = "active";
		aTab[1].className = "";	
		aDiv[1].style.display = "none";
		return ;
	}
	if(threeLevelIdValue!=""&&threeLevelIdValue!="规格"){
		var li3=$("li",u3);
		///alert(li3);
		if(li3!=""&& li3.length>0){
			for(i=0;i<li3.length;i++){ 
				if(li3[i].id==threeLevelIdValue){
					li3[i].className = "active";
					threeLevel.val(li3[i].innerHTML);
					aDiv[2].style.display = "block";
					aTab[2].className = "active";	
					aDiv[2].className = "active";
	
				}else{
					li3[i].className = "";
				}	
			}
		}
	}
	else{
		aTab[2].className = "";
		threeLevel.val("规格");
		aDiv[1].style.display = "block";
		aTab[1].className = "active";	
		aDiv[1].className = "active";
		aDiv[2].style.display = "none";
	}

}
function tyt_inArray(p,array){

	for(var i=0;i<array.length;i++){
		if(p==array[i]){
			return i;
		}
	}
	return -1;
}
window.onload=function(){
  oneLevelInitData();
 } ;

	//setAreaValues('辽宁','沈阳市','沈河区');