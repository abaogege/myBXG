define(['jquery', 'tool', 'nprogress', 'aside', 'header', 'datepicker', 'datepickerLang','jqueryForm'],
    function ($, abaoTools, NProgress) {
        //确认是否登录并处理
        abaoTools.jumpToLogin();

        //nprogress渲染
        NProgress.start();
        setTimeout(function () {
            NProgress.done();
        }, 1000);


        //loading处理
        abaoTools.loading();

        //datepicker处理
        $("input[name=tc_join_date]").datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: '1900-01-01',
            endDate: new Date()
        })

        //ajaxForm 发送添加数据
        $("#tc-add-form").ajaxForm({
            success:function (data) {  
                console.log(data);
                // 完成跳转到list
                location.href="/html/teacher/list.html"
            }
        })


    })