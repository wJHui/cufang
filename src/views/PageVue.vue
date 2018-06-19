<template>
	<div>
		<router-view id="header" name="header"></router-view>
	    <router-view id="main"></router-view>
	    <router-view id="footer" name="footer"></router-view>
	</div>
</template>

<script>
	export default {
		name : 'page-vue',
	}
</script>

<style lang="scss">
	#header, #footer{ height: 50px; width: 100%; padding: 5px 0; background: #fff; position: relative; z-index: 20; position: fixed; left: 0; z-index: 50; }
	#header{ top: 0; padding: 6px 0 }
	#footer{ bottom: 0; border-top: 1px solid #f6f6f6;  }

	#main{ position: relative; }
	.iconfont{ vertical-align: middle; display: inline-block; margin-top: -2px; font-size: 1.4rem; color: #595a55; }

</style>