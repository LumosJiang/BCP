<template>
  <div class="Intro">
    <div class="notification-form">
      <el-form :model="form" label-width="80px">
        <!-- 主题输入 -->
        <el-form-item label="通知主题">
          <el-input v-model="form.title" placeholder="请输入通知主题"></el-input>
        </el-form-item>
        <!-- 内容输入 -->
        <el-form-item label="通知内容">
          <el-input type="textarea" v-model="form.message" placeholder="请输入通知内容" rows="10"></el-input>
        </el-form-item>
        <!-- 发布按钮 -->
        <el-form-item>
          <el-button type="primary" @click="publishNotification" size="large">发布通知</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      // 表单数据
      form: {
        title: "",  // 通知主题
        message: "",  // 通知内容
        time: "",  // 通知发布时间
      },
    };
  },
  methods: {
    // 发布通知
    async publishNotification() {
      if (!this.form.title || !this.form.message) {
        ElMessage.error("请填写通知的主题和内容");
        return;
      }

      // 自动获取当前发布时间
      this.form.time = new Date().toLocaleString();

      try {
        // 推送通知到后端 (假设后端接口为 /api/notifications)
        const response = await axios.post("/api/notifications", this.form);
        if (response.status === 200) {
          ElMessage.success("通知发布成功");
          // 清空表单
          this.form.title = "";
          this.form.message = "";
        } else {
          ElMessage.error("通知发布失败，请重试");
        }
      } catch (error) {
        console.error(error);
        ElMessage.error("发布失败，请检查网络连接");
      }
    },
  },
};
</script>

<style scoped>
/* 父容器 */
.Intro {

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  /* 背景颜色柔和 */
  padding: 20px;
}

/* 表单容器 */
.notification-form {
  height: 550px;
  width: 1200px;
  /* 限制表单最大宽度，保持美观 */
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 轻微阴影效果 */
  padding: 40px;
}

/* 表单项 */
.el-form-item {
  margin-bottom: 20px;
}

/* 输入框 */
.el-input {
  width: 100%;
}

/* 发布按钮 */
.el-button {
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
}
</style>
