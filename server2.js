var http=require('http');
console.log(global.process.env.port)
var port=process.env.PORT||8888;
http.createServer((req,res)=>{
    console.log(port)
}).listen(port,function(){
    console.log('server start at port:'+port)
})
