const TOKEN = 'token';

App({
  globalData: {
    token: ''
  },
  onLaunch: function() {
    const token = wx.getStorageSync(TOKEN)

    if(token && token.length !== 0) {
      this.check_token(token)
    } else {
      this.login()
    }
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "post",
      header: {
        token
      },
      success(res) {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login()
        }
      }
    })
  },
  login() {
    wx.login({
      success: (res) => {
        const code = res.code;

        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code
          },
          success: (res) => {
            const token = res.data.token;

            this.globalData.token = token;

            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})