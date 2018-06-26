<template>
	<div id="rankings">
		<headvue :data="top"></headvue>
		<div id="main">
			<loadComponent @refresh="onRefresh" ref='load' :isupdate="isupdate"></loadComponent>
			<div class="rankings-wrap clear">
				<div v-for="(list, index) in lists" :key="index">
					<div class="rankings-item" v-if="index < 2">
						<ImgComponent :data="list" :c='{radius : true}'></ImgComponent>
					</div>
					<div class="rankings-half rankings-item" v-else-if="index >= 2 && index % 2 == 0">
						<ImgComponent :data="list" :c='{radius : true}'></ImgComponent>
					</div>
					<div class="rankings-half rankings-item rankings-m" v-else-if="index >= 2 && index % 2 != 0">
						<ImgComponent :data="list" :c='{radius : true}'></ImgComponent>
					</div>
				</div>
			</div>

			<seriesComponent w='640' h="340" :data="series" :textClass="['it-flex']" :itemClass="['radius']" :num=1></seriesComponent>

			<listComponent v-for="(l, index) in list" :data="l" :key='index'></listComponent>
		</div>
	</div>
</template>
<script>
	import headvue from '../components/HeadVue'
	import loadComponent from '../components/Load'
	import ImgComponent from '../components/Img'
	import seriesComponent from '../components/series'
	import listComponent from '../components/lists'

	export default {
		name : 'rankings',
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
						content : '排行榜'
					},
					right : {
						type : '',
						url : '',
						content : ''
					}
				},
				lists : [
					{title : '高分菜谱', explain : '十几万道菜里9分以上的菜谱，绝赞', img : 'http://shop.jhui21.com/assets/images/z1.jpg', tag : '1000人做过的菜谱'},
					{title : '荣誉殿堂', explain : '高人气菜谱，真正通往食谱之巅', img : 'http://shop.jhui21.com/assets/images/z2.jpg', tag : '9分以上的菜谱'},
					{title : '5月最佳', explain : '', img : 'http://shop.jhui21.com/assets/images/z3.jpg', tag : ''},
					{title : '视频菜谱', explain : '', img : 'http://shop.jhui21.com/assets/images/z1.jpg', tag : ''},
					{title : '新秀菜谱', explain : '', img : 'http://shop.jhui21.com/assets/images/z2.jpg', tag : ''},
					{title : '发现新菜', explain : '', img : 'http://shop.jhui21.com/assets/images/z3.jpg', tag : ''},
				],
				series : {
					title : '流行菜单',
					url : '',
					list : [
						{title : '蛋家.正餐', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s1.jpg'},
						{title : '多用烤箱', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s2.jpg'},
						{title : '像女王一样吃早餐', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s3.jpg'},
						{title : '各种好有兴趣想做的东西 --吐司篇', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s4.jpg'},
						{title : '就是面肚子', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s5.jpg'},
						{title : '蛋家.正餐', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/s6.jpg'},
					]
				},
				list : [
					{
						title : '市集排行榜',
						list : [
							{ title : '市集爆款', remark : '最近30天销量最高', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{ title : '市集上新', remark : '最新上架商品', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
						]
					},
					{
						title : '用户排行榜',
						list : [
							{ title : '市集爆款', remark : '最近30天销量最高', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{ title : '市集上新', remark : '最新上架商品', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
						]
					}
				]
			}
		},
		methods : {
			onRefresh (){

			}
		},
		components : {
			headvue,
			loadComponent,
			ImgComponent,
			seriesComponent,
			listComponent
		}
	}
</script>
<style lang="scss" scoped>
	#rankings{
		.rankings-item{
			margin: 0 16px 0;

			&.rankings-half{ width: calc((100vw - 40px) / 2); margin: 2px 4px 0 16px; float: left; }
			&.rankings-m{ margin: 2px 16px 0 4px; }

		}
	}
</style>