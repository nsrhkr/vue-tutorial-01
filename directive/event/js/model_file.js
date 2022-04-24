new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    onchange: function () {
      // アップロードファイルを準備
      let fl = this.$refs.upfile.files[0]
      let deta = new FormData()
      deta.append('upfile', fl, fl.name)
      // サーバにデータを送信
      fetch('upload.php', {
        method: 'POST',
        body: deta,
      })
        // 成功時には結果を表示
        .then(function (response) {
          return response.text()
        })
        .then(function (text) {
          this.message = text
        })
        .catch(function (error) {
          windows.alert('Error' + ErrorEvent.message)
        })
    },
  },
})
