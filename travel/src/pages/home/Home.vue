<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList = "date.swiperList"></home-swiper>
    <home-icons :iconList = 'date.iconList'></home-icons>
    <home-recommend :recommendList = 'date.recommendList'></home-recommend>
    <home-weekend :weekendList="date.weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
export default {
  name: 'Home',
  data () {
    return {
      date:[]
    }
  },
  methods:{

  },
  mounted() {
    let that = this;
    axios.get('/api/index.json').then(function(res){
      that.date = res.data.data
    })
  },
  
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="stylus" scoped>

</style>
