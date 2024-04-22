<template>
    <v-app class="!bg-gray-200 !h-screen !overflow-y-auto">
        <v-locale-provider>
            <v-main>
                <layouts-abb-bar />
                <v-container fluid class="px-2 py-6">
                    <slot />
                </v-container>
            </v-main>
        </v-locale-provider>
    </v-app>
</template>

<script setup>

</script>

<style scoped></style>