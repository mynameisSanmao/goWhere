<template>
	<div>
		<city-head></city-head>
		<city-search :citys="citys"></city-search>
		<city-list :citys="citys" :hot="hotCitys" :nameLitter="nameLitter"></city-list>
		<CityAlphabet :citys="citys" @changeCity="changeCity" class="aaa"></CityAlphabet>
	</div>
</template>
<script>
	import axios from 'axios'
	import CityHead from'./commponents/Head.vue'
	import CitySearch from'./commponents/search.vue'
	import CityList from './commponents/List.vue'
	import CityAlphabet from './commponents/Alphabet.vue'

	export default {
		name:'City',
		data () {
			return{
				citys:{},
				hotCitys:[],
				nameLitter:''
			}
		},
		mounted() {
			let that = this;
		    axios.get('/api/city.json').then(function(res){
		      if(res.data.ret && res.data){
		        that.citys = res.data.data.cities;
		        that.hotCitys = res.data.data.hotCities;
		      }
		    })
		},
		methods:{
			changeCity(name){
				this.nameLitter = name;
			}
		},
		components:{
			CityHead,
			CitySearch,
			CityList,
			CityAlphabet
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/main.styl'
</style>