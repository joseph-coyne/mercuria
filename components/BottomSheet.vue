<template>
  <div class="sheet-wrap">
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
        <!-- v-hammer:pandown="(event) => onPanDown(event)" -->

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
    initial: String,
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
    onPan(event) {
      const sheet = this.$refs.sheet
      console.log(sheet.style.maxHeight, 'start')
      console.log(event.deltaY)
      if (event.deltaY < 0) {
        sheet.style.maxHeight =
          Math.abs(event.deltaY) + this.lastPosition + 'px'
      } else if (event.deltaY > 0) {
        sheet.style.maxHeight = this.lastPosition - event.deltaY + 'px'
      }
    },
    onPanStart() {
      this.removeClass()
    },
    onPanEnd(event) {
      const sheet = this.$refs.sheet
      this.snap(sheet.clientHeight, event.deltaY)
    },
    snap(height, delta) {
      const wh = window.innerHeight
      const half = wh / 2

      console.log(height, half, delta)
      if (height < half + 25 && delta > 0) {
        this.closeSheet()
      } else if (
        (height < wh && height > half && delta < 0) ||
        (height < half && height > 60 && delta < 0)
      ) {
        this.halfSheet()
        console.log(Math.abs(height - half))
      } else if (height > half + 25 && delta < 0) {
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
      sheet.removeAttribute('style')
      this.setLastPosition()
    },
    halfSheet() {
      const sheet = this.$refs.sheet
      sheet.classList.add('sheet-half')
      sheet.removeAttribute('style')
      this.setLastPosition()
    },
    fullSheet() {
      const sheet = this.$refs.sheet
      sheet.classList.add('sheet-full')
      sheet.removeAttribute('style')
      this.setLastPosition()
    },
    setLastPosition() {
      const sheet = this.$refs.sheet
      setTimeout(function () {
        this.lastPosition = sheet.clientHeight
        console.log(this.lastPosition)
      }, 450)
    },
  },

  // },
}
</script>

<style></style>
