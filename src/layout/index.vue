<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header class="header">
        <el-row>
          <el-col>
            <span>
              1
            </span>
          </el-col>
        </el-row>
        <el-row :gutter="40">

          <el-col :span="20">
            <span class="lesson-name">专业课程综合实训III</span>

          </el-col>
          <el-col :span="4">
            <span class="school-text" class-position="right">软件学院</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="teacher-number">
              <span>主讲教师：苏景❤</span>
              <el-divider direction="vertical" border-style="dashed" />
              <span>课程编号:P310002B</span>
              <el-divider direction="vertical" border-style="dashed" />
              <span>课序号：02</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="semester">
              <span>学期：2024-2025学年第一学期 </span>

              <span> 教学周：第5周</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: calc(100vh - 64px);"> <!-- 假设header高度为64px -->
          <div>
            <div class="layout_slidder" :class="{ fold: LayOutSettingStore.fold }" background-color="#005bac">
              <logo></logo>
              <el-scrollbar class="scrollbar">
                <el-menu :collapse="LayOutSettingStore.fold" text-color="white" background-color="#005bac"
                  :default-active="$route.path">
                  <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
              </el-scrollbar>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold }">
            <Tabbar></Tabbar>
          </div>
          <div class="layout_main" :class="{ fold: LayOutSettingStore.fold }">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang='ts'>
import logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user';
import { useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();

let $route = useRoute();
let userStore = useUserStore();
</script>

<script lang="ts">
export default {
  name: "Layout"
}
</script>
<style scoped>
.header {
  position: relative;
  background: url(head-background.png) no-repeat;
  background-size: cover;
  box-shadow: --el-box-shadow-light;
}

.common-layout .el-aside {
  color: var(--el-text-color-primary);
  background-color: #005bac;
  height: calc(100vh - 64px);
  /* 假设header高度为64px */
}

.common-layout .el-menu {
  border-right: none;
}

.common-layout .el-main {
  padding: 20px;
  background-color: #E5EAF3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* 添加阴影 */
  border-radius: 10px;
  /* 圆角边框 */
}

.layout_tabbar {
  width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  /* 圆角边框 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  /* 轻微阴影 */

}

.layout_main {
  padding: 16px;
  /* 根据需要调整内边距 */

}

.scrollbar {
  height: 100%;
  /* 确保滚动条占满空间 */
}

.layout_slidder {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-weight: bold;
}

.lesson-name {
  font-family: "宋体";
  color: #fafafa;
}

.school-text {
  font-family: "宋体";
  color: #fafafa
}

.teacher-number {
  font-family: "宋体";
  color: #fafafa
}

.semester {
  font-family: "宋体";
  color: #fafafa
}
</style>
