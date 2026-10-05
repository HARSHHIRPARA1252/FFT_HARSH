// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.end("Im node js server !!");

// });    
// server.listen(3000);
// console.log("http://localhost:3000");

// const http=require("http");
// const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     // res.end("Im 5000!!");
//     fs.readFile("sample.html",(err,data)=>{
//         res.end(data);        
//     });
// });    
// server.listen(3000);
// console.log("http://localhost:3000");
 

// const http=require("http");
// const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     // res.end("Im 5000!!");
//     fs.readFile("javascriptgradecalculator.html",(err,data)=>{
//         res.end(data);        
//     });
// });    
// server.listen(3000);
// console.log("http://localhost:3000");


const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    // res.end("Im 5000!!");
    fs.readFile("resumewebsite.html",(err,data)=>{
        res.end(data);        
    });
});    
server.listen(3000);
console.log("http://localhost:3000");