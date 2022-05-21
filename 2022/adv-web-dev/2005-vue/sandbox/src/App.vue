<template>
	<div id="app">
		<JsonTodo
			v-for="(todo, index) in todos"
			:key="index"
			:id="todo.id"
			:userId="todo.userId"
			:title="todo.title"
			:completed="todo.completed"
		/>
	</div>
</template>

<script>
import JsonTodo from './components/JsonTodo.vue';

export default {
	name: 'App',
	components: {
		JsonTodo,
	},

	data: () => ({
		todos: [],
	}),

	created() {
		const getData = async (x) => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${x}`
			);
			const json = await res.json();
			return json;
		};
		const promises = [];
		for (let i = 1; i <= 200; i++) {
			promises.push(getData(i));
		}
		Promise.all(promises).then((res) => {
			this.todos = res;
		});
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
