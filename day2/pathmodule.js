const { log } = require("console");
const myPath = require("path");

const a1 = myPath.basename("C:\\temp\\myfile.html");
const a2 = myPath.dirname("C:\\temp\\myfile.html");
const a3 = myPath.extname(__filename)
console.log(a1)
console.log(a2)
console.log(a3)