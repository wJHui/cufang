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
	#header, #footer{ height: 50px; width: 100%; background: #ccc; position: relative; z-index: 20; position: fixed; left: 0; z-index: 50; }
	#header{ top: 0; }
	#footer{ bottom: 0; }

</style>