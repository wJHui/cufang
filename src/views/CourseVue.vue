<template>
	<section id="course">
		<section id="header"></section>
		<section id="main" class="no-padding-bottom">
			<div class="course-logo"><img :src="d.logo"></div>
			<div class="course-title">
				<h3>{{d.title}}</h3>
				<small>{{d.tag}} · {{d.people}}人最近7天做过</small>
			</div>
			<div class="course-author">
				<div class="clear">
					<div class="pull-left course-author-img"><img :src="d.author.head"></div>
					<div class="pull-left course-author-info">
						<small>{{d.author.identity}}</small>
						<h5>{{d.author.name}}</h5>
					</div>
				</div>
				<div class="course-remark" v-html="d.remark"></div>
			</div>
			<div class="course-material">
				<div class="course-material-title clear">
					<h4 class="pull-left">用料 <i></i></h4>
					<router-link class="pull-right" to="a">丢进菜篮子</router-link>
				</div>
				<div class="course-table">
					<div class="course-tr clear" v-for="(list,index) in d.material" :key="index">
						<div class="course-td">{{list.key}}</div>
						<div class="course-td">{{list.value}}</div>
					</div>
				</div>
			</div>
			<div class="course-step">
				<div class="course-step-item" v-for="(list, index) in d.step" :key="index">
					<h4 class="course-step-title">{{list.title}}</h4>
					<img v-if="list.img" :src="list.img">
					<div class="course-step-content" v-html='list.content'></div>
				</div>
			</div>
		</section>
		<section id="footer"></section>
	</section>
</template>

<style lang="scss">
	#course{
		div.course-logo{
			width: 100%;

			img{ max-width: 100%; display: block; }
		}

		div.course-title{
			text-align: center;
			margin: 0 16px;
			color: #333;
			padding: 16px 0;
			border-bottom: 1px solid #f6f6f6;

			h3{
				font-size: 1.4rem; 
				line-height: 2.4rem;
				font-weight: 500;
				margin-bottom: 6px;
			}

			small{
				font-size: .8rem;
			}
		}

		div.course-author{
			padding: 16px;

			div.course-author-img{
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 18px;

				img{
					display: block;
					max-width: 100%;
				}
			}

			div.course-author-info{
				height: 60px;
				display: flex;
				flex-direction: column;
				justify-content: center;

				small{
					font-size: .8rem; line-height: 22px;
				}
				h5{
					font-size: 1rem; 
					line-height: 22px;
					font-weight: 500;
				}
			}

			div.course-remark{
				margin: 16px 0;

				font-size: .9rem; 
				line-height: 1.6rem;
				color: #333;
			}
		}

		div.course-material{
			margin: 0 16px;

			div.course-material-title{
				line-height: 30px;
				padding: 8px 0;
				h4{
					font-size: 1rem;
				}
				a{
					color: #fa6650;
				}
			}

			div.course-table{
				border-top: 1px solid #eaeae0;

				div.course-tr{
					border-bottom: 1px solid #eaeae0;

					div.course-td{
						width: 50%;
						float: left;
						line-height: 30px; 
						padding: 8px 0; 
						color: #383835;
						font-size: 1rem;
					}
				}
			}
		}

		div.course-step{
			margin: 16px 0;

			img{ display: block; max-width: 100%; }

			div.course-step-item{
				border-bottom: 1px solid #f5f5f5;
				padding: 8px 16px;

				h4.course-step-title{
					font-size: .9rem; 
					line-height: 2rem;
					margin: 6px 0;
				}

				div.course-step-content{
					margin: 15px 0;
					font-size: .9rem;
					color: #333;
				}
			}
			
		}
	}
</style>

<script>
	export default {
		name : 'course-vue',
		data (){
			return {
				d : {
					title : '金枪鱼蛋炒饭',
					tag : '独家',
					people : 1,
					logo : 'http://shop.jhui21.com/assets/images/f1.jpg',
					img : '',
					author : {
						name : '美熊熊v',
						head : 'http://shop.jhui21.com/assets/images/h1.jpg',
						identity : '作者'
					},
					remark : '一人份，100克包装的金枪鱼罐头大约用半罐，150克包装的用三分之一罐。<br><br>炒饭简单快手，添加大块金枪鱼肉更加营养鲜香。',
					material : [
						{
							key : '剩饭(冷饭)',
							value : '1碗(1人份)'
						},
						{
							key : '鸡蛋',
							value : '1只'
						},
						{
							key : '金枪鱼罐头',
							value : '40-50克'
						},
						{
							key : '食油',
							value : ''
						},
						{
							key : '盐',
							value : ''
						},
						{
							key : '生抽',
							value : '1小勺'
						},
						{
							key : '小葱粒',
							value : ''
						},
					],
					step : [
						{
							title : '步骤一',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '牛肉洗干净，切成小丁或者肉末。看个人喜好，肉末入味，肉丁口感好。'
						},
						{
							title : '步骤二',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '锅中放油，炸辣皮子，出红油后取出辣皮子(因为可能会糊掉影响口感)扔掉。'
						},
						{
							title : '步骤三',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '喜欢辣的可以忽略上张图片，直接这样放辣皮子。'
						},
						{
							title : '步骤四',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '放入豆瓣酱，炒出红油后立即放入牛肉，翻炒。'
						},
						{
							title : '步骤五',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '牛肉变色后放入黄豆酱，大火翻炒稍稍收掉些牛肉的水分。'
						},
						{
							title : '步骤六',
							img : 'http://shop.jhui21.com/assets/images/f1.jpg',
							content : '放大量的葱花。'
						},
						{
							title : '小贴士',
							img : '',
							content : '1.全程不要放盐、味精、鸡精、蘑菇粉...<br>2.可以在吃的时候依个人爱好加点香醋'
						},
					]
				}
			}
		},
		components : {

		},
		methods : {

		},
		props : {
			id : {
				type : [Number, String],
				require : true
			}
		}
	}
</script>