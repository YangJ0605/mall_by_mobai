<template>
  <div class="goods-item" @click="goToDetail">
    <img :src="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsItem',

  data () {
    return {
    }
  },
  mounted(){
    // console.log(this.goodsItem)
  },
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    },
  },
  methods: {
    imgLoad(){
      this.bus.$emit('imgload')
      // if(this.$route.path.indexOf('home') !== -1){
      //   // console.log('iiii')
      //   this.bus.$emit('imgload')
      // }else if(this.$route.path.indexOf('detail') !==-1){
      //   this.bus.$emit('detailImageload')
      // }
      
    },
    goToDetail(){
      if(this.goodsItem.iid){
        this.$router.push('detail/' + this.goodsItem.iid)
      }
      this.bus.$emit('loadDetail',111)
      // this.$router.push({
      //   path:'detail',
      //   query:{
      //     iid: this.goodsItem.iid
      //   }
      // })
    }
  }
}
</script>

<style lang='scss' scoped>
  .goods-item {
    padding-bottom:40px;
    position: relative;
    width: 48%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .goods-info{
      font-size: 12px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      overflow: hidden;
      text-align: center;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
      }
      .price {
        color: pink;
        margin-right: 20px;
      }
      .collect {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: -15px;
          top: -1px;
          width: 14px;
          height: 14px;
          background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
        }
      }
    }
  }
</style>
