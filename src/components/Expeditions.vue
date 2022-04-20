<template>
	<div
		class="flex flex-wrap justify-center w-full h-full pb-20 overflow-y-auto"
	>
		<h1 class="w-full pl-5 font-craft text-2xl font-semibold text-gray-800">
			Expeditions
		</h1>

		<base-card-event
			v-for="event in events"
			:key="event.id"
			:event="event"
		></base-card-event>
	</div>
</template>

<script>
export default {
	name: 'Gather',
	data() {
		return {
			progress: 0,
			resource: 0,
			animate: false,
			events: [
				{
					name: 'Skycrash Ridge',
					image: 'game_background_1',
					rewards: [
						{
							name: 'foo',
							icon: 'st_t_09',
							rarity: 'common',
						},
						{ name: 'foo', icon: 'ore_n_01_b', rarity: 'common' },
						{ name: 'foo', icon: 'st_b_06', rarity: 'uncommon' },
					],
				},
				{
					name: ' Silverpool Falls',
					image: 'game_background_2',
					rewards: [
						{
							name: 'foo',
							icon: 'st_b_01',
							rarity: 'common',
						},
						{ name: 'foo', icon: 'st_b_07', rarity: 'uncommon' },
						{ name: 'foo', icon: 'st_b_04', rarity: 'rare' },
					],
				},
				{
					name: 'Graygem Mountains',
					image: 'game_background_3',
					rewards: [
						{
							name: 'foo',
							icon: 'mtr_b_01',
							rarity: 'uncommon',
						},
						{ name: 'foo', icon: 'gm_b_07', rarity: 'uncommon' },
						{ name: 'foo', icon: 'st_b_07', rarity: 'rare' },
					],
				},
				{
					name: 'Blackwood Hills',
					image: 'game_background_4',
					rewards: [
						{
							name: 'foo',
							icon: 'st_b_08',
							rarity: 'uncommon',
						},
						{ name: 'foo', icon: 'ore_f_b_01', rarity: 'rare' },
						{ name: 'foo', icon: 'b_01_a', rarity: 'mercurial' },
					],
				},
			],
		};
	},
	watch: {
		resource(newValue, oldValue) {
			if (newValue > oldValue) {
				this.animate = true;
			}
		},
	},
	methods: {
		gather() {
			this.progress += 10;
			if (this.progress > 100) {
				this.resource += 1;
				this.progress = 0;
			}
		},
	},
};
</script>

<style></style>
<!-- <h1 class="font-semibold text-lg pt-20">
      {{ resource }}
    </h1> -->
<!-- <ItemCard /> -->
<!-- <div
      class="flex flex-col items-center space-y-5 w-full rounded-md px-2 py-4"
    >
      <div class="relative pt-1 w-full">
        <div
          class="overflow-hidden h-4 text-xs flex border border-gray-800 rounded-sm ring-1 ring-gray-800 ring-offset-2 ring-offset-amber-400 bg-gray-700"
        >
          <div
            :style="`width: ${progress}%`"
            class="shadow-none flex flex-col justify-center text-center text-white rounded-sm bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 transition-all ease"
          ></div>
        </div>
      </div>
      <base-button-round @click="gather">
        <template>
          <base-svg file="gather-bs"></base-svg>
        </template>
      </base-button-round>
    </div> -->
