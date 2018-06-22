<template>
	<div class="imgText" :class="c" :style="s">
		<tagComponent v-if="!!data.tag" :c="{'radius-small' : true}" :s="{'margin-bottom' : '5px'}">{{data.tag}}</tagComponent>
		<h5 v-html="data.title" v-if="!!data.title"></h5>
		<p v-if="!!data.explain" class="explain">{{data.export}}</p>
	</div>
</template>

<style lang="scss">
	.imgText{
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		padding: 10px;

		h5 {
			font-size: 1.4em; 
			color: #fff; 
			font-weight: 500; 
			display: -webkit-box; 
			-webkit-box-orient: vertical; 
			-webkit-line-clamp :  2; 
			overflow: hidden; 
		}

		&.noPadding{
			padding: 0;
		}

		&.textCenter{
			text-align: center;
		}

		p.export{
			font-size: .9rem;
			color: #fff;
			line-height: 18px;
		}

		&.it-flex{
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

	}


</style>

<script>
	import tagComponent from './tag'
	let path = require('path')
	let rgbaster = require(path.reslove(__dirname) + '/assets/rgbaster.min');

	export default {
		name : 'img-text',
		data (){
			return {}
		},
		props : {
			data : Object,
			c : [Object, Array],
			s : [Object, Array],
			img : String
		},
		components : {
			tagComponent
		},
		mounted (){
			console.log(rgbaster.colors)
			if(!!this.img){
				/*rgbaster.colors(this.img, {
					exclude: [ 'rgb(255,255,255)' ],
					success: function(payload) {
				    	// You now have the payload.
				    	console.log(payload.dominant);
				    	console.log(payload.secondary);
				    	console.log(payload.palette);
				  	}
				});*/
			}
		}
	}
</script>