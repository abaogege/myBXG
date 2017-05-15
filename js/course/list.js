define(['jquery','tool','nprogress','template','aside','header'],
function ($,abaoTools,NProgress,temp) { 
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


    //获取数据渲染页面
    $.ajax({
        url:"/v6/course",
        type:"get",
        success:function (data) { 
            console.log(data); 
            $("#cs-list").html(temp("cs-list-temp",data))
            
        }
    })

 })