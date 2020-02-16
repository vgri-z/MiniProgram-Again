// pages/index/index.js
Page({
  data: {
    name: "vgri",
    age: 22,
    students: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'james', age: 28 },
      { id: 112, name: 'curry', age: 32 },
      { id: 113, name: 'why', age: 18 }
    ],
    counter: 0
  },
  handleIncrement() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleDecrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})