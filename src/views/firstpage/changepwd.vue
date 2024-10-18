<template>
    <el-container>
    <el-header class="head"> 
      <el-row :gutter="20">
        <el-col :span="21">
          <div class="grid-content ">
            <router-link to="/firstpage" style="text-decoration: none; " >
            <h1 class="zitihead">智慧课程平台</h1>
          </router-link></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content ">
            <router-link to="/myinformation" style="text-decoration: none; " >
            <div style="margin-top: 10px"><el-avatar :size="40" :src="circleUrl"></el-avatar></div></router-link>
          </div>
        </el-col>
        <el-col :span="2">
            <router-link to="/myinformation" style="text-decoration: none; " >
          <h1 style="font-size: medium;margin-top: 21px;color: aliceblue;font-weight: 550;">{{ student[0].name }}</h1></router-link>
        </el-col>
      </el-row>
  
    </el-header>

    <el-main class ="backmain1">

    <!-- 修改密码 -->
    <div class="whiteback4" >
        <h1 style="text-align: left; font-weight: bold;margin-bottom: 5px; font-size: larger;">修改密码</h1>
        <el-row :gutter="20">
        <el-col :span="12">
            <div style="margin-top: 80px;text-align: center; "><el-avatar :size="200" :src="circleUrl"></el-avatar></div>
            <h1 class="ziti03" style="text-align: center;margin-top: 20px;">{{ student[0].name }}</h1>
        </el-col>
        <el-col :span="12">
            <div class="grid-content " style="margin-top: 15%;">
                <h1 class="ziti03" style="text-align: left;margin-top: 20px;">请输入原密码：</h1>
                <el-input placeholder="请输入密码" v-model="input" show-password style="width: 50%;"></el-input>
                <h1 class="ziti03" style="text-align: left;margin-top: 20px;">请输入新密码：</h1>
                <el-input placeholder="请输入密码" v-model="input" show-password style="width: 50%;"></el-input>
                <h1 class="ziti03" style="text-align: left;margin-top: 20px;">再次输入新密码：</h1>
                <el-input placeholder="请输入密码" v-model="input" show-password style="width: 50%;"></el-input>
            </div>
            <el-button type="primary" style="margin-left: 20%;">确认修改</el-button>
        </el-col>        
        </el-row>
        
    </div>
</el-main>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'src\\assets\\images\\example.jpg', // 头像URL
      student:[
        {id:22300000,name:'爱学习',identity:'学生',class:'软件2299',college:'软件学院',email:'22300000@bjtu.edu.cn'}
      ]
    };
    input: '';
  }
}
</script>

<style>
  .head{
    background-color: #005bac;
    
  }
  .backmain1{
    background-color: #eaf6ff;
    height: 774px;
  }
  .zitihead{
    text-align: left; 
    font-weight:bold;
    font-size: 24px;
    margin-top: 15px;
    color: #ffffff;
  }
  .ziti01{
    
    font-weight:400;
    font-size: 14px;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  .ziti02{
    
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .ziti03{
    text-align: left; 
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    margin-left: 10px;
    padding-top: 10px;
  }
  .ziti04{
    text-align: left; 
    font-weight: 400;
    margin-bottom: 2px;
    font-size: 14px;
    margin-left: 10px;
  }
  .whiteback4{
    border-radius: 4px; 
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    align-items: center;
    height: 550px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-white {
    background: #ffffff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 30px
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height:250px;
    margin-bottom: 10px;

  }
  .hover-color:hover {
    color: #ff4500; /* 设置鼠标悬停时的颜色 */
    }

  body > .el-container {
    margin-bottom: 40px;
  }

  
</style>