// pages/index/index.js
Page({
  data: {
    titles: ['帽子', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log("按钮发生了点击")
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleLongPress() {
    console.log("handleLongPress")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleEventClick(event) {
    // console.log("-----", event)
  },
  handleBtnTouchEnd(event) {
    // console.log("++++", event)
  },
  handleOuterClick(event){
    console.log(event)
  },
  handleInnerClick(event) {
    console.log(event)
  },
  handleItemClick(event) {
    const index = event.currentTarget.dataset.index;
    const item = event.currentTarget.dataset.item;
    const name = event.currentTarget.dataset.name;
    console.log(index, item, name);
  },
  handleOuterCapture1() {
    console.log("handleOuterCapture1")
  },
  handleOuterBubble1() {
    console.log("handleOuterBubble1")
  },
  handleMiddleCapture2() {
    console.log("handleMiddleCapture2")
  },
  handleMiddleBubble2() {
    console.log("handleMiddleBubble2")
  },
  handleInnerCapture3() {
    console.log("handleInnerCapture3")
  },
  handleInnerBubble3() {
    console.log("handleInnerBubble3")
  }
})