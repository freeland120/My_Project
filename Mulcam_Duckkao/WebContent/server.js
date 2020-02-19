const http = require('http');

const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('./landingpage.html',(err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });

}).listen(5050,()=>{
    console.log('5050포트에서 서버 대기 중입니다!');
});