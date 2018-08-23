Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'nova-routes',
            path: '/nova-routes',
            component: require('./components/Tool'),
        },
    ])
})
