<template>
	<div class="fixed top-4 z-30 w-full">
		<div class="flex flex-row justify-between items-center px-4 space-x-4">
			<div class="flex flex-col space-y-2">
				<base-bar-value height="h-3" color="red"></base-bar-value>
				<base-bar-value height="h-3" color="amber"></base-bar-value>
			</div>
			<div class="flex flex-row space-x-5">
				<base-bar-resource
					:resource="{ icon: 'gold-coin-t', quantity: 1782 }"
				></base-bar-resource>

				<base-bar-resource
					:resource="{ icon: 'quicksilver-t', quantity: 16 }"
				></base-bar-resource>
			</div>
		</div>
	</div>
</template>

<script></script>

<style></style>
