<template>
	<div class="home">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in imgs" :key="index">
				<img :src="item.img" :alt="item.alt">
			</mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格 -->
		<div class="grid">
			<mul>
				<mli v-for="(module,index) in modules" :key="index">
					<router-link :to="module.route">
						<span :class="module.className"></span>
						<div>{{module.title}}</div>
					</router-link>
				</mli>
			</mul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		components: {

		},
		data() {
			return {
				imgs: [],
				modules: [{
					title: '36氪资讯',
					className: 'back-news',
					route: {
						name: 'newsList'
					}
				}, {
					title: '图文分享',
					className: 'back-pic',
					route: {
						name: 'photoList',
						query: {
							categoryId: 0
						}
					}
				}, {
					title: '商品展示',
					className: 'back-goods',
					route: {
						name: 'home'
					}
				}, {
					title: '留言反馈',
					className: 'back-feed',
					route: {
						name: 'home'
					}
				}, {
					title: '搜索咨询',
					className: 'back-search',
					route: {
						name: 'home'
					}
				}, {
					title: '联系我们',
					className: 'back-callme',
					route: {
						name: 'home'
					}
				}]
			}
		},
		created() {
			this.$axios.get('getPic', {
					transformResponse: [function(data) {
						return {
							status: 200,
							data: [{
								alt: '产品观察 | 淘宝终于有了自己的QQ秀',
								img: require('@/assets/01.jpg'),
							}, {
								alt: '到海外去丨S1E07 投资出海三年，他们说中国企业出海会是一个新常态',
								img: require('@/assets/02.jpg'),
							}, {
								alt: '7大小程序超级平台的中场战事',
								img: require('@/assets/03.jpg'),
							}]
						};
					}]
				}).then(res => {
					this.imgs = res.data.data;
				})
				.catch(err => console.log(err));
		}
	}
</script>
<style scoped>
	.mint-swipe {
		width: 100%;
		height: 8.64rem;
	}

	.mint-swipe img {
		width: 100%;
	}

	/*九宫格样式*/
	.grid span {
		display: inline-block;
		margin: 10px 0;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}

	.back-pic {
		background-image: url(../assets/img/picShare.png);
	}

	.back-goods {
		background-image: url(../assets/img/goodsShow.png);
	}

	.back-feed {
		background-image: url(../assets/img/feedback.png);
	}

	.back-search {
		background-image: url(../assets/img/search.png);
	}

	.back-callme {
		background-image: url(../assets/img/callme.png);
	}

	.back-news {
		background-image: url(../assets/36kr.png);
	}
</style>
