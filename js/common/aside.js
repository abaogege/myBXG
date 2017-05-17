define(['jquery','cookie'],function ($) { 
    //处理左上角用户信息(头像+名字)
    $(".profile img").attr("src",JSON.parse($.cookie("userInfo")||"{}").tc_avatar);
    $(".profile h4").html(JSON.parse($.cookie("userInfo")||"{}").tc_name);

    //课程管理下拉
    $("#cs-manager").on("click",function () {  
        $("#cs-manager-list").slideToggle();
    });

   

    //焦点处理
    var asideO = {
        //home
        '/':'/',
        '/html/index.html':'/',
        '/html/home/settings.html':'/',
        '/html/home/repass.html':'/',

        //teacher
        '/html/teacher/add.html':'/html/teacher/list.html',
        '/html/teacher/edit.html':'/html/teacher/list.html',
        '/html/teacher/list.html':'/html/teacher/list.html',
        //course
        '/html/course/add.html':'/html/course/add.html',
        '/html/course/course_add_step1.html':'/html/course/add.html',
        '/html/course/course_add_step2.html':'/html/course/add.html',
        '/html/course/course_add_step3.html':'/html/course/add.html',

        '/html/course/list.html':'/html/course/list.html',
        '/html/course/category_list.html':'/html/course/category_list.html',
        '/html/course/category_add.html':'/html/course/category_list.html',
        //user
        '/html/user/list.html':'/html/user/list.html',
        '/html/user/profile.html':'/html/user/list.html',

    }


    $(".aside a ").removeClass("active").filter("[href='"+asideO[location.pathname]+"']").addClass("active");

 })