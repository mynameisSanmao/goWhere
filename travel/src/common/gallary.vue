<template>
	<div class="wrapper" @click.stop="handerClickClose">
		<div class="box">
			<swiper :options="swiperOption" >
			    <swiper-slide v-for="(item,index) in imgs">
		    		<img :src="item" class="swiper-img" />
			    </swiper-slide>
			    
			    <div class="swiper-pagination"  slot="pagination"></div>
		    </swiper>
		</div>
		
	</div>
</template>
<script>
	export default {
		props:{
			imgs:{
				type:Array,
				default() {
					return []
				}
			}
		},
		data () {
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
					paginationType:'fraction',
					observer:true,
					observeParents:true
				}
			}
		},
		methods:{
			handerClickClose() {
				console.log('999')
				this.$emit('handerClickClose');
			}

		}
	}
</script>
<style lang="stylus" scoped>
	.wrapper >>> .swiper-container
		overflow:inherit
	.wrapper
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		top: 0
		left:0
		right:0
		bottom:0
		z-index:9
		background:#000
		.box
			height:0
			width:100%
			padding-bottom:69%
			.swiper-img
				width:100%
			.swiper-pagination
				bottom:-1rem
				color:#fff
</style>