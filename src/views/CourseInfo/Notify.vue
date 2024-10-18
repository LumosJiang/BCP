<template>
  <div class="notification-container">
    <el-table :data="notifications" style="width: 1180px;" border>
      <!-- 通知主题列，宽度固定为900px -->
      <el-table-column prop="title" label="通知主题" width="680"></el-table-column>

      <!-- 通知发布时间列，宽度固定为200px -->
      <el-table-column prop="timestamp" label="发布时间" width="200"></el-table-column>

      <!-- 通知状态列，宽度固定为150px -->
      <el-table-column label="状态" width="150">
        <template #default="{ row }">
          <el-tag :type="row.viewed ? 'success' : 'warning'">
            {{ row.viewed ? '已查看' : '未查看' }}
          </el-tag>
        </template>
      </el-table-column>

      <!-- 操作列，宽度固定为150px -->
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button type="primary" @click="viewNotification(row)" size="small">查看通知</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 查看通知的弹出框 -->
    <el-dialog :visible="dialogVisible" title="查看通知" width="500px" @close="closeDialog">
      <p><strong>主题:</strong> {{ currentNotification.title }}</p>
      <p><strong>内容:</strong> {{ currentNotification.message }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, // 弹出框是否可见
      currentNotification: {}, // 当前查看的通知
      notifications: [
        {
          id: 1,
          title: '期中考试安排',
          message: '期中考试将在下周进行，请做好准备。',
          viewed: false, // 未查看状态
          timestamp: '2024-10-01 10:00', // 通知发布时间
        },
        {
          id: 2,
          title: '实验报告提交',
          message: '请于本周五之前提交实验报告。',
          viewed: true, // 已查看状态
          timestamp: '2024-10-05 15:30', // 通知发布时间
        },
      ],
    };
  },
  methods: {
    // 查看通知详情
    viewNotification(notification) {
      this.currentNotification = notification; // 设置当前通知
      this.dialogVisible = true; // 打开弹出框
      this.$nextTick(() => {
        notification.viewed = true; // 将通知标记为已查看
      });
    },
    // 关闭弹出框
    closeDialog() {
      this.dialogVisible = false; // 关闭弹出框
    }
  },
};
</script>

<style scoped>
.notification-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.el-table {
  margin-bottom: 20px;
  width: 1400px;
  /* 固定表格宽度为1400px，考虑到新增发布时间列 */
}

.el-dialog {
  width: 500px;
}
</style>
