require.config({
    baseUrl:'/',
    paths:{
        //common
        index:'/js/common/index',
        aside:'/js/common/aside',
        header:'/js/common/header',
        tool:'/js/common/tool',
        

        //course
        add:'/js/course/add',
        cgAdd:'/js/course/categort_add',
        cgList:'/js/course/categort_list',
        csAddStep1:'/js/course/course_add_step1',
        csAddStep2:'/js/course/course_add_step2',
        csAddStep3:'/js/course/course_add_step3',
        
        //home
        login:'/js/home/login',
        repass:'/js/home/repass',
        settings:'/js/home/settings',

        //teacher
        tcEdit:'/js/teacher/edit',
        tcList:'/js/teacher/list',       
        tcAdd:'/js/teacher/add',

        //user
        usList:'/js/user/list',
        usProfile:'/js/user/profile',

        //插件
        jquery:'/lib/jquery/jquery',
        bootstrap:'/lib/bootstrap/js/bootstrap',
        jqueryForm:'/lib/jquery-form/jquery.form',
        template:'/lib/artTemplate/template'
    },



    shim:{
        tool:{
            exports:'abaoTools'
        },
        bootstrap:{
            deps:["jquery"]
        }
    }
});


//定义一个对象储存每个网页对应的模块
var obj = {
        '/':'index',
        //common
        '/html/common/aside.html':'aside',
        '/html/common/header.html':'header',
        
        //course
        '/html/course/add.html':'add',  
        '/html/course/categort_add':'cgAdd',      
        '/html/course/categort-list.html':'cgList',   
        '/html/course/course_add_step1.html':'csAddStep1',      
        '/html/course/course_add_step2.html':'csAddStep2',     
        '/html/course/course_add_step3.html':'csAddStep3',
              
        //home
        '/html/home/login.html':'login',         
        '/html/home/repass.html':'repass',        
        '/html/home/settings.html':'settings',  
        

        //teacher
        '/html/teacher/edit.html':'tcEdit',           
        '/html/teacher/list.html':'tcList',          '/html/teacher/add.html':'tcAdd',   

        //user
        '/html/user/list.html':'usList',         
        '/html/user/profile.html':'usProfile',         
}


// 加载当前页面对应的模块名
require(
    [obj[location.pathname]]
,function () { 

 })