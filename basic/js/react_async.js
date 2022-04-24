new Vue({
  el: "#app",
  data: {
    author: {
      name: "山田",
    },
  },
  mounted: function () {
    let that = this;
    Vue.set(that.author, "company", "WINGSプロジェクト");
    // <div id="app">配下にcompanyプロパティの内容が含まれているか
    this.$nextTick().then(function () {
      console.log(this.$el.textContent.includes(this.author.company));
    });
  },
});
