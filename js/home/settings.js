define(['jquery', 'template', 'nprogress', 'tool', 'bootstrap', 'header', 'aside', 'jqueryForm', 'datepicker', 'datepickerLang', 'region','uploadify'],
    function ($, temp, NProgress, abaoTools) {
        //确认是否登录并处理
        abaoTools.jumpToLogin();

        //nprogress渲染
        NProgress.start();
        setTimeout(function () {
            NProgress.done();
        }, 1000);

        //ajaxLoading处理
        abaoTools.loading();
        var tcId;

        temp.helper("toArr", abaoTools.regionStrToArr)
        //获取数据渲染页面
        $.ajax({
            url: "/v6/teacher/profile",
            post: "get",
            success: function (data) {
                console.log(data);
                $("#setting-form").html(temp("setting-temp", data.result));
                tcId = data.result.tc_id;

                //uploadify插件
                $("#upfile").uploadify({
                    swf: '/lib/uploadify/uploadify.swf',
                    fileObjName:"tc_avatar",
                    uploader:"/v6/uploader/avatar",
                    fileTypeExts: '*.gif; *.jpg; *.png',
                    buttonText:"",
                    onUploadSuccess:function (obj,data) { 
                        alert("上传成功");
                        console.log(obj);
                        console.log(data);
                        console.log(JSON.parse(data));
                        $("#tc-avatar-img").attr("src",(JSON.parse(data)).result.path)
                    }
                })

                //datepicker插件 
                $("#setting-bthday-input").datepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    startDate: '1900-01-01',
                    endDate: new Date()
                });

                $("#setting-joindate-input").datepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    startDate: '1970-01-01',
                    endDate: new Date()
                });

                //region插件
                $("#setting-region").region({
                    url: "/lib/jquery-region/region.json"
                });

                //保存按钮的逻辑
                $("#setting-form button[type = submit]").on("click", function () {
                    $("#setting-form").ajaxForm({
                        data: {
                            "tc_id": tcId,
                            "tc_province": $("#p").val(),
                            "tc_city": $("#d").val(),
                            "tc_district": $("#c").val(),
                            // "tc_hometwon":怎么处理？
                        },

                    })
                });

                
            }
        })




    })