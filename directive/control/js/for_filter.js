new Vue({
  el: '#app',
  data: {
    books: [
      {
        isbn: '123-4-567-890',
        title: 'JavaScript逆引きレシピ',
        price: 2800,
      },
      {
        isbn: '123-4-567-890',
        title: 'JavaScript逆引きレシピ',
        price: 2800,
      },
      {
        isbn: '123-4-567-890',
        title: 'JavaScript逆引きレシピ',
        price: 2400,
      },
    ],
  },
  computed: {
    expensiveBooks: function () {
      return this.books.filter(function (b) {
        return b.price >= 2500
      })
    },
  },
})
