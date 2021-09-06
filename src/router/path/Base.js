import HomePage from 'Router/path/nestedpath/Homepage'

let route = {
    name: 'Mainpage',
    path: '/',
    component: () => import('Components/layout/MainHomepage.vue'),
    meta: {},
    children: [
        HomePage
    ]
}

export default route