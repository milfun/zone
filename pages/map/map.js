// map.js
var app = getApp()
Page({
  data: {
    markers: [{
      iconPath: "../public/images/123.png",
      id: 0,
      //112.525539	37.879103  106.592757	29.566121
      latitude: 30.983901-0.0064,//37.85829
      longitude: 104.290458-0.0064,//112.563061
      title: "南阳E动人才网",
      width: 46,
      height: 56,
      callout: { padding: 10, content: "南阳市盛世龙源西区9号楼503", borderRadius: 10, bgColor:"#FFFFFF", display:"ALWAYS" }
    }],
    companyInfo: {},
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    //console.log(e)
    wx.openLocation({
      latitude: this.data.companyInfo.map_y,
      longitude: this.data.companyInfo.map_x,
      name: this.data.companyInfo.companyname,
      scale: this.data.companyInfo.map_zoom
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    if (wx.showShareMenu) {
      wx.showShareMenu({
        withShareTicket: true
      })
    }
    app.func.setNaviColor()
    var that = this
    app.func.getCompanyInfo(options.id, function (res) {
      var arr = [{
        iconPath: "../public/images/123.png",
        id: 0,
        latitude: res.map_y,
        longitude: res.map_x,
        width: 20,
        height: 24,
        callout : { 
          content: res.companyname,
          display: "ALWAYS", 
          color:"#333333",
          bgColor:"#FFFFFF",
          padding:10,
          borderRadius:10,
        } 
      }]
      that.setData({
        companyInfo: res,
        markers: arr
      })
      console.log(that.data.markers)
      wx.setNavigationBarTitle({
        title: res.companyname,
      })
      wx.openLocation({
        latitude: that.data.companyInfo.map_y,
        longitude: that.data.companyInfo.map_x,
        name: that.data.companyInfo.companyname,
        scale: that.data.companyInfo.map_zoom
      })
      wx.hideLoading()
    })
  },
  // 下拉刷新回调接口
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
})
