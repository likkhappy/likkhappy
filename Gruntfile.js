/**
 * Created with JetBrains WebStorm.
 * User: KENNALI
 * Date: 14-8-11
 * Time: 下午4:12
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(grunt){

    var config = grunt.file.readJSON('package.json');
    console.log(config.sea.alias);
    grunt.initConfig({
        pkg:config,
        clean:{
            build:{
                src:['<%= pkg.build_path%>']
            },
            dist:{
                src:['<%= pkg.dist_path%>']
            }
        },

        transport:{
            all:{
                options:{
                    paths:[config.src_path+config.js_path],
//                    alias:{"$":"core/jquery"},
                    alias:"<%= pkg.sea.alias %>",
                    debug:false
                },
                files:[{
                    expand:true,//智能搜索
                    cwd:config.src_path+config.js_path,//目标路径
                    src:['**/*.js','!seajs/*'] ,// 目标文件
//                    src:'**/**/*.*',
                    dest:config.build_path+config.js_path//生成到哪
                }]
            },
            // 生成可用的.js模板
            temp:{
                files:[{
                    expand:true,
                    cwd:config.src_path+config.js_path,
                    src:['template/**/*.html'],
                    dest:config.src_path+config.js_path
                }]
            }
        },
        //配置合并js，目前不合并模块依赖
        concat:{
            dist:{
                options:{
                    paths:[config.src_path+config.build_path]
                },
                files:{
                    'build/js/tmp/a.js':['build/js/lib/JuicerTemplate.js','build/js/lib/SwfUpload.js']
                }
            }
        },
        //压缩js
        uglify:{
            all:{
                files:[{
                    expand:true,
                    cwd:config.build_path+config.js_path,
                    src:['**/*.js', '!**/*-debug.js'],
                    dest:config.dist_path+config.js_path
                }]
            }
        },
        //生成hash文件
        hashmap:{
            options:{
                output:'./hash.json',//文件生成地址
                merge:true
            },
            js:{
                cwd:config.build_path+config.js_path,
                src:['**/*.js']
            }
        },
        //copy  seajs文件夹
        copy:{
            seajs:{
                expand:true,
                cwd:config.src_path+config.js_path,
                src:"seajs/**/*.js",
                dest:config.build_path+config.js_path
            }
        }

    });
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-cmd-transport");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-hashmap');

    //清空所有的非工作目录
    grunt.registerTask("default_clean",["clean:build","clean:dist"]);

    //本地传到测试目录  ====>  提取模块中的依赖
    grunt.registerTask("default_trans",["transport:all"]);
    //seajs模块的复制  ====>  seajs 没有模块依赖的提取
    grunt.registerTask("default_copy",['copy:seajs']);
    //测试传到线上目录 ====>  压缩、合并
    grunt.registerTask("default_ugli",["uglify:all"]);
    //生成对应的hash值
    grunt.registerTask('default_map',['hashmap:js']);


    //本地环境  ====>  .html 转变为 .js文件
    grunt.registerTask('default_temp',['transport:temp']);

    // 第一次创建测试目录
    grunt.registerTask("first-test",["clean:build","transport:all",'copy:seajs']);
    //非第一次创建
    grunt.registerTask("test",["transport:all"]);

    //合并文件
    grunt.registerTask('default',['concat:dist']);

    //第一次创建线上目录
    grunt.registerTask("first-line",["clean:dist","uglify:all",'hashmap:js']);
    //非第一次
    grunt.registerTask("line",["uglify:all",'hashmap:js']);
    grunt.registerTask('default',["concat:dist"]);

    // src-build-line
    grunt.registerTask("all",["clean:build","clean:dist","transport:all",'copy:seajs',"uglify:all",'hashmap:js']);

	
	
	
	
}