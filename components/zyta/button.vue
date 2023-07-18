<template>
  <button @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <slot :hover="hover"></slot>
  </button>
</template>

<script setup lang="ts">
const hover = ref(false)

function setHover(val: boolean): void {
  hover.value = val
}
</script>

<style scoped lang="scss"></style>
