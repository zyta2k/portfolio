<template>
  <div class="flex min-h-screen flex-col">
    <layout-header></layout-header>
    <div class="flex-grow">
      <slot></slot>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script setup lang="ts"></script>
