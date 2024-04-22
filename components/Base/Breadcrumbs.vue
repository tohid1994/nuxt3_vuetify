<template>
    <div>
        <v-card-title class="!py-[41px] !px-[24px] custom-class">
            <v-breadcrumbs :items="useBreadcrumbsItems()" class="!p-0 !font-bold !text-xl">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
        </v-card-title>
        <div class="divider"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
:deep(.v-breadcrumbs-item--disabled) {
    opacity: 100% !important;
    pointer-events: none;
    font-weight: 500 !important;
    color: #333333 !important;
}
</style>