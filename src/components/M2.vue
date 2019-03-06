<template>

<div>


<div>module 2</div>

<div @click="addmsg">addmsg</div>

<div>{{m1Msg}}</div>


    </div>






</template>



<script>

export default {

    methods:{
        addmsg(){
            this.$store.commit('b/addmsg',{msg:'=============m2================='})
        }
    },
    computed:{
        m1List(){
            return this.$store.state.b.m1List
        },
        m1Msg(){
            return this.$store.state.b.m1Msg
        }
    }


}





</script>










