


import Vue from 'vue'



import Index from './components/Index.vue'

import {store} from './store/index'



var vm=new Vue({
    el:'#app',
    store,
    template:'<Index />',
    components:{
        Index
    }
})








