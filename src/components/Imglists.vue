<template>
	<div class="imgItem pull-left" :style="{marginLeft : isfirst > 0 ? (isfirst == 1 ? '8px' : '16px') : '0px', width : width}">
		<div class="imgShow">
			<img :src="data.img">
			<div class="imgRemark">
				<span v-if="!!data.tag.length" class="imgTag">{{data.tag}}</span>
				<h5 v-html="data.title"></h5>
			</div>
		</div>
		<div class="imgTitle" v-if="!!data.remark.length">
			<h4>{{data.remark}}</h4>
			<span>{{data.participant}}人参加</span>
		</div>
	</div>
</template>
<script>
	export default {
		name : 'img-lists',
		data (){
			return {}
		},
		computed : {
			width (){
				return 'calc((100vw  - 16px)/'+ this.shownum +' - '+ (8 * (this.shownum + 1)) / this.shownum +'px) !important';
			}
		},
		props : {
			shownum : Number,
			isfirst : Number,
			data : Object
		},
		mothods : {

		}
	}
</script>

<style lang="scss" scoped>
	.imgItem{
		.imgShow{ 
			position: relative;

			.imgRemark{ 
				position: absolute; width: 100%; padding: 10px; left: 0; bottom: 0;

				span.imgTag{ background: #fff; display: inline-block; font-size: .7rem; line-height: 1rem; padding: 0 8px; color: #333; font-weight: bold; border-radius: 2px; margin-bottom: 6px; }

				h5 { font-size: 1.1rem; color: #fff; font-weight: 500; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp :  2; overflow: hidden; }
			}
		}

		.imgTitle{
			margin-top: 10px; 

			h4 { font-size: .9rem; color: #333; line-height: 1.4rem; margin-bottom: 10px; height: 2.8rem; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp :  2; overflow: hidden; }
			span{ font-size: .7rem; color: #ccc; }
		}

		& img{ max-width: 100%; display: block; }
		/*&:nth-of-type(1){ margin-left: 0; }*/
	}
</style>