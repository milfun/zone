
/* 
* 获取网站配置信息
*/
function getIndexNotice(cb) {
  var app = getApp()
  app.func.req('c=WxPublic&a=index_notice', {}, function (res) {
    return typeof cb == "function" && cb(res.data)
  })
}

module.exports = {
  getIndexNotice: getIndexNotice,
}  