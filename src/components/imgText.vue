<template>
	<div class="imgText" :class="c" :style="s">
		<tagComponent v-if="!!data.tag" :c="{'radius-small' : true}" :s="{'margin-bottom' : '5px'}">{{data.tag}}</tagComponent>
		<h5 v-html="data.title" v-if="!!data.title"></h5>
		<p v-if="!!data.explain" class="explain">{{data.explain}}</p>
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

		p.explain{
			color: #fff;
			font-size: .9em;
			line-height: 18px;
		}

		&.noPadding{
			padding: 0;
		}

		&.textCenter{
			text-align: center;
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
	
	export default {
		name : 'img-text',
		data (){
			return {}
		},
		props : {
			data : Object,
			c : [Object, Array],
			s : [Object, Array],
			
		},
		components : {
			tagComponent
		},
		mounted (){
			
		}
	}
</script>