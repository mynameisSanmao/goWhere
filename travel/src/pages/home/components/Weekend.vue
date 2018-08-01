<template>
	<div class="weekend">
		<h2 class="weekend-title">
			周末去哪儿
		</h2>
		<div class="weekend-content">
			<div class="weekend-wraap" v-for="item in weekendList" :key ="item.id">
				<a href="##" class="weekend-link">
					<div class="weekend-item">
						<img :src="item.imgUrl" alt="" />
					</div>
					<div class="weekend-info">
						<p class="weekend-info-name">{{item.title}}</p>
						<p class="weekend-info-desc">{{item.desc}}</p>
					</div>
				</a>
			</div>
			<!-- <div class="weekend-wraap">
				<a href="##" class="weekend-link">
					<div class="weekend-item">
						<img src="http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg" alt="" />
					</div>
					<div class="weekend-info">
						<p class="weekend-info-name">欢乐长隆</p>
						<p class="weekend-info-desc">世界欢乐汇聚长隆</p>
					</div>
				</a>
			</div> -->
		</div>
	</div>
</template>
<script>
	export default {
		name:'HomeWeekend',
		props:['weekendList']
	}
</script>
<style lang="stylus" scoped="">
	@import '~@/assets/styles/main.styl'
	.weekend
		background:#eee
		.weekend-title
			background:#eee
			height:0.8rem
			line-height:0.8rem
			padding-left:.26rem
			color:#212121
		.weekend-wraap
			margin-bottom:.1rem
			background:#fff
			.weekend-link
				display:block
				.weekend-item
					width:100%
					overflow:hidden
					height:0
					padding-bottom:37.4375%
					&>img
						display:block
						width:100%
				.weekend-info
					padding:.14rem .2rem .2rem .26rem
					.weekend-info-name
						ellipsis()
						font-size:.28rem
						line-height.48rem
						padding-right:1.4rem
						color:#212121
					.weekend-info-desc
						ellipsis()
						line-height.42rem
						font-size:.24rem
						padding-right:1.4rem
						color:#616161

</style>