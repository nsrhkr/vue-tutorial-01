// MyHelloコンポーネントの本体
let MyHello = {
  temlpate: `<div>こんにちは、Vue.js！</div>`,
}

new Vue({
  el: '#app',
  components: {
    'my-hello': MyHello,
  },
})
