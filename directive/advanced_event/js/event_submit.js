new Vue({
  el: '#app',
  methods: {
    // サブミット時に確認ダイアログを表示
    onsbmit: function (e) {
      if (!confirm('送信してもいいですか？')) {
        e.preventDefault()
        return
      }
    },
  },
})
