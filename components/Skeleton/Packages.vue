<template>
    <v-row>
        <v-col v-for="item in 6" :key="item" cols="12" sm="4">
            <v-card class="!border-[1px] !border-gray-200 rounded-lg animate__animated animate__fadeIn" elevation="0">
                <div class="relative">
                    <v-card-title class="!flex !items-center !justify-center !bg-gray-50 pa-4 pb-12">
                        <div class="bg-gray-200 w-3/12 h-5 rounded-xl animate-pulse"></div>
                    </v-card-title>
                    <div class="divider h-[2px]  bg-gray-50 animate-pulse"></div>
                    <div class="size-20 rounded-full  bg-gray-200 !absolute top-10 mx-auto right-0 left-0 animate-pulse">
                    </div>
                </div>
                <v-card-text class="pa-2 pt-12 !text-center">
                    <div class=" bg-gray-200 w-full h-5 mt-5 rounded-xl animate-pulse"></div>
                    <div class=" bg-gray-200 w-full h-5 mt-5 rounded-xl animate-pulse"></div>
                    <div class=" bg-gray-200 w-full h-5 mt-5 rounded-xl animate-pulse"></div>
                    <div class=" bg-gray-200 w-full h-5 mt-5 rounded-xl animate-pulse"></div>
                    <div class=" bg-gray-200 w-full h-5 mt-5 rounded-xl animate-pulse"></div>
                </v-card-text>
                <div class="divider"></div>
                <v-card-actions class="!flex !justify-center">
                    <div class="flex mx-6 bg-gray-200 w-4/12 h-12 rounded-xl animate-pulse">

                    </div>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>