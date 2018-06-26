<template>
	<div>
		<headvue :data="top"></headvue>
		<div id="main">
			<loadComponent @refresh="onRefresh" ref='load' :isupdate="isupdate"></loadComponent>
			<section id="nav" class="flex">
				<IconItem v-for="(list, index) in navData" :key="index" :data="list"></IconItem>
			</section>
			<section class="clear" style="margin:0 0 16px 0;">
				<imgListsComponent w='580' h='500' v-for="(list, index) in imglists1" :key="index" :data="list" :shownum=2 :isfirst="index ? 1 : 2"></imgListsComponent>
			</section>

			<Swiper :data="swiper" w="660" h="265"></Swiper>
			<parallaxComponent :data="meals"></parallaxComponent>

			<section id="join">
				<h3>现在加入 \ 下厨房会员 /</h3>
				<div class="clear">
					<div class="pull-left join-text">
						<p>免费看</p>
						<h5>100本美食好书</h5>
					</div>
					<div class="pull-right join-btn">
						立刻拥有
					</div>
				</div>
			</section>

			<seriesComponent w="301" h="453" :data="series" :num=2></seriesComponent>
			<seriesComponent w="301" h="453" :data="series" :num=2></seriesComponent>
			<seriesComponent w="640" h="340" :data="series2" :textClass="['it-flex']" :itemClass="['radius']" :num=1></seriesComponent>
			<seriesComponent w="301" h="453" :data="series" :num=2></seriesComponent>
			<div class="more"><span class="moreTips">已经到底了</span></div>
		</div>
		<footvue></footvue>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	import axios from 'axios'

	import loadComponent from '../components/Load'
	import Swiper from '../components/swiper'
	import imgListsComponent from '../components/Imglists'
	import parallaxComponent from '../components/parallax'
	import imagesComponent from '../components/Images'
	import seriesComponent from '../components/series'
	import headvue from '../components/HeadVue'
	import footvue from '../components/FootVue'
	import IconItem from '../components/iconitem'

	export default {
		name : 'home-vue',
		data (){
			return {
				isupdate : false,
				navData : '',	// 菜单数据

				imglists1 : [
					{title : '本周<br>流行菜谱', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/a1.jpg'},
					{title : '你的好友<br>在分享美食', participant : '', tag : '', remark : '', url : '', img : 'http://shop.jhui21.com/assets/images/a2.jpg'}
				],

				swiper : [
					{title : '爸爸的味道', tag : '菜谱合集', url : '', img : 'http://shop.jhui21.com/assets/images/b1.jpg'},
					{title : '美食作家王刚：<br>400万粉丝厨艺红人的成长之路', tag : '厨房故事', url : '', img : 'http://shop.jhui21.com/assets/images/b2.jpg'},
					{title : '爸爸的味道', tag : '菜谱合集', url : '', img : 'http://shop.jhui21.com/assets/images/b1.jpg'}
				],

				meals : [
					{
						img : ['http://shop.jhui21.com/assets/images/d1-1.png', 'http://shop.jhui21.com/assets/images/d1-2.png'],
						title : '早餐',
						works : 25412
					},
					{
						img : ['http://shop.jhui21.com/assets/images/d2-1.png', 'http://shop.jhui21.com/assets/images/d2-2.png'],
						title : '午餐',
						works : 84215
					},
					{
						img : ['http://shop.jhui21.com/assets/images/d3-1.png', 'http://shop.jhui21.com/assets/images/d3-2.png'],
						title : '晚餐',
						works : 5425
					}
				],
				top : {
					left : {
						type : 'icon',
						url : {name : 'share'},
						content : 'iconfont icon-plus-add'
					},
					main : {
						type : 'placeholder',   // text, placeholder, input
						l : {
							url : '',
							content : 'iconfont icon-fangdajing'
						},
						m : {
							url : '',
							content : '搜索菜谱、食材'
						},
						r : {
							url : '',
							content : 'iconfont icon-maikefeng'
						}
					},
					right : {
						type : 'icon',
						url : {},
						content : "iconfont icon-iconset0316"
					}
				},
				series2 : {
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
				series : {
					title : '厨studio课堂',
					url : '',
					list : [
						{title : 'P妞', participant : '2001', tag : '讲师', remark : '限时特价 | 地道台湾芋圆(细腻抹茶冰冻饮料)', url : '', img : 'http://shop.jhui21.com/assets/images/g1.jpg'},
						{title : '一贫', participant : '2001', tag : '讲师', remark : '限时特价 | 地道台湾芋圆(细腻抹茶冰冻饮料)', url : '', img : 'http://shop.jhui21.com/assets/images/g2.jpg'},
						{title : 'P妞', participant : '2001', tag : '讲师', remark : '限时特价 | 口口爆汁的超人气生煎', url : '', img : 'http://shop.jhui21.com/assets/images/g6.jpg'},
						{title : 'Freeze静', participant : '2001', tag : '讲师', remark : '限时特价 | 4种搭配网红超厚沼三明治', url : '', img : 'http://shop.jhui21.com/assets/images/g4.jpg'},
						{title : 'AIKO日式料理教室', participant : '2001', tag : '讲师', remark : '限时特价 | 地道台湾芋圆(细腻抹茶冰冻饮料)', url : '', img : 'http://shop.jhui21.com/assets/images/g5.jpg'},
						{title : 'P妞', participant : '2001', tag : '讲师', remark : '限时特价 | 地道台湾芋圆(细腻抹茶冰冻饮料)', url : '', img : 'http://shop.jhui21.com/assets/images/g3.jpg'},
					]
				}
			}
		},
		computed : {},
		mounted (){
			this.$ajax.get('http://shop.jhui21.com/assets/home.php?name=nav').then((response) => {
				this.navData =  response.data;
			}).catch((error) => {
				console.log(error)
			});
		},
		methods : {
			onRefresh(){
				let _slef = this
				this.promise(function (resolve, reject){
					_slef.isupdate = false;
					setTimeout(function (){
						resolve()
					}, 2000)
				}).then(function (data){
					console.log(data)
					_slef.isupdate = true
				})

			},
			promise (fn){
				return new Promise((resolve, reject)=>{
					fn(resolve, reject)
					
				})
			}
		},
		components : {
	      	loadComponent,
	      	imgListsComponent,
	      	Swiper,
	      	parallaxComponent,
	      	seriesComponent,
	      	headvue,
	      	imagesComponent,
	      	footvue,
	      	IconItem
	    }
	}
</script>

<style lang="scss" scoped>
	#main{ 
		position: relative; 

		.more{
			padding-top: 30px;
			padding-bottom: 20px;
			text-align: center;

			span.moreTips{
				font-size: .7rem; 
				line-height: 1.2rem;
				color: #aaa;
			}
		}
	}
	#join{ 
		margin: 24px 16px 0; 
		padding: 12px; 
		background: #f2e0ba; 
		border-radius: 5px; 

		h3{ 
			font-weight: 500; 
			font-size: 1.1rem; 
			margin-bottom: 20px; 
		}
		.join-text{ 
			p{ 
				font-size: .9rem; 
				line-height: 20px; 
			}
			h5{ 
				font-size: .9rem; 
				line-height: 20px; 
				font-weight: 500; 
				margin-top: 4px; 
			}
		}

		.join-btn{ 
			display: inline-block; 
			font-size: .8rem; 
			line-height: 20px; 
			margin-top: 4px; 
			background: #000; 
			color: #f2e0ba; 
			padding: 8px 14px; 
			border-radius: 4px; 
		}

	}
	#nav{
		padding: 14px 0 20px;
	}

	
	

</style>