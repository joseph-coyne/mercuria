<template>
	<div
		:class="[
			fullColor,
			width,
			height,
			'flex flex-row m-1 border border-gray-800 rounded-sm ring-2 ring-gray-800 ring-offset-2 ring-offset-amber-400 bg-gradient-to-b',
		]"
	></div>
</template>

<script>
export default {
	name: 'BaseBarValue',

	props: {
		width: {
			type: String,
			default: 'w-24',
		},

		height: {
			type: String,
			default: 'h-4',
		},

		color: {
			type: String,
			default: 'emerald',
		},
	},

	computed: {
		fullColor() {
			return `from-${this.color}-400 via-${this.color}-500 to-${this.color}-600`;
		},
	},
};
</script>

<style></style>
