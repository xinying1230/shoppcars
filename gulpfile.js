/**
 * Created by 12345 on 2017/10/14.
 */
var gulp=require("gulp");
var fs=require("fs");
var url=require("url");
var path=require("path");
var concat=require("gulp-concat");
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var web=require("gulp-webserver");
gulp.task('Search',function(){
    gulp.src('./Data')
        .pipe(web({
            port:9090,
            host:'localhost',
            livereload:true,
            directoryListing:{
                path:"./",
                enable:true
            },
            middleware: function (req, res, next) {
                var Urls=url.parse(req.url);
                var mocks=path.join(__dirname,'Data',Urls.query+'.json');
                fs.exists(mocks,function (exist) {
                    if(!exist){
                        res.writeHead(404,{
                            "Content-type":"text/json;charset=utf8"
                        });
                        res.end("……");
                    }
                    fs.readFile(mocks, function (err, data) {
                        if(err) return console.error(err);
                        res.writeHead(200,{
                            "Content-type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        });
                        res.end(data.toString());
                    })
                })
            }
        }))
});

