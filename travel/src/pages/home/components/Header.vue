<template>
  <div class="head">
    <div class="head-left">
    	<div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="head-input">
    	<span class="iconfont">&#xe632;</span>
	    请输入城市/景点/游玩主题
	</div>
	<router-link to="/city" > 
	    <div class="head-right">
	    	{{this.$store.state.city}}
	    	<span class="iconfont allow-icon">&#xe6aa;</span>
	    </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
     
    }
  }
}
</script>
<style lang="stylus" scoped>
	// 1rem == html font-size = 50px; 在reset.css中定义了html的font-size为50px   meta标签中的缩放为1 为2倍，所以页面上的尺寸在原有的px大小上需 除以2
		//引用公共样式
	@import '~@/assets/styles/main.styl'
	size(args)
		unit(args / 50,rem);
	.head
		display: flex;
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
		height:size(32);
		line-height:size(32);
		margin-left: size(10);
		margin-top: size(6);
		padding-left: size(6);
		background: #fff;
		border-radius: size(5);
		color: #ccc;
	.head-right
		width: size(62);
		float: right;
		text-align: center;
		color:#fff
		.allow-icon
			margin-left: size(-4);
</style>
