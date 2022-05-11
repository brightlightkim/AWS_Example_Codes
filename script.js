Vue.compent('price', {
  data: function () {
    return {
      prefix: '$',
      value: 22.34,
      precision: 2
    }
  },
  props: {
    value: Number,
    prefix: {
      type: String,
      default: '$'
    },
    precision: {
      type: Number,
      default: 2
    },
    conversion: {
      type: Number,
      default: 2
    }
  },
  //You can pass along objects for props
  template: '<span> {{ this.prefix + Number.paseFloat(this.value * this.conversion).toFixed(this.precision) }} </span>'
});


var app = new Vue({
  el: '#app',
  data: {
    inputwidth: 60,
  },
  props: [],
});

