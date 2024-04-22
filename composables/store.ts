import moment from "moment";

export const baseLoading = ref({
    status: false,
    type: 'table'
})

export const errors = ref([])

export function datetime(input: string, format?: string, def?: string) {
    try {
        if (input == null || input.length <= 0) return def;

        if (format == null) format = 'YYYY/MM/DD';
        if (format == 'time') format = 'YYYY/MM/DD HH:MM:SS'

        return moment(input).format(format);

    } catch (e) {
        return def;
    }
}

