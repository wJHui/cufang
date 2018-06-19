<template>
	<div class="flex">
		<div v-for="(list, index) in footerNav" :class="{footerTable : true, cur : index == 0}" >
			<i :class="list.icon"></i>
			<p>{{list.title}}</p>
		</div>
		
	</div>
</template>

<script>
	export default {
		name : 'FootVue',
		data (){
			return {
				footerNav : [
					{icon : 'iconfont icon-labelb', title : '下厨房', url : ''},
					{icon : 'iconfont icon-shangdian', title : '市集', url : ''},
					{icon : 'iconfont icon-shoucang', title : '收藏', url : ''},
					{icon : 'iconfont icon-iconset0151', title : '信箱', url : ''},
					{icon : 'iconfont icon-wo', title : '我', url : ''}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.footerTable{
		flex: 1;
		align-self: auto;
		text-align: center;
		color: #595a55;

		i.iconfont{ font-size: 1.3rem; }
		p{ font-size: .7rem; }
		&.cur{
			color: #e55; 
			i.iconfont{ color: #e55; }
		}
	}
</style>