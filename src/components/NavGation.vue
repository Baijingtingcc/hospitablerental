<template>
  <div>
    <!-- 头部搜索 -->
    <van-search
      v-model="value"
      show-action
      label="北京"
      background="transparent"
      placeholder="请输入小区或地址"
      to="/cityList"
      @click="goCityList"
    >
      <template #action>
        <div><van-icon name="location-o" /></div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: 'NavGation',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    goCityList() {
      this.$router.push({
        path: '/cityList'
      })
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-search {
  z-index: 10000;
  position: fixed;
  top: 15px;
  left: 15px;
  width: 350px;
}
</style>
