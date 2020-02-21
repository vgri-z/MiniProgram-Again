// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCpnIncrement() {
      this.setData({
        counter: this.data.counter + 1
      })
    }
  }
})
