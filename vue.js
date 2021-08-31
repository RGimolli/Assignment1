new Vue({
  el: '#prompt',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

Vue.component('title-component', {
  data: function () {
    return {
    }
  },
  props: ['title'],
  template: '<h1>{{ title }}</h1>'
})
