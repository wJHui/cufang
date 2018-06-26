<template>
	<div id="load" class="text-center" ref="load">
		<div class="loadWrap">
			<div class="loader"></div>
		</div>
	</div>
</template>
<script>
	import {util} from '../util'
	import {TweenMax} from "gsap/TweenMax"
	export default {
		name : 'load-component',
		data (){
			return {
				initY : 0,
				scrollState : 0,	// 0 : 正常瞎逛, 1 : 正在触发刷新动画,但还没有触发成功, 2 : 满足刷新条件, 3 ： 正在刷新
			}
		},
		methods : {},
		mounted (){
			let load 	= this.$refs.load,
				main 	= this.$refs.load.parentNode,
				_slef 	= this;
			
				var tl = new TimelineMax();
			// 用户点击开始
			main.addEventListener('touchstart', function (e){
				if(_slef.scrollState == 3){
					e.preventDefault();
					return false;
				}
				_slef.initY = e.targetTouches[0].clientY;

			}, false)

			// 触摸移动
			main.addEventListener('touchmove', function (e){
				if(_slef.scrollState == 3){
					e.preventDefault();
					return false;
				}

				let wrapTop 	= document.documentElement.scrollTop || document.body.scrollTop;		// 获取滚动条高度
				let touchStep 	= e.targetTouches[0].clientY - _slef.initY;		// 整数为下拉，负数为上拉
				let curVlue 	= load.style.transform;
				if(_slef.scrollState == 0 && wrapTop === 0 && touchStep > 0) _slef.scrollState = 1
				

				// 用户正在拉动刷新动画
				if(_slef.scrollState == 1 || _slef.scrollState == 2){
					e.preventDefault();
					curVlue = util.matrix(curVlue, 'translate')['y'] || 0;

					let newVlue = parseInt(curVlue) + parseInt(touchStep);
					
					switch(true){
						case newVlue >= 120 :
							tl.to(load, 0, {y : 120, ease : Linear.easeOut});
							newVlue = 120;
						break;
						case newVlue <= 0 :
							tl.to(load, 0, {y : 0, ease : Linear.easeOut});
							newVlue = 0;
							_slef.scrollState = 0
						break;
						default :
							tl.to(load, 0, {y : newVlue, ease : Linear.easeOut});
					}

					if(newVlue >= 80){
						 _slef.scrollState = 2 					// 满足刷新条件
					}
					
					_slef.initY = e.targetTouches[0].clientY;	// 记录当前触摸位置
					//console.log(_slef.scrollState)

				}

			}, false)

			// 触摸结束
			main.addEventListener('touchend', function (e){
				if(_slef.scrollState == 3){
					e.preventDefault();
					return false;
				}

				if(_slef.scrollState == 2){
					_slef.scrollState = 3;
					tl.to(load, .3, {y : 80, ease : Linear.easeOut});
					
					//  触发 refresh
					setTimeout(function (){
						_slef.$emit('refresh')
					}, 200)

				}else{
					tl.to(load, .3, {y : 0, ease : Linear.easeOut});
					_slef.scrollState = 0;
				}

			}, false)
		},
		watch : {
			isupdate (curVlue, oldValue){
				if(!!curVlue){
					var tl = new TimelineMax();
					tl.to(this.$refs.load, .3, {y : 0, ease : Linear.easeOut});
					this.scrollState = 0;
					//console.log(this.scrollState)
				}
			}
		},
		props : {
			isupdate : Boolean
		}
	}
</script>

<style lang="scss" scoped>
	$color1 : #999;

	
	#load{ 
		transform: matrix(1,0,0,1,0,0); 
		position: absolute; 
		top: 0px; 
		left: 0; 
		width: 100%;  
		z-index: 100;

		.loadWrap{ 
			display: inline-block; 
			margin: 10px 0 4px; 
			padding: 6px; 
			background: rgba(255,255,255,.8); 
			border-radius: 50%; 
			box-shadow: 1px 1px 1px rgba(0, 0, 0, .1), -1px -1px 1px rgba(0, 0, 0, .1); 

			.loader {
			    border: .2em solid $color1;
				border-bottom-color: transparent;
				border-radius: 50%;
				display: block;
				-webkit-animation: 1s loader linear infinite;
				animation: 1s loader linear infinite;
				position: relative;
				/*display: inline-block;*/
			    width: 24px;
			    height: 24px;
			    color: inherit;
			    vertical-align: middle;
			    pointer-events: none;
			}
		}
	}


	@-webkit-keyframes loader {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
	}
	@keyframes loader {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	    100% {
	        -webkit-transform: rotate(360deg);
	        transform: rotate(360deg);
	    }
	}

</style>