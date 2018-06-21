<template>
	<div>
		<div class="production-item" v-for="(list, index) in data" :key="index">
			<div class="production-img">
				<span class="production-tag" v-if="list.tag.length"><tag :text="list.tag"></tag></span>
				<span class="production-icon" v-if="list.type === 'video'"><i class="iconfont icon-icon_video"></i></span>
				<img :src="list.img">
			</div>
			<div class="clear production-info">
				<h4 class="production-title pull-left">{{list.title}}</h4>
				<div class="production-head pull-right">
					<img :src="list.head">
					<p class="production-author ell">{{list.author}}</p>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import tag from '../components/tag'
	export default {
		name : 'production-component',
		data (){
			return {

			}
		},
		components : {
			tag
		},
		props : {
			data : {
				require : true,
				type : Array
			}
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
			span.production-tag{
				position: absolute; 
				top: 10px; 
				left: 10px; 
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
				width: 60%; 
				color: $color2; 
				padding-top: 8px;
				display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp :  2; overflow: hidden;
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
				width: 65px; float: right;
				
			}
		}

		
		
	}
</style>