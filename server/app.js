const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');

const app = new Koa();
const router = new Router();

//处理跨域
app.use(cors());

router.prefix('/api');
router.get('/', async ctx => {
		ctx.body = {
			statusText: 'ok'
		};
	}).get('/getPic', async ctx => {
		ctx.body = {
			status: 200,
			statusText: 'ok',
			data: []
		};
	}).get('/getNewsList', async ctx => {
		ctx.body = {
			status: 200,
			statusText: 'ok',
			data: [{
				id: 11,
				title: "人工智能从业者必读：2019全球AI人才报告",
				add_time: "1小时前",
				summary: "",
				click:1,
				auther: '星球日报',
				feed: '职场',
				img_url: "https://pic.36krcnd.com/201904/19051635/aeigqbybmiw2qyu0!heading"
			},{
				id: 12,
				title: "「作业盒子」完成 D 轮 1.5 亿美元融资，阿里巴巴领投",
				add_time: "1小时前",
				summary: "",
				click:1,
				auther: '星球日报',
				feed: '创投',
				img_url: "https://pic.36krcnd.com/201905/30061738/2wa60d5f8iy3rt2t!heading"
			}]
		};
	}).get('/getNew/:newid', async ctx => {
		ctx.body = {
			status: 200,
			statusText: 'ok',
			data: [{
				id: 11,
				title: "人工智能从业者必读：2019全球AI人才报告",
				add_time: "1小时前",
				summary: "",
				click:1,
				auther: '星球日报',
				feed: '职场',
				img_url: "https://pic.36krcnd.com/201904/19051635/aeigqbybmiw2qyu0!heading",
				quote: "美国和中国是世界两强。",
				content: "编者按：人工智能因为其中推动效率提高和发掘机会方面的推动器作用，正在越来越受到各国政府和各大企业的高度重视。发展AI，人才是关键因素。为了分析各国在AI人才方面的储备情况，AI初创企业element.ai的Grace Kiser and Yoan Mantha利用顶级AI会议的作者和文章引用数据，再加上LinkedIn与其他AI报告的辅助，做出了2019年的全球AI人才报告。我们摘取其中部分进行了编译，原文标题是：Global AI Talent Report 2019"
			}]
		};
	}).post('/users', (ctx, next) => {
		ctx.body = {
			status: 200,
			statusText: 'ok',
			data: []
		};
	})
	.put('/users/:id', (ctx, next) => {
		ctx.body = {
			status: 200,
			statusText: 'ok',
			data: []
		};
	})

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => {
	console.log('服务器启动在3000端口');
});
