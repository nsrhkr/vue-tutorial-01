new Vue({
  el: '#app',
  data: {
    path: './image/wings.jpg',
  },
  methods: {
    // 画像を読み込めない場合はエラー画像を表示
    onerror: function () {
      this.path = './image/noimage.jpg'
    },
  },
})
