<navs>
  <ul class="home">
    <li v-for="item in home">{{item}}</li>
  </ul>
</navs>
<script>
  export default {
    name:'home',
    data:function () {
      return {
        home:['最新','热门','评分','分类']
      }
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
