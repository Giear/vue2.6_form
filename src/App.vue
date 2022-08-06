<template>
	<div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
}
.box{
  max-width: 500px;
}
.box-card{
  margin-bottom: 10px;
}
.line-input .el-input-group__prepend{
  min-width: 100px;
}
.button-group{
  margin-top: 10px;
}
</style>
