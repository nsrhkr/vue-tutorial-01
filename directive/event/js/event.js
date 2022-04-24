new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    // クリック時に現在時刻を取得
    onclick: function () {
      this.message = new Date().toLocaleString()
    },
  },
})
