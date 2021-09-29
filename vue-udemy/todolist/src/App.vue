<template>
	<div class="home">
		<img alt="Vue Logo" src="@/assets/logo.png" id="vue-logo" />
		<div class="title">What do I need to do today?</div>
		<input v-model="myTodo" /><button @click="addTodo">Add</button>
	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	data: function () {
		return {
			myTodo: ''
		}
	},
	methods: {
		addToDo: function () {
			console.log('myToDo: ' + this.myTodo)
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

body, html, #app {
	background: #8ac8e5;
}

.home {
	width: 300px;
	margin: auto;
}

#vue-logo {
	width: 100px;
}

input, button {
	width: 100%;
	border: 0;
	margin: 0 0 10px;
	padding: 7px;
}

input {
	font-size: 12px;
}

button {
	background: #43b823;
	border: 0;
	text-transform: uppercase;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
}

title {
	font-size: 14px;
	font-weight: 700;
	padding: 0 0 10px 0;
	border-bottom: 1px solid #666;
}

#errors {
	background: #a52222;
	color: #fff;
	padding: 5px;
}
</style>
