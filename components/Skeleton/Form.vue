<template>
    <div class="my-8 flex " v-for="item in 8" :key="item">
        <div class="flex mx-6 bg-gray-200 w-6/12 h-8 rounded-xl animate-pulse" v-for="clumn in 2" :key="clumn">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>