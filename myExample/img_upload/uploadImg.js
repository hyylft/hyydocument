var img_index = new Array();

function upload_img(imgUrl) {
    var j = 0;
    img();

    function img() {
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
                            img();
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
    var _thisImg = _this.parents('.btns').siblings('#J_photo_wrap').find('img');
    var _thisSpan = _this.parents('.btns').siblings('#J_photo_wrap').find("span");
    // image / gif, image / jpeg, image / jpg, image / png, image / svg
    if (!type.match(/.(jpg|gif|jpeg|png)$/ig)) {
        _thisSpan.html('不是图片');
    } else {
        //使用index参数控制数组中的位置 , 达到自动清除不要的图片的作用 保证只传一张
        // img_index.push(f);
        img_index[index] = f;
        if (size > 1048576) {
            _thisSpan.html('图片太大，无法生成预览');
        } else {
            if (window.FileReader) {
                var fr = new FileReader();
                fr.onload = (function(f) {
                    _thisImg.attr('src', '');
                    return function(e) {
                        _thisImg.removeClass('mustImg').attr('src', this.result);
                        _thisSpan.html(name);
                    };
                })(f);
                fr.readAsDataURL(f);
            }
        }
    }
};