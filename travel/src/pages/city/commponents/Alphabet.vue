<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="(item,index) of letters" 
			@click="handleclick"
			@touchstart="handelTouchStart"
			@touchmove="handelTouchMove"
			@touchend="handelTouchEnd"
			:ref="item"
			:class="{'a':name==item}"
		>
			{{item}}
		</li>
	</ul>
</template>
<script>
	export default {
		name:'CityAlphabet',
		props:{
			citys:Object
		},
		data(){
			return{
				touchStaus:false,
				touchY:0,
				timer:null,
				name:''
			}
		},
		computed:{
			letters() {
				const letter = [];
				for(let k in this.citys) {
					letter.push(k);
				}
				return letter
			}
		},
		update(){
			this.touchY = this.$refs['A'][0].offsetTop;
		},
		methods:{
			handleclick(e) {
				this.$emit("changeCity",e.target.innerText);
			},
			handelTouchStart() {
				this.touchStaus = true;
			},
			handelTouchMove(e) {
				let _this = this;
				if(this.touchStaus) {
					if(this.timer) {
						clearTimeout(this.timer);
					}
					this.timer = setTimeout(()=>{
						//获取A距离ul的高度 在获取手指移动时
						let moveY = e.touches[0].clientY -79;
						let index = Math.floor((moveY - this.touchY) / 20);
						if(index >=0 && index < this.letters.length) {
							// _this.name = this.letters[index];
							this.$emit("changeCity",this.letters[index]);
						}
					},16)
					
					
				}
			},
			handelTouchEnd() {
				this.touchStaus = false;
			},
		}
	}
</script>
<style lang="stylus" scoped="">
	@import '~@/assets/styles/main.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:1.58rem
		right:0
		bottom:0
		width:.4rem
		.item
			text-align:center
			line-height:.4rem
			color:$bgColor
		.a
			color:red
</style>