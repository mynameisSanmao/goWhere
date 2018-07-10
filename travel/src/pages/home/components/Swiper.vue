<template>
	<div class="wrapper">	
		<swiper :options="swiperOption">
	    <swiper-slide>
	    	<a href="##">
	    		<img src="http://img1.qunarzz.com/piao/fusion/1708/7c/c0b9acba07764302.jpg_750x200_389436b7.jpg" alt="sanmao" class="swiper-img" />
	    	</a>
			
	    </swiper-slide>
	    <swiper-slide>
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
			
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
	export default {
		name: "HomeSwiper",
		data() {
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
					loop:true,
					autoplay:3000
				}
			}
		},
		methods:{

		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff;
	.wrapper
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 26.67%;
		background: $bgColor;
		.swiper-img
			width: 100%;
</style>