new Vue({
	el: '#app',
	data: {
		title: "Hello world",
		styleCSS:''
	},
	methods:{
		changeText(){
			this.title = 'Функция - это бич, бич - это пакет, бичпакет = гуд!'
		}
	}
});

 // var appH = new Vue({
 // 	el: '#appp',
 // 	data: {
 // 		value: 11,
 // 		doubleValue: 11
 // 	},
 // 	methods:{
 // 		increment(value) {
 // 			this.value = value
 // 			this.doubleValue = this.value * 2
 // 		}
 // 	}
 // });

var app = new Vue({
  el: '#app1',
  data: {
    seen: true
  }
})


var timerId = setInterval(function(){
	app.seen = false;
}, 3000)


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})

app4.todos.push({ text: 'Новый элемент' })