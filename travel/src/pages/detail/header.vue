<template>
	<div>
		<router-link tag="div" to="/" class="back-icon" v-show="showAbs">
			<div class="iconfont back-icons">&#xe624;</div>
		</router-link>
		<div class="head" v-show="!showAbs" :style="opacityStyle">
		    <router-link tag="div" class="head-left" to="/">
		    	<div class="iconfont back-icon">&#xe624;</div>
		    </router-link>
		    <div class="head-input">
			    景点详情
			</div>
			
	   </div>
	</div>
	
</template>
<script>
	export default {
		name:'headDetali',
		data () {
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handerScroll() {
				let top = document.documentElement.scrollTop;
				if(top > 60) {
					let opacity = top / 140;
					opacity>1 ? 1 : opacity;
					this.opacityStyle = {opacity}
					this.showAbs = false;

				}else {
					this.showAbs = true;
				}
			}
		},
		mounted () {
			window.addEventListener('scroll',this.handerScroll);
		},
		//页面销毁后移出scroll事件
		destroyed() {
			window.removeEventListener('scroll',this.handerScroll)
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	size(args)
		unit(args / 50,rem);
	.back-icons
		position:absolute
		top: .2rem;
		left: .2rem;
		height:.8rem
		width:.8rem
		text-align:center
		background:rgba(0,0,0,.8)
		line-height:.8rem
		border-radius:50%
		color: #fff;
	.head
		z-index:9
		display: flex;
		position:fixed
		top:0
		left: 0;
		right:0
		height: size(43);
		background: $bgColor;
		line-height: size(43);
		color: #fff;
	.head-left
		width: size(32);
		float: left;
		.back-icon
			text-align: center;
			font-size: size(20)
	.head-input
		flex: 1;
		padding-left: size(6);
		text-align:center
		border-radius: size(5);
		color: #fff;
	.head-right
		width: size(62);
		float: right;
		text-align: center;
		color:#fff
		.allow-icon
			margin-left: size(-4);
</style>