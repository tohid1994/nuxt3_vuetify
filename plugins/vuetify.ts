import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin((app) => {
    let theme = {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#5a8dee',
                    card: '#ffffff',
                    light: '#FFFFFF',
                    grey: '#F5F5F5',
                    dark: '#0C1222',
                    text: '#636161',
                    green: '#119744',
                    greenLight: '#DDFFD5',
                    title: '#3E3E3E',
                    orange: '#ec5030'
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: '#e11d48',
                    card: '#0f172a',
                    light: '#FFFFFF',
                    grey: '#F5F5F5',
                    dark: '#0C1222',
                    text: '#636161',
                    green: '#119744',
                    greenLight: '#DDFFD5',
                    title: '#3E3E3E',
                    background: '#1e293b',
                    appBar: '#1e293b'
                },


            },
        },
    };

    let icons = {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    };

    let defaults = {
        //  this is Element defauilt ui . for example :
        //     VBtn: {
        //         color: 'primary',
        //         rounded: 'md',
        //         textColor: 'white',
        //     },

    };
    const vuetify = createVuetify({
        display: {
            mobileBreakpoint: 'lg',
            thresholds: {
                xs: 0,
                sm: 340,
                md: 540,
                lg: 800,
                xl: 1280,
            },
        },
        ssr: false,
        components,
        directives,
        theme: theme,
        icons: icons,
        defaults: defaults,
    })
    app.vueApp.use(vuetify)
})