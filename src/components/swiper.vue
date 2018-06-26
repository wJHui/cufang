<template>
	<section class="swiper" ref="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(list, index) in data" :key="index">
				<imagesComponent :w="w" :h="h" :src="list.img"></imagesComponent>
				<div class="swiper-info">
					<span v-if="!!list.tag.length" class="swiperTag">{{list.tag}}</span>
					<h4 v-html="list.title" v-if="!!list.title.length"></h4>
				</div>
			</div>
		</div>
		<div class="swiper-bar">
			<span ref="bar" :style="{width : (100 / data_num) + '%'}"></span>
		</div>
	</section>
	
</template>

<script>
	import Swiper from 'swiper'
	import imagesComponent from '../components/Images'

	export default {
		name : 'swiper-component',
		data (){
			return {}
		},
		computed : {
			data_num (){
				return this.data.length
			}
		},
		props : {
			data : [Array, Object],
			w : {
				type : [String, Number],
				default : 500
			},
			h : {
				type : [String, Number],
				default : 500
			}
			
		},
		components : {
			imagesComponent
		},
		mounted (){
			let _slef = this
			new Swiper(this.$refs.swiper, {
				autoplay: {
				   	disableOnInteraction: false,
				    delay: 5000,
				},
				on:{
				    slideNextTransitionStart: function(){
				      	let _index = this.activeIndex
				      	if(!!_slef.$refs.bar) _slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    },
				    slidePrevTransitionStart: function(){
				      	let _index = this.activeIndex
						if(!!_slef.$refs.bar) _slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    }
				},
				resistanceRatio : 0,
				freeModeMomentumBounceRatio : 0
			});
		}
	}
</script>

<style lang="scss" socped>
	.swiper{ 
		margin: 0 16px; 
		overflow: hidden; 
		position: relative;

		.swiper-wrapper{
			width: 1000%;

			.swiper-slide{
				width: 10%; 
				float: left; 
				position: 
				relative;

				.swiper-info{
					width: 100%; 
					padding: 15px; 
					position: absolute; 
					left: 0; 
					bottom: 15%;

					span.swiperTag{ 
						background: #fff; 
						display: inline-block; 
						font-size: .7rem; 
						line-height: 1.1rem; 
						padding: 0 8px; 
						color: #333;
						border-radius: 2px; 
						margin-bottom: 6px; 
					}

					h4 { 
						font-size: 1.1rem; 
						color: #fff; 
						font-weight: 500; 
						display: -webkit-box; 
						-webkit-box-orient: vertical; 
						-webkit-line-clamp :  2; 
						overflow: hidden; 
					}
				}
				img{ 
					max-width: 100%; 
					display: block; 
				}
			}
		}

		.swiper-bar{ 
			width: 40%; 
			height: 3px; 
			background: rgba(255,255,255,.4); 
			position: absolute; left: 15px; 
			bottom: 12%; z-index: 20;

			span{ 
				display: block; 
				width: 0; 
				height: 100%; 
				background: #fff; 
				-webkit-transition: width .3s ease; 
				transition: width .3s ease; 
			}
		}
	}
</style>