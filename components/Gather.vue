<template>
  <div
    class="flex flex-wrap justify-center w-full h-full pb-20 overflow-y-auto"
  >
    <div
      class="relative flex flex-col justify-between items-center w-40 h-64 mx-2 rounded-lg shadow-md bg-gray-300 bg-opacity-25 overflow-hidden"
    >
      <div class="w-full h-full overflow-none pb-2">
        <img
          src="@/static/img/backgrounds/game_background_1.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute z-50 bottom-20 flex border border-gray-800 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
      >
        <h1
          class="font-craft text-xs font-semibold px-2 text-white leading-relaxed text-center"
        >
          Skycrash Ridge
        </h1>
      </div>
      <div
        class="flex flex-row space-x-5 justify-center items-center w-full h-32 px-4"
      >
        <base-item-card
          :item="{ icon: 'st_t_09', rarity: 'common' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'ore_n_01_b', rarity: 'common' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'st_b_06', rarity: 'uncommon' }"
        ></base-item-card>
      </div>
      <div class="bg-white w-full"></div>
      <!-- <h1 class="font-semibold text-lg pt-20">
      {{ resource }}
    </h1> -->
      <!-- <ItemCard /> -->
      <!-- <div
      class="flex flex-col items-center space-y-5 w-full rounded-md px-2 py-4"
    >
      <div class="relative pt-1 w-full">
        <div
          class="overflow-hidden h-4 text-xs flex border border-gray-800 rounded-sm ring-1 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
        >
          <div
            :style="`width: ${progress}%`"
            class="shadow-none flex flex-col justify-center text-center text-white rounded-sm bg-gradient-to-b from-green-400 via-green-500 to-green-600 transition-all ease"
          ></div>
        </div>
      </div>
      <base-button-round @click="gather">
        <template>
          <base-svg file="gather-bs"></base-svg>
        </template>
      </base-button-round>
    </div> -->
    </div>
    <div
      class="relative flex flex-col justify-center items-center w-40 h-64 mx-2 mb-4 rounded-lg shadow-md bg-gray-300 bg-opacity-25 overflow-hidden"
    >
      <div class="w-full h-full overflow-none pb-2">
        <img
          src="@/static/img/backgrounds/game_background_4.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute z-50 bottom-20 border border-gray-800 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
      >
        <h1
          class="font-craft text-xs font-semibold px-2 text-white leading-normal"
        >
          Silverpool Falls
        </h1>
      </div>
      <div
        class="flex flex-row space-x-5 justify-center items-center w-full h-32 px-4"
      >
        <base-item-card
          :item="{ icon: 'st_b_01', rarity: 'common' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'st_b_07', rarity: 'uncommon' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'st_b_04', rarity: 'rare' }"
        ></base-item-card>
      </div>
      <div class="bg-white w-full"></div>
    </div>
    <div
      class="relative flex flex-col justify-center items-center w-40 h-64 mx-2 mb-4 rounded-lg shadow-md bg-gray-300 bg-opacity-25 overflow-hidden"
    >
      <div class="w-full h-full overflow-none pb-2">
        <img
          src="@/static/img/backgrounds/game_background_2.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute z-50 bottom-20 border border-gray-800 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
      >
        <h1
          class="font-craft text-xs font-semibold px-2 text-white leading-normal whitespace-nowrap"
        >
          Graygem Mountains
        </h1>
      </div>
      <div
        class="flex flex-row space-x-5 justify-center items-center w-full h-32 px-4"
      >
        <base-item-card
          :item="{ icon: 'mtr_b_01', rarity: 'uncommon' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'st_b_03', rarity: 'uncommon' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'gm_b_07', rarity: 'rare' }"
        ></base-item-card>
      </div>
      <div class="bg-white w-full"></div>
    </div>
    <div
      class="relative flex flex-col justify-center items-center w-40 h-64 mx-2 mb-4 rounded-lg shadow-md bg-gray-300 bg-opacity-25 overflow-hidden"
    >
      <div class="w-full h-full overflow-none pb-2">
        <img
          src="@/static/img/backgrounds/game_background_3.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="absolute z-50 bottom-20 border border-gray-800 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-yellow-400 bg-gray-700"
      >
        <h1
          class="font-craft text-xs font-semibold px-2 text-white leading-normal"
        >
          Blackwood Hills
        </h1>
      </div>
      <div
        class="flex flex-row space-x-5 justify-center items-center w-full h-32 px-4"
      >
        <base-item-card
          :item="{ icon: 'st_b_08', rarity: 'uncommon' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'ore_f_b_01', rarity: 'rare' }"
        ></base-item-card>
        <base-item-card
          :item="{ icon: 'b_01_a', rarity: 'mercurial' }"
        ></base-item-card>
      </div>
      <div class="bg-white w-full"></div>
    </div>
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
    }
  },
  watch: {
    resource(newValue, oldValue) {
      if (newValue > oldValue) {
        this.animate = true
      }
    },
  },
  methods: {
    gather() {
      this.progress += 10
      if (this.progress > 100) {
        this.resource += 1
        this.progress = 0
      }
    },
  },
}
</script>

<style></style>
