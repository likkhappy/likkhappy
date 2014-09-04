/**
 * Created with JetBrains WebStorm.
 * User: KENNALI
 * Date: 14-8-11
 * Time: 下午4:12
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(grunt){

    var config = grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg:config,
        clean:{
            build:{
                src:['<%= pkg.build_path%>']
            }
        },

        transport:{
            options:{
                paths:config.src_path+config.js_path,
                alias:'<%=pkg.sea.alias%>',
                debug:false
            },
            all:{
                files:[{
                    expand:true,//智能搜索
                    cwd:config.src_path+config.js_path,//目标路径
                    src:['**/*.js','!seajs/*'] ,// 目标文件
//                    src:'**/**/*.*',
                    dest:config.build_path + config.js_path//生成到哪
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
        }

    });
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-cmd-transport");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-hashmap');

    grunt.registerTask("default_clean",["clean:build"]);
    grunt.registerTask("default",["transport:all"]);
    grunt.registerTask("uglify_js",["uglify:all"]);
    grunt.registerTask("default_hashmap",['hashmap:js']);
    grunt.registerTask('default_temp',['transport:temp']);

    grunt.registerTask('map',["clean:build","transport:all",'hashmap:js']);

}