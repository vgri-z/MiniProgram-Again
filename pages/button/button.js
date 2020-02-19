// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleContact() {
    console.log("打开了客服会话")
  },
  handleGetUserInfo(options) {
    console.log(options)
  },
  handleGetPhoneNumber(e) {
    console.log("获取用户电话号码", e)
  }
})