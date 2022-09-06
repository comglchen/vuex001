import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
const actions = {
    // jia(context, value) {
    //     console.log(context, value)
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit("JIAN", value)
    // },
    jiaOdd(context, value) {
        if (state.sum % 2) context.commit('JIAODD', value)
    },
    jiaWait(context, value) {
        setTimeout(() => { context.commit('JIAWAIT', value) }, 1000)
    }
}
const mutations = {
    JIA(state, value) {
        state.sum += value
        console.log(state.sum)
    },
    JIAN(state, value) {
        state.sum -= value
    },
    JIAODD(state, value) {
        if (state.sum % 2) { state.sum += value }

    },
    JIAWAIT(state, value) {
        state.sum += value
    },
    ADDStudent(state, value) {
        state.studentList.unshift(value)
    }
}
const getters = {
    bigsum(state) {
        return state.sum * 10
    }
}
const state = {
    sum: 0,
    studentList: [{ id: "001", name: '张三' }, { id: "002", name: '李四' }
    ]
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})