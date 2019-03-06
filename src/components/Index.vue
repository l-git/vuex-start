<template>

<div>

<div>Index</div>

<div @click="add">add</div>
<div @click="addAction">addAction</div>

<div v-for="item in list" :key="item.name">{{item.name}}</div>

<div>================      m1     ================</div>


<div>
<M1 />
    </div>

<div>================      m2     ================</div>


<div>
<M2 />
    </div>
    </div>



</template>

<script>



import M1 from './M1.vue'

import M2 from './M2.vue'
export default {

data(){
return {

list:this.$store.state.list

}
},
    created(){
        console.log(this)

for(var i=0;i<5;i++){
        this.$store.commit('add',i)

}
        
    },
    methods:{
        add(){

this.$store.commit('add','aaaa')
        },
        addAction(){
            this.$store.dispatch('addAction',123)

        }
    },
    computed:{
        // list(){
        //     return this.$store.state.list
        // }
    },
    components:{
        M1,M2
    }
    



}




</script>
<style>
</style>