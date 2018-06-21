<template>
	<span :class="newClass">{{text}}</span>
</template>
<script>
	export default {
		name : 'tag',
		data (){
			return {

			}
		},
		props : {
			c : Object,
			s : Object,
			text : {
				type : String,
				require : true
			}
			
		},
		computed : {
			newClass (){
				let c = {'tag-com' : true}
				let nClass = this.c || {}

				return Object.assign(c, nClass)
			}
		},
	}
</script>
<style lang="scss" scoped>
	$background : #f2cb30;

	.tag-com{
		background: $background;
		color: #fff;
		line-height: 22px; 
		padding: 0 8px; 
		display: inline-block;
		font-size: .8rem;

		&.tag-block{
			display: block;
		}

		&.radius{
			border-radius: 22px;
		}
	}
</style>