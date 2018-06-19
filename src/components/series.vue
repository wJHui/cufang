<template>
	<section class="series-wrap">
		<div class="clear series-title">
			<h3 class="pull-left">{{data.title}}</h3>
			<span class="pull-right">查看全部</span>
		</div>
		<div class="series-swiper" ref="series">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(list, index) in data.list">
					<imgListsComponent :data="list" :isfirst=false :shownum="num"></imgListsComponent>
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
		},
		components : {
			imgListsComponent
		},
		mounted (){
			let _slef = this
			new Swiper(this.$refs.series, {
				on:{
				    slideNextTransitionStart: function(){
				      	let _index = this.activeIndex
				      //	_slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    },
				    slidePrevTransitionStart: function(){
				      	let _index = this.activeIndex

				      	//_slef.$refs.bar.style.width = 100 / _slef.data_num * (_index + 1) + '%'
				    }
				},
				freeMode : true,
				slidesPerView : 2,
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

			h3{ font-size: 1.1rem; font-weight: 500; color: #333; line-height: 1.6rem; }
			span{ font-size: 1rem; line-height: 1.6rem; color: #ccc; }
		}

		.series-swiper{ 
			width: 100%; 
			padding: 0 16px 0 8px;
			overflow: hidden;

			.swiper-wrapper{
				/*margin-left: -8px;*/

				div.swiper-slide{
					margin-right: 0 !important;
					float: left;
					width: auto !important;
				}
			}
		}
	}
</style>
