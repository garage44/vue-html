export default function() {
    const routes = []

    return createRouter({
        history: createWebHistory(),
        linkActiveClass: 'active',
        routes,
    })
}