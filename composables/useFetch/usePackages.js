import { useStorage } from '~/stores/useStorage';

export const usePackages = () => {
    const route = useRoute()
    const router = useRouter()

    const useIndex = async (id) => {
        try {
            const data = await useApi(`packages`, {
                method: "GET",
                key: "Get_package"
            })
            return data
        } catch (error) {

        }

    }

    const useIndexBuy = async (filters) => {
        try {
            return await useApi('package/list', {
                method: "GET",
                key: "Get_Package",
                query: { ...filters }
            })
        } catch (error) {

        }
    }

    const useShow = async (id) => {
        try {
            const data = await useApi(`packages/${id}`, {
                method: "GET",
                key: "Get_package"
            })
            return data
        } catch (error) {

        }
    }

    const useCreate = async () => {
        try {
            errors.value = []
            const fields = ["total_price", "number_of_agents", "number_of_users", "send_unit_price", "send_credit", "receive_unit_price", "receive_credit", "dedicated_line_unit_price", "dedicated_line", "public_line_unit_price", "public_line"]
            for (let i = 0; i < fields.length; i++) {
                if (createPackageFormModels.value[fields[i]] !== null) {
                    createPackageFormModels.value[fields[i]] = Number(createPackageFormModels.value[fields[i]])
                }
            }
            const data = await useApi('packages', {
                method: "POST",
                body: { ...createPackageFormModels.value }
            })
            if (data?.data?.value) {
                useAlert.success("Success")
                errors.value = []
            } else {
                errors.value = data?.error?.value?.data?.fields
            }
            return data
        } catch (error) { }
    }

    const useUpdate = async () => {
        try {
            errors.value = []
            const fields = ["total_price", "number_of_agents", "number_of_users", "send_unit_price", "send_credit", "receive_unit_price", "receive_credit", "dedicated_line_unit_price", "dedicated_line", "public_line_unit_price", "public_line"]
            for (let i = 0; i < fields.length; i++) {
                if (createPackageFormModels.value[fields[i]] !== null) {
                    createPackageFormModels.value[fields[i]] = Number(createPackageFormModels.value[fields[i]])
                }
            }
            const data = await useApi(`packages/${route.params.id}`, {
                method: "PUT",
                body: { ...createPackageFormModels.value }
            })
            if (data?.data?.value) {
                useAlert.success("Success")
                errors.value = []
            } else {
                errors.value = data?.error?.value?.data?.fields
            }
            return data
        } catch (error) { }
    }

    const useDelete = async (id) => {
        try {
            const data = await useApi(`packages/${id}`, {
                method: "DELETE",
            })
            if (data?.data?.value) {
                useAlert.success("Success")
                errors.value = []
            }

            return data
        } catch (error) {

        }
    }

    const { getPackage, updatePackage } = useStorage()
    const { getUser } = useAuth()
    const usePayment = async () => {
        try {
            const formData = new FormData();
            formData.append('package_id', getPackage.id)
            formData.append('price_id', getPackage.price.id)
            const data = await useApi('package/buy', {
                method: "POST",
                key: Math.random().toString(),
                body: formData
            })
            if (data?.data?.value) {
                useAlert.success('Success')
                getUser()
                router.replace({ path: '/numbers' })
                updatePackage(null)
            }
            return data
        } catch (error) {
            console.log("error in payment package : ", error);
        }
    }
    return { useShow, useCreate, useIndex, useUpdate, useDelete, useIndexBuy, usePayment }
}