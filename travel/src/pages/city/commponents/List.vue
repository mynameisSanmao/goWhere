<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>

				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">
					热门城市
				</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="(item,index) in hot" :key="item.id" @click="handleclickCity(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>

			</div>
			<div class="area" v-for="(item,key) in citys" :ref="key">
				<div class="title border-topbottom">
					{{key}}
				</div>
				<div class="item-list">
					<div class="item border-bottom" v-for="(val,index) in item" @click="handleclickCity(val.name)">
						{{val.name}}
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default {
		name:'CityList',
		props:{
			citys:Object,
			hot:Array,
			nameLitter:String
		},
		data () {
			return{

			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper);
		},
		methods:{
			handleclickCity(name) {
				this.$store.dispatch('handleclickCity',name);
			}
		},
		watch:{
			nameLitter:function(newVal,oldValue) {
				if(this.nameLitter) {
					//点击城市右边字母表，跳转到对应字母的城市列表上
					const element = this.$refs[this.nameLitter][0];
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	.border-topbottom
		&:before
			border-color:#777
		&:after
			border-color:#777
	.border-bottom
		&:before
			border-color:#777
	size(args)
		unit(args / 50,rem);
	.list
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		.title
			line-height:.54rem
			background:#eee
			padding-left:.2rem
			color:#666
			font-size:.26rem
		.button-list
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			.button-wrapper
				float:left
				width:33.33%
				.button
					margin:.1rem
					padding:.1rem 0
					text-align:center
					border:.02rem solid #ccc
					border-radius:.06rem
		.item-list
			.item
				line-height:.76rem
				padding-left:.2rem
</style>