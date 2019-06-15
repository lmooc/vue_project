<template>
	<div class="tmpl">
		<nav-bar title="新闻详情" />

		<!-- 新闻内容 -->
		<div class="article-body">
			<div class="white-space" style="height:10px;width:100%;visibility:hidden"></div>
			<div class="body-title weight-bold">
				{{newsInfo.title}}
			</div>
			<div class="body-bar clearfloat">
				<img class="author-avatar" src="https://krplus-pic.b0.upaiyun.com/avatar/201904/27085422/v9oadw7slm4ji5zh!120" alt="人工智能从业者必读：2019全球AI人才报告">
				<span class="author-name">{{newsInfo.auther}}</span>
				<span class="time">{{newsInfo.add_time}}</span>
			</div>
			<div class="white-space" style="height:10px;width:100%;visibility:hidden"></div>
			<div class="body-quote"><i class="quote-icon"></i>{{newsInfo.quote}}</div>
			<div class="white-space" style="height:10px;width:100%;visibility:hidden"></div>
			<div class="body-content-wrapper">
				<div id="body-content">
					{{newsInfo.content}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newsInfo: {}, // 新闻详情数据
			}
		},
		created() {
			//获取参数
			let {
				id
			} = this.$route.params;
			let url = 'getNew/' + id;
			this.$axios.get(url).then(res => {
				this.newsInfo = res.data.data[0];
			}).catch(err => console.log(err));
		}
	}
</script>

<style scoped>
	.article-body {
		padding: .8rem .8rem 0;
		overflow: hidden;
	}

	.article-body .body-title {
		font-size: 1.28rem;
		color: #262626;
		line-height: 1.76rem;
	}

	.weight-bold {
		font-weight: 500;
	}

	.article-body .body-bar {
		height: 1.28rem;
	}

	.article-body .body-bar .author-avatar {
		height: 1.28rem;
		width: 1.28rem;
		border-radius: 100%;
		float: left;
	}

	.article-body .body-bar .author-name {
		font-size: .74667rem;
		color: #262626;
		float: left;
		padding-left: .42667rem;
		padding-top: .10667rem;
	}

	.article-body .body-bar .time {
		font-size: .74667rem;
		color: #a8a8a8;
		float: right;
		padding-top: .10667rem;
	}

	.article-body .body-quote {
		background: #f8f9fa;
		color: #787878;
		font-size: .85333rem;
		line-height: 1.49333rem;
		padding: .53333rem .90667rem .53333rem 1.81333rem;
		position: relative;
	}

	.article-body .body-quote .quote-icon {
		position: absolute;
		width: 1.28rem;
		height: 1.28rem;
		top: .64rem;
		left: .26667rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR…bRhwPdZRyriP8HWhcXj9agBmwyYDJgMmAyYDJgMsCcgd/k7L42unVupgAAAABJRU5ErkJggg==) no-repeat 50%;
		background-size: cover;
	}

	.body-content-wrapper #body-content {
		font-size: .85333rem;
		color: #262626;
		letter-spacing: 0;
		text-align: justify;
		line-height: 1.6rem;
	}

	.clearfloat:after {
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
		height: 0;
	}
</style>
