<template>

<div>


<div>module a</div>

<div @click="addmsg">addmsg</div>

<div>{{m1Msg}}</div>


    </div>






</template>



<script>

export default {

    methods:{
        addmsg(){
            this.$store.commit('a/addmsg',{msg:'================m1=============='})
        }
    },
    computed:{
        m1List(){
            return this.$store.state.a.m1List
        },
        m1Msg(){
            return this.$store.state.a.m1Msg
        }
    }


}





</script>










