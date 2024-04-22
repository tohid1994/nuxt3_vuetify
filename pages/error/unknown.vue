<template>
    <v-container class="!h-screen w-full flex justify-center items-center">
        <div>
            <v-img width="500" src="/images/unknown.png" />
            <div class="w-full flex items-center justify-center">
                <base-sample-btn text="Go Home" to="/"></base-sample-btn>
            </div>
        </div>
    </v-container>
</template>

<script setup>
definePageMeta({
    layout: "error"
})
</script>

<style lang="scss" scoped></style>