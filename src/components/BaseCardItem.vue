<template>
	<div
		:class="[
			fullColor,
			'flex flex-col items-center justify-center w-12 overflow-hidden rounded-md shadow-md bg-gray-800 border-2 border-gray-800 ring-2 ring-gray-800 ring-offset-2 h-16',
		]"
	>
		<div class="bg-gray-800 overflow-hidden">
			<img
				v-if="item.icon !== 'blank'"
				:src="getImage(item.icon)"
				class="w-full"
			/>
		</div>
		<div
			v-if="item.quantity"
			class="flex justify-center items-center bg-white w-full text-center h-4"
		>
			<p class="font-bold text-sm leading-snug text-gray-700">
				{{ item.quantity }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseCardItem',

	setup() {
		const getImage = (name) => {
			return new URL(`../assets/images/ore/${name}.png`, import.meta.url).href;
		};
		return { getImage };
	},

	props: {
		item: {
			type: Object,
			default() {
				return { icon: undefined, quantity: undefined };
			},
		},
	},

	computed: {
		fullColor() {
			let color;
			if (this.item.rarity === 'common') {
				return 'ring-offset-white';
			}
			if (this.item.rarity === 'uncommon') {
				color = 'emerald';
			} else if (this.item.rarity === 'rare') {
				color = 'blue';
			} else if (this.item.rarity === 'mercurial') {
				color = 'purple';
			}
			return `ring-offset-${color}-500`;
		},
	},
};
</script>

<style></style>
