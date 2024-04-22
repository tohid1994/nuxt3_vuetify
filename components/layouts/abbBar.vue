<template>
    <v-app-bar elevation="0" height="88">

    </v-app-bar>
    <v-navigation-drawer v-model="navigation" location="left" :elevation="0" :permanent="!mobile">
        <layouts-drawer v-if="navigation" />

        <template v-slot:append>
            <v-list>
                <v-list-item>
                    <v-list-item-title>Log Out</v-list-item-title>
                    <template v-slot:prepend>
                        <base-icon class="mr-3" name="logout" size="24" color="gray-900" />
                    </template>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script setup>
const navigation = ref(true)

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
</script>

<style lang="scss" scoped></style>