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
            path: '/about',
            component: About,
            children: [{
                path: 'department',
                component: Department,
                children: [{
                    path: 'departmentDetail',
                    component: DepartmentDetail
                }]
            }, {
                path: 'staff',
                component: Staff,
                children: [{
                    name: 'StaffDetail',
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
            path: '/home',
            component: Home
        }
    ]
})