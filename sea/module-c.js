// module-c
define(function (require, exports, module) {
  debugger;
  var hello = function (name) {
    return name;
  };
  // 我们将 hello 函数导出为模块的公共接口
  exports.hello = hello;
});
