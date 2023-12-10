<script setup lang="ts">
const props = defineProps({
  cn: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="props.cn"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
