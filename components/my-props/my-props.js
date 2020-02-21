// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "我是默认的标题",
      observer(newValue, oldValue) {
        // console.log(newValue, oldValue)
      }
    }
  },

  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
