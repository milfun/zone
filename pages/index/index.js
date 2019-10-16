//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    menu: [
      {name:'好吃的',src:'../public/images/rice.png'},
      { name: '熊孩子', src: '../public/images/toy.png' },
      { name: '去哪玩', src: '../public/images/car.png' },
      { name: '变美啦', src: '../public/images/beauty.png' },
      { name: '商户入驻', src: '../public/images/imin.png' }]
  },
  onLoad: function() {
    
  },
  onShareAppMessage: function(res) { //用户的分享
    var that = this
    return {
      title: '玩转福清-本地生活娱乐平台',
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
    hddb: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
  onShow: function() {
   
  },
  goshop:function(){
    wx.navigateTo({
      url: '../shop/shop',
    })
  },
  // 下拉刷新回调接口
  onPullDownRefresh: function() {
    this.onLoad()
    this.onShow()
    wx.stopPullDownRefresh()
  },
})