import { toast } from 'vue3-toastify';

export const api = (path: string, opts?: UseFetchOptions<any>) => {

    const token = localStorage.getItem('token')
    /** load nuxt env configuration */
    const config = useRuntimeConfig();
    /** load nuxt bearer token if user logged in */
    const csrf = useCookie('XSRF-TOKEN')


    if (path.startsWith('seller')) {
        const headers = opts.headers
        opts.headers = {
            ...headers,
        }
    }


    /** request options */
    let options: UseFetchOptions<any> = {
        ...opts,
        baseURL: config.public.appURL,
        headers: {
            'Accept': 'application/json',
            'X-Xsrf-Token': csrf,
            'Cache-Control': 'no-cache',
            'Authorization': token,
            ...opts?.headers
        },
        onResponseError(context) {
            if (!toast) return;
            const responseData = context.response._data;
            if (context.response.status == 401 || context.response.status == 403) {
                const url = removeWordFromString(context.response?.url, config.public.appURL + '/gate/')

                if (url && url != '') {
                    localStorage.clear()
                    useRouter().replace({ path: `/${url}` })
                }
            }
            if (typeof responseData === 'string') {
                // Handle non-JSON response
                toast.error(responseData);
            } else {
                // Handle JSON response
                const errorMessage = responseData?.message || context.response?.statusText || context.error;
                toast.error(errorMessage);
            }
        }
    };

    if (!options.onResponse) {
        options.onResponse = (context) => {
            if (!toast || !context.response._data?.message || context.response.status != 200) return;
        }
    };


    return useFetch(`/gate/${path}`, options);
}

function removeWordFromString(inputString, wordToRemove) {
    var resultString = inputString.substring(wordToRemove.length);
    const parts = resultString.split('/');
    return parts[0];

}