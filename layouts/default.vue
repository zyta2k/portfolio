<template>
  <div class="flex min-h-screen flex-col bg-neutral-100">
    <layout-header></layout-header>
    <div class="flex flex-grow flex-col">
      <slot></slot>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script setup lang="ts"></script>
