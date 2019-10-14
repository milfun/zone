//app.js
var commonFun = require('eat_fun.js')
var jobsFun = require('play_fun.js')

App({
  onLaunch: function () {
    
  },
  qscms: {},
  jobsListWhere:{
	  jobs:0
  },
  resumesListWhere:{
	  jobs:0
  },
  companyListWhere:{
	  jobs:0
  },
  location: {
    longitude: 0,
    latitude: 0
  },
  func: {
    
    req: commonFun.req,//http 请求
    o_req: commonFun.o_req,//http 请求
    o_upload: commonFun.o_upload,//http 请求

  },
  globalData: {
    
  }
})
