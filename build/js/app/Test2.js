/**
 * @author:likk | likeke@luole.cc
 * @date:2014/9/9
 * @history:
 */
define("app/Test2", [ "core/jquery" ], function(require, exports, module) {
    var $ = require("core/jquery");
    var obj = function() {
        var self = this;
        $.extend(self, {
            init: function() {
                self.step1();
                self.step2();
                alert("hello");
            },
            step1: function() {
                alert("step1");
            },
            step2: function() {
                alert("step2");
            }
        });
    };
    return obj;
});