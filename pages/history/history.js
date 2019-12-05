//history.js

Page({
  data: {
    history: []
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({history: wx.getStorageSync('history')})
    console.log(this.data.history)
  },

  toindex: function(e){
    // console.log(e.currentTarget.dataset.query)

    //关闭所有页面，打开到应用内的某个页面，路径可以带参数
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  }

 
})