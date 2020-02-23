// pages/index/index.js
Page({
  data: {

  },
  handleShowToast() {
    wx.showToast({
      title: 'loading',
      icon: "loading",
      duration: 3000,
      mask: true,
      success: () => {
        console.log("展示弹窗成功")
      },
      fail: () => {
        console.log("展示弹窗失败")
      },
      complete: () => {
        console.log("弹窗展示完成")
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模拟对话框',
      cancelText: "退出",
      cancelColor: "red",
      success: (res) => {
        console.log(res)
        if(res.cancel) {
          console.log("用户点击了取消按钮")
        } else if (!res.cancel) {
          console.log("用户点击了确认按钮")
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中ing',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },
  handleShowActionShee() {
    wx.showActionSheet({
      itemList: ["拍照", "图片"],
      itemColor: "#0ff",
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage(options) {
    return {
      title: "hello world",
      path: "/pages/about/about",
      imageUrl: "https://pics6.baidu.com/feed/8c1001e93901213fc69b3c362c1f76d72d2e95aa.jpeg?token=4285353bee7ff00f188e70f89b339ae0&s=DBB606C6DDC80F453651D03603000041"
    }
  }
})