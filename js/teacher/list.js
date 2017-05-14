define(['jquery','template','tool','nprogress','bootstrap','header','aside'],function ($,temp,tool,NProgress) {
    //注册template函数
    temp.helper('getAge',tool.getAge) ;

    var index = 0;
    // temp.defaults.imports.index = index;


     //确认是否登录并处理
    abaoTools.jumpToLogin();

    //nprogress渲染
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 1000);


    //loading处理
    abaoTools.loading();

    //数据渲染
    $.ajax({
        url:'/v6/teacher',
        type:'get',
        success:function (data) {             
            data.result.forEach(function (v,i,arr) {      
                // ++index;         
                
                $("#tc-list-tbody").append(temp("tc-list-temp",v));       
            });
        }
    })

    //给查看按钮添加逻辑
    $("#tc-list-tbody").on("click",".tc-list-check",function (e) {  
       $.ajax({
           url:'/v6/teacher/view',
           type:'get',
           data:{
                tc_id:$(e.target).parent().attr("tc-id")
           },
           success:function (data) { 
                $("#tc-list-checkbox").html(temp("tc-check-temp",data.result));
           }
       })
    })

    //给注销按钮添加逻辑
    $("#tc-list-tbody").on("click",".tc-list-status",function (e) {
        $.ajax({
           url:'/v6/teacher/handle',
           type:'post',
           data:{
                tc_id:$(e.target).parent().attr("tc-id"),
                tc_status: $(e.target).parent().attr("tc-status")
           },
           success:function (data) {           
                // 将注销状态绑定在dom
                $(e.target).parent().attr("tc-status",data.result.tc_status);
                //根据绑定的状态确定按钮的值
                if(data.result.tc_status===0){
                     $(e.target).html("启 用")
                }else{
                     $(e.target).html("注 销")
                }
           }
       })
     })
})

