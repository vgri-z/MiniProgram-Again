// 注册一个小程序实例
App({
  // 小程序初始化完成时
  onLaunch(options){
    // console.log(options)

    const err = new Error();
    setTimeout(() => {
      // throw err
    }, 3000)
  },
  // 小程序显示出来时
  onShow(options) {

    // 判断小程序的进入场景
    // console.log(options);
    switch(options.scene) {
      case 1001: 
       break
      case 1011: 
        break
    }

    // 2.获取用户的信息, 并且获取到用户信息之后, 将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        // console.log(res)
      }
    })

  },
  // 小程序隐藏时
  onHide() {

  },
  // 小程序产生一些错误时
  onError() {
    // console.log("have Error")
  },
  globalData: {
    name: "vgri",
    age: 22
  }
})
