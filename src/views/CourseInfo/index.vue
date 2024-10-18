<template>
  <el-card class="box-card">
    <!-- 卡片顶部添加按钮 -->
    <el-button type="primary" size="default" icon="Plus" plain @click="dialogFormVisible = true">添加获奖信息</el-button>
    <!-- 表格组件 -->
    <el-table :data="tableData" :style="{ width: '100%' }" >
        <el-table-column prop="num" label="序号" width="180" />
        <el-table-column prop="Rname" label="奖项名称" width="180" />
        <el-table-column prop="rank" label="位次" />
        <el-table-column prop="state" label="审核状态" />
    </el-table>
  </el-card>
  <el-dialog v-model="dialogFormVisible" title="请完善您想提交的信息" width="500">
    <el-form :model="reward">
      <el-form-item label="name" :label-width="formLabelWidth">
        <el-input v-model="reward.num" autocomplete="off" />
      </el-form-item>
      <el-form-item label="奖项类别">
      <el-select v-model="reward.Sname" placeholder="请选择奖项类别">
        <el-option label="大创" value="大创" />
        <el-option label="竞赛" value="竞赛" />
      </el-select>
    </el-form-item>
    <el-form-item label="奖项名称">
      <el-autocomplete
        v-model="reward.Rname"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-50"
        placeholder="请输入奖项名称"
      />
    </el-form-item>
    <el-form-item label="排位">
      <el-input-number v-model="reward.rank" :min="1" :max="5"  />
    </el-form-item>
    <el-form-item label="证明材料">
      <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
    </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
  
<script setup lang='ts'>
import { onMounted, reactive,ref } from 'vue';
import { awardInfo,awardPost } from '@/api/user';
const tableData=ref([
    
  ])

const get=async()=>{
  let result=await awardInfo();
  console.log(result.checkUser.data);
  tableData.value=result.checkUser.data;
}

const post=async(data: any)=>{
  let result=await awardPost(data);
  console.log(result);
}

get();

 const dialogFormVisible = ref(false)
const reward=reactive({
  num:'',
  Sname:'',
  Rname:'',
  rank:'',
})
 


  // const Plus=()=>{
  //   tableData.value.push({date:1,name:'测试',rank:1})
  // }
const confirm=()=>{
  post(reward);
  get();
  dialogFormVisible.value = false;
  reward.Rname='';
  reward.Sname='';
  reward.num='';
  reward.rank='';
}

interface RestaurantItem {
  value: string
}

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: '数学建模大赛' },
    { value: '软件创新' },
    { value: '服务外包' },
    { value: '互联网+' },
    { value: '大学生创新创业' },
    { value: 'xxx' },
    { value: 'babababa' },
  ]
}

onMounted(() => {
  restaurants.value = loadAll()
})

</script>
  
<style>
  
</style>