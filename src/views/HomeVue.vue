<template>
	<div id="content">
		<loadComponent @refresh="onRefresh" :isupdate="isupdate"></loadComponent>
		<div>
			12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
				12346 <br>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	import loadComponent from '../components/Load'

	export default {
		name : 'home-vue',
		data (){
			return {
				isupdate : false
			}
		},
		computed : {},
		methods : {
			onRefresh(){
				let _slef = this
				this.promise(function (resolve, reject){
					_slef.isupdate = false;
					setTimeout(function (){
						resolve()
					}, 2000)
				}).then(function (data){
					console.log(data)
					_slef.isupdate = true
				})

				//this.isupdate = true
				
			},
			promise (fn){
				return new Promise((resolve, reject)=>{
					fn(resolve, reject)
					
				})
			}
		},
		components : {
	      	loadComponent
	    }
	}
</script>

<style lang="scss">
	#content{ width: 100%; height: 100%; overflow: hidden; position: relative; }
	span{
		font-size: 	40px; color: #ccc; line-height: 50px; 
		&:hover{ color: #00f; }
	}
</style>