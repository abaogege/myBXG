
var abaoTools = {
/**
 * @constructor  年龄算法
 * @param { birthday } String
 * 
 * 
 */
getAge:function (bthDay) {  
   return parseInt((new Date()).toLocaleDateString())-parseInt(bthDay)
}
}