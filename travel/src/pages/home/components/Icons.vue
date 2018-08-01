<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide  v-for="val in page">
				<div class="icon"  v-for="item in val" :key="item.id">
					<a href="##" class="icons-a">
						<div class="icons-img-list">
							<img class="icon-img-content" :src="item.imgUrl" alt="item.name">
						</div>
						<p class="icon-content">{{item.desc}}</p>
					</a>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'HomeIcons',
		props:['iconList'],
		data() {
			return{
				// iconList:[
				// 	{id:'001',name:'景点门票',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
				// 	{id:'002',name:'水上乐园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
				// 	{id:'003',name:'游乐园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
				// 	{id:'004',name:'海洋馆',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'},
				// 	{id:'005',name:'动植物园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
				// 	{id:'006',name:'玩转长隆',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
				// 	{id:'007',name:'城市观光',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'},
				// 	{id:'008',name:'海滨沙滩',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png'},
				// 	{id:'009',name:'一日游',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
				// 	{id:'0010',name:'全部玩乐',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
				// ],
				swiperOption:{pagination: '.swiper-pagination'}
			}
		},
		computed:{
			page() {
				const pages = [];
				if(this.iconList&& this.iconList.length){
					this.iconList.forEach((item,index)=>{
						const page = Math.floor(index / 8);
						if(!pages[page]){
							pages[page] = [];
						}
						pages[page].push(item);
						
					})
				}
				return pages
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	.icons >>> .swiper-container{
		//overflow: hidden;
		//width:100%;
		height:3.7rem;
		//padding-bottom:50%;
	}
	.icons >>> .swiper-pagination-bullet-active
		background: $bgColor;
	.icon{
		overflow: hidden;
		width:25%;
		height:1.5rem;
		padding-top:.1rem;
		//height:0;
		//padding-bottom:20%;
		//padding-top:.1rem;
		float:left;
	}
		
	.icons-a{
		//display:flex;
		//justify-content:space-between;
	    //align-items: center;
	    //flex-direction: column;
	    //overflow: hidden;
	    //width: 100%;
	    //height: 0;
	    //padding-bottom: 80%;
	}
	.icons-img-list{
		width: 1.2rem;
		height: 1.2rem;	
		margin:0 auto;		
	}
	.icon-img-content{
		width: 1.1rem;
		height: 1.1rem;	
		display:block;
		margin:0 auto;
		text-align:center;
	}
	.icon-content{
		text-align:center;
	}
</style>
