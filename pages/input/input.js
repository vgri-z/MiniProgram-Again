// pages/input/input.js
Page({
  data: {

  },
  handleInput(event) {
    console.log("用户输入内容", event)
  },
  handleFocus(event) {
    console.log("聚集焦点", event)
  },
  handleBlur(event) {
    console.log("失去焦点", event)
  }
})