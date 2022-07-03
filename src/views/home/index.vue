<template>
  <div>
    <!-- 头部 -->

    <!-- 主体区域 -->
    <main><router-view></router-view></main>

    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="wap-home-o" to="/home/main"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" to="/home/lookingRoom"
        >找房</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="newspaper-o" to="/home/formation"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="contact" to="/home/login"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'home',
      value: '',
      active: 'home'
    }
  }
}
</script>

<style scoped lang="less"></style>
