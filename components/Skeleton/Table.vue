<template>
    <v-card-title class="!flex">
        <div class="flex bg-gray-200 w-2/12 h-12 mx-2 rounded-xl animate-pulse" v-for="clumn in 2" :key="clumn">
        </div>
        <v-spacer />
        <div class="flex bg-gray-200 w-1/12 h-12 mx-2 rounded-xl animate-pulse">
        </div>
    </v-card-title>
    <div class="my-4 flex " v-for="item in 8" :key="item">
        <div class="flex mx-6 bg-gray-200 w-3/12 h-8 rounded-xl animate-pulse" v-for="clumn in 4" :key="clumn">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>