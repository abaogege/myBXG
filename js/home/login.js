define(['jquery', 'nprogress', 'tool', 'jqueryForm', 'cookie'], function ($, NProgress, Tools) {
    //判断是否有cookie并处理
    abaoTools.jumpToIndex()
    
    //nprogress渲染
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 1000);

// console.log(Tools);
    
    //loading处理
    abaoTools.loading();
    // Tools.Start(
    //     ['loading','jumpToIndex']
    // );
    //提交登录数据
    $("form").on("submit", function () {
        $(this).ajaxSubmit({
            url: '/v6/login',
            type: 'post',
            data: {
                "tc_name": $("input[type=text]").val(),
                "tc_pass": $("input[type=password]").val()
            },
            success: function (data) {
                //cookie
                $.cookie("userInfo", JSON.stringify(data.result), {
                    path: "/",
                    expires:2,
                    // max-age: 3600*1000
                });
                //跳转
                setTimeout(function () {
                    location.href = '/'
                }, 1000);
            },
            error: function () {
                console.log("失败");
            }
        })
        return false;
    })

})