<template>
	<img ref='img' class="transition">
</template>
<script>
	import placeholder from 'placeholder.js';
	export default {
		name : 'images-component',
		data (){
			return {

			}
		},
		props : {
			src : {
				type : String,
				require : true
			},
			w : {
				type : [Number, String],
				default : 100
			},
			h : {
				type : [Number, String],
				default : 100
			},
			color : {
				type : String,
				default : '#fcfcfc'
			},
			text : {
				type : String,
				default : '下厨房'
			},
			fontcolor : {
				type : String,
				default : '#fcfcfc'
			}
		},
		mounted (){
			let img = this.$refs.img
			let opts = {
			  	size: this.w + 'x' + this.h,
			    bgcolor: this.color, 
			    color: this.fontcolor,
			    text: this.text || '',
			    fweight: '500',
			    fsize:'13',
			    ffamily: 'jia'
			}
		    img.setAttribute('src', placeholder.getData(opts));

		    let i = new Image()
		    i.src = this.src;
		    
		    i.addEventListener('load', function (){
		    	/*img.style.opacity = 0;
		    	setTimeout(() => {
		    		img.src = this.src
		    		img.style.opacity = 1
		    	}, 500)*/
		    	img.src = this.src
		    }, false)
		}
	}
</script>

<style lang="scss">

</style>