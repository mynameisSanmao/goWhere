<template>
	<div >
		<div class="branner-box" @click="handlerClickShow">
			<div class="branner-img">
				<img src="//img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_600x330_3b1186e2.jpg" alt="" class="img">
			</div>
			<div class="branner-title">
				<div class="title-name">
					深圳欢乐谷(AAAAA景区)
				</div>
				<div class="number-name">
					20
					<span class="iconfont allow-icon">&#xe662;</span>
				</div>
			</div>
		</div>
		<fade-animate>
			<gallary @handerClickClose="handerClickClose" :imgs="imgs" v-show="showGallar"></gallary>
		</fade-animate>
		<header-detail></header-detail>
		<div>
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>
<script>
	import gallary from '@/common/gallary.vue'
	import headerDetail from '@/pages/detail/header.vue'
	import detailList from '@/pages/detail/list.vue'
	import fadeAnimate from '@/common/fadeAnimate.vue'
	export default {
		name:'Detail',
		data() {
			return {
				showGallar:false,
				imgs:['http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_350x240_4dec98b0.jpg','http://img1.qunarzz.com/sight/p0/1604/80/80941a74399235d790.water.jpg_350x240_e9bbc842.jpg'],
				list:[
					{title:"A一级导航",children:[{title:'A二级导航',title:'A1二级导航',children:[{title:'A2三级导航'}]}],son:[{title:'A三级导航'}]},
					{title:"B一级导航",children:[{title:'B二级导航',title:'B1二级导航',children:[{title:'B2三级导航'}]}],son:[{title:'B三级导航'}]},
					{title:"C一级导航",children:[{title:'C二级导航',title:'C1二级导航',children:[{title:'C2三级导航'}]}],son:[{title:'C三级导航'}]},
					{title:"D一级导航",children:[{title:'D二级导航',title:'D1二级导航',children:[{title:'D2三级导航'}]}],son:[{title:'D三级导航'}]}
				]
			}
		},
		methods:{
			handlerClickShow() {
				this.showGallar = true;
			},
			handerClickClose() {
				this.showGallar = false;
			}
		},
		components:{
			gallary,
			headerDetail,
			detailList,
			fadeAnimate
		}
	}
</script>
<style lang="stylus" scoped="">
.branner-box
	position:relative
	.branner-img
		overflow:hidden
		height:0
		padding-bottom:55%
		.img
			display:block
			width:100%
	.branner-title
		display:flex
		position:absolute
		bottom:0
		left:0
		right:0
		height:0.4rem
		line-height:.4rem
		padding:0 .2rem
		color:#fff
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
		.title-name
			flex:1
			font-size:.36rem
		.number-name
			background:rgba(0,0,0,.8);
			border-radius:.2rem
			padding:0 .1rem
			font-size:.24rem
			.allow-icon
				font-size:.24rem

</style>