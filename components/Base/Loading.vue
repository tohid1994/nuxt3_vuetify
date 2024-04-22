<template>
    <component :is="getSkeletonType()"></component>
</template>

<script setup>
const { type } = defineProps(["type"])
import { SkeletonTable, SkeletonPackages, SkeletonForm } from '#components'
const getSkeletonType = () => {
    switch (type) {
        case 'table': return markRaw(SkeletonTable)
        case 'package': return markRaw(SkeletonPackages)
        case 'form': return markRaw(SkeletonForm)
    }
}
</script>

<style lang="scss" scoped></style>