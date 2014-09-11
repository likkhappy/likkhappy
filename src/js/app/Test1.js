/**
 * @author:likk | likeke@luole.cc
 * @date:2014/9/9
 * @history:
 */
define(function (require, exports, module) {
//      alert('Test1');
    var $ = require('$');
    console.log(module);

    function clickFn(){
        alert('hello');
    }
    var obj ={
        clic:clickFn
    }

    $('#btn').bind('click',function(){
        alert('btn');
    });
    return obj;
});