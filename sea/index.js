// 在另一个文件中，我们可以使用 seajs.use 来加载并使用这个模块
seajs.use("./module-a.js", function (module) {
  var greeting = module.hello("a");
  console.log(greeting); //
});

// setTimeout(() => {
//   seajs.use("./module-c.js", function (module) {
//     var greeting = module.hello("c");
//     console.log(greeting); //
//   });
// }, 2000);
