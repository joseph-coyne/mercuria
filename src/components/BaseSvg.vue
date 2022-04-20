<template>
	<Component :is="currentIcon" :class="size" fill="currentColor" />
</template>

<script>
import { computed, defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
	name: 'BaseSvg',

	props: {
		file: {
			type: String,
			required: true,
		},

		size: {
			type: String,
			default: 'w-6 h-6',
		},
	},

	setup(props) {
		const currentIcon = computed(() =>
			defineAsyncComponent(() =>
				import(`../assets/images/icons/svg/${props.file}.svg?component`)
			)
		).value;
		return {
			currentIcon,
		};
	},
});
</script>

<style></style>
