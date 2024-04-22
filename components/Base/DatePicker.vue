<template>
    <div class="w-100 relative ">
        <label class="!label">{{ label || Date }}</label>
        <VueDatePicker class="!rounded-[10px] my-date-picker" v-model="date" :flow="flow" :enable-time-picker="false"
            :format="format" />
    </div>
</template>

<script setup >
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

let emit = defineEmits(['update:modelValue']);
const { label } = defineProps(['label'])
const date = ref("");
const flow = ref(['calendar', 'month', 'year']);
const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
watch(date, (val, newVal) => {
    emit('update:modelValue', datetime(val))
})
</script>

<style scoped>
.dp__theme_light {
    --dp-border-color: #9ca3af;
    --db-border-radius: 10px;
}

.dp__theme_light>>>.dp__main .dp__pointer {
    border-radius: 10px !important;
    height: 42px !important;
}
</style>
