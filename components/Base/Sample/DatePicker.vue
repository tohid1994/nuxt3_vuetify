<template>
    <div class="w-100 relative ">
        <label class="!label">{{ label || Date }}</label>
        <VueDatePicker class="!rounded-[10px] my-date-picker" v-model="date" :flow="flow" :time-picker-inline="time"
            :enable-seconds="time" :format="format" />
    </div>
</template>

<script setup >
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

let emit = defineEmits(['update:modelValue']);
const { label, time, modelValue } = defineProps(['label', 'time', 'modelValue'])
const date = ref("");
const flow = ref(['calendar', 'month', 'year']);
const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()

    return `${year}/${month}/${day} ${h}:${m}:${s}`;
}
watch(date, (val, newVal) => {
    emit('update:modelValue', datetime(val, 'time'))
})

if (modelValue) {
    date.value = modelValue
}
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

:deep(.dp__pointer) {
    border-radius: 10px !important;
    height: 45px !important;
}
</style>
