// pages/index/index.js
Page({
  data: {
    counter: 0,
    titles: ['流行','新款','精选'],
    isShow: false
  },
  handleAddOne() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event.detail.index, event.detail.title)
  },
  handleDataInCpn() {
    const my_sel = this.selectComponent("#my-sel")
    my_sel.handleCpnIncrement()
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})