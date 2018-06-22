<template>
	<div>
		<headvue :data="top"></headvue>
		<div id="main">
			<loadComponent @refresh="onRefresh" ref='load' :isupdate="isupdate"></loadComponent>
			<section id="nav" class="flex">
				<div v-for="(list, index) in navData" class="navItem" :key="index">
					<router-link :to="list.url">
						<img :src="list.icon">
						<p>{{list.title}}</p>
					</router-link>
				</div>
			</section>
			<section class="clear" style="margin:0 0 16px 0;">
				<imgListsComponent v-for="(list, index) in imglists1" :key="index" :data="list" :shownum=2 :isfirst="index ? 1 : 2"></imgListsComponent>
			</section>

			<Swiper :data="swiper"></Swiper>
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

			<seriesComponent :data="series" :num=2></seriesComponent>
			<seriesComponent :data="series" :num=2></seriesComponent>
			<seriesComponent :data="series" :num=2></seriesComponent>

			<div class="more"><span class="moreTips">已经到底了</span></div>
		</div>
		<footvue></footvue>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	import loadComponent from '../components/Load'
	import Swiper from '../components/swiper'
	import imgListsComponent from '../components/Imglists'
	import parallaxComponent from '../components/parallax'
	import seriesComponent from '../components/series'
	import headvue from '../components/HeadVue'
	import footvue from '../components/FootVue'

	export default {
		name : 'home-vue',
		data (){
			return {
				isupdate : false,
				navData : [
					{title : '厨房好物', icon : 'http://shop.jhui21.com/assets/images/c1.jpg', url : ''},
					{title : '发现新菜', icon : 'http://shop.jhui21.com/assets/images/c2.jpg', url : {name : "find"}},
					{title : '排行榜', icon : 'http://shop.jhui21.com/assets/images/c3.jpg', url : {name : 'rankings'}},
					{title : '菜谱分类', icon : 'http://shop.jhui21.com/assets/images/c4.jpg', url : {name : 'class'}},
				],

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

				//this.isupdate = true
				
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
	      	footvue
	    }
	}
</script>

<style lang="scss" scoped>
	#main{ 
		/* width: 100%; height: 100%; overflow: hidden; */ position: relative; 

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
		margin: 24px 16px 0; padding: 12px; background: #f2e0ba; border-radius: 5px; 

		h3{ font-weight: 500; font-size: 1.1rem; margin-bottom: 20px; }
		.join-text{ 
			p{ font-size: .9rem; line-height: 20px; }
			h5{ font-size: .9rem; line-height: 20px; font-weight: 500; margin-top: 4px; }
		}

		.join-btn{ display: inline-block; font-size: .8rem; line-height: 20px; margin-top: 4px; background: #000; color: #f2e0ba; padding: 8px 14px; border-radius: 4px; }

	}
	#nav{
		padding: 14px 0 20px;

		.navItem{ 
			flex: 1; text-align: center; 
			font-size: .7rem;

			img{ max-width: 44%; display: block; margin: 0 auto; }
			.iconfont{ font-size: 1.8rem; margin-bottom: 7px; color: #666; }

			@media screen and (max-width: 330px){
				img{ max-width: 48%; }
			}
		}
	}

	
	

</style>