// pages/wxml/wxml.js
Page({
  data: {
    message: "Hello World",
    firstName: "yun",
    lastName: "yang",
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['大话西游', '让子弹飞', '肖申克的救赎'],
    num: [
      [12, 13, 14],
      [22, 23, 24],
      [33, 34, 35]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 5
    })
  }
})