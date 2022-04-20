<template>
	<div
		class="flex flex-wrap justify-center w-full h-full pb-20 overflow-y-auto"
	>
		<div
			class="flex flex-col justify-center items-center w-1/4 h-60 shadow-md rounded-md"
		>
			<h1 class="font-semibold text-lg pt-20">
				{{ resource }}
			</h1>
			<div class="absolute">
				<div class="grid grid-cols-8 grid-rows-4">
					<div v-for="(drop, index) in 32" :key="drop">
						<GatherDrop
							v-if="dropCollection.includes(index)"
							@collectedDrop="collectDrop(index)"
							@missedDrop="removeDrop(index)"
						/>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-center w-full rounded-md px-2 py-4">
				<div class="w-40 py-5">
					<div
						class="overflow-hidden h-4 text-xs flex border border-gray-800 rounded-sm ring-1 ring-gray-800 ring-offset-2 ring-offset-amber-400 bg-gray-700"
					>
						<div
							:style="`width: ${progress}%`"
							class="shadow-none flex flex-col justify-center text-center text-white rounded-sm bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 transition-all ease"
						></div>
					</div>
				</div>
				<base-button-round @click.native="gather()">
					<template>
						<base-svg file="gather-bs"></base-svg>
					</template>
				</base-button-round>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Gather',
	data() {
		return {
			dropCollection: [],
			dropLocation: undefined,
			progress: 0,
			resource: 0,
		};
	},
	methods: {
		randomDrop() {
			if (this.dropCollection.length < 5) {
				this.dropLocation = Math.floor(Math.random() * 32) + 1;
				this.dropLocation -= 1;
				if (!this.dropCollection.includes(this.dropLocation)) {
					this.dropCollection.push(this.dropLocation);
				}
			}
		},
		collectDrop(i) {
			const index = this.dropCollection.indexOf(i);
			this.dropCollection.splice(index, 1);

			this.resource += 1;
		},
		removeDrop(i) {
			const index = this.dropCollection.indexOf(i);
			this.dropCollection.splice(index, 1);
		},

		gather() {
			this.progress += 10;
			if (this.progress > 100) {
				this.resource += 1;
				this.progress = 0;
				this.randomDrop();
			}
		},
	},
};
</script>

<style scoped></style>
