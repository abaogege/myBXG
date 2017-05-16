define(['jquery', 'tool', 'nprogress', 'template', 'aside', 'header', 'bootstrap', 'jqueryForm'],
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

        //渲染页面
        $.ajax({
            url: "/v6/course/basic",
            type: "post",
            data: {
                "cs_id": location.search.slice(1),
            },
            success: function (data) {
                console.log(data);
                $("#cg-info-box").html(temp("cg-info-temp", data.result));
            }
        })
        //课时list页面渲染
        $.ajax({
            url: "/v6/course/lesson",
            data: {
                "cs_id": location.search.slice(1),
            },
            type: "post",
            success: function (data) {
                console.log(data);
                $("#cg-list").html(temp("cg-list-temp", data.result))
            }
        });
        //添加课时
        $("#ct-add-btn").on("click", function () {
            $("#chapterModal h4").html("添加课时");
            $("#chapterModal #ct-btn").html("添 加");
            $("#ct-modal-body").html(temp("ct-modal-temp", {}))
        })

        //编辑课时
        $("#cg-list").on("click", ".ct-edit-btn", function () {
            $("#chapterModal h4").html("编辑课时");
            $("#chapterModal #ct-btn").html("保 存");
            $.ajax({
                url: "/v6/course/chapter/edit",
                type: "get",
                data: {
                    "ct_id": $(this).attr("ct-id")
                },
                success: function (data) {
                    console.log(data);
                    $("#ct-modal-body").html(temp("ct-modal-temp", data.result));
                }
            });


        })
        // 提交按钮处理
        $("#ct-btn").on("click", function () {
           var ctIsFree= $("#is-free:checked").length

            if ($(this).html() == "添 加") {
                $("#ct-modal-form").ajaxForm({
                    url: "/v6/course/chapter/add",
                    type: "post",
                    data: {
                        "ct_is_free":ctIsFree,
                        "ct_cs_id": location.search.slice(1)
                    },
                    success: function (data) {
                        alert("添加成功")
                      
                    }
                })
            }

            if ($(this).html() == "保 存") {
                $("#ct-modal-form").ajaxForm({
                    url: "/v6/course/chapter/modify",
                    type: "post",
                    data: {                      
                        "ct_is_free":ctIsFree,                        
                        "ct_cs_id": location.search.slice(1)
                    },
                    success: function (data) {
                        alert("修改成功")
                    }
                })
            }

            location.reload();
        })

    })