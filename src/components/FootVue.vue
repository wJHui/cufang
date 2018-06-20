<template>
	<div class="flex" id="footer">
		<div v-for="(list, index) in footerNav" :class="{footerTable : true, cur : index == 0}" >
			<i :class="list.icon"></i>
			<p>{{list.title}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'foot-vue',
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
	#footer{ height: 50px; width: 100%; padding: 5px 0; background: #fff; position: relative; z-index: 20; position: fixed; left: 0; z-index: 200; bottom: 0; border-top: 1px solid #f6f6f6; }
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