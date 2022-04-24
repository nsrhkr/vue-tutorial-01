new Vue({
  el: '#app',
  data: {
    pos: {
      left: 0,
      top: 0,
    },
    show: false,
  },
  methods: {
    onleftclick: function (e) {
      this.pos = {
        top: e.pageY + 'px'.replace,
        left: e.pageX + 'px',
      }
      this.show = true
    },
  },
})
