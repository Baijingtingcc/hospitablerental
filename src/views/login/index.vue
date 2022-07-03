<template>
  <div>
    <div class="box">
      <img :src="require('@/assets/pic/bg.png')" alt="" class="pic" />
      <div class="info">
        <div class="ttx">
          <img :src="require('@/assets/pic/avatar.png')" alt="" />
        </div>
        <p class="txt">游客</p>
        <van-button type="primary" size="small" class="btn">去登录</van-button>
      </div>
      <van-grid :column-num="3" class="gridItem" icon-size="20px">
        <van-grid-item
          v-for="item in iconList"
          :key="item.id"
          :icon="item.iconSrc"
          :text="item.title"
        />
      </van-grid>
      <div class="fouterpic">
        <img src="@/assets/pic/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        { id: 1, title: '我的收藏', iconSrc: 'star-o' },
        { id: 2, title: '我的出租', iconSrc: 'wap-home-o' },
        { id: 3, title: '看房记录', iconSrc: 'underway-o' },
        { id: 4, title: '成为房主', iconSrc: 'idcard' },
        { id: 5, title: '个人资料', iconSrc: 'user-circle-o' },
        { id: 6, title: '联系我们', iconSrc: 'phone-o' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.pic {
  height: 191px;
  width: 100%;
}
.box {
  position: relative;
  height: 300px;
  width: 100%;
}
.info {
  z-index: 999;
  position: absolute;
  top: 130px;
  left: 30px;
  width: 319px;
  height: 165px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  .ttx {
    width: 70px;
    height: 70px;
    background-color: #f5f5f5;
    position: fixed;
    top: 100px;
    left: 150px;
    border-radius: 50%;
    img {
      margin-top: 5px;
      margin-left: 5px;
      width: 60px;
      height: 60px;
    }
  }
  .txt {
    margin-top: 60px;
    margin-left: 145px;
    font-size: 14px;
  }
  .btn {
    width: 69px;
    height: 30px;
    margin-top: 30px;
    margin-left: 125px;
    border-radius: 5px;
    background-color: #21b97a;
    font-size: 12px;
  }
}
.gridItem {
  margin-top: 120px;
}
/deep/.van-grid-item__text {
  font-size: 14px;
  color: #333;
}
.fouterpic {
  img {
    width: 345px;
    height: 85px;
    margin: 15px;
  }
}
</style>
