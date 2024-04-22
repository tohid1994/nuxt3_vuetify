<template>
    <v-list class="scroller" v-model:opened="open" nav color="primary">

    </v-list>
</template>

<script setup>
const open = ref([])

const checkActive = (value) => {
    const find = open.value.filter((item) => item == value)
    if (find.length) return true
}
</script>

<style scoped></style>