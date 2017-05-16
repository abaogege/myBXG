define(['jquery', 'tool', 'nprogress', 'template', 'aside', 'header', 'jqueryForm'],
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

        //渲染数据
        $.ajax({
            url: "/v6/course/basic",
            type: "post",
            data: {
                "cs_id": location.search.slice(1),
            },
            success: function (data) {
                console.log(data);
                $("#cg-info-box").html(temp("cg-info-temp", data.result));
                $("#cs-add-step1-form").html(temp("cs-add-step1-temp", data.result))

                $("#cs-add-step1-form").ajaxForm({
                    data: {
                        "cs_id": location.search.slice(1),
                    },
                    success: function (data) {
                        console.log(data);
                        location.href='/html/course/course_add_step2.html?'+data.result.cs_id
                    },
                    error:function (err) {
                        console.log(err);
                      }

                })
            }
        })


        //更新数据
        // $("#cs-add-step1-form").ajaxForm({
        //     data:{
        //         "cs_id":location.search.slice(1),
        //     },
        //     success:function (data) { 
        //         console.log(data);
        //         // location.href='/html/course/course_add_step2.html?'+data.result.cs_id
        //      }

        // })
    })