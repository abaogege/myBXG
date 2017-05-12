define(['jquery'],function ($) {
   
    $("#signout").on("click",function(){
        $.ajax({
            url:"/v6/logout",
            type:"post",
            success:function () {  
                location.href = '/html/home/login.html'
            }
        })
    })
})