<template>
	<div>
		<div class="week-hot-info">
			<div class="week-hot">
				<div class="hot-title">
					<img class="hot-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单"/>
					<span class="hot-word">本周热门榜单</span>
					<a href="##" class="hot-more">
						<i>全部榜单</i><i class="iconfont more-icon">&#xe63c;</i>
					</a>
				</div>
			</div>
			<ul class="hot-content">
			    <li class="hot-item" v-for="item in recommendList" :key="item.id">
			    	<a href="javascript:;" class="hot-item-link">
			    		<div class="hot-item-img-3" v-if="item.tagImgUrl">
		    				<img :src="item.tagImgUrl" :alt="item.title">
		    			</div>
			    		<div class="hot-item-img-box">
			    			<img :src="item.imgUrl" :alt="item.title" class="hot-item-img">
			    		</div>
			    		<p class="hot-item-name">{{item.title}}</p>
			    		<p class="hot-item-price-info"><i class="hot-item-price">￥{{item.price}}</i>起</p>
			    	</a>
			    </li>
			</ul>
		</div>
		<div class="you-lick">
			<div class="week-hot">
				<div class="hot-title">
					<img class="hot-icon" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢"/>
					<span class="hot-word">猜你喜欢</span>
				</div>
			</div>
			<ul class="you-lick-content">
				<li class="you-lick-item border-bottom" v-for="item in recommendList" :key="item.id">
					<router-link :to="`/detail/${item.id}`" class="you-lick-link">
						<div class="you-lick-img-wraap">
							<img class="you-lick-img" :src="item.imgUrl" :alt="item.title">
							<div class="you-lick-img-title">
								随买随用
							</div>
						</div>
						<div class="you-lick-info">
							<div class="you-lick-info-title">{{item.title}}</div>
							<div class="you-lick-info-comments">{{item.comments}}条评论</div>
							<div class="you-lick-info-price">
								<span>
									<i class="you-lick-info-price-money">￥</i>
									<i class="you-lick-info-price-money you-lick-info-price-moneynum">{{item.price}}</i>
									起
								</span>
								<span class="you-lick-info-price-location">南山区</span>
							</div>
							<div class="you-lick-info-happly mp-ellipsis2" v-if="item.infoHapply">{{item.infoHapply}}</div>
						</div>
					</router-link>
				</li>
			</ul>
			<a class="all-product" href="##">
				查看所有产品
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name:'HomeRecommend',
		props:['recommendList'],
		data() {
			return {
				// weekHotList:[
				// 	{id:'001',name:'世界之窗',imgUrl:'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_150x150_4abd4a25.jpg',price:'69.9',tagImgUrl:'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',comments:'19686',infoHapply:'狂欢无罪,够胆你就来'},
				// 	{id:'002',name:'海洋奇梦馆',imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_150x150_d614b85b.jpg',price:'50',tagImgUrl:'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',comments:'10386',infoHapply:'这里特别受欢迎哟(๑‾ ꇴ ‾๑)'},
				// 	{id:'003',name:'深圳野生动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_150x150_e7dd0cb5.jpg',price:'100',tagImgUrl:'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',comments:'3102',infoHapply:'👍小伙伴们都收藏了，去看看吧~'},
				// 	{id:'004',name:'深圳欢乐谷',imgUrl:'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_150x150_4fdae7e9.jpg',price:'69',comments:'902',infoHapply:'🔥好评如潮，小伙伴热推景点~'},
				// 	{id:'005',name:'东部华侨城',imgUrl:'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_150x150_47f5d64e.jpg',price:'164.9',comments:'902',infoHapply:'🔥好评如潮，小伙伴热推景点~'},
				// 	{id:'006',name:'深圳小梅沙海洋世界',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_150x150_f2cdcf0c.jpg',price:'155'},
				// 	{id:'007',name:'锦绣中华民俗村',imgUrl:'http://img1.qunarzz.com/sight/p0/1806/e3/e37b05393620703da3.water.jpg_150x150_23a48fd2.jpg',price:'55',comments:'902',infoHapply:'🔥好评如潮，小伙伴热推景点~'},
				// 	{id:'008',name:'东部华侨城大侠谷',imgUrl:'http://img1.qunarzz.com/sight/p0/201405/23/20f7be15157e2341055c05d40a5b57b9.jpg_150x150_fec30fa0.jpg',price:'197.01'},
				// 	{id:'009',name:'深圳玛雅水公园',imgUrl:'http://img1.qunarzz.com/sight/p0/1805/17/176c2114bb8ae255a3.water.png_150x150_4e35377d.png',price:'69',comments:'662',infoHapply:''},
				// 	{id:'0010',name:'深圳深蓝秘境欢乐水秀',imgUrl:'http://img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_150x150_82c499a0.jpg',price:'58.8',comments:'902',infoHapply:'🔥好评如潮，小伙伴热推景点~'}
				// ],

			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	size(args)
		unit(args / 50,rem);
	.week-hot-info,.you-lick
		background:#eee
		padding:0.2rem 0
		.week-hot
			background:#fff
			.hot-title
				position:relative
				padding:.24rem 0 .26rem 0
				.hot-icon
					width:.3rem
					height.3rem
					display:inline-block
					padding-left:.24rem
				.hot-word
					color:#212121
					font-size:size(16)
				.hot-more
					position:absolute
					right:.32rem
					color:#616161
					font-size:size(14)
					.more-icon
						font-size:size(12)
		.hot-content
			padding:0 .24rem
			overflow-x:scroll
			white-space:nowrap
			background:#fff
			-webkit-overflow-scrolling: touch;
			.hot-item
				//float:left
				display:inline-block
				padding:.06rem 0 .2rem
				&:not(:first-child)
					margin-left.12rem
				.hot-item-link
					position:relative
					display:block
					.hot-item-img-box
						overflow:hidden
						width:2rem
						height:0
						padding-bottom:100%
						.hot-item-img
							display:block
							width:100%
					.hot-item-img-3
						position:absolute
						top: -.06rem
						left:0
						width:.84rem
						height:.4rem
						img
							width:100%
					.hot-item-name
						line-height:.36rem
						margin-top:.12rem
						text-align:center
						font-size:size(12)
						color:#212121
						overflow:hidden
						white-space:nowrap
						text-overflow:ellipsis
						width:2rem
					.hot-item-price-info
						line-height:.36rem
						text-align:center
						font-size:size(12)
						color:#616161
						.hot-item-price
							font-size:size(14)
							color:$fontColor
	.you-lick
		background:#fff
		padding:0
		.you-lick-content
			padding: 0 .24rem
			.you-lick-item
				padding:.2rem 0
				.you-lick-link
					display:flex
					width:100%
					height:100%
					.you-lick-img-wraap
						position:relative
						width:2rem
						height:2rem
						.you-lick-img
							display:block
							width:100%
							height:100%
						.you-lick-img-title
							position:absolute
							top:0
							left:0
							width:1.02rem
							height:.38rem
							line-height:.38rem
							background-size:100%
							color:#fff
							background-image:url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png')
							font-size:size(12)
					.you-lick-info
						flex:1
						overflow:hidden
						padding-left:.22rem
						.you-lick-info-title
							margin-top:.26rem
							height:.44rem
							color:#212121
							font-size:.32rem
							line-height:.44rem
							ellipsis()
						.you-lick-info-comments
							margin-top:.14rem
							height:.34rem
							line-height:.34rem
						.you-lick-info-price
							display:flex
							line-height:.4rem
							justify-content:space-between
							color:#616161
							font-size:size(12)
							.you-lick-info-price-money
								color:$fontColor
							.you-lick-info-price-moneynum
								color:$fontColor
								font-size:.4rem
						.you-lick-info-happly
							display:inline-block
							margin-top:.48rem
							margin-right:.24rem
							background:#fff9f9
							padding:.04rem .1rem
							color:#f55
							font-size:.24rem
							line-height:.34rem
		.all-product
			display:block
			color:$bgColor
			padding:.2rem 0
			line-height:.4rem
			text-align:center
			font-size:.28rem


</style>