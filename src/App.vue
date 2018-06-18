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
	html, body {
		padding: 0; margin: 0; font-size: 14px;
	}
	body{ padding: 50px 0;}

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
</style>
