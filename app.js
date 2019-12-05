//app.js
App({
  onLaunch: function(){
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langlist[0]
  },
  globalData: {
    curLang: '',
    langlist: [
      {
        'chs': '英文',
        'lang': 'en',
        'index': 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        'index': 1
      },
      {
        'chs': '粤语',
        'lang': 'yue',
        'index': 2
      },
      {
        'chs': '文言文',
        'lang': 'wyw',
        'index': 3
      },
      {
        'chs': '日语',
        'lang': 'jp',
        'index': 4
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        'index': 5
      },
      {
        'chs': '法语',
        'lang': 'fra',
        'index': 6
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        'index': 7
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        'index': 8
      },
      {
        'chs': '越南语',
        'lang': 'vie',
        'index': 9
      }
    ]
  }
})