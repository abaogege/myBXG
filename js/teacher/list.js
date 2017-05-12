define(['jquery','template','tool','bootstrap','header','aside'],function ($,temp,tool) {
    //注册template函数
    temp.helper('getAge',tool.getAge) ;
    //数据渲染
    $.ajax({
        url:'/v6/teacher',
        type:'get',
        success:function (data) {  
            
            data.result.forEach(function (v,i,arr) {
                $("#tc-list-tbody").append(temp("tc-list-temp",v));
            // 将id和status绑定到元素上
                $($(".tc-caozuo")[i]).attr("tc-id",v.tc_id);
                $($(".tc-caozuo")[i]).attr("tc-status",v.tc_status);
               
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
        console.log(e.target);
        $.ajax({
           url:'/v6/teacher/handle',
           type:'post',
           data:{
                tc_id:$(e.target).parent().attr("tc-id"),
                tc_status: $(e.target).parent().attr("tc-status")
           },
           success:function (data) {           
                console.log(data.result.tc_status);
                // 将注销状态绑定在dom
                $(e.target).parent().attr("tc-status",data.result.tc_status);
                if(data.result.tc_status===0){
                     $(e.target).html("启 用")
                }else{
                     $(e.target).html("注 销")
                }
           }
       })
     })
})

