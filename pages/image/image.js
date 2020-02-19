// pages/image/image.js
Page({
  data: {
    imagePath: ""
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: res => {
        // 1.取出路径
        const path = res.tempFilePaths[0];

        // 2.设置imagePath
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImgLoad() {
    console.log("图片加载完成")
  }
})