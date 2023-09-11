const readline =  require('readline');
const fs = require('fs');

// I couldn't get the commented code below to work 


// fs.readFile('./Files/start.txt','utf-8',(error1,data1) =>{
//     console.log(data1); // start.txt contains the word "input"
//     fs.readFile(`./Files/${data1}.txt`,`utf-8`, (error2,data2) => {
//         console.log(data2);
//         fs.readFile(`./Files/append.txt`,`utf-8`,(error3,data3) => {
//             console.log(data3);
//             fs.writeFile(`./Files/output.txt`, `${data2}\n\n${data3}\n\nDate Created :${new Date}`), () => {
//                 console.log('File written successfully');
//             }
//         })
//     })
//  } )
// console.log('Reading File...');


// This one below also didn't work

const http = require('http');

//To create a server
const server = http.createServer((request,response) => {
    console.log('A new request has been received');
});

//To start a server
server.listen(5500,'127.0.0.1', () => {
    console.log('The server has started');
})
