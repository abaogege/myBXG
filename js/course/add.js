define(['jquery','bootstrap','header','aside','jqueryForm'], function($) {
    $("#submitLink").on("click",function(){
    $("form").ajaxSubmit({
        url:'/v6/course/create',
        type:'post',
        data:{
            "cs_name":$("input[type=text]").val(),
        },
        success:function (data) {
         location.href = 
          },
          error:function () {  
              console.log("失败");
          }
    })
    return false;
})
});