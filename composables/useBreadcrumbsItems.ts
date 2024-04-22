
const drivers = {
    index: [
        {
            title: 'Driver',
            disabled: true,
        },
        {
            title: 'List of Drivers',
            disabled: false,
        },
    ],

    create: [
        {
            title: 'Driver',
            to: "/drivers",
            disabled: false,
        },
        {
            title: 'Create a Driver',
            disabled: false,
        },
    ]
}

const sendSms = [
    {
        title: 'Send',
        disabled: true,
    },
    {
        title: 'Send SMS',
        disabled: false,
    },
]

const packages = {
    index: [
        {
            title: 'Packages',
            disabled: true,
        },
        {
            title: 'List of Packages',
            disabled: false,
        },
    ],
    create: [
        {
            title: 'Package',
            disabled: true,
        },
        {
            title: 'Create a Package',
            disabled: false,
        },
    ],
    update: [
        {
            title: 'Package',
            disabled: true,
        },
        {
            title: 'Update a Package',
            disabled: false,
        },
    ],
    buy: [
        {
            title: 'Packages',
            disabled: true,
        },
        {
            title: 'Buy',
            disabled: false,
        },
    ],

    payment: [
        {
            title: 'Packages',
            disabled: true,
        },
        {
            title: 'Payment',
            disabled: false,
        },
    ]
}

const route = useRoute()
export const useBreadcrumbsItems = () => {
    switch (route.name) {
        case 'drivers': return drivers.index;
        case 'driverscreate': return drivers.create;
        case 'send-sms': return sendSms;
        case 'packages': return packages.index;
        case 'packages-create': return packages.create;
        case 'packages-update-id': return packages.update;
        case 'packages-buy': return packages.buy;
        case 'packages-buy-id': return packages.payment;
        case '/': return null
    }

}