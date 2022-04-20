<template>
	<nav
		class="fixed bottom-0 z-50 flex flex-row justify-between items-center h-16 w-full px-8 rounded-t-xl bg-white overflow-hidden"
	>
		<button @click="toggleMenu('home')">
			<base-svg file="shop" size="h-8"></base-svg>
		</button>
		<button @click="toggleMenu('gather')">
			<base-svg file="gather-bs" size="h-8 text-amber-900" />
		</button>

		<button @click="toggleMenu('expeditions')">
			<base-svg file="map" size="h-8 text-amber-900" />
		</button>
		<button @click="toggleMenu('inventory')">
			<base-svg file="bag" size="h-8 text-amber-900" />
		</button>
	</nav>
</template>

<script>
// import { mapState } from 'vuex'

export default {
	name: 'NavBar',
	// computed: {
	//   ...mapState('auth', ['user']),
	// },
	methods: {
		toggleMenu(e) {
			this.$emit('toggle-menu', e);
		},
	},
};
</script>

<style></style>
