<template>
	<div class="relative flex flex-row justify-center items-center w-20">
		<div
			class="absolute left-0 p-1 bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-amber-400 rounded-full"
		>
			<img :src="getImage(resource.icon)" class="w-5" />
		</div>
		<div
			class="text-center w-full bg-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-amber-400 rounded-full"
		>
			<h1 class="pl-5 py-0.5 text-white text-xs font-medium font-craft">
				{{ resource.quantity }}
			</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseBarResource',

	setup() {
		const getImage = (name) => {
			return new URL(`../assets/images/icons/${name}.png`, import.meta.url)
				.href;
		};
		return { getImage };
	},

	props: {
		resource: {
			type: Object,
			default() {
				return { icon: undefined, quantity: 0 };
			},
		},
	},
};
</script>

<style></style>
