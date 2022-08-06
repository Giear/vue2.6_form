<template>
  <div class="app box">

    <router-link :to="{ path: 'hello' }">hello</router-link>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-button style="position: absolute;right: -50px;top: 15px;" type="text" @click="add()">添加</el-button>
    <el-card  v-for="item in pageInfo" :key="item.id"  class="box-card">
      <div slot="header" class="clearfix">
          <span>用户：{{item.userName}}</span>
          <el-button style="float: right;margin-right:10px ;padding: 3px 0" type="text" @click="del(item.id)">删除</el-button>
          <el-button style="float: right;margin-right:10px ;padding: 3px 0" type="text" @click="update(item.id)">编辑</el-button>
      </div>
      <el-form class="apply-form first-form" :model="item" :rules="rule" :ref="'form'+item.id">
        <div class="text item">
          <el-form-item label="用户名" prop="userName">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.userName" class="line-input">
              <template slot="prepend">用户名:</template>
            </el-input>
          </el-form-item>

          <el-form-item label="手机号" prop="phone">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.phone" class="line-input">
              <template slot="prepend">手机号:</template>
            </el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.email" class="line-input">
              <template slot="prepend">邮箱</template>
            </el-input>
          </el-form-item>
          
          <el-form-item label="性别" prop="sex">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.sex" class="line-input">
              <template slot="prepend">性别</template>
            </el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.password" class="line-input">
              <template slot="prepend">密码</template>
            </el-input>
          </el-form-item>

          <el-form-item label="生日" prop="birthday">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.birthday" class="line-input">
              <template slot="prepend">生日</template>
            </el-input>
          </el-form-item>

          <el-form-item label="更新时间" prop="date">
            <el-input :disabled="(!isEdit && !isAdd) || id !== item.id" placeholder="请输入内容" v-model="item.date" class="line-input">
              <template slot="prepend">更新时间</template>
            </el-input>
          </el-form-item>
        </div>
        <div class="button-group">
          <el-button type="primary" v-show="(isEdit || isAdd) && id == item.id" @click="save(item.id)">保存</el-button>
          <el-button type="" v-show="isEdit && id == item.id" @click="cancel(item.id)">取消</el-button>
        </div>
      </el-form>
    </el-card>


    <el-pagination
      :page-size="5"
      :current-page.sync="pageIndex"
      layout="prev, pager, next"
      :total="userInfo.length">
    </el-pagination>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data(){
    return {
      id: null,
      isAdd: false,
      isEdit: false,
      pageIndex: null,


      rule: {
            userName: [
                { required: true, message: '用户名不能为空', trigger: 'change' },
                { required: true, min: 1, max: 50, message: '用户名不能为空！', trigger: 'blur' },
           ],
           phone: [
                { required: true, message: '请输入手机号', trigger: 'change' },
                {        required: true,
                         pattern: /^1[3|5|7|8|9]\d{9}$/,
                         message: '请输入正确的手机号',
                         trigger: 'blur'
                }
           ],
           email: [
                { required: true, message: '请输入邮箱', trigger: 'change' },
                { required: true,
                  pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                  message: '请输入邮箱',
                  trigger: 'blur' },
           ],          
           sex: [
                { required: true, message: '请输入性别', trigger: 'change' },
                { required: true,message: '请输入性别', trigger: 'blur' },
           ],
           password: [
                { required: true, message: '请输入密码', trigger: 'change' },
                { required: true,message: '请输入密码', trigger: 'blur' },
           ],
           birthday: [
              { required: true, message: '请输入您的生日', trigger: 'change' },
              { required: true,message: '请输入您的生日', trigger: 'blur' },
           ],
           date: [
              { required: true, message: '请输入日期', trigger: 'change' },
              { required: true,message: '请输入日期', trigger: 'blur' },   
           ]
       }
    }
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    },
    pageInfo(){
      return this.userInfo.slice((this.pageIndex-1)*5, this.pageIndex*5) 
    }
  },
  created: function(){
  },
  mounted(){
    this.test();
  },

  methods: {
    async test(){
      console.log('1')
       await new Promise( (resolve)=> {
        console.log('1222')
          setTimeout(() => console.log("hello2 async/await"), 1000)
          resolve(); 
        })

        console.log('4')
       await new Promise((resolve) => {
        setTimeout(() => console.log("hello 3async/await"), 2000);
        resolve(); 
      });
       console.log('2')
    await new Promise((resolve) => {
        setTimeout(() => console.log("hello4 async/await"), 3000);
        resolve(); 
    });
      // await setTimeout(console.log('2'),2000)
      // await setTimeout(console.log('3'),3000)
    },
    gotoDetail(){
      this.$router.push({path: '/hello'})
    },
    //新增
    add(){
      if(this.handleCurForm()){
        return
      }
      let  id;
      let  ids = [];

      if(this.userInfo.length){
        this.userInfo.forEach(item => {
          ids.push(item.id)
        });
        id = Math.max.apply(null, ids) + 1
      } else {
        id = 1
      }
      this.id = id;
      this.isAdd = true;

      const data = {
        id: id,
        userName: null,
        phone: null,
        email: null,
        password: null,
        birthday: null,
        sex: null,
        date: null,
      }

      this.$store.commit('add', data);
    },
    
    initState(){
      this.id = null;
      this.isEdit = false;
      this.isAdd = false;
    },

    handleCurForm(){
      if(this.isAdd || this.isEdit){
        this.$message.error('请先完成该表单！');
        return true
      }
    },

    check(id){
      let isValid = false;
      this.$refs[`form${id}`][0].validate(valid => {
        isValid = valid
      })
      return isValid
    },
    //编辑
    update(id){
      if(this.id){
        return
      }
      this.id = id;
      this.isEdit = true;
    },
    // 编辑|新增 保存
    save(id){
      if(!this.check(id)){
        return
      }
      let data = this.pageInfo.find(item => item.id == id)
      this.$store.commit('edit', data)
      this.initState();
    },
    // 编辑取消
    cancel(id){
      if(!this.check(id)){
        return
      }
      // this.$refs[`form${id}`][0].clearValidate();
      this.initState();
    },

    // 删除
    del(id){
      this.id == id && this.initState();
      this.$store.commit('del', id);
    },
  }
}
</script>

<style>
.app {
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
