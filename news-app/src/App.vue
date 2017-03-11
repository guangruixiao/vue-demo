<template>
  <div id="app">
    <newsheader id="header" v-show=$store.state.header></newsheader>
    <router-view id="content"></router-view>
    <newsfooter id="footer" v-show=$store.state.footer></newsfooter>
  </div>
</template>

<script>

import newsheader from "./components/header"
import newsfooter from "./components/footer"

export default {
  name: 'app',

  watch:{
    "$route.path": function(){

        if(this.$route.path=="/login"){

           this.headerhide()

        }else if(this.$route.path=="/article/5"){
           this.headerhide()
           this.footerhide()

        }else{
           this.showall()
        }
     }
  },

  methods:{
    headerhide:function(){
         this.$store.commit("headerhide")
    },
    footerhide:function(){
        this.$store.commit("footerhide")
    },

    showall:function(){

        this.$store.commit("showall")
    }
  },


  components:{
    newsheader,
    newsfooter
  }
}
</script>

<style>
#app {

  color: #2c3e50;
  margin-top: 60px;
  margin-left:550px;
  width:200px;
  position:relative;
  height:300px;
  border:3px black solid;

}

#header {

   width:200px;
   height:50px;
   left:0px;
   top:0px;
   border:1px red solid;
}

#content {

    height:195px;
    overflow: scroll;

}
#footer {
  width:200px;
  height:50px;
  position:absolute;
  left:0px;
  bottom:0px;
  border:1px yellow solid;
}


</style>
