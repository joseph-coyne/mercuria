<template>
	<div class="flex flex-col w-11/12 rounded-md bg-gray-300 pb-2">
		<div
			class="w-full grid grid-rows-4 grid-cols-4 grid-flow-col gap-2 items-center justify-items-center py-4"
		>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="row-span-4 col-span-2 h-full w-24 bg-gray-500"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
			<div class="h-12 w-12 bg-white rounded-md shadow"></div>
		</div>
		<div class="grid grid-rows-3 grid-cols-2 grid-flows-col gap-x-4 px-4">
			<div class="pb-2">
				<label class="text-xs font-medium" for="strength">Strength</label>
				<div class="w-full h-2 px-2 bg-red-500 rounded-full"></div>
			</div>
			<div class="pb-2">
				<label class="text-xs font-medium" for="Wisdom">Wisdom</label>
				<div class="w-full h-2 px-2 bg-blue-500 rounded-full"></div>
			</div>
			<div class="pb-2">
				<label class="text-xs font-medium" for="Charisma">Charisma</label>
				<div class="w-full h-2 px-2 bg-purple-500 rounded-full"></div>
			</div>
			<div class="pb-2">
				<label class="text-xs font-medium" for="Dexterity">Dexterity</label>
				<div class="w-full h-2 px-2 bg-emerald-500 rounded-full"></div>
			</div>
			<div class="pb-2">
				<label class="text-xs font-medium" for="Perception">Perception</label>
				<div class="w-full h-2 px-2 bg-amber-400 rounded-full"></div>
			</div>
			<div class="pb-2">
				<label class="text-xs font-medium" for="Constitution"
					>Constitution</label
				>
				<div class="w-full h-2 bg-red-800 rounded-full"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CharacterInfo',
};
</script>

<style></style>
