<template>
	<span class="tag-com" :class="c" :style="s" ><slot></slot></span>
</template>
<script>
	export default {
		name : 'tag',
		data (){
			return {
				background : 'transparent'
			}
		},
		props : {
			c : Object,
			s : Object,
			gradient : {
				default : false,
				type : Boolean
			}
		},
		computed : {}
	}
</script>
<style lang="scss" scoped>
	$background : #f2cb30;

	.tag-com{
		background: #fff;
		color: #333;
		line-height: 20px; 
		padding: 0 8px; 
		display: inline-block;
		font-size: .8em;

		&.yellow{
			background: $background;
			color: #fff;
		}

		&.radius{
			border-radius: 22px;

			&-small{
				border-radius: 3px;
			}
			
		}

		&.tag-block{
			display: block;
		}

		
	}
</style>