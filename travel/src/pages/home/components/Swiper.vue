<template>
	<div class="wrapper">	
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide v-for="item in swiperList" :key="item.id">
		    	<a href="##">
		    		<img :src="item.imgUrl" alt="sanmao" class="swiper-img" />
		    	</a>
				
		    </swiper-slide>
		    <!-- <swiper-slide>
		    	<a href="##">
		    		<img src="http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg" alt="sanmao" class="swiper-img" />
		    	</a>
				
		    </swiper-slide>
		    <swiper-slide>
		    	<a href="##">
		    		<img src="http://img1.qunarzz.com/piao/fusion/1806/de/df09fa61aed2d502.jpg_750x200_67472739.jpg" alt="sanmao" class="swiper-img" />
		    	</a>
				
		    </swiper-slide>
		    <swiper-slide>
		    	<a href="##">
		    		<img src="http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg" alt="sanmao" class="swiper-img" />
		    	</a>
				
		    </swiper-slide> -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
	export default {
		name: "HomeSwiper",
		props:{
			swiperList:{
				type: Array,
				default:function() {
					return []
				}
			}
		},
		data() {
			return {
				
				swiperOption:{
					pagination: '.swiper-pagination',
					loop:true,
					autoplay:3000,
					observer:true, 
					observeParents:true,
					lazyLoading:true
				}
			}
		},
		computed:{
			showSwiper() {
				return this.swiperList.length;
			}
		},
		methods:{

		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	// >>> vue深度选择器
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff;
		transform:translateZ(0)
	.wrapper >>> .swiper-container
		overflow: hidden;
		//width: 100%;
		//height: 0;
		//padding-bottom: 26.67%;

	.wrapper
		transform:translateZ(0)
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 30.67%;
		background: $bgColor;
		.swiper-img
			width: 100%;
</style>