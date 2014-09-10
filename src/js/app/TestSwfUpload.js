/**
 * @author: likk | likeke@luole.cc
 * @date: 2014/9/5
 * @history:
 */
define(function (require, exports, module) {
    var swfUpload = require('lib/SwfUpload'),
        progress = require('util/swf/fileprogress'),
        handler = require('util/swf/handlers');
    var settings = {
        flash_url: "swfupload.swf",
        upload_url: "http://fzcc.bj.jiaoyuyun.com/fastdfs/upload",
        post_params: {"PHPSESSID": ""},
        file_size_limit: "100 MB",
        file_types: "*.*",
        file_types_description: "All Files",
        file_upload_limit: 10,  //配置上传个数
        file_queue_limit: 0,
        file_post_name: 'Filedata',
        custom_settings: {
            progressTarget: "fsUploadProgress",
            cancelButtonId: "btnCancel"
        },
        debug: true,

        // Button settings
        button_image_url: "http://9dian.me/images/TestImageNoText_65x29.png",
        button_width: "65",
        button_height: "29",
        button_placeholder_id: "spanButtonPlaceHolder",
        button_text: '<span class="theFont">浏览</span>',
        button_text_style: ".theFont { font-size: 16; }",
        button_text_left_padding: 12,
        button_text_top_padding: 3,

        file_queued_handler: handler.fileQueued,
        file_queue_error_handler: handler.fileQueueError,
        file_dialog_complete_handler: handler.fileDialogComplete,
        upload_start_handler: handler.uploadStart,
        upload_progress_handler: handler.uploadProgress,
        upload_error_handler: handler.uploadError,
        upload_success_handler: handler.uploadSuccess,
        upload_complete_handler: handler.uploadComplete,
        queue_complete_handler: handler.queueComplete
    };
    var swf = new swfUpload(settings);

});