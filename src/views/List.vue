<template>
    <div>
        <div>我是12345合并的对象{{haha}}</div>
        <button @click="change">改变姓名</button>
   </div>
    
</template>
<script>
// import {mapState,mapMutations} from "vuex"
export default {
    data(){
        return{
        haha:"这里丰台区123",
        hehe:"张军辉"
        }
    },
    methods:{
        change(){
         
            this.$store.commit("changeName","一家人")
            this.haha=this.$store.state.hehe
        }
    }
}
</script>