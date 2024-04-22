<template>
    <div>
        <v-dialog v-model="deleteDialog" width="540">
            <v-card class="!rounded-2xl" elevation="0">
                <v-card-title class="px-8 pt-5">
                    Delete {{ name }}
                </v-card-title>
                <v-card-text class="px-8">
                    Are you sure to delete this {{ name }}?
                </v-card-text>
                <v-card-actions class="!w-full px-8 py-7">
                    <div class="w-6/12 mr-2 ">
                        <base-sample-btn css="!w-full !text-error-500 " text="No" variant="tonal"
                            @click="emit('update:modelValue', false)">
                        </base-sample-btn>
                    </div>
                    <div class="w-6/12 ml-2">
                        <base-sample-btn :loading="loading" css="!w-full" text="Yes" color="error"
                            @click="emit('delete', true)">
                        </base-sample-btn>
                    </div>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
const deleteDialog = ref(true)
const { modelValue, name, loading } = defineProps(["modelValue", "name", "loading"])
deleteDialog.value = modelValue

const emit = defineEmits(["update:modelValue", "delete"])
</script>

<style lang="scss" scoped></style>