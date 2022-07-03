<template>
  <div>
    <NavGation></NavGation>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="Shuffling">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="pic" />
      </van-swipe-item>
    </van-swipe>
    <!-- icon图标 -->
    <van-grid class="itemIcon" icon-size="60px">
      <van-grid-item :icon="require('@/assets/pic/p1.png')" text="整租" />
      <van-grid-item :icon="require('@/assets/pic/p2.png')" text="合租" />
      <van-grid-item :icon="require('@/assets/pic/p3.png')" text="地图找房" />
      <van-grid-item :icon="require('@/assets/pic/p1.png')" text="去出租" />
    </van-grid>

    <!-- 租房小组 -->
    <div class="zfcell">
      <van-cell
        title="租房小组"
        value="更多"
        title-style="font-weight: 700"
        style="background: #eee"
      />
      <van-grid
        class="itemCell"
        :column-num="2"
        direction="horizontal"
        :center="false"
        :gutter="20"
        icon-size="35px"
      >
        <van-grid-item
          v-for="item in picList"
          :key="item.id"
          :icon="'http://liufusong.top:8080' + item.imgSrc"
          :text="item.title + '\r' + item.desc"
          class="itemCell"
        ></van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import NavGation from '@/components/NavGation'
import { gitPic } from '@/api/home'
export default {
  components: {
    NavGation
  },
  data() {
    return {
      images: [
        'https://s2.loli.net/2022/07/02/eafgyVhX9WFvZb6.png',
        'https://s2.loli.net/2022/07/02/XmC5jrvJwNQaixf.png',
        'https://s2.loli.net/2022/07/02/skEvw1hKu8bRYQZ.png'
      ],
      picList: []
    }
  },
  created() {
    this.gitPic()
  },
  methods: {
    async gitPic() {
      const { data } = await gitPic()
      this.picList = data.body
    }
  }
}
</script>

<style scoped lang="less">
.pic {
  width: 100%;
  height: 212px;
}
.zfcell {
  background-color: #eee;
  padding-bottom: 10px !important;
}
/deep/.van-grid-item__text {
  font-size: 14px;
  color: #000;
}
</style>
