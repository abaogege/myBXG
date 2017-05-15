define(['jquery', 'tool', 'nprogress','template', 'aside', 'header', 'datepicker', 'datepickerLang','jqueryForm'],
function ($,abaoTools,NProgress,temp) { 
    //确认是否登录并处理
    abaoTools.jumpToLogin();

    //nprogress渲染
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 1000);


    //loading处理
    abaoTools.loading();



    //获取数据并渲染页面
    $.ajax({
        url:"/v6/teacher/edit",
        type:"get",
        data:{
            "tc_id":location.search.slice(1)
        },
        success:function (data) { 
            $("#tc-edit-form").html(temp("tc-edit-temp",data.result))
            console.log(data);

            //加载datepicker
            $("input[name=tc_join_date]").datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: '1970-01-01',
            endDate: new Date()
        })
        }
    })

    //表单提交监听
    $("#tc-edit-form").ajaxForm({
        data:{"tc_id":location.search.slice(1)},
        success:function (data) {  
            location.href="/html/teacher/list.html"
        }

    })

 })