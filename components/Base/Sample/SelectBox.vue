<template>
    <div>
        <label class="!label">{{ label }}</label>
        <div>
            <v-autocomplete :loading="loading" :disabled="disabled" v-model="item" clearable :items="items"
                :item-title="itemTitle" :item-value="itemValue" @update:model-value="emit('update:modelValue', item)"
                :rules="rule" :error-messages="error" @click:clear="emit('update:modelValue', null)"
                :return-object="returned">

                <template v-if="pagination" v-slot:append-item>
                    <v-card-actions>
                        <v-pagination density="compact" :total-visible="3" v-model="page" :length="pagination?.last_page"
                            next-icon="mdi-menu-right" prev-icon="mdi-menu-left"></v-pagination>
                    </v-card-actions>
                </template>

            </v-autocomplete>
        </div>
    </div>
</template>

<script setup>
const { error, rule, label, itemTitle, itemValue, url, returned, apiQuery, disabled, modelValue, data } = defineProps([
    "modelValue", "disabled", "error", "rule", "label", "itemTitle", "itemValue", "url", "returned", "apiQuery", "data"
])
const loading = ref(false)
const items = ref([])
const item = ref(null)

let emit = defineEmits(['update:modelValue']);

const page = ref(1)
const pagination = ref(null)

if (url) {
    const getItems = async () => {
        loading.value = true
        const { data, error } = await useApi(url, {
            method: "GET",
            key: "get_items"
        })
        if (data.value) {
            items.value = data.value.data
            if (modelValue) {
                item.value = modelValue
            }
            if (data.value?.meta) {
                pagination.value = data.value.meta
            }
        }
        loading.value = false
    }
    getItems()
}
else if (data) {
    items.value = data
    if (modelValue) {
        item.value = modelValue
    }

}





</script>

<style scoped>
:deep(.v-field__input) {
    height: 48px;
}
</style>