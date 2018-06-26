<template>
	<section class="series-wrap">
		<div class="clear series-title">
			<h3 class="pull-left">{{data.title}}</h3>
			<span v-if="data.url.length" class="pull-right"><router-link :to="data.url">查看全部</router-link></span>
		</div>
		<div class="series-swiper" ref="series">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(list, index) in data.list">
					<imgListsComponent :w="w" :h="h" :textClass="textClass" :data="list" :c="itemClass" :isfirst=1 :shownum="num"></imgListsComponent>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import imgListsComponent from './Imglists'
	import Swiper from 'swiper'

	export default {
		name : 'series-component',
		data (){
			return {}
		},
		props : {
			data : {
				type : Object,
				require : true
			},
			num : Number,
			itemClass : [Array, Object],
			w : {
				type : [String, Number],
				default : 500
			},
			h : {
				type : [String, Number],
				default : 500
			},
			textClass : [Array, Object]
		},
		components : {
			imgListsComponent
		},
		mounted (){
			let _slef = this
			new Swiper(this.$refs.series, {
				/*on:{
				    slideNextTransitionStart: function(){
				      	let _index = this.activeIndex
				    },
				    slidePrevTransitionStart: function(){
				      	let _index = this.activeIndex
					}
				},*/
				freeMode : true,
				slidesPerView : this.num,
				resistanceRatio : 0,
				freeModeMomentumBounceRatio : 0
				
			});
		}
	}
</script>
<style lang="scss" socped>
	.series-wrap{ 
		margin-top: 20px;
		margin-bottom: 36px;
		width: 100vw;

		.series-title{ 
			margin: 0 16px 16px; 

			h3{ 
				font-size: 1.1rem; 
				font-weight: 500; 
				color: #333; 
				line-height: 1.6rem; 
			}
			span{ 
				font-size: 1rem; 
				line-height: 1.6rem; 
				color: #ccc; 
			}
		}

		.series-swiper{ 
			width: 100vw; 
			padding: 0 16px 0 8px;
			overflow: hidden;

			.swiper-wrapper{
				width: 999999px;

				div.swiper-slide{
					margin-right: 0 !important;
					float: left;
					width: auto !important;
				}
			}
		}
	}
</style>
