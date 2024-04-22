<template>
    <div>
        <label class="!label">{{ label }}</label>
        <v-text-field v-model="value" :type="type" :rules="rules" :error-messages="error || ''" :messages="message || ''"
            :readonly="readonly" :clearable="clearable"
            @update:model-value="emit('update:modelValue', (type == 'Number' && value) ? Number(value) : value)"
            :hide-details="hideDetails" @keypress.enter="emit('keypress', value)" @click:clear="emit('clear', null)">
            <template v-if="inerIcon" v-slot:prepend-inner>
                <v-icon>{{ inerIcon }}</v-icon>
            </template>
        </v-text-field>
    </div>
</template>

<script setup>
const { type, rules, error, readonly, hideDetails, inerIcon, clearable, label, message, modelValue } = defineProps([
    "type", "rules", "error", "readonly", "hideDetails", "inerIcon", "clearable", "label", "message", "modelValue"
])
const value = ref("")
let emit = defineEmits(['update:modelValue', 'keypress', 'clear']);

if (modelValue) {
    value.value = modelValue
}
</script>

<style  scoped>
:deep(.v-field__input) {
    height: 48px;
}
</style>