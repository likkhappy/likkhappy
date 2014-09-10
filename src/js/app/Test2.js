/**
 * @author:likk | likeke@luole.cc
 * @date:2014/9/9
 * @history:
 */
define(function (require, exports, module) {
    var $ = require('$');
    var obj = function(){
        var self = this;
        $.extend(self,{
            init:function(){
                self.step1();
                alert('hello');
            },
            step1:function(){
                alert('step1');
            }
        });
    }
    return obj;
});