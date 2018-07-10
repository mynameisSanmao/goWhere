<template>
	<div class="icons">
		<div class="icon" v-for="item in iconList">
			<a href="##" class="icons-a">
				<div class="icons-img-list">
					<img class="icon-img-content" :src="item.imgUrl" alt="item.name">
				</div>
				<p class="icon-content">{{item.name}}</p>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HomeIcons',
		data() {
			return{
				iconList:[
					{id:'001',name:'景点门票',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
					{id:'002',name:'水上乐园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'},
					{id:'003',name:'游乐园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
					{id:'004',name:'海洋馆',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'},
					{id:'005',name:'动植物园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
					{id:'006',name:'玩转长隆',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'},
					{id:'007',name:'城市观光',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'},
					{id:'008',name:'海滨沙滩',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png'}
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.icons{
		overflow: hidden;
		width:100%;
		height:0;
		padding-bottom:50%;
	}
		
	.icon{
		overflow: hidden;
		width:25%;
		height:0;
		padding-bottom:20%;
		padding-top:.1rem;
		float:left;
	}
		
	.icons-a{
		display:flex;
		justify-content:space-between;
	    align-items: center;
	    flex-direction: column;
	    overflow: hidden;
	    width: 100%;
	    height: 0;
	    padding-bottom: 80%;
	}
	.icons-img-list{
		width: 1.2rem;
		height: 1.2rem;			
	}
	.icon-img-content{
		width: 1.1rem;
		height: 1.1rem;	
		display:block;
		margin:0 auto;
	}
</style>
