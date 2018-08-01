<template>
	<div class="head">
		<router-link to="/">
			<div class="back">
				<span class="iconfont allow-icon">&#xe624;</span>
			</div>
		</router-link>
		城市选择
	</div>
</template>
<script>
	export default {
		name:'CityHead',
		data () {
			return{

			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	size(args)
		unit(args / 50,rem);
	.head
		position:relative;
		height: size(43);
		background: $bgColor;
		line-height: size(43);
		color: #fff;
		text-align:center
		.back
			position:absolute
			top:0
			left: 0
			height:100%
			width:.8rem
			color:#fff
</style>