<template>
    <div class="!cursor-pointer">
        <v-file-input :accept="exel ? '.xlsx, .xls' : 'image/png, image/jpeg'" v-model="files" density="compact"
            variant="outlined" prepend-icon="" color="info" label="Click or Drop and drop" clearable show-size
            @update:model-value="emit('update:modelValue', files)" @click:clear="emit('update:modelValue', null)"
            :rules="rule" :error-messages="error" :messages="coverName ? coverName : ''">
            <template v-slot:prepend-inner>
                <BaseIcon name="uploade" size="24" color="primary-500" />
            </template>
            <template v-slot:append v-if="coverName">
                <v-btn color="red" variant="text" icon="mdi-close" @click="emit('deleteImage')">

                </v-btn>
            </template>
        </v-file-input>
    </div>
</template>

<script setup>
let emit = defineEmits(['update:modelValue', 'deleteImage']);
const { rule, coverName, exel, error } = defineProps(["rule", "coverName", "exel", "error"])
const files = ref(null)


</script>

<style scoped>
:deep(.v-field__input) {
    height: 48px;
}
</style>