<template>
	<div class="tmpl">
		<nav-bar :title="title" />

		<!-- 新闻列表 -->
		<div class="home-flow">
			<div class="item-wrapper" v-for="(item,index) in newsList" :key="index">
				<div class="article-item">
					<a class="item-pic">
						<span class="item-feed">{{item.feed}}</span>
						<img class="scaleBig" :src="item.img_url" :alt="item.alt">
					</a>
					<a class="item-info clearfloat" href="#">
						<router-link :to="{ name:'newsDetail',params:{id:item.id} }">
							<span class="item-title weight-bold ellipsis-2">{{item.title}}</span>
							<div class="item-bar">
								<span class="bar-author" rel="noopener noreferrer">{{item.auther}}</span>
								<span class="bar-time"><i class="icon"></i>{{item.add_time}}</span>
							</div>
						</router-link>
					</a>
			
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '新闻列表',
				newsList: [], // 新闻列表数据
			}
		},
		created() {
			this.$axios.get('getNewsList').then(res => {
				this.newsList = res.data.data;
			}).catch(err => console.log(err));
		}
	}
</script>

<style scoped>
	.home-flow {
		padding-left: .8rem;
		padding-top: .96rem;
	}

	.item-wrapper {
		padding-bottom: 1.33333rem;
	}

	.article-item {
		width: 18.4rem;
		height: 3.73333rem;
		display: flex;
		justify-content: space-between;
	}

	.article-item .item-pic {
		width: 5.6rem;
		height: 3.73333rem;
		display: block;
		position: relative;
		border-radius: .10667rem;
		overflow: hidden;
	}

	.article-item .item-pic .item-feed {
		position: absolute;
		top: 0;
		left: 0;
		background: #262626;
		padding: 0 .21333rem;
		height: .85333rem;
		text-align: center;
		line-height: .85333rem;
		color: #fff;
		font-size: .53333rem;
	}

	.article-item .item-pic img {
		width: 100%;
		height: 100%;
	}

	.article-item .item-info {
		width: 12.26667rem;
		height: 3.73333rem;
		position: relative;
	}

	.article-item .item-info .item-title {
		font-size: .85333rem;
		max-height: 2.34667rem;
		line-height: 1.17333rem;
		color: #262626;
		display: block;
	}

	.article-item .item-info .item-bar {
		width: 100%;
		height: .96rem;
		line-height: .96rem;
		opacity: .4;
		font-size: .64rem;
		color: #262626;
		position: absolute;
		bottom: .05333rem;
		display: flex;
		justify-content: space-between;
	}

	.article-item .item-info .item-bar .bar-author,
	.article-item .item-info .item-bar .bar-time {
		display: block;
	}

	.article-item .item-info .item-bar .bar-time i {
		display: inline-block;
		padding: .26667rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR…twas6Z7OYM1xt5TpOSxv3fMmvvEn7U/v/AfiEk8X/+At4BQIsN/y58iK0AAAAASUVORK5CYII=) no-repeat;
		position: relative;
		top: .05333rem;
		right: .26667rem;
		background-size: cover;
	}
</style>
