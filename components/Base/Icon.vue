<template>
  <div v-if="templateIcon" v-html="templateIcon" :style="[
    {
      width: size + 'px',
      height: size + 'px',
    },
  ]" class="inline-block"></div>
</template>
<script setup>
const templateIcon = ref("");
import icons from "./icons.js";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "light",
  },
  size: {
    type: String,
    default: "24",
  },
});
const colors = {
  transparent: "transparent",
  current: "currentColor",
  inherit: "inherit",
  light: "#FFFFFF",
  dark: "#191919",
  'primary-50': '#F3F8FF',
  'primary-100': '#E7F0FF',
  'primary-200': '#70A7FF',
  'primary-500': '#116DFF',
  'primary-600': '#0E57CC',
  'primary-700': '#0A4199',
  'primary-900': '#072C66',
  'secondary-50': '#FFF6E7',
  'secondary-200': '#FFC870',
  'secondary-500': '#FFA311',
  'secondary-900': '#CC820E',
  'gray-50': '#FAFAFA',
  'gray-200': '#E5E5E5',
  'gray-300': '#B2B2B2',
  'gray-400': '#999999',
  'gray-500': '#7F7F7F',
  'gray-600': '#4C4C4C',
  'gray-900': '#333333',
  'error-50': '#FFA0A0',
  'error-400': '#FF1111',
  'error-500': '#CC0E0E',
  'error-700': '#990A0A',
  'error-900': '#660707',
  'success-50': '#A7FFA0',
  'success-400': '#24FF11',
  'success-500': '#1DCC0E',
  'success-700': '#16990A',
  'success-900': '#0E6607'
};
watch(
  () => props.name,
  (val) => {
    if (val && icons[val]) {
      templateIcon.value = icons[val].replaceAll(
        "inherit",
        colors[props.color]
      );
    }
  },
  { immediate: true }
);
</script>
