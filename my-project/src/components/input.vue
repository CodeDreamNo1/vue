<template>
  <div class="inputs"><span>{{datas}}</span>
  <input type="text"  v-model="total">
  </div>
</template>
<script>
export default {
  name: 'inputs',
  props: {
    totals : [Number, String],
  },
  computed:{
    total: {
      set: function(val) {
        this.$emit('ddd',val)
      },
      get: function() {
        return this.totals;
      }
    }
  },
  data:function(){
    return{
      datas:'修改'
    }
  },
  methods:{

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
