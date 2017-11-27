<template>
  <div class="inputs"><span>{{datas}}</span>
  <input type="text" @change="find" v-model="totals">
  </div>
</template>
<script>
export default {
  name: 'inputs',
  props: {
    value : [Number, String]
  },
  data(){
    return{
      datas:'修改',
      totals:this.totals
    }
  },
  methods:{
    find:function(){
      console.log(this.totals)
      this.$emit('ddd',this.totals)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.box{

}
</style>
