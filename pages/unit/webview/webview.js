var app = getApp(), screenWidth = 0, screenHeight = 0, screenWidth1 = 0, screenHeight1 = 0, screenWidth2 = 0, screenHeight2 = 0;

Page({
    data: {},
    onLoad: function(t) {
        console.log(t);
        var e = this;
                e.setData({
                    vr: t.vr
                });
    },
    canvas: function(t) {
        var e = this;
        console.log(t), wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 400,
            height: 200,
            destWidth: 400,
            destHeight: 600,
            canvasId: "firstCanvas",
            success: function(t) {
                console.log(t), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                }), e.setData({
                    tempFilePath: t.tempFilePath
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: wx.getStorageSync("color"),
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});