import Home from '../components/Home'

const routers = [
    {
        path: '/',
        redirect: '/home'
    },
    //首页城市列表页
    {
        path: '/home',
        component: Home
    },
    {
        path:'/hello',
        component: () => import('@/components/Hello.vue') 
    }
]

export default routers