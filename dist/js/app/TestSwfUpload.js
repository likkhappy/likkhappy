define("app/TestSwfUpload",["lib/SwfUpload","util/swf/fileprogress","util/swf/handlers"],function(a){{var b=a("lib/SwfUpload"),c=(a("util/swf/fileprogress"),a("util/swf/handlers")),d={flash_url:"swfupload.swf",upload_url:"http://fzcc.bj.jiaoyuyun.com/fastdfs/upload",post_params:{PHPSESSID:""},file_size_limit:"100 MB",file_types:"*.*",file_types_description:"All Files",file_upload_limit:10,file_queue_limit:0,file_post_name:"Filedata",custom_settings:{progressTarget:"fsUploadProgress",cancelButtonId:"btnCancel"},debug:!0,button_image_url:"http://9dian.me/images/TestImageNoText_65x29.png",button_width:"65",button_height:"29",button_placeholder_id:"spanButtonPlaceHolder",button_text:'<span class="theFont">浏览</span>',button_text_style:".theFont { font-size: 16; }",button_text_left_padding:12,button_text_top_padding:3,file_queued_handler:c.fileQueued,file_queue_error_handler:c.fileQueueError,file_dialog_complete_handler:c.fileDialogComplete,upload_start_handler:c.uploadStart,upload_progress_handler:c.uploadProgress,upload_error_handler:c.uploadError,upload_success_handler:c.uploadSuccess,upload_complete_handler:c.uploadComplete,queue_complete_handler:c.queueComplete};new b(d)}});