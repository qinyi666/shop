/**
 * Created by 橘子到底酸不酸 on 2017/10/18.
 */
var gulp=require("gulp");

var webserver=require("gulp-webserver");
var fs=require("fs");
var url=require("url");
var path=require("path");
gulp.task("servers",function(){
    gulp.src('./Data')
        .pipe(webserver({
            host:"localhost",
            port:8080,
            livereload:true,
            directoryListing:{
                path:"./",
                enable:true
            },
            middleware:function(req,res,next){
                var urls=url.parse(req.url);
                var mockFile=path.join(__dirname,"Data",urls.query+".json");
                fs.exists(mockFile,function(exist){
                    if(!exist){
                        res.writeHead(404,{
                            "Content-type":"text/json;charset=utf8"
                        });
                        res.end("Request i invalid");
                    }
                    fs.readFile(mockFile,function(err,data){
                        if(err) return console.error(err);
                        res.writeHead(200,{
                            "Content-type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        console.log(data)
                        res.end(data.toString());
                    })
                })
            }
        }))
})

