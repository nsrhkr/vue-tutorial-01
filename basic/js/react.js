new Vue({
  el: "#app",
  data: {
    // 現在時刻
    current: new Date(),
  },
  //始動時にタイマーを設定
  created: function () {
    let that = this;
    // 1000ミリ秒スパンでcurrentプロパティを更新
    this.timer = setInterval(function () {
      that.current = new Date();
    }, 1000);
  },
  beforeDestroy: function () {
    clearInterval(this.timer);
  },
});
