
const fs = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })
// console.log("Finished reading file");

// out put in this code you can see non blocking scope is used first (last console is prent then when call back is ready to
// run then call back is run )

// Finished reading file
// [Error: ENOENT: no such file or directory, open 'd:\Node.js\day3\file.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'd:\\Node.js\\day3\\file.txt'

// ****** if yiu want to block read file so you use   " Sync "

const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("Finshed reading file")

// ********************* Writfile function have same functionlaties lie blocking and non blocking 

fs.writeFile("file.txt","Now Explore Some New Concept of backend and enjoy ",()=>{
    console.log("Writting is done ");
});
console.log("Write file function is done");
// you can see in my txt file there is add text which i am write 