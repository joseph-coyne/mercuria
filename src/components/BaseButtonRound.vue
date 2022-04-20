<template>
	<button
		class="p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-4 rounded-full shadow-md text-gray-200 transition-all transform-gpu linear duration-75 active:text-gray-100 active:shadow active:scale-95 hover:scale-105 hover:shadow-lg"
		:class="[fullColor]"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButtonRound',
	props: {
		type: {
			type: String,
			default: 'default',
		},
	},
	data() {
		return {};
	},
	computed: {
		fullColor() {
			let color;
			if (this.type === 'success') {
				color = 'emerald';
			} else if (this.type === 'danger') {
				color = 'red';
			} else {
				color = 'amber';
			}
			return `ring-offset-${color}-400 active:ring-offset-${color}-500 hover:ring-offset-${color}-300`;
		},
	},
};
</script>

<style>
button {
	transform: translateX(0);
}
</style>
