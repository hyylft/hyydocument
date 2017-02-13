// JavaScript Document

!function(t) {
    function n(e) {
        if (i[e])
            return i[e].exports;
        var a = i[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(a.exports, a, a.exports, n),
        a.loaded = !0,
        a.exports
    }
    var e = window.webpackJsonp;
    window.webpackJsonp = function(i, l) {
        for (var s, o, d = 0, r = []; d < i.length; d++)
            o = i[d],
            a[o] && r.push.apply(r, a[o]),
            a[o] = 0;
        for (s in l)
            t[s] = l[s];
        for (e && e(i, l); r.length; )
            r.shift().call(null , n)
    }
    ;
    var i = {}
      , a = {
        1: 0,
        0: 0
    };
    return n.e = function(t, e) {
        if (0 === a[t])
            return e.call(null , n);
        if (void 0 !== a[t])
            a[t].push(e);
        else {
            a[t] = [e];
            var i = document.getElementsByTagName("head")[0]
              , l = document.createElement("script");
            l.type = "text/javascript",
            l.charset = "utf-8",
            l.async = !0,
            l.src = n.p + "scripts/" + {
                0: "fec557b3"
            }[t] + ".chunk.min.js",
            i.appendChild(l)
        }
    }
    ,
    n.m = t,
    n.c = i,
    n.p = "../",
    n(0)
}
([function(t, n, e) {
    e(3),
    $(function() {
        e(4),
        e(10).init(),
        e(16).init();
        var t = window.PRODUCT_CONFIGS.MODULES || []
          , n = [];
        $.each(t, function(t, i) {
            var a = "module-" + i.mod;
            n.push(e(19)("./" + a + "/" + a)(i))
        }
        ),
        e(61)(n)
    }
    )
}
, , , function(t, n, e) {
    t.exports = e.p + "vendor/jquery/jquery-1.9.0.js"
}
, function(t, n) {}
, , , , , , function(t, n, e) {
    function i() {
        return $.ajax({
            type: "get",
            async: !1,
            url: o.dataUrl,
            dataType: "jsonp",
            jsonp: "callbackparam",
            jsonpCallback: "ALIYUN_PRODUCT_LEFT_MENU"
        })
    }
    function a(t, n) {
        var e = []
          , e = d({
            menus: n
        });
        t.html(e)
    }
    function l(t) {
        t.find(".sub-title").click(function() {
            var t = $(this)
              , n = t.parent()
              , e = n.find(".sub-list");
            0 != e.length && (n.hasClass("sub-toggle-on") ? e.animate({
                height: "0"
            }, 200, function() {
                n.removeClass("sub-toggle-on")
            }
            ) : (e.animate({
                height: 36 * e.find("a").size() + "px"
            }, 200),
            n.addClass("sub-toggle-on")))
        }
        )
    }
    function s() {
        var t = $("#J-product-sidebar");
        navigator.userAgent;
        window.attachEvent || t.addClass("not-ie"),
        i().success(function(n) {
            a(t, n);
            var e = t.find(".link-" + PRODUCT_CONFIGS.PRODUCT_NAME);
            e.addClass("selected"),
            e.parent().parent().addClass("sub-toggle-on"),
            l(t)
        }
        )
    }
    e(11);
    var o = {
        dataUrl: "http://www.aliyun.com/modules/product/sidebarMenu.html"
    }
      , d = e(15);
    t.exports = {
        init: s
    }
}
, function(t, n) {}
, , , function(t, n, e) {
    t.exports = e.p + "./images/sidebar-arrow_8c7c20210eb8d1247698d5356cadac59.png"
}
, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<div data-spm="3">\n  <h3 class="product-module-hd">\n    <a target="_blank" href="http://www.aliyun.com/product/">产品与服务首页</a>\n  </h3>\n  ';
            for (var i = 0, len = menus.length; len > i; i++) {
                var item = menus[i];
                if (__p += "\n    ",
                item.name) {
                    if (__p += '\n      <dl class="product-menu-new">\n        <dt class="sub-title">' + (null  == (__t = item.name) ? "" : __t) + '<i></i></dt>\n        <dd class="sub-list" product-name="' + (null  == (__t = item.en_name) ? "" : __t) + '">\n        ',
                    item.sub && item.sub.length) {
                        __p += "\n          ";
                        for (var j = 0, len2 = item.sub.length; len2 > j; j++) {
                            var subItem = item.sub[j];
                            __p += '\n             <a href="' + (null  == (__t = subItem.link) ? "" : __t) + '" class="' + (null  == (__t = subItem.linkClass) ? "" : __t) + '">\n              <span class="span-1"><i class="' + (null  == (__t = subItem.iconClass) ? "" : __t) + '"></i>' + (null  == (__t = subItem.title) ? "" : __t) + "</span>\n            </a>\n          "
                        }
                        __p += "\n        "
                    }
                    __p += "\n        </dd>\n      </dl>\n    "
                }
                __p += "\n  "
            }
            __p += "\n</div>\n"
        }
        return __p
    }
}
, function(t, n, e) {
    function i() {}
    e(17),
    t.exports = {
        init: i
    }
}
, function(t, n) {}
, , function(t, n, e) {
    function i(t) {
        return e(a(t))
    }
    function a(t) {
        return l[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }
        ()
    }
    var l = {
        "./introduce/introduce": 16,
        "./introduce/introduce.js": 16,
        "./introduce/introduce.less": 17,
        "./market-tools/module-tools": 20,
        "./market-tools/module-tools.css": 24,
        "./market-tools/module-tools.ejs": 23,
        "./market-tools/module-tools.js": 20,
        "./market-tools/module-tools.less": 21,
        "./module-ability/module-ability": 26,
        "./module-ability/module-ability.ejs": 29,
        "./module-ability/module-ability.js": 26,
        "./module-ability/module-ability.less": 27,
        "./module-approve/module-approve": 34,
        "./module-approve/module-approve.ejs": 37,
        "./module-approve/module-approve.js": 34,
        "./module-approve/module-approve.less": 35,
        "./module-devResource/module-devResource": 47,
        "./module-devResource/module-devResource.css": 51,
        "./module-devResource/module-devResource.ejs": 50,
        "./module-devResource/module-devResource.js": 47,
        "./module-devResource/module-devResource.less": 48,
        "./module-docs/module-docs": 53,
        "./module-docs/module-docs.ejs": 56,
        "./module-docs/module-docs.js": 53,
        "./module-docs/module-docs.less": 54,
        "./module-usercase/module-usercase": 57,
        "./module-usercase/module-usercase.ejs": 60,
        "./module-usercase/module-usercase.js": 57,
        "./module-usercase/module-usercase.less": 58,
        "./partner/partner": 38,
        "./partner/partner.ejs": 41,
        "./partner/partner.js": 38,
        "./partner/partner.less": 39,
        "./product-modules/product-modules": 61,
        "./product-modules/product-modules.js": 61,
        "./product-modules/product-modules.less": 62,
        "./sidebar/icons/arrow-down": 65,
        "./sidebar/icons/arrow-down-active": 66,
        "./sidebar/icons/arrow-down-active.png": 66,
        "./sidebar/icons/arrow-down.png": 65,
        "./sidebar/icons/arrow-top": 67,
        "./sidebar/icons/arrow-top-active": 68,
        "./sidebar/icons/arrow-top-active.png": 68,
        "./sidebar/icons/arrow-top.png": 67,
        "./sidebar/sidebar": 10,
        "./sidebar/sidebar-arrow": 69,
        "./sidebar/sidebar-arrow.css": 69,
        "./sidebar/sidebar-arrow.png": 14,
        "./sidebar/sidebar.ejs": 15,
        "./sidebar/sidebar.js": 10,
        "./sidebar/sidebar.less": 11,
        "./timeline/timeline": 30,
        "./timeline/timeline.css": 71,
        "./timeline/timeline.ejs": 33,
        "./timeline/timeline.js": 30,
        "./timeline/timeline.less": 31,
        "./video/video": 42,
        "./video/video.css": 73,
        "./video/video.ejs": 46,
        "./video/video.js": 42,
        "./video/video.less": 44
    };
    i.keys = function() {
        return Object.keys(l)
    }
    ,
    i.resolve = a,
    t.exports = i,
    i.id = 19
}
, function(t, n, e) {
    e(21);
    var i = e(23)
      , a = i({
        data: window.PRODUCT_CONFIGS.MODULE_DATAS.tools
    });
    $("#J-market-tools").append(a)
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<a class="product-anchor" id="Tools" name="Tools" hidefocus="">&nbsp;</a>\n  <div class="module-tools-title">\n      <h1>' + (null  == (__t = data.hd) ? "" : __t) + '</h1>\n      </div>\n  <ul class="module-tools-list clearfix">\n   \n    ';
            for (var i = 0, len = data.list.length; len > i; i++) {
                __p += "\n      ";
                var item = data.list[i];
                __p += '\n      <li >\n        <a href="' + (null  == (__t = item.link) ? "" : __t) + '" target="_blank" class="inner">\n          <h5>' + (null  == (__t = item.title) ? "" : __t) + '</h5>\n          <div class="icon-wrap">\n            <img with="75" height="75" src="' + (null  == (__t = item.iconClass) ? "" : __t) + '" />\n          </div>\n          <p class="text-center">' + (null  == (__t = item.desc) ? "" : __t) + "</p>\n        </a>\n      </li> \n    "
            }
            __p += " \n  </ul>\n\n\n"
        }
        return __p
    }
}
, function(t, n) {}
, , function(t, n, e) {
    e(27);
    var i = e(29)
      , a = i({
        data: window.PRODUCT_CONFIGS.MODULE_DATAS.ability
    });
    $("#J-product-custom-modules").append(a),
    window.PRODUCT_CONFIGS.deatilTimelineHappened && window.PRODUCT_CONFIGS.detailTimelineUnHappened && e(30).init($("#J-module-function-timeline")),
    t.exports = function(t) {
        return {
            link: t.mod.substring(0, 1).toUpperCase() + t.mod.substring(1),
            name: t.zh,
            spm: t.spm
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<div class="product-function" data-spm="6">\n    <a class="product-anchor" id="Ability" name="Ability" hidefocus="">&nbsp;</a>\n    <div class="product-title">\n        <h1>' + (null  == (__t = data.moduleName) ? "" : __t) + '</h1>\n    </div>\n    <div class="timeline" id="J-module-function-timeline">\n        \n    </div>\n    ',
            data.hd && (__p += '\n      <p class="desc">' + (null  == (__t = data.hd) ? "" : __t) + "</p>\n    "),
            __p += '\n    <p class="desc"></p>\n    ';
            for (var i = 0, len = data.list.length; len > i; i++) {
                __p += "\n      ";
                var item = data.list[i];
                __p += '\n      <table class="func-table">\n        <tbody>\n          <tr>\n            <td class="func-title">' + (null  == (__t = item.hd) ? "" : __t) + '</td>\n            <td class="func-bd">\n              ';
                for (var j = 0, len2 = item.list.length; len2 > j; j++) {
                    __p += "\n              ";
                    var item2 = item.list[j];
                    __p += '\n              <div class="func-module ' + (null  == (__t = j == len2 - 1 ? "last" : "") ? "" : __t) + '">\n                <h3>' + (null  == (__t = item2.title) ? "" : __t) + '</h3>\n                <p class="func-desc">' + (null  == (__t = item2.beforeDesc) ? "" : __t) + '</p>\n                <ul class="func-list">\n                  ' + (null  == (__t = item2.list) ? "" : __t) + '\n                </ul>\n                <p class="func-desc">' + (null  == (__t = item2.afterDesc) ? "" : __t) + "</p>\n              </div>\n              "
                }
                __p += "\n            </td>\n          </tr>\n        </tbody>\n      </table>      \n    "
            }
            __p += "\n      \n   \n</div>"
        }
        return __p
    }
}
, function(t, n, e) {
    e(31);
    var i = e(33)
      , a = {
        incidentMap: window.PRODUCT_CONFIGS.deatilTimelineHappened,
        unHappened: window.PRODUCT_CONFIGS.detailTimelineUnHappened,
        oneMonthDistance: 100,
        minDistance: 20,
        maxDistance: 200,
        halfDistance: 360,
        currentIndex: 0,
        centerPosition: 0,
        maxStep: 1,
        disabled: !1,
        dom: {},
        newDate: function(t) {
            t = t.split(".");
            var n = new Date;
            return n.setUTCFullYear(t[0], t[1] - 1, t[2]),
            n.setUTCHours(0, 0, 0, 0),
            n
        },
        getDistance: function(t, n) {
            var e = this
              , i = (e.newDate(n.time).getTime() - e.newDate(t.time).getTime()) / 2592e6 * e.oneMonthDistance;
            return i = i.toFixed(0),
            i < e.minDistance ? e.minDistance : i > e.maxDistance ? e.maxDistance : i
        },
        createNodes: function(t) {
            var n, e = this, i = e.dom.timelineContent;
            i.find(".start").css({
                width: e.halfDistance + "px"
            }),
            e.centerPosition = i.find(".start .radius-blue").position().left,
            n = e.halfDistance;
            for (var a = 0; a < t.length - 1; a++) {
                var l = e.getDistance(t[a], t[a + 1]);
                i.find("ul").append('<li class="node" style="width:' + l + 'px"><span class="radius-blue" data-index="' + (a + 1) + '" data-spm-click="gostr=/aliyun;locaid=d' + (a + 1) + '" ></span></li>'),
                n += parseInt(l)
            }
            var s = 736 - e.halfDistance;
            i.find("ul").append('<li class="node unhappen" style="width:' + s / 2 + 'px"><span class="radius-blue radius-grey" data-index="-1" data-spm-click="gostr=/aliyun;locaid=d' + t.length + '" ></span></li><li class="node end" style="width:' + s + 'px"></li>'),
            n += 3 * s / 2,
            i.find("ul").css({
                width: n + 15 * t.length + "px"
            })
        },
        showIncident: function(t) {
            $(".incident-content").animate({
                opacity: "1",
                top: "41px"
            }, 500),
            $(".incident-time").animate({
                opacity: "1",
                top: "40px"
            }, 500, t)
        },
        hideIncident: function(t) {
            var n = "0";
            "Microsoft Internet Explorer" === navigator.appName && (n = "1"),
            $(".incident-content").animate({
                opacity: n,
                top: "31px"
            }, 500),
            $(".incident-time").animate({
                opacity: n,
                top: "44px"
            }, 500, t)
        },
        setIncidentContent: function(t) {
            var n = this
              , e = n.dom.incident
              , i = -1 === t ? n.unHappened : n.incidentMap.data[t]
              , a = function(t) {
                return void 0 !== t && "" !== t
            }
            ;
            if (a(i.img) && e.find(".incident-logo img").attr("src", i.img),
            a(i.text) && e.find(".incident-text").html(i.text),
            a(i.time) && e.find(".incident-time").html(i.time),
            a(i.url)) {
                var l = "true" == i.isPop ? 'target = "_blank"' : ""
                  , s = i.urlText ? i.urlText : "查看详情";
                $(".incident-content .incident-text").append('<a href="' + i.url + '" ' + l + ">" + s + "</a>")
            }
            -1 === t ? $(".incident-time").addClass("c999") : $(".incident-time").removeClass("c999")
        },
        timelineAnimate: function(t) {
            var n = this
              , e = n.dom.timelineContent
              , i = parseFloat(e.find("ul").css("marginLeft"));
            i += n.centerPosition - t,
            e.find("ul").animate({
                "margin-left": i + "px"
            })
        },
        bindEvent: function() {
            var t, n = this, e = n.incidentMap.data;
            t = $(".radius-blue"),
            dom = n.dom,
            maxStep = n.maxStep,
            dom.radiusBlues = t,
            dom.radiusGrey = $(".radius-grey"),
            t.on("click", function() {
                if (!n.disabled && !$(this).hasClass("radius-grey")) {
                    var e = $(this).data("index");
                    n.currentIndex = e,
                    n.hideIncident(function() {
                        n.setIncidentContent(e),
                        n.showIncident(function() {
                            n.disabled = !1
                        }
                        )
                    }
                    ),
                    n.timelineAnimate($(this).position().left),
                    t.removeClass("current"),
                    $(this).addClass("current"),
                    n.disabled = !0
                }
            }
            ),
            dom.rightBtn.on("click", function() {
                if (!n.disabled) {
                    var i = n.currentIndex;
                    -1 !== i && i + maxStep < e.length && (t[i + maxStep].click(),
                    n.disabled = !0)
                }
            }
            ),
            dom.leftBtn.on("click", function() {
                if (!n.disabled) {
                    var i, a = n.currentIndex;
                    i = -1 !== a ? a - maxStep > 0 ? a - maxStep : 0 : e.length - maxStep > 0 ? e.length - maxStep : 0,
                    t[i].click(),
                    n.disabled = !0
                }
            }
            )
        },
        hack: function() {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                var t = ["<style>", ".timeline-content{", "height:30px;", "}", ".timeline-base-line .header{", "margin-top: -9px;", "}", ".timeline-content ul{", "margin-top:-4px;", "}", ".timeline-content li{", "margin-right:0px;", "overfolw:display;", "zoom:1;", "}", ".radius-blue{", "position:aboslute;", "margin-left:-10px;", "top:-10px;", "height:7px;", "font-size:0;", "}", ".radius-blue.current{", "background-color: #00a2ca;", "}", ".node.end{", "margin-top:-5px;", "border-bottom-color:#999 !important;", "}", ".node.unhappen{", "border-bottom-color:#999 !important;", "}", "</style>"].join("")
                  , n = $(t);
                n.appendTo(document.body)
            }
        },
        init: function(t) {
            var n = null ;
            if (null  !== this.incidentMap && (n = this.incidentMap.data),
            !n || !n.length)
                return void t.hide();
            t.html(i()),
            a.dom = {
                timelineContent: $(".timeline-content"),
                incident: $(".incident"),
                radiusBlues: null ,
                radiusGrey: null ,
                leftBtn: $(".timeline-btn .left a"),
                rightBtn: $(".timeline-btn .right a")
            };
            var e = this;
            e.createNodes(n),
            e.currentIndex = n.length - 1,
            e.setIncidentContent(e.currentIndex),
            e.hack(),
            e.bindEvent(),
            e.dom.radiusBlues[e.currentIndex].click()
        }
    };
    t.exports = a
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __p = "";
        with (obj)
            __p += '<div class="timeline">\n    <div class="incident">\n        <div class="incident-content">\n            <div class="incident-text"></div>\n        </div>\n        <div class="incident-time"></div>\n    </div>\n\n    <div class="timeline-btn">\n        <div class="left">\n            <a href="javascript:;" id="J_timelinePrev" data-spm-click="gostr=/aliyun;locaid=d20142">\n                <span class="icon-arrow-left"></span>\n            </a>\n        </div>\n        <div class="right">\n            <a href="javascript:;" id="J_timelineNext" data-spm-click="gostr=/aliyun;locaid=d20143">\n                <span class="icon-arrow-right"></span>\n            </a>\n        </div>\n    </div>\n    \n    <div class="timeline-base-line">\n        <div class="header"></div>\n        <div class="timeline-content">\n            <ul>\n                <li class="start">\n                    <span data-index="0" class="radius-blue"></span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>';
        return __p
    }
}
, function(t, n, e) {
    e(35);
    var i = e(37)
      , a = i({
        data: window.PRODUCT_CONFIGS.MODULE_DATAS.approve
    });
    $("#J-product-custom-modules").append(a),
    e(38)($("#J-product-custom-modules")),
    e(42)($("#J-product-custom-modules")),
    t.exports = function(t) {
        return {
            link: t.mod.substring(0, 1).toUpperCase() + t.mod.substring(1),
            name: t.zh,
            spm: t.spm
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            if (__p += '<div class="product-approve" data-spm="5">\n    <a class="product-anchor" id="Approve" name="Approve" hidefocus="">&nbsp;</a>\n    <div class="product-title">\n        <h1>' + (null  == (__t = data.moduleName) ? "" : __t) + '</h1>\n    </div>\n    <div class="product-video clearfix" id="J-product-video-wrap" style="display:none;">\n      \n    </div>\n    <!-- 产品优势标题文字 -->\n    <div class="approve-detail-hd">\n      ' + (null  == (__t = data.hd) ? "" : __t) + '\n    </div>\n    <div class="approve-detail ">\n      ',
            2 == data.column) {
                __p += '\n        <!--两列-->\n        <table>\n          <thead>\n            <tr>\n              <th class="title" style="width:' + (null  == (__t = data.column1Width ? data.column1Width : 100) ? "" : __t) + 'px;"></th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th2) ? "" : __t) + "\n                </h1>  \n              </th>\n            </tr>\n          </thead>\n          <tbody>\n          ";
                for (var i = 0, len = data.detail.list.length; len > i; i++) {
                    __p += "\n            ";
                    var approve_value = data.detail.list[i];
                    __p += '\n            <tr>\n              <td class="title">\n                <h3><img src="' + (null  == (__t = approve_value.img) ? "" : __t) + '" width="18" height="18" style="' + (null  == (__t = approve_value.style) ? "" : __t) + '">' + (null  == (__t = approve_value.td1) ? "" : __t) + '</h3>\n                <div class="border-left"></div>\n              </td>\n              <td class="text-size-14">\n                ' + (null  == (__t = approve_value.td2) ? "" : __t) + '\n                <div class="border-right"></div>\n              </td>\n            </tr>\n          '
                }
                __p += " \n          </tbody>\n        </table> \n      "
            } else if (4 == data.column) {
                __p += '  \n        <!--四列--> \n        <table>\n          <thead>\n            <tr>\n              <th class="title" style="width:' + (null  == (__t = data.column1Width ? data.column1Width : 100) ? "" : __t) + 'px;"></th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th2) ? "" : __t) + '\n                </h1>  \n              </th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th3) ? "" : __t) + '\n                </h1> \n              </th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th4) ? "" : __t) + "\n                </h1> \n              </th>\n            </tr>\n          </thead>\n          <tbody>\n          ";
                for (var i = 0, len = data.detail.list.length; len > i; i++) {
                    __p += "\n            ";
                    var approve_value = data.detail.list[i];
                    __p += '\n            <tr>\n              <td class="title">\n                <h3><img src="' + (null  == (__t = approve_value.img) ? "" : __t) + '" width="18" height="18" style="' + (null  == (__t = approve_value.style) ? "" : __t) + '">' + (null  == (__t = approve_value.td1) ? "" : __t) + '</h3>\n                <div class="border-left"></div>\n              </td>\n              <td class="text-size-14">\n                ' + (null  == (__t = approve_value.td2) ? "" : __t) + '\n              </td>\n              <td class="text-size-14 text-666">\n                ' + (null  == (__t = approve_value.td3) ? "" : __t) + '\n              </td>\n              <td class="text-size-14 text-666">\n                ' + (null  == (__t = approve_value.td4) ? "" : __t) + '\n                <div class="border-right"></div>\n              </td>\n            </tr>\n          '
                }
                __p += " \n          </tbody>\n        </table> \n      "
            } else {
                __p += '\n        <!--三列--> \n        <table>\n          <thead>\n            <tr> \n              <th class="title" style="width:' + (null  == (__t = data.column1Width ? data.column1Width : 100) ? "" : __t) + 'px;"></th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th2) ? "" : __t) + '\n                </h1>  \n              </th>\n              <th class="text-center">\n                <h1 class="approvel-th-title">\n                  ' + (null  == (__t = data.detail.th.th3) ? "" : __t) + "\n                </h1> \n              </th>\n            </tr>\n          </thead>\n          <tbody>\n          ";
                for (var i = 0, len = data.detail.list.length; len > i; i++) {
                    __p += "\n            ";
                    var approve_value = data.detail.list[i];
                    __p += '\n            <tr>\n              <td class="title">\n                <h3><img src="' + (null  == (__t = approve_value.img) ? "" : __t) + '" width="18" height="18" style="' + (null  == (__t = approve_value.style) ? "" : __t) + '">' + (null  == (__t = approve_value.td1) ? "" : __t) + '</h3>\n                <div class="border-left"></div>\n              </td>\n              <td class="text-size-14">\n                ' + (null  == (__t = approve_value.td2) ? "" : __t) + '\n              </td>\n              <td class="text-size-14 text-666">\n                ' + (null  == (__t = approve_value.td3) ? "" : __t) + '\n                <div class="border-right"></div>\n              </td>\n            </tr>\n          '
                }
                __p += " \n          </tbody>\n        </table> \n      "
            }
            __p += "\n      \n    </div>\n  </div>"
        }
        return __p
    }
}
, function(t, n, e) {
    function i(t) {
        var n = t.find(".partner-list li")
          , e = t.find(".partner-list li:not(.active)") || n.eq(0)
          , i = n.length
          , a = t.parent().width()
          , o = e[0].offsetWidth;
        l = a - i * o,
        t.find(".partner-list li.active").css({
            width: l + s + "px"
        }),
        t.find(".partner-list li .partner-intro").css({
            width: l - 14 + "px"
        })
    }
    function a(t) {
        var n = null 
          , e = t.find(".partner-list li");
        e.mouseover(function() {
            var t = $(this);
            n = setTimeout(function() {
                t.css({
                    width: l + s + "px"
                }).addClass("active partnerIntro").siblings().css({

                    width: s + "px"
                }).removeClass("active partnerIntro")
            }
            , 200)
        }
        ).mouseout(function() {
            clearTimeout(n),
            n = null 
        }
        ),
        e.eq(0).trigger("mouseover"),
        $(window).resize(function() {
            i(t)
        }
        )
    }
    e(39);
    var l = 140
      , s = 70;
    t.exports = function(t) {
        var n = e(41)
          , l = window.PRODUCT_CONFIGS.MODULE_DATAS.partner;
        if (l && l.list && l.list.length) {
            var s = n({
                data: l
            });
            t.append(s),
            i(t),
            a(t)
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<div class="partner" data-spm="5">\n  <p class="desc">' + (null  == (__t = data.hd) ? "" : __t) + '</p>\n  <ul class="partner-list clearfix">\n     \n    ';
            for (var i = 0, len = data.list.length; len > i; i++) {
                __p += "\n      ";
                var partner_value = data.list[i];
                __p += "\n      <li>\n        ",
                partner_value.link && (__p += '\n          <a href="' + (null  == (__t = partner_value.link) ? "" : __t) + '" target="_blank">\n        '),
                __p += '\n        <div class="partner-logo pull-left"> \n          <img style="width:70px;" src="' + (null  == (__t = partner_value.img) ? "" : __t) + '" />\n        </div>\n        <div class="partner-intro ">\n          <h5 class="partner-name">' + (null  == (__t = partner_value.name) ? "" : __t) + '</h5>\n          <p class="partner-text">\n              ' + (null  == (__t = partner_value.desc) ? "" : __t) + "\n          </p>\n        </div>\n        ",
                partner_value.link && (__p += "\n          </a>\n        "),
                __p += "\n      </li>\n    "
            }
            __p += "\n  </ul>\n</div>"
        }
        return __p
    }
}
, function(t, n, e) {
    function i(t) {
        if (window.PRODUCT_CONFIGS.videos && window.PRODUCT_CONFIGS.videos.length) {
            var n = l({
                videos: window.PRODUCT_CONFIGS.videos
            });
            t.html(n),
            a("http://g.alicdn.com/kissy/k/1.4.4/seed-min.js", function() {
                KISSY.config({
                    packages: {
                        kloud: {
                            base: "http://g.tbcdn.cn/aliyun/kloud/",
                            tag: "2313123123",
                            debug: !1,
                            ignorePackageNameInUri: !0,
                            combine: !1
                        }
                    }
                }),
                KISSY.use("ua,overlay", function(t, n, e) {
                    var i = t.all;
                    t.all(".j_btn_video").on("click", function(t) {
                        var n = i(this)
                          , e = n.attr("href")
                          , a = ['<object width="700" height="500" type="application/x-shockwave-flash" data="' + e + '" id="tb_player" style="visibility: visible;">', '<param name="Src" value="' + e + '">', '<param name="wmode" value="transparent">', '<param name="allowScriptAccess" value="always">', '<param name="allowFullScreen" value="true">', '<param name="menu" value="false">', '<param name="quality" value="height">', '<param name="flashvars" value="autoplay=true&amp;showrightad=false&amp;showfocusad=false">', "</object>"].join("");
                        return KISSY.use("node, kloud/0.0.4/kloud-layer/", function(t, n, e) {
                            var i, l = n.all, s = '<div class="y-dlg kn-dialog-video " style="height: 500px;width: 700px;"><span class="y-dlg-close"><span class="icon-wrong"></span></span>' + a + "</div>";
                            i = new e({
                                isLocked: !0,
                                hasBlock: !0,
                                addClass: "dialog-video",
                                zIndex: "9999",
                                location: "center"
                            }),
                            l(".dialog-video .kloud-layer-container").html(s),
                            i.show(),
                            l(".dialog-video .icon-wrong").on("click", function(t) {
                                i.hide(),
                                l("#" + i.id).remove(),
                                l(document.body).css("overflow", "")
                            }
                            )
                        }
                        ),
                        !1
                    }
                    )
                }
                )
            }
            )
        } else
            t.hide()
    }
    var a = e(43);
    e(44);
    var l = e(46);
    t.exports = function(t) {
        var n = t.find("#J-product-video-wrap");
        n.length && (n.show(),
        i(n))
    }
}
, function(t, n) {
    function e(t, n) {
        var e = document.createElement("script");
        e.type = "text/javascript",
        e.readyState ? e.onreadystatechange = function() {
            ("loaded" == e.readyState || "complete" == e.readyState) && (e.onreadystatechange = null ,
            n())
        }
         : e.onload = function() {
            n()
        }
        ,
        e.src = t,
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    t.exports = e
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj)
            if (videos && videos.length) {
                __p += "\n    ";
                for (var i = 0; i < videos.length; i++) {
                    __p += "\n    ";
                    var videoInfo = videos[i];
                    __p += '\n    <div class="video-panel cell">\n        ',
                    __p += videoInfo.video && videoInfo.video.toUpperCase().indexOf("SWF") > -1 ? '\n            <div class="video-image" style="background-image:url(' + (null  == (__t = videoInfo.img) ? "" : __t) + ');">\n                <a href="' + (null  == (__t = videoInfo.video) ? "" : __t) + '" class="video-btn j_btn_video" data-spm-click="gostr=/aliyun;locaid=' + (null  == (__t = videoInfo.spm) ? "" : __t) + '" onclick="return false;">\n                    <span class="icon-play"></span>\n                </a>\n            </div>\n        ' : '\n            <a href="' + (null  == (__t = videoInfo.link) ? "" : __t) + '" class="video-image" target="_blank" style="background-image:url(' + (null  == (__t = videoInfo.img) ? "" : __t) + ');" data-spm-click="gostr=/aliyun;locaid=' + (null  == (__t = videoInfo.spm) ? "" : __t) + '"></a>\n        ',
                    __p += '\n        <div class="video-text">' + (null  == (__t = videoInfo.title) ? "" : __t) + "</div>\n    </div>\n    "
                }
                __p += "\n"
            }
        return __p
    }
}
, function(t, n, e) {
    e(48);
    var i = e(50)
      , a = window.PRODUCT_CONFIGS.MODULE_DATAS.devSource
      , l = i({
        data: a,
        location: encodeURIComponent(location.href)
    });
    $("#J-product-custom-modules").append(l),
    a.show_market && e(20),
    t.exports = function(t) {
        return {
            link: t.mod.substring(0, 1).toUpperCase() + t.mod.substring(1),
            name: t.zh,
            spm: t.spm
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<a class="product-anchor" id="DevResource" name="DevResource" hidefocus="">&nbsp;</a>\n<div data-spm="13">\n  <div class="product-title">\n    <h1>' + (null  == (__t = data.moduleName) ? "" : __t) + '</h1>\n  </div>\n  <ul class="dev-resource-list clearfix" >\n    ';
            for (var i = 0, len = data.list.length; len > i; i++) {
                __p += "\n      ";
                var item = data.list[i];
                __p += '\n      <li>\n        <div class="li-inner">\n          <h5>' + (null  == (__t = item.title) ? "" : __t) + "</h5>\n          <p>" + (null  == (__t = item.desc) ? "" : __t) + "</p>\n          " + (null  == (__t = item.content) ? "" : __t) + "            \n        </div>\n      </li>\n    "
            }
            __p += '\n  </ul>\n  <!-- 云市场模块占位 -->\n  <div id="J-market-tools"></div>\n  <!-- 底部自由区 -->\n  ',
            data.show_create_account && (__p += '\n    <div class="custom-area">\n    <div class="create-account">\n      阿里云，全球领先的云计算服务平台<a href="https://account.aliyun.com/register/register.htm?oauth_callback=' + (null  == (__t = location) ? "" : __t) + '" target="_blank" class="action y-btn-blue" data-spm-click="gostr=/aliyun;locaid=dcreate-account">立即免费创建账号</a>\n    </div>\n  </div>\n  '),
            __p += "\n</div>\n\n\n\n"
        }
        return __p
    }
}
, function(t, n) {}
, , function(t, n, e) {
    e(54),
    _tpl = e(56);
    var i = _tpl({
        data: window.PRODUCT_CONFIGS.MODULE_DATAS.docs
    });
    $("#J-product-custom-modules").append(i),
    t.exports = function(t) {
        return {
            link: t.mod.substring(0, 1).toUpperCase() + t.mod.substring(1),
            name: t.zh,
            spm: t.spm
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<a class="product-anchor" id="Docs" name="Docs" hidefocus="">&nbsp;</a>\n<div class="product-title" >\n    <h1>' + (null  == (__t = data.moduleName) ? "" : __t) + '</h1>\n</div>\n<ul class="docs-list clearfix" data-spm="9">\n  ';
            for (var i = 0, len = data.list.length; len > i; i++) {
                __p += '\n  <li>\n    <div class="li-inner current">\n        ';
                var item = data.list[i];
                __p += '\n        <h5 class="usercase-tab">' + (null  == (__t = item.configs[0].type) ? "" : __t) + "</h5>\n        ";
                for (var j = 0, len2 = item.list.length; len2 > j; j++) {
                    __p += "\n          ";
                    var item2 = item.list[j];
                    __p += '\n          <a target="_blank" href="' + (null  == (__t = item2.link) ? "" : __t) + '">' + (null  == (__t = item2.title) ? "" : __t) + "</a>\n        "
                }
                __p += "\n        ",
                item.configs[0].more && (__p += '\n          <a target="_blank" class="more" href="' + (null  == (__t = item.configs[0].more) ? "" : __t) + '">更多>></a>\n        '),
                __p += "\n    </div>\n  </li> \n  "
            }
            __p += "\n</ul>"
        }
        return __p
    }
}
, function(t, n, e) {
    function i() {
        var t = $(".usercase-tab-bd li.usercase-tab-bd-item")
          , n = null 
          , e = $(".usercase-tab li")
          , i = $(".usercase-tab").height();
        e.mouseover(function() {
            var e = $(this);
            n = setTimeout(function() {
                var n = parseInt(e.attr("data-index"), 10);
                e.addClass("current").siblings().removeClass("current");
                var a = t.eq(n);
                a.height() - (i - 39) <= 20;
                a.slideDown(250).siblings().slideUp(250)
            }
            , 200)
        }
        ).mouseout(function() {
            clearTimeout(n),
            n = null 
        }
        ),
        e.eq(0).trigger("mouseover")
    }
    e(58);
    var a = e(60)
      , l = a({
        data: window.PRODUCT_CONFIGS.MODULE_DATAS.usercase
    });
    $("#J-product-custom-modules").append(l),
    i(),
    t.exports = function(t) {
        return {
            link: t.mod.substring(0, 1).toUpperCase() + t.mod.substring(1),
            name: t.zh,
            spm: t.spm
        }
    }
}
, function(t, n) {}
, , function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) {
            __p += '<a class="product-anchor" id="Usercase" name="Usercase" hidefocus="">&nbsp;</a>\n<div class="product-title usercase-title">\n    <h1>' + (null  == (__t = data.moduleName) ? "" : __t) + '</h1>\n</div>\n\n<p class="desc">' + (null  == (__t = data.moduleDesc) ? "" : __t) + '</p>\n\n<div class="usercase-tab-wrap clearfix" data-spm="7">\n  <ul class="usercase-tab pull-left" style="width:' + (null  == (__t = data.leftTabWidth) ? "" : __t) + 'px;">\n  ';
            for (var i = 0, len = data.tabs.length; len > i; i++)
                __p += '\n    <li  data-index="' + (null  == (__t = i) ? "" : __t) + '" class="' + (null  == (__t = i == len - 1 ? "last" : "") ? "" : __t) + ' ">\n      ' + (null  == (__t = data.tabs[i].tab) ? "" : __t) + '\n      <div class="line-splite"></div>\n    </li>\n  ';
            __p += '\n  </ul>\n<ul class="usercase-tab-bd" style="margin-left:' + (null  == (__t = data.leftTabWidth) ? "" : __t) + 'px;">\n  ';
            for (var i = 0, len = data.tabs.length; len > i; i++) {
                __p += "\n    ";
                var item = data.tabs[i];
                __p += '\n    <li class="usercase-tab-bd-item" style="display:none;">\n     <p class="desc">' + (null  == (__t = item.desc) ? "" : __t) + '</p>\n      <div class="configs-hd">\n        ' + (null  == (__t = item.configs) ? "" : __t) + '\n      </div>\n      <ul class="configs-bd" style="display:' + (null  == (__t = item.list ? "" : "none") ? "" : __t) + '">\n        ' + (null  == (__t = item.list) ? "" : __t) + "\n      </ul>\n    </li>\n    "
            }
            __p += "\n  </ul>    \n</div>"
        }
        return __p
    }
}
, function(t, n, e) {
    function i(t, n) {
        t.css({
            width: t.parent().width() + "px"
        }),
        n && n.css({
            width: t.parent().width() + "px"
        })
    }
    function a(t) {
        function n() {
            setTimeout(function() {
                u = !1
            }
            , 500)
        }
        i(t);
        var e = t.parent().offset().top
          , a = t.find("a")
          , l = t.clone();
        l.css({
            display: "none"
        }).removeAttr("id").find("li").removeClass("last");
        var s = {};
        if (s = window.PRODUCT_CONFIGS.navAddOn) {
            l.append('<li class="buy-configs last"><a data-spm-click="gostr=/aliyun;locaid=' + s.spm + '" target="_blank" href="' + s.link + '">' + s.text + "</a></li>");
            var o = l.find("li");
            o.css({
                width: (100 / (a.size() + 1)).toFixed(2) - .01 + "%"
            })
        }
        t.before(l);
        var d, r = function() {
            d = [],
            $.each(a, function(t, n) {
                var e = $(n)
                  , i = e.attr("href");
                d.push($(i).offset().top)
            }
            ),
            o.click(function() {
                u = !0,
                $(this).addClass("active").siblings().removeClass("active"),
                n()
            }
            )
        }
        ;
        r(),
        a.eq(0).parent().addClass("active"),
        $(window).on("resize", function() {
            r(),
            i(t, l)
        }
        );
        var c = function(t) {
            o.eq(t).addClass("active").siblings().removeClass("active")
        }
          , u = !1;
        $(window).scroll(function() {
            var n = $(document).scrollTop();
            n >= e && (l.fadeIn().addClass("fix"),
            t.hide()),
            e > n && (l.hide().removeClass("fix"),
            t.show()),
            u || $.each(d, function(t, e) {
                n + 50 >= e && c(t)
            }
            )
        }
        )
    }
    e(62);
    var l = e(64)
      , s = ["<%for(var i =0,len = tabs.length;i<len;i++){%>", '<% var liClass = i == len -1 ? "last" : "" %>', '<li style="width:<%= tabsWidth %>" class="<%= liClass %>">', '<a href="#<%= tabs[i].link %>" data-spm-click="gostr=/aliyun;locaid=<%= tabs[i].spm %>"><%= tabs[i].name %></a>', "</li>", "<% } %>"];
    t.exports = function(t) {
        if (t && t.length) {
            var n = $("#J-product-tab")
              , e = l(s.join(""), {
                tabs: t,
                tabsWidth: (100 / t.length).toFixed(2) - .01 + "%"
            });
            n.html(e),
            a(n)
        }
    }
}
, function(t, n) {}
, , function(t, n) {
    function e(t) {
        return null  == t ? "" : ("" + t).replace(d, function(t) {
            return o.escape[t]
        }
        )
    }
    var i = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }
      , a = /(.)^/
      , l = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , s = /\\|'|\r|\n|\t|\u2028|\u2029/g
      , o = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    }
      , d = new RegExp("[" + ["&", "<", ">", '"', "'"].join("") + "]","g");
    t.exports = function(t, n, o) {
        var d;
        o = $.extend({}, o, i);
        var r = new RegExp([(o.escape || a).source, (o.interpolate || a).source, (o.evaluate || a).source].join("|") + "|$","g")
          , c = 0
          , u = "__p+='";
        t.replace(r, function(n, e, i, a, o) {
            return u += t.slice(c, o).replace(s, function(t) {
                return "\\" + l[t]
            }
            ),
            e && (u += "'+\n((__t=(" + e + "))==null?'': strEscaper(__t))+\n'"),
            i && (u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
            a && (u += "';\n" + a + "\n__p+='"),
            c = o + n.length,
            n
        }
        ),
        u += "';\n",
        o.variable || (u = "with(obj||{}){\n" + u + "}\n"),
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            d = new Function(o.variable || "obj","strEscaper",u)
        } catch (p) {
            throw p.source = u,
            p
        }
        if (n)
            return d(n, e);
        var _ = function(t) {
            return d.call(this, t)
        }
        ;
        return _.source = "function(" + (o.variable || "obj") + "){\n" + u + "}",
        _
    }
}
, function(t, n, e) {
    t.exports = e.p + "./images/arrow-down_95784590bead924200366d6a5d8924e3.png"
}
, function(t, n, e) {
    t.exports = e.p + "./images/arrow-down-active_047a0ef47723f91803dca4eeb39baf6f.png"
}
, function(t, n, e) {
    t.exports = e.p + "./images/arrow-top_90dfcb8a86aa2de229e661214c44aedd.png"
}
, function(t, n, e) {
    t.exports = e.p + "./images/arrow-top-active_2fa0566e1501d09f2a94773063985e78.png"
}
, function(t, n) {}
, , function(t, n) {}
, , function(t, n) {}
]);
