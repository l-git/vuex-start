

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import {moduleA} from './module/moduleA'
import {moduleB} from './module/moduleB'

export const store = new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    },
    state:{
        list:[
            {
                name:'llllllllll'
            }
        ]
    },
    actions:{
        addAction:({commit},p)=>{

            setTimeout(function(){
                commit('add',p)

            },3000);

        }
    },
    mutations:{
        add:(state,name)=>{
            state.list.push({name:name})
        },
        addmsg:(state,payload)=>{

            alert(122)
        }

    },
    getters:{


    }


})
