<template>
	<section class="lists-wrap">
		<h3 class="lists-title">{{data.title}}</h3>
		<div class="lists-cont">
			<div class="lists-item clear" v-for="(list, index) in data.list" :key="index">
				<div class="pull-left flex lists-left">
					<h3>{{list.title}}</h3>
					<p>{{list.remark}}</p>
				</div>
				<div class="pull-right lists-right">
					<img :src="list.img">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name : 'lists-component',
		data (){
			return {

			}
		},
		props : {
			data : {
				type : Object,
				require : true
			}
		}
	}
</script>

<style lang="scss" scoped>
	$colorFont : #393631;
	$borderColor : #e7e7e6;


	.lists-wrap{
		margin: 4px 16px;
		padding-top: 24px;
		border-top: 1px solid $borderColor;

		h3.lists-title{
			line-height: 34px;
			margin-bottom: 4px; 
			font-size: .9rem; 
			color: $colorFont;
			font-weight: 500;
		}

		div.lists-item{
			padding: 8px 0;
			border-top: 1px solid $borderColor;

			&:nth-of-type(1){
				border-top: none;
			}

			div.lists-left{
				width: calc(94% - 60px);
				flex-direction: column;
				height: 50px;
				align-items: flex-start;

				h3{
					color: $colorFont;
					line-height: 30px;
				}
				p{
					font-size: .8rem;
					color: $colorFont;
					line-height: 20px;
				}
			}

			div.lists-right{
				width: 60px;
				height: 60px;
				img{
					display: block; 
					width: 60px;
					height: 60px;
					border-radius: 5px;
				}
			}
		}
	}
</style>