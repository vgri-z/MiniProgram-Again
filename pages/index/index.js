// pages/index/index.js
import request from "../../services/network.js"
Page({
  data: {

  },
  onLoad: function(options) {
    // 原生的方式发送网络请求
    this.get_data_origin();

    // 2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    // request({
    //   url: "http://106.54.54.237:8000/api/hy/recommend",
    // }).then(res => {
    //   console.log(res)
    // })

    request({
      url: "http://106.54.54.237:8000/api/hy/home/data",
      data: {
        type: "sell",
        page: 1
      }
    }).then(res => {
      console.log(res)
    })
  },
  get_data_origin() {
    // 1. 发送最简单的get请求
    // wx:wx.request({
    //   url: "http://106.54.54.237:8000/api/hy/recommend",
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    // 2.get请求，并且携带参数
    // wx: wx.request({
    //   url: "http://106.54.54.237:8000/api/hy/home/data",
    //   data: {
    //     type: "sell",
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    // 3.post请求，并且携带参数
    // wx:wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "post",
    //   data: {
    //     name: "vae",
    //     age: 32
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fali: (err) => {
    //     console.log(err)
    //   }
    // })
  }
})