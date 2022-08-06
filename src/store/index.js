import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: [
            {
                id:1,
                userName: 'A',
                phone: '11111111111',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:2,
                userName: 'B',
                phone: '22222222222',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:3,
                userName: 'C',
                phone: '33333333333',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:4,
                userName: 'D',
                phone: '444444444',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:5,
                userName: 'E',
                phone: '55555555',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:6,
                userName: 'F',
                phone: '66666666',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            },
            {
                id:7,
                userName: 'G',
                phone: '7777777',
                email: '123@.com',
                password: '123',
                birthday: '1999-11-11',
                sex: '男',
                date: '2022-5-19',
            }
        ]
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        add(state, val) {
            state.userInfo.unshift(val)
        },
        edit(state, val) {
            let data = state.userInfo.find(item => item.id == val.id)
            Object.assign(data, val)
        },
        del(state,val) {
            let index = state.userInfo.findIndex(item => item.id == val)
            state.userInfo.splice(index, 1)
        }
    }
})

export default store;