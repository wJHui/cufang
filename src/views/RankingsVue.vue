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
		</div>
	</div>
</template>
<script>
	import headvue from '../components/HeadVue'
	import loadComponent from '../components/Load'
	import ImgComponent from '../components/Img'
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
					{title : '高分菜谱', remark : '十几万道菜里9分以上的菜谱，绝赞', img : 'http://shop.jhui21.com/assets/images/z1.jpg', tag : '1000人做过的菜谱'},
					{title : '荣誉殿堂', remark : '高人气菜谱，真正通往食谱之巅', img : 'http://shop.jhui21.com/assets/images/z2.jpg', tag : '9分以上的菜谱'},
					{title : '5月最佳', remark : '', img : 'http://shop.jhui21.com/assets/images/z1.jpg', tag : ''},
					{title : '视频菜谱', remark : '', img : 'http://shop.jhui21.com/assets/images/z2.jpg', tag : ''},
					{title : '新秀菜谱', remark : '', img : 'http://shop.jhui21.com/assets/images/z1.jpg', tag : ''},
					{title : '发现新菜', remark : '', img : 'http://shop.jhui21.com/assets/images/z2.jpg', tag : ''},
				],
			}
		},
		methods : {
			onRefresh (){

			}
		},
		components : {
			headvue,
			loadComponent,
			ImgComponent
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