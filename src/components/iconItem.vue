<template>
	<div class="navItem">
		<router-link :to="data.url">
			<img :src="data.icon">
			<p>{{data.title}}</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		name : 'iconitem-com',
		data (){
			return {

			}
		},
		props : {
			data : {
				type : [Array, Object],
				require : true
			}
		}
	}
</script>

<style lang="scss" socped>
.navItem{ 
	flex: 1; text-align: center; 
	font-size: .8rem;

	img{ 
		max-width: 44%; 
		display: block; 
		margin: 0 auto; 
	}
	.iconfont{ 
		font-size: 1.8rem; 
		margin-bottom: 7px; 
		color: #666; 
	}

	@media screen and (max-width: 330px){
		img{ max-width: 48%; }
	}
}
</style>