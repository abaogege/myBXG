define(['jquery', 'tool', 'nprogress', 'template', 'aside', 'header', 'uploadify', 'jcrop', 'jqueryForm'],
    function ($, abaoTools, NProgress, temp) {
        //确认是否登录并处理
        abaoTools.jumpToLogin();

        //nprogress渲染
        NProgress.start();
        setTimeout(function () {
            NProgress.done();
        }, 1000);


        //loading处理
        abaoTools.loading();

        // 设置下拉框
        $("#cs-manager-list").show()


        $.ajax({
            url: "/v6/course/basic",
            type: "post",
            data: {
                "cs_id": location.search.slice(1),
            },
            success: function (data) {
                console.log(data);
                $("#cg-info-box").html(temp("cg-info-temp", data.result));
                // $("#cs-add-step1-form").html(temp("cs-add-step1-temp", data.result))

                // $("#cs-add-step1-form").ajaxForm({
                //     data: {
                //         "cs_id": location.search.slice(1),
                //     },
                //     success: function (data) {
                //         console.log(data);
                //         location.href='/html/course/course_add_step2.html?'+data.result.cs_id
                //     },
                //     error:function (err) {
                //         console.log(err);
                //       }

                // })
            }
        })

        //uploadify插件
        $("#upfile").uploadify({
            swf: '/lib/uploadify/uploadify.swf',
            fileObjName: "cs_cover_original",
            formData: {
                "cs_id": location.search.slice(1)
            },
            uploader: "/v6/uploader/cover",
            fileTypeExts: '*.gif; *.jpg; *.png',
            buttonText: "选择图片",
            buttonClass: "btn btn-success btn-sm",
            itemTemplate:"<s></s>",
            width:70,
            onUploadSuccess: function (obj, data) {
                alert("上传成功");
                console.log(obj);
                console.log(data);
                console.log(JSON.parse(data));
                $("#cs-img").attr("src", (JSON.parse(data)).result.path);

                //裁剪按钮可点
                $("#cs-img-recover").removeAttr("disabled").on("click", function (e) {
                    e.preventDefault();
                    console.log($(this).html());

                    if ($(this).html() == "保存") {
                        //发送裁剪数据
                        $.ajax({
                            url: "/v6/course/update/picture",
                            type: "post",
                            data: {
                                "cs_id": location.search.slice(1),
                                "x": 0,
                                "y": 0,
                                "w": 300,
                                "h": 150
                            },
                            success: function () {
                                alert("保存成功！");
                                location.href="/html/course/course_add_step3.html?"+location.search.slice(1)
                            }
                        })
                    }


                    //点击启用jcrop插件
                    if ($(this).html() == "裁切图片") {
                        $(this).html("保存");
                        $("#cs-img").Jcrop({
                            aspectRatio: 0,
                            setSelect: [0, 0, 300, 150],
                            bgColor: 'black',
                        }, function () {

                        });
                    }


                    

                })



            }
        })



    })