<template>
  <div>
    <Component
      :is="require(`../assets/icons/${file}.svg?inline`)"
      :class="size"
      fill="currentColor"
      v-bind="$attrs"
      @v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseSVG',
  inheritAttrs: false,

  props: {
    file: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'w-6 h-6',
    },
  },
}
</script>

<style></style>
