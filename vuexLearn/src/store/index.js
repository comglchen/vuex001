import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
const countOptions = {
    namespaced: true,
    state: {
        sum: 0,
    },
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) context.commit('JIAODD', value)
        },
        jiaWait(context, value) {
            setTimeout(() => { context.commit('JIAWAIT', value) }, 1000)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
            console.log(state.sum)
        },
        JIAN(state, value) {
            state.sum -= value
        },
        JIAODD(state, value) {
            state.sum += value

        },
        JIAWAIT(state, value) {
            state.sum += value
        },
    },

    getters: {
        bigsum(state) {
            return state.sum * 10
        }
    }
}
const studentOptions = {
    namespaced: true,
    state: {
        studentList: [{ id: "001", name: '张三' }, { id: "002", name: '李四' }
        ]
    },
    actions: {

    },
    mutations: {
        ADDStudent(state, value) {
            state.studentList.unshift(value)
        }
    },

    getters: {

    }
}



export default new Vuex.Store({
    modules: {
        a: countOptions,
        b: studentOptions
    }
})