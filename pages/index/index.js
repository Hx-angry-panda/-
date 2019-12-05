//index.js
//获取应用实例
const app = getApp()

//导入 app.js 模块
var apiJS = require('../../utils/api.js')
//给 app.js 中 函数 api 赋值
var api = apiJS.api

Page({
  data: {
    query: '',
    result: '',
    curLang: '',
    clear: false
  },

  // bindinput 绑定 textarea 表单组件
  input: function(e){
    this.setData({ query: e.detail.value})
    this.setData({ clear: true})
  },

  // bindtap 绑定事件
  onConfirm: function(){
    api(this.data.query, 'auto', this.data.curLang.lang)
    .then(res => { 
      this.setData({ 'result': res.dst})

      //获取 history 数据缓存，第一次设置为空数组
      let history = wx.getStorageSync('history') || []
      
      //把数据设置到数组 history
      history.unshift({query: this.data.query, result: this.data.result})

      if(history.length > 10){
        history.length = 10
      }

      //设置 key 为 history 的数据缓存，value 为 history数组
      wx.setStorageSync('history', history)

      })
    
    
  },
  clearInput: function () {
    this.setData({ query: '' })
    this.setData({ clear: false })
  },

  //监听小程序启动或切前台
  onShow: function(){
    this.setData({curLang: app.globalData.curLang})
  },

  //监听页面加载，options 为传递的参数
  onLoad: function(options){
    //console.log(options)

    //防止空数组传入 this.data.query 导致报错
    if (options.query){
      this.setData({ query: options.query })
    }   
  }   
})
