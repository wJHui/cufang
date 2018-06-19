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

	*{ box-sizing: border-box; padding: 0; margin: 0; font-family: 'Microsoft Yahei'; }
	
	body{ padding: 50px 0; font-size: 14px;}

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
	}

	.flex{
		display: flex;
		justify-content: center;
		align-items: center
	}
</style>
