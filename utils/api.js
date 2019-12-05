var md5 = require('./md5.js')
var MD5 = md5.MD5
  
var appid = xxx //按需填写
var key = xxx //按需填写
var salt = Date.now()

var api = function (query,from,to){
  var sign = MD5(`${appid}${query}${salt}${key}`)

  return new Promise(function(resolve,reject){
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q: query,
        from: from,
        to: to,
        appid,
        salt,
        sign,
      },
      success(res) {
        if(res.data.trans_result){

          //resolve函数的作用是在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
          resolve(res.data.trans_result[0])

        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

//暴露接口
module.exports.api = api