// module-b
define(function (require, exports, module) {
  //写一个循环10000次的循环函数
  const c = require("./module-c.js");
  var hello = function () {
    return c.hello() + "b";
  };
  // 我们将 hello 函数导出为模块的公共接口
  exports.hello = hello;
});
