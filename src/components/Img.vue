<template>
	<div :class="newClass">
		<imagesComponent w="640" h="380" :src="data.img"></imagesComponent>
		<div class="images-tag" v-if="data.tag">
			<tagComponent :text="data.tag" :c='["radius"]'></tagComponent>
		</div>
		<!-- <div class="images-wrap">
			<h4>{{data.title}}</h4>
			<p>{{data.remark}}</p>
		</div> -->
		<imgText :data="data"></imgText>
	</div>
</template>

<script>
	import tagComponent from '../components/tag'
	import imgText from '../components/imgText'
	import imagesComponent from '../components/Images'
	
	export default {
		name : 'img-com',
		data (){
			return {

			}
		},
		computed : {
			newClass (){
				let c = {images : true}

				if(!this.data.tag.length) c.n = true

				let nClass = this.c || {}

				return Object.assign(c, nClass)
			}
		},
		components : {
			tagComponent,
			imgText,
			imagesComponent
		},
		props : {
			data : {
				type : Object,
				require : true
			},
			c : Object
		}
	}
</script>
<style lang="scss" scoped>
	.images{
		position: relative;
		margin-top: 20px;

		&.n{
			margin-top: 8px;
		}

		img{
			display: block; 
			max-width: 100%;
		}

		&.radius{
			img{
				border-radius: 3px; 
			}
		}

		.images-tag{
			position: absolute; 
			top: -12px; 
			left: 0;
		}

		div.images-wrap{
			position: absolute;
			width: 100%; 
			left: 0;
			bottom: 0;
			padding: 10px;

			h4{
				font-size: 1.1rem;
				color: #fff;
				margin-bottom: 4px;
			}

			p{
				font-size: .8rem;
				color: #fff;
			}

		}
	}
</style>