<template>
	<div>
		<div class="list-item border-bottom" v-for="(item,index) in list">
			{{item.title}}
			<detail-list :list="item.children"></detail-list>
		</div>
	</div>
</template>
<script>
	export default {
		name:'detailList',
		props:{
			list:{
				type: Array,
				default:function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style lang="stylus" scoped>
	.list-item
		line-height:.8rem
		//height:.8rem
		font-size:.3rem
		padding-left:.3rem
</style>