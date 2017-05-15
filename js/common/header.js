define(['jquery'],function ($) {
   //退出按钮逻辑
    $("#signout").on("click",function(){
        $.ajax({
            url:"/v6/logout",
            type:"post",
            success:function () {  
                location.href = '/html/home/login.html'
            }
        })
    })

    //个人中心
    // $("#header-setting").on("click",function () { 
    //     $.ajax({
    //         url:"/v6/teacher/profile"
    //     })
    //  })
})