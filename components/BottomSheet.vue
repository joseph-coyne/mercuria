<template>
  <div class="sheet-wrap">
    <h1 class="z-50 text-red-500">
      {{ lastPosition }}
    </h1>
    <div class="fixed inset-0 bg-black opacity-10"></div>
    <div
      ref="sheet"
      class="absolute inset-x-0 bottom-0 top-10 bg-white rounded-t-xl shadow-lg h-screen transition-all duration-200 ease"
    >
      <header
        ref="handle"
        v-hammer:pan="(event) => onPan(event)"
        v-hammer:panstart="onPanStart"
        v-hammer:panend="(event) => onPanEnd(event)"
        class="py-1"
      >
        <span
          class="block h-1 w-10 rounded-full bg-gray-400 mx-auto cursor-move active:cursor-grab"
        ></span>
      </header>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomSheet',
  props: {
    initial: {
      type: String,
      default: 'closed',
    },
  },

  data() {
    return {
      lastPosition: 0,
    }
  },
  mounted() {
    this.lastPosition = this.$refs.sheet.clientHeight
    this.$refs.handle.hammer.set({
      direction: 'DIRECTION_ALL',
    })

    switch (this.initial) {
      case 'half':
        this.halfSheet()
        break
      case 'full':
        this.fullSheet()
        break
      default:
        this.closeSheet()
    }
  },
  methods: {
    onPan(e) {
      console.log(e.deltaY)
      if (e.direction === 8) {
        this.onPanUp(e)
      } else if (e.direction === 16) {
        this.onPanDown(e)
      }
    },
    onPanUp(e) {
      console.log('up')
      const sheet = this.$refs.sheet
      console.log(this.lastPosition)
      sheet.style.maxHeight = Math.abs(e.deltaY) + this.lastPosition + 'px'
      console.log(this.lastPosition)
    },
    onPanDown(e) {
      console.log('down')
      const sheet = this.$refs.sheet
      sheet.style.maxHeight = this.lastPosition - e.deltaY + 'px'
    },
    onPanStart() {
      console.log('start')
      this.removeClass()
    },
    onPanEnd(e) {
      console.log('end')
      const sheet = this.$refs.sheet
      this.snap(sheet.clientHeight, e.deltaY)
    },
    snap(height, delta) {
      const wh = window.innerHeight
      const half = wh / 2

      console.log(height, half, delta)
      if (height < half - 25 && delta > 0) {
        this.closeSheet()
      } else if (height <= half + 35 || delta > 0) {
        this.halfSheet()
      } else if (height > half + 15) {
        this.fullSheet()
      }
    },
    removeClass() {
      const sheet = this.$refs.sheet
      sheet.classList.remove('sheet-half')
      sheet.classList.remove('sheet-full')
      sheet.classList.remove('sheet-closed')
    },
    closeSheet() {
      const sheet = this.$refs.sheet
      sheet.classList.add('sheet-closed')
      sheet.classList.remove('sheet-half')
      sheet.classList.remove('sheet-full')
      this.setLastPosition(sheet)
    },
    halfSheet() {
      const sheet = this.$refs.sheet
      sheet.classList.add('sheet-half')
      this.setLastPosition(sheet)
    },
    fullSheet() {
      const sheet = this.$refs.sheet
      sheet.classList.add('sheet-full')
      this.setLastPosition(sheet)
    },
    setLastPosition(sheet) {
      sheet.removeAttribute('style')
      setTimeout(function () {
        this.lastPosition = sheet.clientHeight
        console.log(this.lastPosition)
      }, 150)
    },
  },

  // },
}
</script>

<style></style>
