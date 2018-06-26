<template>
	<div class="imgItem pull-left" :class="c" :style="{marginLeft : isfirst > 0 ? (isfirst == 1 ? '8px' : '16px') : '0px', width : width}">
		<div class="imgShow">
			<!-- <img :src="data.img"> -->
			<imagesComponent :w="w" :h="h" :src="data.img"></imagesComponent>
			<imgText :data="data" :c="textClass"></imgText>
		</div>
		<div class="imgTitle" v-if="!!data.remark">
			<h4>{{data.remark}}</h4>
			<span v-if="!!data.participant">{{data.participant}}人参加</span>
		</div>
	</div>
</template>
<script>
	import imgText from './imgText'
	import imagesComponent from '../components/Images'

	export default {
		name : 'img-lists',
		data (){
			return {
				d : {
					title : ''
				}
			}
		},
		computed : {
			width (){
				return 'calc((100vw  - 16px)/'+ this.shownum +' - '+ (8 * (this.shownum + 1)) / this.shownum +'px) !important';
			}
		},
		props : {
			shownum : Number,
			isfirst : Number,
			data : Object,
			c : [Array, Object],
			w : {
				type : [Number, String],
				default : 300
			},
			h : {
				type : [Number, String],
				default : 300
			},
			textClass : [Array, Object]
		},
		mothods : {

		},
		components : {
			imgText,
			imagesComponent
		}
	}
</script>

<style lang="scss" scoped>

	.imgItem{

		&.radius{
			div.imgShow{
				overflow: hidden;
				border-radius: 4px;
			}
		}

		.imgShow{ 
			position: relative;
			font-size: 16px;

			
			.imgRemark{ 
				position: absolute; 
				width: 100%; 
				padding: 10px; 
				left: 0; 
				bottom: 0;

				span.imgTag{ 
					background: #fff; 
					display: inline-block; 
					font-size: .7rem; 
					line-height: 1rem; 
					padding: 0 8px; 
					color: #333;
					font-weight: bold; 
					border-radius: 2px; 
					margin-bottom: 6px; 
				}

				h5 { 
					font-size: 1.1rem; 
					color: #fff; 
					font-weight: 500; 
					/* display: -webkit-box; 
					-webkit-box-orient: vertical; 
					-webkit-line-clamp :  2; 
					overflow: hidden;  */
					@include overflow-rows;
				}
			}
		}

		.imgTitle{
			margin-top: 10px; 

			h4 { 
				font-size: .9rem; 
				color: #333; 
				font-weight: 500; 
				line-height: 1.4rem; 
				margin-bottom: 10px; 
				height: 2.8rem; 

				@include overflow-rows;
			}
			span{ 
				font-size: .7rem; 
				color: #ccc; 
			}
		}

		& img{ 
			max-width: 100%; 
			display: block; 
		}
		
	}
</style>