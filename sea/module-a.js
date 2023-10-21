// module-a
define(function (require, exports, module) {
  var loop = function () {
    for (var i = 0; i < 10; i++) {
      console.log("hello");
    }
  };
  loop();
  //! b模块会被提前下载，但并不执行里面的工厂函数
  debugger;
  const b = require("./module-b.js");
  b.hello();

  var hello = function (name) {
    return name;
  };
  // 我们将 hello 函数导出为模块的公共接口
  exports.hello = hello;
});
