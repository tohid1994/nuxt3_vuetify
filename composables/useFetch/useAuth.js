import { useStorage } from '~/stores/useStorage';
export const useAuth = () => {
    const { updateUser } = useStorage()
    const router = useRouter()
    const getUser = async () => {
        try {
            const data = await useApi(`auth/user `, {
                method: "GET",
            })

            if (data?.data?.value) {
                updateUser(data?.data?.value.user)
                if (!data?.data.value.user.have_package) {
                    setTimeout(() => {
                        // router.replace({ path: '/packages/buy' })
                    }, 2000)
                } else {
                    setTimeout(() => {
                        router.replace({ path: '/' })
                    }, 2000)
                }
            }

            return data

        } catch (error) {
            console.log("error in use auth :", error);
            return error.value
        }

    }

    return { getUser }
}