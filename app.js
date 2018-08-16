//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  onError: function (msg) {
    console.log(msg)
  },
//监听小程序显示
  onShow: function (options) {
  
  },
  //监听小程序隐藏
  onHide: function () {

  },
  globalData: {
    defaultCity: '',
    defaultCounty: '',
    weatherData: '',
    air: '',
    day: '',
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    doubanBase: "https://api.douban.com",
    heWeatherBase: "https://free-api.heweather.com",
    juhetoutiaoBase: "https://v.juhe.cn/toutiao/index",
    tencentMapKey: "KPBBZ-Q3HKU-RUSVG-4PIXM-PFA6H-WYBOG",
    heWeatherKey: "4a817b4338e04cc59bdb92da7771411e",
    juhetoutiaoKey: "a9f703a0200d68926f707f3f13629078",
    curBook: ""
  }
  
})

