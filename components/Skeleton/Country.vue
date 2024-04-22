<template>
    <div>
        <div class="w-full flex items-center">
            <div class="mx-4 w-4/12" v-for="item in 3" :key="item">
                <div class="w-full bg-gray-200 rounded-[10px] px-4 flex items-center  h-12 animate-pulse">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>