<template>
  <iframe class="Syllabus" :src="previewSrc" width="100%" height="600px" style="border:none;"></iframe>
</template>

<script setup>
// 获取父组件传递的资源url
const props = defineProps({
  previewSrc: {
    type: String,
    required: false,
    default: () => 'https://book.yunzhan365.com/tnhkz/uvaj/mobile/index.html'
  }
});
</script>

<style>
.Syllabus {
  border-radius: 20px;
  box-shadow: --el-box-shadow-light;
  background-color: #FFFFFF;
  height: 580px;
  border: groove;
}
</style>
