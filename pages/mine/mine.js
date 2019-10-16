//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  onLoad: function () {

  },
  onShareAppMessage: function (res) { //用户的分享
    var that = this
    return {
      title: '玩转福清-本地生活娱乐平台',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  hddb: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },
  onShow: function () {

  },
  //加入合伙人
  join:function(){
    wx.navigateTo({
      url: '../sub/partern/partern',
    })
  },
  //加入VIP
  vip: function () {
    wx.navigateTo({
      url: '../sub/vip/vip',
    })
  },
  // 下拉刷新回调接口
  onPullDownRefresh: function () {
    this.onLoad()
    this.onShow()
    wx.stopPullDownRefresh()
  },
})