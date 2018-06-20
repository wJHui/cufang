<template>
	<div class="share">
		<headvue :data="top"></headvue>
		<div id="main">
			<div class="share-wrap" ref="share">
				<p class="share-title">分享的人是厨房里的天使</p>
				<div class="share-list clear">
					<div class="share-item share-item-1 pull-left">
						<div>
							<div class="share-item-1-img"><i class="iconfont icon-xiangji"></i></div>
							<div class="share-item-1-block-1"></div>
							<div class="share-item-1-block-2"></div>
						</div>
						<p>创建菜谱</p>
					</div>
					<div class="share-item share-item-2 pull-left">
						<div>
							<div class="share-item-2-img"><i class="iconfont icon-xiangji"></i></div>
							<div class="share-item-2-block-1"></div>
							<div class="share-item-2-block-2"></div>
						</div>
						<p>上传作品</p>
					</div>
				</div>
			</div>
		</div>

		<div id="footer">
			草稿箱
		</div>
	</div>
</template>

<script>
	import headvue from '../components/HeadVue'
	export default {
		name : 'share',
		data (){
			return {
				top : {
					left : {
						type : 'icon',
						url : '',
						content : 'iconfont icon-plus-add transition'
					},
					main : {
						type : 'null',   // text, placeholder, input
					},
					right : {
						type : '',
						url : '',
						content : ""
					}
				},
			}
		},
		beforeRouteEnter (to, from, next){
			next(vm => {
				let data = vm._data;
				data.top.left.url = from.fullPath

			});
		},
		beforeRouteLeave (to, from , next){
			new Promise((resolve, reject) => {
				let close = document.querySelector('.share .icon-plus-add')
				close.style.transform = 'rotate(0)';
				setTimeout(()=>{
					resolve()
				}, 300)
			}).then(function (){
				next()
			})
		},
		mounted (){
			let _slef = this;
			setTimeout(function (){
				let close = document.querySelector('.share .icon-plus-add'),
					share = _slef.$refs.share;

				close.style.transform = 'rotate(-45deg)';
				share.className += ' share-wrap-loader';
			}, 300)
			

		},
		components : {
			headvue
		}
	}
</script>
<style lang="scss" socped>
	$fontColor : #383835;
	$color1 : #9ee6fc;
	$color2 : #fde94f;

	.share{
		.transition{ -webkit-transition: all .3s ease; transition: all .3s ease; }
		#footer{ height: 50px; width: 100%; padding: 5px 0; background: #fff; position: relative; z-index: 20; position: fixed; left: 0; z-index: 200; bottom: 0; border-top: 1px solid #eee; line-height: 40px; text-align: center; font-size: 1rem; color: #333; letter-spacing: 4px; 
		}

		#main{
			height: calc(100vh - 100px);

			div.share-wrap{
				position: absolute; 
				width: 100%; 
				left: 0; 
				bottom: 18vh;

				&.share-wrap-loader{
					p.share-title{
						opacity: 1;
						transform: translateY(0px);
					}

					.share-list{
						opacity: 1;
						div.share-item{
							&-1{
								div.share-item-1-img{
									transform: scale(1);
								}
								div.share-item-1-block-1{
									height: 25%;
								}

								div.share-item-1-block-2{
									height: 15%;
								}
							}

							&-2{
								div.share-item-2-img{
									transform: scale(1);
								}
								div.share-item-2-block-1{
									width: 80%;
								}

								div.share-item-2-block-2{
									width: 60%;
								}
							}
						}
					}

					

				}

				p.share-title{
					text-align: center; 
					font-size: 1rem; 
					color: $fontColor; 
					line-height: 1.6rem; 
					margin-bottom: 24px; 
					font-weight: 500;

					transition: opacity .3s ease, transform .4s ease;
					opacity: 0;
					transform: translateY(20px);
				}

				.share-list{
					opacity: 0;
					transition: opacity .2s ease .4s;

					div.share-item{
						width: 41%; 
						margin-left: 6%;
						height: 33vh;

						p{ font-size: .9rem; line-height: 30px; text-align: center; color: $fontColor; margin-top: 4px; }
						& > div{
							height: 33vh;
						}

						&-1{
							border: 1px solid $color1; position: relative;

							div.share-item-1-img{ 
								height: 40%; 
								background: $color1; 
								display: flex; 
								justify-content: center; 
								align-items: center;  
								position:absolute; 
								top: 0; 
								left: 0; 
								width: 100%; 
								transform: scale(0);

								transition: transform .3s ease .6s;
								i{ color: #fff; }
							}

							.share-item-1-block-1{
								background: $color1;
								width: 70%; 
								position: absolute; 
								top: 50%; 
								left: 15%;
								transition: height .3s ease .6s;
								height: 0;
							}

							.share-item-1-block-2{
								background: $color1;
								width: 70%; 
								position: 
								absolute; 
								top: 85%; 
								left: 15%;
								transition: height .3s ease .6s;
								height: 0;
							}
						}

						&-2{
							border: 1px solid $color2; 
							position: relative;

							div.share-item-2-img{
								width: calc(100% - 10px); 
								height: 50%; 
								background: $color2; 
								position: absolute; 
								top: 5px; 
								left: 5px; 
								display: flex; 
								justify-content: center; 
								align-items: center;

								transform: scale(0);
								transition: transform .3s ease .6s;
								i{ color: #fff; }
							}

							div.share-item-2-block-1{ 
								height: 10%; 
								background: $color2; 
								position: absolute; 
								top: calc(55% + 5px); 
								left: 5px; 
								transition: width .3s ease .6s;
								width: 0;
							}
							div.share-item-2-block-2{ 
								height: 10%; 
								background: $color2; 
								position: absolute; 
								top: calc(70% + 5px); 
								left: 5px; 
								transition: width .3s ease .6s;
								width: 0;
							}
						}
					}
				}
				

			}
		}
	}
</style>