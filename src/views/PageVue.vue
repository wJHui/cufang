<template>
	<div>
		<transition name="animate" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name : 'page-vue',
	}
</script>

<style lang="scss">
	@import 'animate.css';
	
	a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
	#main{
		position: relative;
		padding: 50px 0;
		background: #fff;

		&.no-padding{
			
			padding: 0;

			&-top{
				padding-bottom: 0;
			}

			&-bottom{
				padding-top: 0;
			}
			
		}
	}
	.iconfont{ vertical-align: middle; display: inline-block; margin-top: -2px; font-size: 1.4rem; color: #595a55; }
	.transition{
		transition : all .2s ease;
		-webkit-transition :  all .2s ease;
	}

	.fadeIn, .fadeOut{  position: absolute; top: 0; left: 0; width: 100%; }
</style>