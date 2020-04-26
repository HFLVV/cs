<template>
  <div>
    <div>
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/Home/Fist">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item to="/Home/Mangement">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item to="/Home/Active">活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>