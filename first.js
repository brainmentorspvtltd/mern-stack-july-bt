// Node JS - Wrapper Function
// function(require, __filename, __dirname){
//     var a = 10;
// console.log('Hello Node JS');
// }
//console.log(arguments);
const os = require('os');
const fs = require('fs');
console.log('Before Read');
//fs.readFile(__filename, (err, content)=>{
// fs.readFile('/Volumes/Amit-Big/dp-ques/02-MCP.mp4', (err, content)=>{
//     if(err){
//         console.log('File Not found...');
//     }
//     else{
//         console.log('Data is ', content);
//        // console.log('Data is ', content.toString());
//     }
// }) // async
const stream = fs.createReadStream('/Volumes/Amit-Big/dp-ques/02-MCP.mp4');
stream.on('open', ()=>{
    console.log('Stream Open...');
})
stream.on('data', chunk=>{
    console.log('Data ', chunk);
})
stream.on('end', ()=>{
    console.log('File Ends');
})
stream.on('close', ()=>{
    console.log('Stream Close')
})

console.log('After Read')
console.log(__dirname);
console.log(__filename);
console.log(os.cpus().length);