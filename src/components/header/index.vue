<template>
    <div class="bady1">
        <header>
			<p>AcFun视频播放网站！</p>
		</header>
		<!-- <hr> -->
		<!-- 头部	 -->
		<div class="div1">
			<a href=""><img src="tab/img/acfun.png" alt="年度看点"></a>
		</div>
		<!-- 导航 -->
		<div id="demo1">
			<div class="div2">
				<ul>
					<li v-for="(item,index) in menu" v-bind:class="item.class" @mouseover="move(item)" @mouseout="out(item)" v-bind:key="index">{{item.name}}</li>
				</ul>
				<ul class="divli">
					<li v-for="(item,index) in newmenu" v-show="false1" v-bind:key="index">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'headers',
		data(){
			return{
				menu:[
				{name:"首 页",class:"",menu:[]},
				{name:"番 剧",class:"",menu:["番剧列表","剧场动画","国产动画"]},
				{name:"动 画",class:"",menu:["动画综合","COSPLAY","短片动画"]},
				{name:"娱 乐",class:"",menu:["搞笑","鬼畜","娱乐圈"]},
				{name:"生 活",class:"",menu:["萌宠","美食","旅行","手工","美妆"]},
				{name:"音 乐",class:"",menu:["原创·翻唱","演奏·乐器","综合音乐"]},
				{name:"舞 蹈",class:"",menu:["宅舞","综合舞蹈","偶像"]},
				{name:"游 戏",class:"",menu:["主机单机","网络游戏","英雄联盟","手机游戏","桌游卡牌",""]},
				{name:"科 技",class:"",menu:["科技制造","人文科普","汽车数码"]},
				{name:"影 视",class:"",menu:["电影杂谈","剧透社","纪实·短片"]},
				{name:"全站排行榜",class:"",menu:[]}
				],
				newmenu:[],
				false1:false,
				img:[
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
					{scr:"",name:"",class:""},
				]
			}
		},
			methods:{
				move(item){
					item.class="lired";
					this.newmenu=item.menu;
					this.false1=true;
					console.log("鼠标移入")
				},
				out(item){
					item.class='';
					console.log("鼠标移出");
					this.false1=false;
				}
			},
			conponents:{
			}
	
	}
</script>

<style lang="scss" scoped>
.bady1{
	/*width: 1024px;*/
	min-width:1024px;
    max-width:100%;
}
header{
	height: 50px;
	text-align: center;
	font-weight: bold;
	font-family: "FangSong";
	font-size: 30px;
	/*margin-top: 5px;*/
}
.div1{
	height: 150px;
}
.div1 img{
	width: 100%;
	height: 100%;
}
.div2{
	/*font-weight: bold;*/
	/*font-family: "KaiTi";*/
	width: 100%;
	font-size: 16px;
	height: 32px;
	line-height: 30px;/*让黄色div中的文字内容垂直居中*/
    text-align: center;/*让文字水平居中*/
	
}
.div2 ul{
	min-width: 1024px;
	display: flex;
	margin:0px;
    padding:0px;
	float:left;
	width: 100%;
	list-style-type: none;
	justify-content: space-between;
}
.divli{
	position: absolute;
	top: 262px;
}
.div2 ul li{
	// border: px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	text-align: center;
	float:left;
	/*border-left: 1px solid red;*/
}
.div2 .divli{
// 1.ilter：对win IE设置半透明滤镜效果，filter:alpha(Opacity=80)代表该对象80%半透明，火狐浏览器不认。
// 2、-moz-opacity：对mozilla firefox火狐浏览器实现半透明，win IE不认此属性，-moz-opacity:0.5相当于设置半透明为50%。
// 3、opacity：对除IE外所有浏览器支持包括谷歌，放最后主要针对谷歌浏览器，opacity: 0.5;表示设置50%半透明。
	// filter:alpha(opacity=50);
	font-weight: bold;  
  	opacity:0.8;
	/*margin-bottom: 30px;*/
	background: #fff;
	color: black;
	cursor: pointer;
	border-bottom: 1px solid #ccc;
	// border-top: none;
	// border-radius: 5px;
}
.div2 ul:nth-child(1) .lired{
	border-bottom:2px solid #ff0000;
	font-weight: bold; 
 	box-sizing: border-box;
	// background: #808080;
	color:#ff0000;
	cursor: pointer;
	// border-bottom: 1px solid red;
	// border-radius: 5px 5px 0 0 ;
}

</style>