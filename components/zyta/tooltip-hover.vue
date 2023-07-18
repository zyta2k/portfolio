<template>
  <div class="relative" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <slot></slot>
    <div v-if="active" class="tooltip transition-height absolute z-50 rounded-md bg-gray-500">
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const active = ref(false)

function setHover(val: boolean): void {
  active.value = val
}
</script>

<style scoped lang="scss">
.tooltip {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}
</style>
