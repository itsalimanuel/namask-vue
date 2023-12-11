<script setup lang="ts">
// import NamaskChat from "namask-vue";
import NamaskChat from "./package";
const key = "6a7Pv92GlqKptRTkgZVLgFBtp2OCvJHnibW98Xhx5z0";
</script>

<template>
  <div>
    <NamaskChat
      :key="key"
      :width="80"
      :height="80"
      name="Namask"
      description="Unveiling our AI Customer Service Tool, your next-gen support solution."
    />
  </div>
</template>
