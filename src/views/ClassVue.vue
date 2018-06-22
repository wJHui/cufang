<template>
	<div id="class">
		<headvue :data="top"></headvue>
		<div id="main">
			<loadComponent @refresh="onRefresh" ref='load' :isupdate="isupdate"></loadComponent>

			<div class="class-wrap clear">
				<div class="class-items" v-for="(list, index) in c" :key="index">
					<h3 class="class-title">{{list.title}}</h3>
					<div class="class-list clear">
						<div class="class-item" v-for="(l, i) in list.list" :key='i'>
							<img :src="l.img">
							<imgText :data="l" :s="{padding : '4px'}" :img="l.img" :c="['noPadding', 'textCenter']"></imgText>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.class-wrap{
		margin: 16px;

		.class-items{
			margin-top: 12px;

			h3.class-title{
				font-size: .9rem; 
				margin-bottom: 16px;
				color: #393631;
			}

			.class-item{
				width: calc(25% - 6px);
				margin-left: 8px;
				margin-bottom: 8px;
				float: left;
				position: relative;
				border-radius: 4px; overflow: hidden;
				font-size: 9px;

				&:nth-of-type(4n + 1){ margin-left: 0; }

				p{ width: 100%; position: absolute; left:  0; bottom: 0; line-height: 20px; font-size: .8rem; color: #fff; text-align: center; }
				img{
					display: block;
					max-width: 100%;
				}
			}

			
		}
	}
</style>

<script>
	import headvue from '../components/HeadVue'
	import loadComponent from '../components/Load'
	import imgText from '../components/imgText'

	export default {
		name : 'class-vue',
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
						content : '菜谱分类'
					},
					right : {
						type : '',
						url : '',
						content : ''
					}
				},
				c : [
					{
						title : '热门分类',
						list : [
							{title : '家常菜', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '下饭菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '烘培', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '肉类', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '早餐', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '蔬菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '汤粥主食', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '快手菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '一人食', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
						]
					},
					{
						title : '热门分类',
						list : [
							{title : '家常菜', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '下饭菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '烘培', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '肉类', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '早餐', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '蔬菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '汤粥主食', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
							{title : '快手菜', img : 'http://shop.jhui21.com/assets/images/a2.jpg', url : ''},
							{title : '一人食', img : 'http://shop.jhui21.com/assets/images/a1.jpg', url : ''},
						]
					}
				]
			}
		},
		components : {
			headvue,
			loadComponent,
			imgText
		},
		methods : {
			onRefresh (){

			}
		}
	}
</script>