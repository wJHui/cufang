<template>
	<div>
		<div class="production-item" v-for="(list, index) in data" :key="index">
			<div class="production-img">
				<router-link :to="list.url">
					<tagComponent :c="['product-tag']">{{list.tag}}</tagComponent>
					<span class="production-icon" v-if="list.type === 'video'"><i class="iconfont icon-icon_video"></i></span>
					<!-- <img :src="list.img"> -->
					<imagesComponent :w="w" :h="h" :src="list.img"></imagesComponent>
				</router-link>
			</div>
			<div class="clear production-info">
				<router-link :to="list.url">
					<h4 class="production-title pull-left">{{list.title}}</h4>
					<div class="production-head pull-right">
						<img :src="list.head">
						<p class="production-author ell">{{list.author}}</p>
					</div>
				</router-link>
			</div>
			
		</div>
	</div>
</template>
<script>
	import tagComponent from '../components/tag'
	import imagesComponent from '../components/Images'
	export default {
		name : 'production-component',
		data (){
			return {

			}
		},
		props : {
			data : {
				require : true,
				type : Array
			},
			w : {
				type : String,
				default : 400
			},
			h : {
				type : String,
				default : 400
			}
		},
		components : {
			tagComponent,
			imagesComponent
		}
	}
</script>
<style lang="scss" scoped>
	$color1 : #f2cb30;
	$color2 : #383835;
	$color3 : #95958f;

	.production-item{
		padding: 10px 16px 20px;

		div.production-img{
			position: relative;

			img{ max-width: 100%; display: block; }
			span.product-tag{
				position: absolute; 
				top: 10px; 
				left: 10px; 
				background: $color1;
				color: #fff;
				font-size: .8rem;
				/* font-size: .7rem; line-height: 1.3rem; background: $color1; color: #fff; padding: 0 8px; */
			}

			span.production-icon{ 
				position: absolute; 
				left: 10px; 
				bottom: 10px;  

				i.iconfont{
					font-size: 3rem; color: #fff;
				}
			}

		}
		div.production-info{
			padding: 10px 0 0;

			h4.production-title{
				line-height: 28px; 
				width: 70%; 
				color: $color2; 
				padding-top: 8px;
				font-size: 1.2rem;
				font-weight: 500;
				display: -webkit-box; 
				-webkit-box-orient: vertical; 
				-webkit-line-clamp :  2; 
				overflow: hidden;
			}
			div.production-head{
			 	text-align: right;
			 	width: 30%;
			 	img{
			 		display: inline-block;
			 		max-width: 50px;
			 		border-radius: 50%;
			 	}
			}

			.production-author{
				margin-top: 2px; 
				font-size: .7rem; 
				color:$color3;
				width: 65px; 
				float: right;
				
			}
		}

		
		
	}
</style>