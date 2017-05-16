define(['jquery', 'tool', 'nprogress', 'aside', 'header', 'jqueryForm'],
    function ($, abaoTools, NProgress) {

        //确认是否登录并处理
        abaoTools.jumpToLogin();

        //nprogress渲染
        NProgress.start();
        setTimeout(function () {
            NProgress.done();
        }, 1000);


        //loading处理
        abaoTools.loading();
        $("input[type=submit]").on("click", function () {

            if ($("#new-psw-input").val() === $("#new-psw-input-confirm").val() && $("#new-psw-input").val()) {

                $("#editpsw-form").ajaxSubmit({
                    success: function (data) {
                        alert("修改成功！请重新登录");
                        // 登出
                        $.ajax({
                            url: "/v6/logout",
                            type: "post",
                            success: function () {
                                location.href = '/html/home/login.html'
                            }
                        })
                    },
                    error: function (err, b, c) {
                        if (err.status === 403) {
                            alert("原密码错误")
                        }
                    }

                })




            }
            return false;
        })
    })