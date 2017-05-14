define(['jquery','tool','nprogress','aside','header','bootstrap'],
function ($,Tool,NProgress) { 
    //确认是否登录并处理
    abaoTools.jumpToLogin();

     //nprogress渲染
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 1000);

    //ajaxLoading处理
        abaoTools.loading();


        

 })