<template>
  <div>
  <ul><li v-for="item in home">{{item}}:<input type='radio' v-model="checked"> <input type="text" v-model="total"></li></ul>
  <inputs :totals="total"  v-on:ddd="changess"></inputs>
  </div>
</template>
<script>
  import inputs from './input'
  export default {
    name:'home',
    data:function () {
      return {
        home:['最新','热门','评分','分类'],
        total: 10,
        checked:false,
      }
    },
    methods:{
      changess:function(val){
        this.total=val;
      }
    },
    components:{
      inputs,
    }
  }
</script>
<style>
  body{
    padding:0 5%;
    margin: 0;
    color: #ccc;
    background: url("/src/assets/back.jpg") center center repeat;
  }
  .home{
    width:90%;
    padding:10px 30px;
    margin: 0 auto;
    display: flex;
    border-radius: 7px;
    justify-content: space-around;
    background:rgba(255,255,255,.3);
  }
  .home li{
     width:5%;
     height:10px;
     padding:10px;
     border: 1px solid #ccc;
     border-radius:5px ;
    list-style: none;
    text-align: center;
    color:white;
    cursor: pointer;
    line-height: 10px;
  }
  .home li:hover{
    background: rgba(255,255,255,.7);
    color: #000;
  }
</style>
