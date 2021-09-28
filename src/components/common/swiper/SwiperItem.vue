<template>
  <div class="codew-slide">
    <slot></slot>
  </div>
</template>

<script> 
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .codew-slide {
    width: 100%;
    flex-shrink: 0;
  }

  .codew-slide img {
    width: 100%;
  }
</style>
