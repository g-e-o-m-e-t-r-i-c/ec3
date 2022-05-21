<template>
	<div :class="{ completed }">
		<h1>{{ id }}: {{ title }} ({{ userId }})</h1>
	</div>
</template>

<script>
export default {
	name: 'JsonTodo',
	props: ['id', 'userId', 'title', 'completed'],
};
</script>

<style scoped>
div {
	text-align: left;
	background-color: #eee;
	padding: 20px;
	margin: 20px;
	border: red 2px solid;
}

.completed {
	border: green 2px solid;
}
</style>
