<template>
    <div class="w-full h-14 rounded-[10px] bg-gray-200 px-4 flex items-center">
        <v-pagination density="compact" :total-visible="10" v-model="page" :length="pagination?.last_page"
            next-icon="mdi-menu-right" prev-icon="mdi-menu-left"></v-pagination>
        <v-spacer />
        page {{ page }} of {{ pagination?.last_page }}
    </div>
</template>

<script setup>
const { pagination } = defineProps(["pagination"])
const router = useRouter()
const page = ref(1)
watch(page, (val, newVal) => {
    router.push({
        name: route.name,
        query: {
            page: val,
        },
    });
});
</script>

<style lang="scss" scoped></style>