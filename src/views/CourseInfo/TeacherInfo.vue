<template>
  <div class="teacherInfo">
    <el-descriptions direction="vertical" border style="margin-top: 20px">
      <el-descriptions-item :rowspan="2" :width="140" align="center">
        <el-image style="width: 100px; height: 100px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-descriptions-item>
      <el-descriptions-item label="教师姓名">苏景❤</el-descriptions-item>
      <el-descriptions-item label="职称">讲师</el-descriptions-item>
      <el-descriptions-item label="移动电话">18100000000</el-descriptions-item>
      <el-descriptions-item label="办公电话">010-12345689</el-descriptions-item>
      <el-descriptions-item label="办公地点">逸夫楼</el-descriptions-item>
      <el-descriptions-item label="邮箱">苏景❤</el-descriptions-item>
      <el-descriptions-item label="个人网址">苏景❤</el-descriptions-item>
      <el-descriptions-item label="学院">
        <el-tag size="small">软件学院</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="简介">
        北京交通大学软件学院老师
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div>

  </div>

</template>

<script>

</script>

<style>
.teacherInfo {
  border-radius: 20px;
  box-shadow: --el-box-shadow-light;
  background-color: #FFFFFF;
  height: 570px;
  border: groove;
}
</style>