<template>

  <!-- <canvas id="can" width="500px" height="500px" style="background-color: #fff; border: 5px solid black;"></canvas> -->

  <div class="h-box"  ref="ps">
    <div class="ps"  @touchstart="touch1"  @touchmove="touch2"  @touchend="touch3">
      <!-- <div class="ps"> -->
      <p>段落A</p>
      <p>段落B</p>
      <p>段落C</p>
      <p>段落D</p>
      <p>段落E</p>
      <p>段落F</p>
      <p>段落G</p>
      <p>段落H</p>
      <p>段落I</p>
      <p>段落J</p>
      <p>段落K</p>
      <p>段落L</p>
      <p>段落M</p>
      <p>段落N</p>
      <p>段落O</p>
      <p>段落P</p>
      <p>段落Q</p>
      <p>段落L</p>
      <p>段落S</p>
      <p>段落T</p>
      <p>段落U</p>
      <p>段落V</p>
      <p>段落W</p>
      <p>段落X</p>
      <p>段落Y</p>
      <p>段落Z</p>
      <p>段落A</p>
      <p>段落B</p>
      <p>段落C</p>
      <p>段落D</p>
      <p>段落E</p>
      <p>段落F</p>
      <p>段落G</p>
      <p>段落H</p>
      <p>段落I</p>
      <p>段落J</p>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  name: 'Hello',
  mounted(){
    // let bs = new BScroll(this.$refs.ps, {})
    // bs.on('scroll', function(e){
    //   console.log('BScroll', e)
    // })
    this.$refs['ps'].addEventListener("scroll", this.scroll1,true);
  },
  methods: {
    scroll1: function(e){
      console.log('scroll1', e)
    },
    //  scroll2: function(e){
    //   console.log('scroll2', e)
    // },
   touch1: function() {
    // console.log('touch1', e)
   },
   touch2: function() {
    // console.log('touch2', e.changedTouches[0].pageY)
   },
   touch3: function() {
    // console.log('touch3', e)
    const rect = this.$refs.ps.getBoundingClientRect()
    
    console.log('rect', rect)
   }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-box{
  position: relative;
      height: 500px;
    overflow: auto;
}
.ps{
  position: absolute;
  top: 50px;
  left: 50px;
}
.hello1{
  margin: 0 auto;
  width: 500px;
  height: 500px;
  border: 5px solid;
}
.pen{
  display: inline-block;
  width: 15px;
  height: 20px;
  background-color: red;
}
.pen:hover{
  cursor:pointer;
}
</style>
