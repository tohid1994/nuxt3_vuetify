import { toast } from 'vue3-toastify';

export const useAlert = {
    success: (message) => {
        toast.success(message)
    },

    error: (message) => {
        toast.error(message)
    }
}