define(['jquery','tool','nprogress','aside','header','jqueryForm'],
function ($,abaoTools,NProgress) { 
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

    $("#cs-add-step1-form").ajaxForm({
        data:{
            "cs_id":location.search.slice(1),
        },
        success:function (data) { 
            location.href='/html/course/course_add_step2.html?'+data.result.cs_id
         }
        
    })
 })