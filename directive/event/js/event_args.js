new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    // クリック時にメッセージログを出力
    onclick: function (message, e) {
      console.log(message)
      console.log(e)
    },
  },
})
