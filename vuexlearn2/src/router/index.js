import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import Department from '../pages/Department'
import Staff from '../pages/Staff'
import DepartmentDetail from '../pages/DepartmentDetail'
import StaffDetail from '../pages/StaffDetail'
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            children: [{
                name: 'department',
                path: 'department',
                component: Department,
                children: [{
                    name: 'departmentDetail',
                    path: 'departmentDetail',
                    component: DepartmentDetail
                }]
            }, {
                name: 'staff',
                path: 'staff',
                component: Staff,
                children: [{
                    name: 'staffDetail',
                    path: 'staffDetail/:id/:name/:addr',
                    component: StaffDetail,
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
            component: Home
        }
    ]
})