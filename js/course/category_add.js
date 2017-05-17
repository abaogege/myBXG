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

        //判断是添加还是编辑
        //添加
        if (!location.search) {
            getTop()
            $("#cg-manager-form").ajaxForm({
                success: function (data) {
                    location.href = "/html/course/category_list.html"
                }
            })
        }
        //编辑
        if (location.search) {
            $.ajax({
                url: "/v6/category/edit",
                type: "get",
                data: {
                    "cg_id": location.search.slice(1),
                },
                success: function (data) {
                    console.log(data);
                    $("#cg-manager-box").html(temp("cg-manager-temp", data.result))
                    //点击保存，发送数据
                    $("#cg-manager-form").ajaxForm({
                        success: function (data) {
                            location.href = "/html/course/category_list.html"
                        }
                    })
                }
            })
        }
        //获取顶级
        function getTop() {
            $.ajax({
                url: "/v6/category/top",
                type: "post",
                success: function (data) {

                    $("#cg-manager-top-box").html(temp("cg-manager-top", data));
                }
            })
        }
    })