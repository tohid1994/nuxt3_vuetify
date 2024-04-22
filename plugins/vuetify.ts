import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: false,
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#116DFF',
                        'primary-b3': '#072C66',
                        'primary-b2': '#0A4199',
                        'primary-b1': '#0E57CC',
                        'primary-w2': '#70A7FF',
                        'primary-w4': '#E7F0FF',
                        'primary-w5': '#F3F8FF',
                        secondary: '#FFA311',
                        'secondary-b1': '#CC820E',
                        'secondary-w2': '#FFC870',
                        'secondary-w4': '#FFF6E7',
                        gray: '#333333',
                        'gray-b1': '#191919',
                        'gray-b3': '#4C4C4C',
                        'gray-w1': '#7F7F7F',
                        'gray-w2': '#999999',
                        'gray-w3': '#B2B2B2',
                        'gray-w4': '#E5E5E5',
                        'gray-w5': '#F2F2F2',
                        'gray-w6': '#FAFAFA',
                        error: '#CC0E0E',
                        'error-b1': '#660707',
                        'error-b2': '#990A0A',
                        'error-w2': '#FF1111',
                        'error-w1': '#FFA0A0',
                        sucsess: '#1DCC0E',
                        'sucsess-b1': '#0E6607',
                        'success-b2': '#16990A',
                        'success-w2': '#24FF11',
                        'success-w1': '#A7FFA0',

                    },
                },
            },
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        aliases: {
            VBtnOutline: VBtn,
        },
        defaults: {
            VBtnOutline: {
                density: 'compact',
                variant: 'outlined',
                color: 'primary',
                height: 48
            },
            VBtn: {
                color: 'primary',
                height: 48
            },
            VCardActions: {
                VBtn: {
                    variant: 'flat',
                    color: 'primary',
                    width: 160,
                    height: 48
                },
            },
            VCard: {
                elevation: 4,
                rounded: 16,
            },
            VTable: {
            },
            VTextField: {
                variant: 'outlined',
                density: "compact",
                color: 'primary',
                rounded: 10,
                height: 48
            },
            VTextarea: {
                variant: 'outlined',
                density: "compact",
                color: 'primary',
                rounded: 10,
            },
            VFileInput: {
                density: 'compact',
                variant: '',
                color: 'primary',
                height: 48
            },
            VAutocomplete: {
                density: 'compact',
                variant: 'outlined',
                color: 'primary',
                rounded: 10,
                height: 48
            },
            VDivider: {
                thickness: 4,
            },
            VSelect: {
                variant: 'outlined',
                density: "compact",
                color: 'primary',
                rounded: 10,
                height: 48
            },
            VAppBar: {
                elevention: 0,
                density: 'compact',
            },
        },

    })
    app.vueApp.use(vuetify)
})