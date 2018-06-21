<template>
	<div id="find">
		<headvue :data="top"></headvue>
		<div id="main">
			<loadComponent @refresh="onRefresh" ref='load' :isupdate="isupdate"></loadComponent>
			<div class="production">
				<productionComponent :data="findData"></productionComponent>
			</div>
		</div>
	</div>
</template>

<script>
	import headvue from '../components/HeadVue'
	import loadComponent from '../components/Load'
	import productionComponent from '../components/production'

	export default {
		name : 'find-vue',
		data (){
			return {
				isupdate : false,
				top : {
					left : {
						type : 'icon',
						url : '',
						content : 'iconfont icon-fanhuizuo'
					},
					main : {
						type : 'text',   // text, placeholder, input
						content : '发现新菜'
					},
					right : {
						type : 'icon',
						url : '',
						content : 'iconfont icon-iconset0316'
					}
				},
				findData : [
					{title : '造型馒头之包菜馒头', tag : '独家', type : 'img', head : 'http://shop.jhui21.com/assets/images/h1.jpg', img : 'http://shop.jhui21.com/assets/images/f1.jpg', author : '琦|墨'},
					{title : '腌菜花炒毛豆', tag : '独家', type : 'img', head : 'http://shop.jhui21.com/assets/images/h2.jpg', img : 'http://shop.jhui21.com/assets/images/f2.jpg', author : '飘零星'},
					{title : '时菜烤鸡腿', tag : '独家', type : 'img', head : 'http://shop.jhui21.com/assets/images/h1.jpg', img : 'http://shop.jhui21.com/assets/images/f3.jpg', author : '琦|墨'},
					{title : '西瓜帽子饼', tag : '独家', type : 'img', head : 'http://shop.jhui21.com/assets/images/h2.jpg', img : 'http://shop.jhui21.com/assets/images/f4.jpg', author : '琦|墨'},
					{title : '在家也能痛快撸串，简单又健康在家也能痛快撸串，简单又健康', tag : '独家', type : 'img', head : 'http://shop.jhui21.com/assets/images/h1.jpg', img : 'http://shop.jhui21.com/assets/images/f5.jpg', author : '美食台foodvideo'},
					{title : '造型馒头之包菜馒头', tag : '', type : 'video', head : 'http://shop.jhui21.com/assets/images/h2.jpg', img : 'http://shop.jhui21.com/assets/images/f6.jpg', author : '琦|墨'},
				]
			}
		},
		components : {
			headvue,
			loadComponent,
			productionComponent
		},
		methods : {
			onRefresh (){

			}
		}
	}
</script>

<style lang="scss" scoped>
	#find{
		#main{
			margin-bottom: 0;
		}
	}
</style>