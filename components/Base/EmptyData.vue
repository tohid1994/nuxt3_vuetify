<template>
    <p class="h-14 w-full flex items-center justify-center bg-gray-200 rounded-[10px] animate__animated animate__fadeIn">
        There is no record available <span v-if="title">in {{ title }}</span>
    </p>
</template>

<script setup>
const { title } = defineProps(["title"])
</script>

<style lang="scss" scoped></style>