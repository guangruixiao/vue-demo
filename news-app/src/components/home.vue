<template>


        <ul>
          <li v-for="item in arrList">
            <router-link to="/article/5"  >
               <p> {{item.title}}</p>
            </router-link>
          </li>
        </ul>



</template>

<script>
export default {

    data:function(){
        return {arrList:[]}
    },
    mounted(){
      this.fetchdata();
    },
    methods:{
      fetchdata:function(){
        var self=this;
        this.$http.get('static/data/index.data')
         .then(function (response) {
            self.arrList=response.data
         })
         .catch(function (response) {
           console.log("没有接收到信息");
         });
      }
    }
}
</script>


<style>


</style>
