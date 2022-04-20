<template>
  <div
    class="flex justify-center items-center h-full text-center mx-auto bg-gray-200"
  >
    <h1 class="title">Gather</h1>
    <!-- <BottomSheet :initial="'half'">
      <NuxtChild />
    </BottomSheet> -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
