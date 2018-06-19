<template>
	<section class="parallax">
		<div ref="swiper" class="parallax-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(list, index) in data" :key="index">
					<div class="swiper-img" v-for="(l, i) in list.img" data-swiper-parallax="30">
						<img :src="l">
					</div>
					<div class="swiper-text" data-swiper-parallax="-50">
						<h4>{{list.title}}</h4>
						<p>{{list.works}}个作品</p>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</section>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		name : 'parallax-component',
		data (){
			return {}
		},
		computed : {
		},
		props : {
			data : Array,
			
		},
		mounted (){
			let _slef = this
			new Swiper(this.$refs.swiper, {
				on:{
				    slideNextTransitionStart: function(){
				      	let _index = this.activeIndex
				      	//_slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    },
				    slidePrevTransitionStart: function(){
				      	let _index = this.activeIndex

				      	//_slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    }
				},
				resistanceRatio : 0,
				parallax : true,
				freeModeMomentumBounceRatio : 0,
				pagination: {
				   el: '.swiper-pagination',
				},
			});
		}
	}
</script>

<style lang="scss" socped>
	@import 'swiper/dist/css/swiper.css';
	.parallax{ 
		padding: 0 16px; position: relative; background: url('http://shop.jhui21.com/assets/images/dot.png') no-repeat 0 0; background-size: auto 100%;
		.parallax-swiper{
			 position: relative; overflow: hidden;

			.swiper-wrapper{
				width: 1000%;

				.swiper-slide{
					width: 10%; float: left; position: relative; overflow: hidden;

					.swiper-img{
						width: 100%; position: absolute; top: 0; left: 0;

						&:nth-of-type(1){ position: relative; }				
					}
					.swiper-text{ 
						width: 100%; height: 100%; display: flex; padding-top: 6px; align-items: center; position: absolute; top: 0; left: 0;
						flex-direction: column;

						h4 {
							font-size: 1.1rem; font-weight: 500; color: #333; margin-bottom: 2px; display: inline-block; position: relative;

							&:after{ content: ''; display: block; width: 20px; height: 1px; position: absolute; top: 50%; left: -26px; background: #333; }
							&:before{ content: ''; display: block; width: 20px; height: 1px; position: absolute; top: 50%; right: -26px; background: #333; }
						}

						p {
							font-size: .7rem; color: #ccc;
						}
					}
					img{ max-width: 100%; display: block; }
				}
			}

			.swiper-pagination-bullets{ 
				bottom: 0px !important;  height:10px; line-height:10px;

				span{ 
					width: 6px; height: 6px; 

					&.swiper-pagination-bullet-active{ background: #666; }
				}
			}
		}

		
	}
</style>