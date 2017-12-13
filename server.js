var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var urlobj=url.parse(req.url,true)//把所有的内容转成对象
    // console.log(req.url,req.method);
        console.log(urlobj.query)
        var sum1=parseInt(urlobj.query.num1);
        var sum2=parseInt(urlobj.query.num2);
        var fu=urlobj.query.ysfu;
        var Num=0;
        if(fu=='+'){
           Num=sum1+sum2
        }else if(fu=='-'){
             Num=sum1-sum2
        }else if(fu=='*'){
            Num=sum1*sum2
        }else{
             Num=sum1/sum2
        }
        res.write(String(Num));
        res.end();
}).listen(8080,function(){
    console.log('server start at 8080')
})
