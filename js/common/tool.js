// define(["jquery","cookie"],function () { 
//     var abaoTools = {
//         /**
//          * @constructor  年龄算法
//          * @param { birthday } String
//          * 
//          * 
//          */
//         getAge: function (bthDay) {
//             if (!bthDay) {
//                 return ""
//             }
//             return parseInt((new Date()).toLocaleDateString()) - parseInt(bthDay)
//         },


//         // /**
//         //  * @constructor ajax全局事件
//         //  * 
//         //  */
//         // ajaxGlobal:{
//         //     ajaxStart:function (fn) {  
//         //     $(document).on("ajaxStart",fn)
//         // },
//         //  ajaxStop:function (fn) {  
//         //     $(document).on("ajaxStop",fn)
//         //     },
//         //     },


//         /**
//          * @constructor showloading hideloading
//          * 
//          */
//         loading: function () {
//             $(document).on("ajaxStart", function () {
//                 $(".overlay").show()
//             }).on("ajaxStop", function () {
//                 $(".overlay").hide()
//             })

//         },


//         /**
//          * @constructor 跳转到login
//          */
//         jumpToLogin: function () {
//             //判断是否存在PHPSESSID
//             if (!$.cookie("PHPSESSID")) {
//                 location.href = '/html/home/login.html';
//             }
//             //判断userInfo ,如果不存在，发送登出请求，并且跳转到login
//             // if(!$.cookie("userInfo")){

//             // }
//         },
//         jumpToIndex: function () {
//             if (!!$.cookie("PHPSESSID")) {
//                 setTimeout(function () {
//                     location.href = '/';
//                 }, 500);
//             }
//         },
//         //起始函数
//         Start:function (arr) { 
//             for (var i = 0; i < arr.length; i++) {
//             this[arr[i]]();
//         }
//          }
//     }

//     // function Tool(arr) {
//     //     for (var i = 0; i < arr.length; i++) {
//     //         abaoTools[arr[i]]()
//     //     }

//     // };
//     return abaoTools;
//  })


    var abaoTools = {
        /**
         * @constructor  年龄算法
         * @param { birthday } String
         * 
         * 
         */
        getAge: function (bthDay) {
            if (!bthDay) {
                return ""
            }
            return parseInt((new Date()).toLocaleDateString()) - parseInt(bthDay)
        },


        // /**
        //  * @constructor ajax全局事件
        //  * 
        //  */
        // ajaxGlobal:{
        //     ajaxStart:function (fn) {  
        //     $(document).on("ajaxStart",fn)
        // },
        //  ajaxStop:function (fn) {  
        //     $(document).on("ajaxStop",fn)
        //     },
        //     },


        /**
         * @constructor showloading hideloading
         * 
         */
        loading: function () {
            $(document).on("ajaxStart", function () {
                $(".overlay").show()
            }).on("ajaxStop", function () {
                $(".overlay").hide()
            })

        },


        /**
         * @constructor 跳转到login
         */
        jumpToLogin: function () {
            //判断是否存在PHPSESSID
            if (!$.cookie("PHPSESSID")) {
                location.href = '/html/home/login.html';
            }
            //判断userInfo ,如果不存在，发送登出请求，并且跳转到login
            // if(!$.cookie("userInfo")){

            // }
        },
        jumpToIndex: function () {
            if (!!$.cookie("PHPSESSID")) {
                setTimeout(function () {
                    location.href = '/';
                }, 500);
            }
        },

        regionStrToArr:function (str) {  
            return str.split("|")
        }

    }

