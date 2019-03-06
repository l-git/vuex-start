



export const moduleB={


    namespaced:true,

    getters:{

    },
    state:{
        m1Msg:'mb   sg'
    },
    actions:{

    },
    mutations:{
        addmsg(state,payload){

            state.m1Msg=state.m1Msg+payload.msg

        }
    }

}

