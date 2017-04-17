var img_index = new Array();

function upload_excel(imgUrl) {
    var j = 0;
    excel();

    function excel() {
        //1.创建XMLHTTPRequest对象  
        if (img_index.length > 0) {
            var singleImg = img_index[j];
            var xmlhttp;
            if (window.XMLHttpRequest) {
                //IE7+, Firefox, Chrome, Opera, Safari  
                xmlhttp = new XMLHttpRequest;

                //针对某些特定版本的mozillar浏览器的bug进行修正  
                if (xmlhttp.overrideMimeType) {
                    xmlhttp.overrideMimeType('text/xml');
                };
            } else if (window.ActiveXObject) {
                //IE6, IE5  
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            };

            if (xmlhttp.upload) {
                //进度条  
                xmlhttp.upload.addEventListener("progress",
                    function(e) {
                        if (e.lengthComputable) {
                            var load_percent = (e.loaded / e.total) * 10;
                            $('#J_photo_wrap ul li').eq(j).find('.loading').css('width', load_percent + '%');
                        }
                    },
                    false);
                //2.回调函数  
                //onreadystatechange是每次 readyState 属性改变的时候调用的事件句柄函数  
                xmlhttp.onreadystatechange = function(e) {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            var json = eval('(' + xmlhttp.responseText + ')');
                        }
                        if (j < img_index.length - 1) {
                            j++;
                            excel();
                        }
                    }
                };

                xmlhttp.open("POST", imgUrl, true);

                var formdata = new FormData();
                formdata.append("FileData", singleImg);
                xmlhttp.send(formdata);
            }
            //}  
        }
    }
};

function resize(img) {
    if (img.offsetHeight > img.offsetWidth) {
        $(img).removeClass('img1').addClass('img2');
    } else {
        $(img).removeClass('img2').addClass('img1');
    }
}

function fileInfo(source, _this, index) {
    var f = source.files[0];
    var name = f.name;
    var size = f.size;
    var type = f.type;
    var _thisId = _this.attr('id');
    var _thisSpan = _this.parents('.btns').siblings('#J_photo_wrap').find("span");
    var _thisA = _this.parents('.btns').siblings('#J_photo_wrap').find("a");
    // image / gif, image / jpeg, image / jpg, image / png, image / svg
    if (!name.match(/.(xls|xlsx)$/ig)) {
        _thisSpan.html(name + '不是Excel文件');
    } else {
        //使用index参数控制数组中的位置 , 达到自动清除不要的EXcel的作用 保证只传一张
        // img_index.push(f);
        img_index[index] = f;
        if (size > 1048576) {
            _thisSpan.html('EXcel太大');
        } else {
            if (window.FileReader) {
                var fr = new FileReader();
                fr.onload = (function(f) {
                    return function(e) {
                        // console.log(this.result)
                        _thisA.html(name).attr('href', this.result)
                        _thisSpan.html(name);
                    };
                })(f);
                fr.readAsDataURL(f);
            }
        }
    }
};