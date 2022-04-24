new Vue({
  el: '#app',
  data: {
    memo: '',
  },
  methods: {
    // 入力値をログ出力
    onchange: function () {
      console.log('入力値は「' + this.memo + '」です。')
    },
  },
})
