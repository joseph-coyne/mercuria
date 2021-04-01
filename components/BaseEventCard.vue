<template>
  <div
    class="relative flex flex-col justify-between items-center w-40 h-64 mx-2 rounded-lg shadow-md bg-gray-300 bg-opacity-25 overflow-hidden"
  >
    <div class="w-full h-full overflow-none pb-2">
      <img
        :src="require(`@/static/img/backgrounds/${event.image}.png`)"
        :alt="event.altText"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="absolute z-50 bottom-20 flex border border-gray-800 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
    >
      <h1
        class="font-craft text-xs font-semibold px-2 text-white leading-relaxed text-center"
      >
        {{ event.name }}
      </h1>
    </div>
    <div
      v-if="hasReward"
      class="flex flex-row space-x-5 justify-center items-center w-full h-32 px-4"
    >
      <base-item-card
        v-for="reward in event.rewards"
        :key="reward.id"
        :item="reward"
      ></base-item-card>
    </div>
    <div class="bg-white w-full"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseEventCard',
  props: {
    event: {
      type: Object,
    },
  },
  computed: {
    hasReward() {
      return 'rewards' in this.event
    },
  },
}
</script>

<style></style>
