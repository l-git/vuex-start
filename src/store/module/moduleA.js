



export const moduleA={


    namespaced:true,

    getters:{

    },
    state:{
        m1Msg:'m1msg'
    },
    actions:{

    },
    mutations:{
        addmsg(state,payload){
            
            state.m1Msg=state.m1Msg+payload.msg

        }
    }

}

