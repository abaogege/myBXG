define(['jquery','bootstrap','header','aside','jqueryForm'], function($) {
    //处理下拉框
    $("#cs-manager-list").show()

    //提交创建课程数据
    $("#submitLink").on("click",function(){
    $("form").ajaxSubmit({
        url:'/v6/course/create',
        type:'post',
        data:{
            "cs_name":$("input[type=text]").val(),
        },
        success:function (data) {
            // console.log(data);
            location.href='/html/course/course_add_step1.html?'+data.result.cs_id
          },
          error:function () {  
              console.log("失败");
          }
    })
    return false;
})
});