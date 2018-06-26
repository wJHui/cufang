<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
	@import './assets/fonts/iconfont.css';
	@font-face {
	    font-family: 'jia';
	    src: url('./assets/fonts/jia.eot'); 
	    src: url('./assets/fonts/jia.eot?#iefix') format('embedded-opentype'),
	    url('./assets/fonts/jia.ttf') format('truetype'),
	    url('./assets/fonts/jia.svg#iconfont');
	}

	*{
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: jia;
	}

	
	.ell{
		display: block;
		overflow: hidden;
		white-space:nowrap;
		text-overflow: ellipsis;
	}

	
	body{
		font-size: 14px;
	}

	a{
		text-decoration: none;
		color: #383835;
	}

	.clear{
		&:after {
			clear: both;
			content: '';
			display: block;
		}
	}

	.pull {
		&-left {
			float: left;
		}

		&-right {
			float: right
		}
	}

	.text-{
		&center{
			text-align: center;
		}
		&right{
			text-align: right;
		}
	}

	.flex{
		display: flex;
		justify-content: center;
		align-items: center
	}
</style>
