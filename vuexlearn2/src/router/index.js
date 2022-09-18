import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import Department from '../pages/Department'
import Staff from '../pages/Staff'
import DepartmentDetail from '../pages/DepartmentDetail'
import StaffDetail from '../pages/StaffDetail'
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { title: '关于' },
            children: [{
                name: 'department',
                path: 'department',
                component: Department,
                meta: { isAuth: true, title: '部门信息' },
                children: [{
                    name: 'departmentDetail',
                    path: 'departmentDetail',
                    component: DepartmentDetail,
                    meta: { title: '部门详情' },
                }]
            }, {
                name: 'staff',
                path: 'staff',
                component: Staff,
                meta: { isAuth: true, title: '人员信息' },
                children: [{
                    name: 'staffDetail',
                    path: 'staffDetail/:id/:name/:addr',
                    component: StaffDetail,
                    meta: { title: '人员详情' },
                    // props: {
                    //     a: 1, b: "hello"
                    // }//传值
                }]
            },

            ]
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('login') == 'hadlogin') {
            next()
        } else { alert('对不起，你还没有登录！') }
    } else { next() }
})
router.afterEach(to => {
    document.title = to.meta.title || '我的主页'
})
export default router