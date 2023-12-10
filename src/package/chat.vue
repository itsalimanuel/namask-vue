<script setup lang="ts">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import logo from '../../public/black-logo.svg'
import CloseIcon from "../components/closeIcon.vue";
const isHovered = ref(false);
const isOpen = ref(false);

const boxRef = ref<HTMLElement | null>(null);

const props = defineProps({
  width: {
    type: Number,
    default: 80,
  },
  height: {
    type: Number,
    default: 80,
  },
  background: {
    type: String,
    default: "#4629f2",
  },
  svgHeight: {
    type: Number,
    default: 24,
  },
  svgWidth: {
    type: Number,
    default: 24,
  },
  icon: {
    type: String,
    default: logo
  }
});
onClickOutside(boxRef, () => (isOpen.value = false));

const hexToRgba = (hex: string, alpha: number) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const styleProps = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  background: hexToRgba(props.background, 1),
  boxShadow: `0px 30px 60px 0px ${hexToRgba(props.background, 0.43)}`,
  transform: isHovered.value ? "scale(1.1)" : "scale(1)",
  transition: "transform 0.3s ease-in-out",
}));

const svgStyle = computed(() => ({
  width: `${props.svgWidth}px`,
  minWidth: `${props.svgWidth}px`,
  height: `${props.svgHeight}px`,
  minHeight: `${props.svgHeight}px`,
  transform: isHovered.value ? "rotate(360deg)" : "rotate(0)",
  transition: "transform 0.5s ease-in-out",
}));
</script>

<template>
  <div>
    <button
      class="-_chat"
      v-if="!isOpen"
      :style="styleProps"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
      @click="isOpen = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :style="svgStyle"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="--box" v-else ref="boxRef">
      <div class="--box-header">
        <div class="--box-header-bg"></div>
        <div class="--box-header-filter"></div>
        <div class="--flex">
          <div class="--flex-header">
            <div class="--logo">
              <img :src="props.icon" alt="">
            </div>
            <button @click="isOpen = !isOpen" class="--close">
             <CloseIcon cn="is-close-icon" />
            </button>
          </div>
        </div>
      </div>
      <div class="--box-body"></div>
    </div>
  </div>
</template>

<style>
.-_chat {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.-_chat:hover {
  background: #5946f2;
}
.--box {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: inline-flex;
  border-radius: 8px 8px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 30px 60px 0px rgba(70, 41, 242, 0.14);
  background: #fff;
  border-radius: 8px 8px 0px 0px;
}
.--box-header {
  width: 450px;
  height: 239px;
  position: relative;
  padding: 10px;
}
.--box-header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
      from 202deg at 81.78% 23.22%,
      #4629f2 0deg,
      #13c6ff 125.62500357627869deg,
      #b94dfb 215.62499284744263deg,
      #ff53ee 294.3749928474426deg,
      #f3b960 360deg
    ),
    #d9d9d9;
  border-radius: 8px 8px 0px 0px;
  flex-shrink: 0;
  backdrop-filter: blur(25px);
}
.--box-header-filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px 8px 0px 0px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(25px);
}
.--flex {
  position: relative;
  z-index: 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
}
.--flex-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.--logo {
  display: flex;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.--logo img {
  width: 30px;
  height: 30px;
}
.--close {
  border-radius: 100%;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
}
.--box-body {
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  align-self: stretch;
  background: #fff;
  height: 400px;
}
.is-close-icon {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}
</style>
