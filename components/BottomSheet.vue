<template>
  <div class="sheet-wrap overflow-hidden">
    <!-- <div class="fixed inset-0 bg-black opacity-10 overflow-hidden"></div> -->
    <div
      ref="sheet"
      class="absolute inset-x-0 bottom-0 top-10 flex flex-col content-center items-center bg-white rounded-t-xl shadow-lg h-screen transition-all duration-200 ease"
    >
      <header
        ref="handle"
        v-hammer:pan="(event) => onPan(event)"
        v-hammer:panend="(event) => onPanEnd(event)"
        v-hammer:swipe.up="onSwipeUp"
        class="z-50 pt-2 pb-10 px-10"
      >
        <span
          class="block h-1 w-12 rounded-full bg-gray-400 mx-auto cursor-move active:cursor-grab"
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
      const sheet = this.$refs.sheet
      if (e.direction === 8) {
        this.onPanUp(e, sheet)
      } else if (e.direction === 16) {
        this.onPanDown(e, sheet)
      }
    },
    onPanUp(e, sheet) {
      this.removeClass()
      sheet.style.maxHeight = Math.abs(e.deltaY) + this.lastPosition + 'px'
    },
    onPanDown(e, sheet) {
      this.removeClass()
      sheet.style.maxHeight = this.lastPosition - e.deltaY + 'px'
    },
    onPanEnd(e) {
      const sheet = this.$refs.sheet
      if (e.deltaY > sheet.clientHeight / 2) {
        this.closeSheet()
      } else {
        this.snap(sheet.clientHeight, e.deltaY)
      }
    },
    onSwipeUp() {
      const sheet = this.$refs.sheet.classList
      if (sheet.contains('sheet-closed')) {
        this.removeClass()
        this.halfSheet()
      } else if (sheet.contains('sheet-half')) {
        this.removeClass()
        this.fullSheet()
      }
    },
    snap(height, delta) {
      const wh = window.innerHeight
      const half = wh / 2

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
      setTimeout(() => {
        this.lastPosition = sheet.clientHeight
      }, 450)
    },
  },

  // },
}
</script>

<style scoped>
.sheet-closed {
  max-height: 5rem;
}
.sheet-half {
  max-height: calc(50% - 56px);
}
.sheet-full {
  max-height: calc(100% - 56px);
}
</style>
