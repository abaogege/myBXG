define(['jquery', 'tool', 'nprogress', 'template', 'aside', 'header'],
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
        $("#cs-manager-list").show();

        // //获取数据渲染页面
        // $.ajax({
        //     url: "/v6/category/top",
        //     type: "get",
        //     success: function (data) {
        //         console.log(data);
        //         $("#cg-list").html(temp("cg-list-top-temp", data));
        //         $("tr[class=active]").each(function (index, ele) {
        //             $.ajax({
        //                 url: "/v6/category/child",
        //                 type: "get",
        //                 data: {
        //                     cg_id: $(ele).find("a").attr("data-id")
        //                 },
        //                 success: function (data) {
        //                     console.log(data);
        //                     $(ele).after(temp("cg-list-childs-temp", data));
        //                 }
        //             })
        //         })
        //     }
        // });

        $.ajax({
            url:"/v6/category",
            type:"post",
            success:function (data) {  
                console.log(data);
                $("#cg-list").html(temp("cg-list-top-temp", data));
            }
        })

    })