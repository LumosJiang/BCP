<template>
  <div class="file-layout"><el-row :gutter="20">
      <el-col :span="6" :offset="18">
        <el-upload class="upload" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :on-change="handleChange">
          <el-button type="primary">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              一次只上传一个文件
            </div>
          </template>
        </el-upload>
      </el-col>
    </el-row>
    <el-table class="file" :data="fileList" style="width: 100%">
      <el-table-column fixed prop="name" label="Name" width="1080" />
      <el-table-column fixed="right" label="Operations">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="downloadFile(row.url)" round>
            <span>Download</span>
            <el-icon>
              <Download />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  // 假设上传成功后，我们将上传的文件添加到 fileList
  const newFile = {
    name: uploadFile.name,
    url: uploadFile.url, // 使用上传返回的URL
  }
  fileList.value.push(newFile) // 将新文件添加到 fileList
}

const downloadFile = (url: string) => {
  window.open(url) // 打开文件链接
}
</script>

<style scoped>
.upload {
  margin-bottom: 20px;
  text-align: right;
  /* 上传按钮右对齐 */
}

.file-layout {
  height: 580px;
  border: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  /* 添加浅色背景 */
  border-radius: 10px;
  /* 边角圆润 */
  padding: 10px;
  /* 内部填充增加空间感 */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  /* 添加阴影 */
  overflow-y: auto;
  /* 如果内容超出高度，启用滚动条 */
}

.fileDetail {
  width: calc(100% - 220px);
  /* 动态计算宽度，考虑侧边栏 */
  height: 580px;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.file {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  /* 添加背景颜色 */
  border-collapse: separate;
  border-spacing: 0 10px;
  /* 行间距 */
}

.el-table th {
  background-color: #f2f6fc;
  /* 表头背景色 */
  color: #303133;
  /* 表头文字颜色 */
  font-weight: bold;
}

.el-table td {
  background-color: #fff;
  /* 表格单元格背景色 */
  border-bottom: 1px solid #ebeef5;
  /* 添加底部边框 */
}

.el-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* 图标和文字间距 */
}

.el-button span {
  font-size: 14px;
}

.el-button:hover {
  background-color: #409eff;
  /* 鼠标悬停时的背景色 */
  border-color: #409eff;
  color: #fff;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.2);
  /* 添加悬停时阴影效果 */
}

.fileList::-webkit-scrollbar {
  width: 8px;
  /* 滚动条宽度 */
}

.fileList::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  /* 滚动条颜色 */
  border-radius: 10px;
}
</style>
