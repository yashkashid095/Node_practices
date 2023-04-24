// const fs=require("fs");
// const text=fs.readFileSync("./yash.txt",'utf-8');
// console.log(text);
// const textout=`this is what we now about to avocado:${text}.\ncreated on ${Date.now()}`;
// fs.writeFileSync("./output.txt",textout);
// creating server
const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(404,{
        'content-type':"html"
    });
   res.end("hellow buddy from the server"); 
})
server.listen(8080);