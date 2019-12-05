const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: app.globalData.langlist,
    curLang: {}
  },
  choose: function(e){
    app.globalData.curLang = e.currentTarget.dataset
    this.setData({curLang: e.currentTarget.dataset})

    //将数据同步存储在本地缓存中指定的 key 中。
    wx.setStorageSync('language', e.currentTarget.dataset)

    //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  onShow: function () {
    this.setData({curLang: app.globalData.curLang})
  },

})