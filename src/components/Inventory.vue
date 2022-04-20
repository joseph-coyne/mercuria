<template>
	<div
		class="relative flex flex-col justify-between items-center h-full w-full overflow-hidden"
	>
		<div class="relative w-full h-128 overflow-y-auto">
			<div
				class="absolute top-0 z-0 w-full pt-10 px-10 grid grid-rows-5 grid-cols-5 gap-4 rounded-xl"
			>
				<draggable
					:list="fullInventory"
					item-key="id"
					class="contents"
					@start="drag = true"
					@end="drag = false"
				>
					}
					<template #item="{ element }">
						<base-card-item :item="element"></base-card-item>
					</template>
				</draggable>
				<!-- <div
					v-for="(i, index) in emptySpace"
					:key="index"
					class="h-16 w-12 rounded-md shadow-md bg-gray-700 border-2 border-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-gray-500 shadow-inner"
				></div> -->
			</div>
		</div>

		<ul
			class="absolute bottom-14 z-40 flex flex-row items-center justify-around space-x-8 w-full p-4 bg-white border-b rounded-t-xl"
		>
			<li><base-svg file="helmet" size="h-8 w-8" /></li>
			<li><base-svg file="sword" size="h-8 w-8" /></li>
			<li><base-svg file="leather" size="h-8 w-8" /></li>
			<li><base-svg file="meat" size="h-8 w-8" /></li>
			<li><base-svg file="key" size="h-8 w-8" /></li>
			<li><base-svg file="books" size="h-8 w-8" /></li>
		</ul>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	name: 'Inventory',

	components: {
		draggable,
	},

	data() {
		return {
			inventory: [
				{
					id: 1,
					name: 'foo',
					icon: 'ore_n_01_b',
					rarity: 'common',
					quantity: 10,
				},
				{
					id: 2,
					name: 'bar',
					icon: 'st_b_06',
					rarity: 'uncommon',
					quantity: 3,
				},
				{ id: 3, name: 'foobar', icon: 'st_b_09', rarity: 'rare', quantity: 1 },
			],
			drag: false,
		};
	},

	computed: {
		emptySpace() {
			return 30 - this.inventory.length;
		},

		fullInventory() {
			let id = this.inventory.length + 1;

			while (id <= 30) {
				this.inventory.push({
					id,
					name: 'blank',
					icon: 'blank',
					rarity: 'blank',
					quantity: 0,
				});
				id++;
			}
			return this.inventory;
		},
	},
};
</script>

<style scoped>
/* .scrollbox {
  z-index: 10;
  background: linear-gradient(#ffffff 33%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #ffffff 66%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(107, 107, 107, 0.5),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(107, 107, 107, 0.5),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 75px, 100% 75px, 100% 25px, 100% 25px;
} */
</style>
