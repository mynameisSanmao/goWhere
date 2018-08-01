<template>
	<div class="box">
		<div class="search ">
			<input type="text" class="search-input" v-model="keyWord">
		</div>
		<div class="search-conten" ref="searchconten" v-show="keyWord">
			<ul>
				<li class="search-item border-bottom cp" v-for="item in list" @click="handleclickCity(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="!list.length && keyWord">
					没数据！
				</li>
			</ul>
		</div>
	</div>
	
</template>
<script>
	import Bscroll from 'better-scroll'
	export default {
		name:'CitySearch',
		props:{
			citys:Object
		},
		data () {
			return{
				keyWord:'',
				list:[],
				timer:null
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.searchconten);
		},
		computed:{
			
		},
		methods:{
			handleclickCity(name) {
				this.$store.dispatch('handleclickCity',name);
				this.keyWord = '';
			}
		},
		watch:{
			keyWord() {
				let arr = [];
				let _this = this;
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if(!_this.keyWord) {
					_this.list = [];
					return
				}
				this.timer = setTimeout(()=>{
					for(let i in _this.citys) {
						_this.citys[i].forEach(item=>{
							if(item.spell.indexOf(this.keyWord) > -1 || item.name.indexOf(this.keyWord) > -1){
								arr.push(item);
							}
						})
					}
					_this.list = arr
				},100)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
	size(args)
		unit(args / 50,rem);
	.search
		height: .72rem;
		padding:0 .1rem
		background: $bgColor;
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			padding:0 .1rem
			line-height:.62rem
			text-align:center
			border-radius:0.06rem
			color:#666
	.search-conten
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		z-index:1
		background:#eee
		.search-item
			height:.6rem
			line-height.6rem
			padding-left:.1rem
			color:#666
</style>