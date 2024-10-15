// module wraper function in node js 
// node js can wrap automatically every export function in this syntax 
// function (exports,require,module,___fileName , ___ dirName ){}
// you can also console thid function like this
// console.log(exports,module,__filename,__dirname);

let myIntro = require("./Second")
console.log("Hello World", myIntro)
// Now we can explore the node js function so you can see in new file which is existing on this function name 