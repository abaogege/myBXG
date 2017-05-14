define(['jquery','tool','nprogress','aside','header'],
function ($,abaoTools,NProgress) { 
    //确认是否登录并处理
    abaoTools.jumpToLogin();

    //nprogress渲染
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 1000);


    //loading处理
    abaoTools.showLoading();
    abaoTools.hideLoading();




 })