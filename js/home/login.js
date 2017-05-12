define(['jquery','jqueryForm'],function($){

$("form").on("submit",function(){
    $(this).ajaxSubmit({
        url:'/v6/login',
        type:'post',
        data:{
            "tc_name":$("input[type=text]").val(),
            "tc_pass":$("input[type=password]").val()
            // "tc_name":"前端学院",
            // "tc_pass":"123456"
        },
        success:function (data) {
            setTimeout(function() {
                location.href='/'    
            }, 1000);
          },
          error:function () {  
              console.log("失败");
          }
    })
    return false;
    })
})