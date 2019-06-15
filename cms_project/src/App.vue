<template>
	<div id="app">
		<!-- 顶部标题栏 -->
		<mt-header fixed title="信息管理系统"></mt-header>
		<!-- 内容区 -->
		<router-view />

		<!-- 底部导航栏 -->
		<mt-tabbar v-model="selected">
			<mt-tab-item id="Home" @click.native="change('home')">
				<img slot="icon" src="./assets/img/index.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="Member" @click.native="change('member')">
				<img slot="icon" src="./assets/img/vip.png">
				会员
			</mt-tab-item>
			<mt-tab-item id="Shopcart" @click.native="change('shopcart')">
				<img slot="icon" src="./assets/img/shopcart.png">
				购物车
			</mt-tab-item>
			<mt-tab-item id="Search" @click.native="change('search')">
				<img slot="icon" src="./assets/img/find.png">
				查找
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	export default {
		name: 'App',
		data() {
			return {
				selected: 'Home'
			}
		},
		methods: {
			change(val) {
				this.$router.push({
					name: val
				});
			}
		}
	}
</script>
<style>
	#app {
		color: #2c3e50;
		margin-top: 40px;
	}
</style>
