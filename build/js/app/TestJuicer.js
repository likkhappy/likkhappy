/**
 * @author:likk | likeke@luole.cc
 * @date:2014/9/3
 * @history:
 */
define("app/TestJuicer", [ "../lib/JuicerTemplate", "template/test.html", "template/test.html" ], function(require, exports, module) {
    var juicer = require("../lib/JuicerTemplate");
    var data = {
        list: [ {
            name: "guokai",
            show: true
        }, {
            name: "benben",
            show: false
        }, {
            name: "dierbaby",
            show: true
        } ],
        blah: [ {
            num: 1
        }, {
            num: 2
        }, {
            num: 3,
            inner: [ {
                time: "15:00"
            }, {
                time: "16:00"
            }, {
                time: "17:00"
            }, {
                time: "18:00"
            } ]
        }, {
            num: 4
        } ]
    };
    var obj = function() {
        var self = this;
        $.extend(self, {
            temp: require("template/test.html"),
            f1: function() {
                console.log("abc=========TestJuicer");
            }
        });
    };
    var tpl = require("template/test.html");
    //    console.log(tpl);
    //    var o = new obj();
    //    o.f1();
    //    console.log(o.temp);
    var html = juicer(tpl, data);
    console.log(html);
    $("body").append(html);
});