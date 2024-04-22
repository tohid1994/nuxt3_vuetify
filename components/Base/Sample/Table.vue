<template>
    <div class="w-full">
        <v-table v-if="data?.length">
            <thead>
                <tr>
                    <template v-for="(header, h) in headers" :key="h">
                        <th class="text-center font-medium sm:text-lg bg-gray-200"
                            :class="h == 0 ? '!rounded-l-[10px]' : h == headers.length - 1 ? 'rounded-r-[10px]' : ''">
                            {{ header.title }}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </v-table>

        <!-- start handle driver empty data -->
        <div v-else>
            <base-empty-data />
        </div>
        <!-- start handle driver empty data -->
    </div>
</template>

<script setup>
const { headers, data } = defineProps(["headers", "data"])
</script>

<style scoped>
:deep(th) {
    border-bottom: none !important;

}
</style>