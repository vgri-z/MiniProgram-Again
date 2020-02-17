// pages/index/index.js
// getApp()获取App产生的对象
// const app = getApp()
// console.log(app)

// const name = app.globalData.name
// const age = app.globalData.age

// console.log(name, age)

Page({
  data: {
    message: "你好，李银河",
    list: []
  },
  // -------------- 1.监听页面的的生命周期函数 -------------------
  // 页面加载出来
  onLoad() {
    console.log("onLoad")
    const _this = this
    wx.request({
      url: 'http://106.54.54.237:8000/api/hy/recommend',
      success: function (res) {
        const data = res.data.data.list;
        _this.setData({
          list: data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log("onShow")
  },
  // 页面初次渲染完成
  onReady() {
    console.log("onReady")
  },
  // 页面被隐藏起来的时候
  onHide() {
    console.log("onHide")
  },
  // 页面被卸载的时候
  onUnload() {
    console.log("onUnload")
  },
  // ------------------- 3. 监听wxml中相关的一些事件 -------------
  handleGetInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log("view被点击了")
  },
  // ---------------- 4. 其他的事件 ---------------
  // 监听页面滚动
  onPageScroll(options) {
    // console.log(options)
  },
  // 监听页面滚动到了底部
  onReachBottom() {
    console.log("上拉加载更多")
  },
  // 监听页面的上拉刷新
  onPullDownRefresh() {
    console.log("上拉刷新")
  }
})