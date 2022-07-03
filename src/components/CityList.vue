<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
      class="header"
    />
    <van-index-bar>
      <van-index-anchor index="1">当前城市</van-index-anchor>
      <van-cell title="深圳" />

      <van-index-anchor index="2">热门城市</van-index-anchor>
      <van-cell
        v-for="(item, index) in hotCityList"
        :key="index + '-only'"
        :title="item.label"
      />
      <van-index-anchor index="3">所有城市</van-index-anchor>
      <van-cell
        v-for="(item, index) in cityList"
        :key="index"
        :title="item.label"
      />
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCity } from '@/api'
export default {
  name: 'city',
  data() {
    return {
      cityList: [],
      hotCityList: []
    }
  },
  created() {
    this.getCityList()
    this.getHotCity()
  },
  methods: {
    async getCityList() {
      const { data } = await getCityList(1)
      console.log(data)
      this.cityList = data.body
    },
    onClickLeft() {
      this.$router.push({
        path: 'home/main'
      })
    },
    async getHotCity() {
      const { data } = await getHotCity()
      this.hotCityList = data.body
    }
  }
}
</script>

<style scoped lang="less">
.header {
  background-color: #21b97a;
}
/deep/.van-icon-arrow-left {
  color: #fff;
}
/deep/.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
}
/deep/.van-index-anchor {
  background-color: #eee;
  color: rgb(161, 161, 161);
}
</style>
