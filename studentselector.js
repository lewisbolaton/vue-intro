Vue.component('student', {
	props: ['id', 'name', 'gender'],
	data() {
  	return {
    };
  },
  template: '<div><span>{{ name }}</span><button @click="reverse(id)">Reverse</button></div>',
  methods: {
  	reverse(id) {
    	this.$emit('reverseclicked', id);
    },
    filterChanged() {
    	console.log('Hello');
    }
  }
});

new Vue({
	el: '#app',
  data: {
  	students: [
    	{id: 101, name: 'Mary Hopkins', gender: 'f'},
      {id: 102, name: 'Issei Kaneki', gender: 'm'},
      {id: 103, name: 'John Mann', gender: 'm'}],
    radioValue: 'a'
  },
  methods: {
  	reverseById(id) {
    	this.students.find(student => student.id === id).name =  this.students.find(student => student.id === id).name.split(' ').reverse().join(' ');
    },
    filterChanged(v) {
    	this.radioValue = v;
    },
    displayStudent(gender) {
    	return (this.radioValue === gender) || (this.radioValue === 'a');
    }
  }
});
