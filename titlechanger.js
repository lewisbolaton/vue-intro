new Vue({
	el: '#app',
  data: {
  	text: 'Text from Vue',
    color: 'color:black',
  },
  methods: {
  	changeText() {
    	this.text = 'Text changed from Vue';
    },
    changeColor(color) {
    	this.color = 'color:' + color;
    }
  },
  computed: {
  	roloc() {
    	return this.color.replace('color:', '').split('').reverse().join('');
    }
  }
});
