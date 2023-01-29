<template>
  <div class="mainor">
    <!-- 顶部 “数字嘉明欢迎您” -->
    <div class="top"></div>
    <!-- 内容区域，框架采用 flex 部分 -->
    <div class="contentes">
      <div class="contentOne">
        <!-- 日期和星期区域 -->
        <div class="timeAndDate">
          <span class="date">2022年11月04日</span>
          <span class="week">星期四</span>
        </div>
        <!-- 时间细节 -->
        <div class="timer">
          10:00:00
        </div>
        <!-- 天气温度区域 -->
        <div class="temperature">
          <!-- 天气区域，是一个小图片 -->
          <div class="weather"></div>
          <!-- 标题区域，有温度和 temperature -->
          <div class="title">
            <span class="chineseTitle">温度</span>
            <span class="englishTitle">temperature</span>
          </div>
          <div class="temperatureNum">
            <span id="temperatureNumD">17</span>℃
          </div> 
        </div>
        <!-- 值班列表区域 -->
        <div class="watchList">
          <div class="watchListTitle"></div>
          <div class="watchListHead">
            <ul>
              <li>
                <span>部门</span>
                <span>人员</span>
                <span>电话</span>
              </li>
            </ul>
          </div>
          <div class="watchListContent">
            <ul id="content1">
              <li>
                <span>带班</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>综办</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>经发</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>应急</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>规划</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>招商</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>凤投</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
              <li>
                <span>城投</span>
                <span>张三</span>
                <span>17863557890</span>
              </li>
            </ul>
            <ul id="content2">
            </ul>
          </div>
        </div>
      </div>
      <!-- 内容区域第二部分 -->
      <div class="contentTwo">
        <!-- 上半部分 -->
        <div class="detailsOne">
          <!-- 上半部分的标签栏区域 -->
          <div class="detailsOneTitle">
            <!-- 两个标题 -->
            <div class="ProductsAndTrends">
              <a class="product active1">
                <span class="icons icons1"></span>
                营业额走势
              </a>
              <a class="energyConsumption">
                <span class="icons icons2"></span>
                纳税走势
              </a>
            </div>
          </div>
          <div class="lpboArea1">
            <div class="detailsOneContentOne"></div>
            <div class="detailsOneContentTwo"></div>
            <div class="detailsOneContentThree"></div>
          </div>
        </div>
        <!-- 下半部分 -->
        <div class="detailsTwo">
          <!-- 下半部分的标签栏区域 -->
          <div class="detailsTwoTitle">
            <div class="IndustryAndScale">
              <a class="product active2">
                <span class="icons icons1"></span>
                行业分布
              </a>
              <a class="energyConsumption">
                <span class="icons icons2"></span>
                规模分布
              </a>
            </div>
          </div>
          <div class="lpboArea2">
            <div class="detailsTwoContentOne" id="detailsTwoContentOne"></div>
            <div class="detailsTwoContentTwo" id="detailsTwoContentTwo"></div>
            <div class="detailsTwoContentThree" id="detailsTwoContentThree"></div>
          </div>
        </div>
      </div>

      <!-- 内容区域第三部分（地图区域） -->
      <div class="contentThree">
        <div class="mapDetails" id="mapDetails">
          
        </div>
        <!-- 企业的详情提示框，地图上有一个个的标点，每一个标点都是一个企业 -->
        <div class="enterpriseDetailsPrompt">
          <div class="logoName">
            <span class="logobc"></span>
            <span class="enterpriseName">
              山东鸿丰电力科技有限公司
            </span>
          </div>
          <div class="listNameLogo">
            <span class="listName">
              产值走势
            </span>
            <span class="Logo">

            </span>
          </div>
          <!-- 图标 -->
          <div class="listDetails" id="listDetails">
          </div>
        </div>
      </div>

      <!-- 内容区域第四部分 -->
      <div class="contentFour">
        <div class="detailsOne">
          <!-- 上半部分的标签栏区域 -->
          <div class="detailsOneTitle">
            <!-- 两个标题 -->
            <div>
              <a class="numberReading active">
                <span class="icons"> </span>
                数读嘉明
              </a>
            </div>
          </div>
          <div class="detailsOneContent">
            <div class="first">
              <div class="firstdetailsOne">
                <div class="firstdetailsOneIconBox">
                  <div class="firstdetailsOneIcon"></div>
                  <div class="firstdetailsOneclassification">
                    营业收入
                  </div>
                  <div class="firstdetailsOneValue">
                    <span>111.30</span>亿
                  </div>
                </div>
              </div>
              <div class="firstdetailsTwo">
                <div class="firstdetailsTwoIconBox">
                  <div class="firstdetailsTwoIcon"></div>
                  <div class="firstdetailsTwoclassification">
                    纳税总额
                  </div>
                  <div class="firstdetailsTwoValue">
                    <span>5.73</span>亿
                  </div>
                </div>
              </div>
            </div>
            <div class="second">
              <div class="seconddetailsOne">
                <div class="seconddetailsOneIconBox">
                  <div class="seconddetailsOneIcon"></div>
                  <div class="seconddetailsOneclassification">
                    利润总额
                  </div>
                  <div class="seconddetailsOneValue">
                    <span>2.36</span>亿
                  </div>
                </div>
              </div>
              <div class="seconddetailsTwo">
                <div class="seconddetailsTwoIconBox">
                  <div class="seconddetailsTwoIcon"></div>
                  <div class="seconddetailsTwoclassification">
                    总产值
                  </div>
                  <div class="seconddetailsTwoValue">
                    <span>218.30</span>亿
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detailsTwo">
          <!-- 下半部分的标签栏区域 -->
          <div class="detailsTwoTitle">
            <div>
              <a class="famousEnterprise active">
                <span class="icons"></span>
                明星企业
              </a>
            </div>
          </div>
          <div class="famousEnterpriseListTitle">
            <ul>
              <li>
                <span></span>
                <span>企业</span>
                <span>产量（万）</span>
                <span>增长（%）</span>
              </li>
            </ul>
          </div>
          <!-- <div class="famousEnterpriseListContent" onmouseover="rollStop()" onmouseout="rollStart(60)"> -->
          <div class="famousEnterpriseListContent">
            <ul id="comment1">
              <li>
                <span>1</span>
                <span>山东聊城金峰金属制品有限公司</span>
                <span>22588.0</span>
                <span>23.7</span>
              </li>
              <li>
                <span>2</span>
                <span>山东聊城莱鑫粉末材料科技有限公司</span>
                <span>10637.0</span>
                <span>23.7</span>
              </li>
              <li>
                <span>3</span>
                <span>山东聊城鲁岳汽车电机有限公司</span>
                <span>8047.0</span>
                <span>23.7</span>
              </li>
              <li>
                <span>4</span>
                <span>聊城耀华节能玻璃有限公司</span>
                <span>4320.8</span>
                <span>17.8</span>
              </li>
              <li>
                <span>5</span>
                <span>山东鸿丰电气设备有限公司</span>
                <span>3354.0</span>
                <span>10.6</span>
              </li>
              <li>
                <span>6</span>
                <span>山东阳光电力设备有限公司</span>
                <span>3079.0</span>
                <span>30.3</span>
              </li>
              <li>
                <span>7</span>
                <span>聊城银兴钢绞线有限责任公司</span>
                <span>1434.0</span>
                <span>23.7</span>
              </li>
              <li>
                <span>8</span>
                <span>山东聊城安舜不锈钢有限公司</span>
                <span>786.0</span>
                <span>23.7</span>
              </li>
              <li>
                <span>9</span>
                <span>聊城市鑫润达塑胶制品有限公司</span>
                <span>636.0</span>
                <span>10.6</span>
              </li>
              <li>
                <span>10</span>
                <span>山东齐鲁漆业有限公司</span>
                <span>415.5</span>
                <span>10.6</span>
              </li>
            </ul>
            <ul id="comment2">
            </ul>
          </div>
        </div>
      </div>
      <!-- 内容区域第五部分 -->
      <div class="contentFive">
        <div class="contentFiveTitle">
          <div>
            <a class="numberReading active">
              <span class="icons"> </span>
              实时监控
            </a>
          </div>
        </div>
        <div class="contentFiveList"> 
          <video src="./videoes/嘉明宣传片.mp4" controls="controls" class="contentFiveListVideoes" autoplay muted loop></video>
          <video src="./videoes/嘉明宣传片.mp4" controls="controls" class="contentFiveListVideoes" autoplay muted loop></video>
          <video src="./videoes/嘉明宣传片.mp4" controls="controls" class="contentFiveListVideoes" autoplay muted loop></video>
          <video src="./videoes/嘉明宣传片.mp4" controls="controls" class="contentFiveListVideoes" autoplay muted loop></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios"
import {
  year_yingyee,
  year_nashui,
  industry_count,
  manage_scale,
  address,
  company_amount,  // 数读嘉明
  company_contrast,  // 明星企业
} from "@/services/largeScreen"
export default {
  created(){
    this.setTime();
  },
  mounted(){
    // 今日值班
    this.rollToday(60);
    // 明星企业
    this.roll(60);
    // 设置天气
    this.setWeather();
    // 营业额
    this.yyyee();
    // 纳税
    this.nashui();
    // 营业额（复制）
    this.yyyeeCopy();
    // 行业分布
    this.hhyeffbu();
    // 规模分布
    this.gvmoffbu();
    // 行业分布（复制）
    this.hhyeffbuCopy();
    // 轮播图
    this.lunbo();
    // 数读嘉明
    this.uudujwmy();
    // 地图区域
    this.dituArea();
    // 企业提示框（只是一开始的时候加载一次）
    this.qiyetiui();
    // 明星企业渲染数据
    this.myxyqiye();
  },
  data(){
    return {
      timer1:null,
      timer2:null,
    }
  },
  methods:{
    // 设置时间
    setTime(){
      var t = null
      t = setTimeout(time, 1000)
      function time() {
        clearTimeout(t)
        var dt = new Date()
        var y = dt.getFullYear()
        var mt = dt.getMonth() + 1
        mt = mt<10?'0'+mt:mt
        var day = dt.getDate()
        day = day<10?'0'+day:day
        var h = dt.getHours()
        h = h<10?'0'+h:h
        var m = dt.getMinutes()
        m = m<10?'0'+m:m
        var s = dt.getSeconds()
        s = s<10?'0'+s:s
        var week = dt.getDay()
        if(week==1){
          document.querySelector('.timeAndDate .week').innerHTML = '星期一'
        }
        else if(week==2){
          document.querySelector('.timeAndDate .week').innerHTML = '星期二'
        }
        else if(week==3){
          document.querySelector('.timeAndDate .week').innerHTML = '星期三'
        }
        else if(week==4){
          document.querySelector('.timeAndDate .week').innerHTML = '星期四'
        }
        else if(week==5){
          document.querySelector('.timeAndDate .week').innerHTML = '星期五'
        }
        else if(week==6){
          document.querySelector('.timeAndDate .week').innerHTML = '星期六'
        }
        else{
          document.querySelector('.timeAndDate .week').innerHTML = '星期天'
        }
        document.querySelector('.timeAndDate .date').innerHTML =  y + '年' + mt + '月' + day + '日'
        document.querySelector('.contentOne .timer').innerHTML =  h + ':' + m + ':' + s
        t = setTimeout(time, 1000)
      }
    },
    // 设置天气
    setWeather(){
      const iconWeatherMap = {
        longjuanfeng: ['强风/劲风', '疾风', '大风', '烈风', '风暴', '狂爆风', '飓风', '热带风暴', '龙卷风'],
        yun: ['少云', '晴间多云', '多云'],
        xue: ['雪', '阵雪', '小雪', '中雪', '大雪', '暴雪', '小雪-中雪', '中雪-大雪', '大雪-暴雪', '冷'],
        wu: ['浮尘', '扬沙', '沙尘暴', '强沙尘暴', '雾', '浓雾', '强浓雾', '轻雾', '大雾', '特强浓雾'],
        qing: ['晴', '热','有风', '平静', '微风', '和风', '清风'],
        yujiaxue: ['雨雪天气', '雨夹雪', '阵雨夹雪'],
        yu: ['阵雨', '雷阵雨', '雷阵雨并伴有冰雹', '小雨', '中雨', '大雨', '暴雨', '大暴雨', '特大暴雨', '强阵雨', '强雷阵雨', '极端降雨', '毛毛雨/细雨', '雨', '小雨-中雨', '中雨-大雨', '大雨-暴雨', '暴雨-大暴雨', '大暴雨-特大暴雨', '冻雨'],
        yin: ['阴', '霾', '中度霾', '重度霾', '严重霾', '未知']
      };

      // 加载天气查询插件
      AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        // 执行实时天气信息查询
        weather.getLive('聊城市', function (err, data) {
          console.log(err, data);
          for (const weatherKey in iconWeatherMap) {
            if(iconWeatherMap[weatherKey].includes(data.weather)) {
              // vue 中请求过来图片的方式是使用这种 require 的方式，直接写不行；
              // document.querySelector(".weather").style.backgroundImage = "url(" + require("../../assets/weatherIcon/qing.png") + ")"
              document.querySelector(".weather").style.backgroundImage = "url(" + require("../../assets/weatherIcon/"+ weatherKey + ".png") +")";
              document.querySelector("#temperatureNumD").innerHTML = data.temperature;
            }
          }
        });
      });
      setInterval(() => {
        //加载天气查询插件
        AMap.plugin('AMap.Weather', function () {
          //创建天气查询实例
          var weather = new AMap.Weather();
          //执行实时天气信息查询
          weather.getLive('聊城市', function (err, data) {
            console.log(err, data);
            for (const weatherKey in iconWeatherMap) {
              if(iconWeatherMap[weatherKey].includes(data.weather)) {
                console.log(weatherKey)
                // document.querySelector(".weather").style.backgroundImage = "url(./imgs/weatherIcon/"+weatherKey+".png)";
                // document.querySelector(".weather").innerHTML = "阴";
                document.querySelector("#temperatureNumD").innerHTML = data.temperature;
              }
            }
          });
        });
      },3600000)
    },
    // 今日值班
    rollToday(t) {
      let ul1content1 = document.querySelector("#content1");
      let ul2content2 = document.querySelector("#content2");
      let ulboxcontent = document.querySelector(".watchListContent");
      // ul2 标签中的内容（innerHTML） 和 ul1 标签中的内容（innerHTML）一样
      /* 
      思考一下，为什么这里要创建一个里面的内容完全和 ul1content1 一样的 ul2content2 呢？
      解答：其实是这样的，为了防止滚动高度突然变零，会造成突然性的跳转，这里创建一个 ul2content2，滚动效果会更加的丝滑
      */
      ul2content2.innerHTML = ul1content1.innerHTML;
      // scrollTop 表示滚动的高度，这里表示 ul2content2 盒子最开始的时候滚动的高度为 0，也就是没有滚动
      ulboxcontent.scrollTop = 0;
      // 调用 rollStart() 方法
      this.rollStartToday(t);
    },
    rollStartToday(t) {
      let ul1content1 = document.querySelector("#content1");
      let ul2content2 = document.querySelector("#content2");
      let ulboxcontent = document.querySelector(".watchListContent");
      // 调用 rollStop() 方法，新建定时器之前，一定要先清除一下定时器
      this.rollStop();
      /*
      定义一个初始值为 0 的变量 i；在定时器中，让 i 不停的自增，并且将 i 的值赋值给 ulbox.scrollTop，
      来实现滚动的效果
      */ 
      let i = 0;
      // 执行定时器
      this.timer1 = setInterval(()=>{
        // 当滚动高度大于等于列表内容高度时恢复为 0，这里的 ul1content1.scrollHeight 的值是固定的，为 220px
        if (i >= ul1content1.scrollHeight) {
          i = 0;
        } else {
          // 当滚动的高度小于列表内容高度的时候，ulboxcontent 盒子滚动的高度每隔 t 毫秒时，+1
          ulboxcontent.scrollTop = i++;
        }
      }, t);
    },
    rollStopToday(){
      clearInterval(this.timer1);
    },
    // 营业额走势图
    yyyee() {
      // var yearYyyeeUrl='http://jiaming.vm68.suncoolnet.cn/api/manage/year/yingyee'
      // axios.post(yearYyyeeUrl).then(function (res) {
      year_yingyee().then(function (res) {
        const yyyeeList = res.data.data;
        var yyyeeId = [];
        var yyyeeCount = [];
        for(let i=0;i<yyyeeList.length;i++) {
          yyyeeId.push(yyyeeList[i]._id);
          yyyeeCount.push((yyyeeList[i].count/10000).toFixed(1));
        }
        // 实例化对象
        let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentOne"));
        // 指定配置和数据
        let option = {
          color: ["#2f89cf"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "5%",
            top: "45px",
            right: "0%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data:yyyeeId,
              axisTick: {
                alignWithLabel: true,
              },
              axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 16,
                rotate: 60,
              },
              axisLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name:"单位（亿元）",
              nameTextStyle: {
                color: "#fff",
                fontSize: 16,
              },
              axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 16,
              },
              // y轴线条样式
              axisLine: {
                show: true,
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2,
                  // type: "solid"
                },
              },
              // y 轴分隔线样式
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.3)",
                },
              },
            },
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              // 修改柱子宽度
              barWidth: "30%",
              // data: [200, 300, 600, 1500, 900, 1200, 1000],
              data:yyyeeCount,
              itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 0,
              },
            },
          ],
        };
        // 把配置给实例对象
        myChart.setOption(option);
        // 让图表自适应屏幕
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      })
      setInterval(() => {
        // axios.post(yearYyyeeUrl).then(function (res) {
        year_yingyee().then(function (res) {
          const yyyeeList = res.data.data;
          var yyyeeId = [];
          var yyyeeCount = [];
          for(let i=0;i<yyyeeList.length;i++) {
            yyyeeId.push(yyyeeList[i]._id);
            yyyeeCount.push((yyyeeList[i].count/10000).toFixed(1));
          }
          // 实例化对象
          let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentOne"));
          // 指定配置和数据
          let option = {
            color: ["#2f89cf"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            grid: {
              left: "5%",
              top: "45px",
              right: "0%",
              bottom: "4%",
              containLabel: true,
            },
            xAxis: [
              {
                type: "category",
                data:yyyeeId,
                axisTick: {
                  alignWithLabel: true,
                },
                axisLabel: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16,
                  rotate: 60,
                },
                axisLine: {
                  show: false,
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                name:"单位（亿元）",
                nameTextStyle: {
                  color: "#fff",
                  fontSize: 16,
                },
                axisLabel: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16,
                },
                // y轴线条样式
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2,
                    // type: "solid"
                  },
                },
                // y 轴分隔线样式
                splitLine: {
                  lineStyle: {
                    color: "rgba(255,255,255,0.3)",
                  },
                },
              },
            ],
            series: [
              {
                name: "直接访问",
                type: "bar",
                // 修改柱子宽度
                barWidth: "30%",
                // data: [200, 300, 600, 1500, 900, 1200, 1000],
                data:yyyeeCount,
                itemStyle: {
                  // 修改柱子圆角
                  barBorderRadius: 0,
                },
              },
            ],
          };
          // 把配置给实例对象
          myChart.setOption(option);
          // 让图表自适应屏幕
          window.addEventListener("resize", function () {
            myChart.resize();
          });
        })
      },1000)
    },
    // 纳税折线图
    nashui() {
      // var yearNashuiUrl='http://jiaming.vm68.suncoolnet.cn/api/manage/year/nashui'
      // axios.post(yearNashuiUrl).then(function (res) {
      year_nashui().then(function (res) {
        const yearNashuiList = res.data.data;
        var yearNashuiId = [];
        var yearNashuiCount = [];
        for(let i=0;i<yearNashuiList.length;i++) {
          yearNashuiId.push(yearNashuiList[i]._id)
          yearNashuiCount.push((yearNashuiList[i].count/10000).toFixed(1))
        }
        // 实例化对象
        let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentTwo"));
        // 指定配置和数据
        let option = {
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            top: "0%",
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
          },
          grid: {
            left: "18",
            top: "45",
            right: "10",
            bottom: "10",
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: yearNashuiId,
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16
                },
                rotate: 60,
              },
              // x轴线的颜色为   rgba(255,255,255,.2)
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)"
                }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name:"单位（亿元）",
              nameTextStyle: {
                color: "#fff",
                fontSize: 16,
              },
              axisTick: { show: false },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "rgba(255,255,255,.3)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16
                }
              },
              // 修改分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              }
            }
          ],
          series: [
            {
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0,0,0,1,
                    [
                      {
                        offset: 0,
                        color: "rgba(0, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(0, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                }
              },
              // 设置拐点 小圆点
              symbol: "circle",
              // 拐点大小
              symbolSize: 5,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              // 开始不显示拐点，鼠标经过显示
              showSymbol: false,
              emphasis: {
                focus: 'series'
              },
              data: yearNashuiCount,
            },
          ]
        };
        // 把配置给实例对象
        myChart.setOption(option);
        // 让图表自适应屏幕
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      })
      setInterval(() => {
        // axios.post(yearNashuiUrl).then(function (res) {
        year_nashui().then(function (res) {
          const yearNashuiList = res.data.data;
          var yearNashuiId = [];
          var yearNashuiCount = [];
          for(let i=0;i<yearNashuiList.length;i++) {
            yearNashuiId.push(yearNashuiList[i]._id)
            yearNashuiCount.push((yearNashuiList[i].count/10000).toFixed(1))
          }
          // 实例化对象
          let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentTwo"));
          // 指定配置和数据
          let option = {
            tooltip: {
              trigger: 'axis',
            },
            legend: {
              top: "0%",
              textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
              }
            },
            grid: {
              left: "18",
              top: "45",
              right: "10",
              bottom: "10",
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: yearNashuiId,
                axisLabel: {
                  textStyle: {
                    color: "rgba(255,255,255,1)",
                    fontSize: 16
                  }
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                  lineStyle: {
                    color: "rgba(255,255,255,.2)"
                  }
                },
              }
            ],
            yAxis: [
              {
                type: 'value',
                name:"单位（亿元）",
                nameTextStyle: {
                  color: "#fff",
                  fontSize: 16,
                },
                axisTick: { show: false },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "rgba(255,255,255,.3)"
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: "rgba(255,255,255,1)",
                    fontSize: 16
                  }
                },
                // 修改分割线的颜色
                splitLine: {
                  lineStyle: {
                    color: "rgba(255,255,255,.1)"
                  }
                }
              }
            ],
            series: [
              {
                type: 'line',
                smooth: true,
                lineStyle: {
                  normal: {
                    color: "#00d887",
                    width: 2
                  }
                },
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                      [
                        {
                          offset: 0,
                          color: "rgba(0, 216, 135, 0.4)"
                        },
                        {
                          offset: 0.8,
                          color: "rgba(0, 216, 135, 0.1)"
                        }
                      ],
                      false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                  }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                  color: "#00d887",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12
                },
                // 开始不显示拐点，鼠标经过显示
                showSymbol: false,
                emphasis: {
                  focus: 'series'
                },
                data: yearNashuiCount,
              },
            ]
          };
          // 把配置给实例对象
          myChart.setOption(option);
          // 让图表自适应屏幕
          window.addEventListener("resize", function () {
            myChart.resize();
          });
        })
      },1000)
    },
    // 营业额走势图（复制）
    yyyeeCopy() {
      // let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentThree"));
      // var yearYyyeeUrl='http://jiaming.vm68.suncoolnet.cn/api/manage/year/yingyee'
      // axios.post(yearYyyeeUrl).then(function (res) {
      year_yingyee().then(function (res) {
        const yyyeeList = res.data.data;
        var yyyeeId = [];
        var yyyeeCount = [];
        for(let i=0;i<yyyeeList.length;i++) {
          yyyeeId.push(yyyeeList[i]._id);
          yyyeeCount.push((yyyeeList[i].count/10000).toFixed(1));
        }
        // 实例化对象
        let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentThree"));
        // 指定配置和数据
        let option = {
          color: ["#2f89cf"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "5%",
            top: "45px",
            right: "0%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data:yyyeeId,
              axisTick: {
                alignWithLabel: true,
              },
              axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 16,
                rotate: 60,
              },
              axisLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name:"单位（亿元）",
              nameTextStyle: {
                color: "#fff",
                fontSize: 16,
              },
              axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 16,
              },
              // y轴线条样式
              axisLine: {
                show: true,
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2,
                  // type: "solid"
                },
              },
              // y 轴分隔线样式
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.3)",
                },
              },
            },
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              // 修改柱子宽度
              barWidth: "30%",
              // data: [200, 300, 600, 1500, 900, 1200, 1000],
              data:yyyeeCount,
              itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 0,
              },
            },
          ],
        };
        // 把配置给实例对象
        myChart.setOption(option);
        // 让图表自适应屏幕
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      })
      setInterval(() => {
        // axios.post(yearYyyeeUrl).then(function (res) {
        year_yingyee().then(function (res) {
          const yyyeeList = res.data.data;
          var yyyeeId = [];
          var yyyeeCount = [];
          for(let i=0;i<yyyeeList.length;i++) {
            yyyeeId.push(yyyeeList[i]._id);
            yyyeeCount.push((yyyeeList[i].count/10000).toFixed(1));
          }
          // 实例化对象
          let myChart = echarts.init(document.querySelector(".detailsOne .lpboArea1 .detailsOneContentThree"));
          // 指定配置和数据
          let option = {
            color: ["#2f89cf"],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            grid: {
              left: "5%",
              top: "45px",
              right: "0%",
              bottom: "4%",
              containLabel: true,
            },
            xAxis: [
              {
                type: "category",
                data:yyyeeId,
                axisTick: {
                  alignWithLabel: true,
                },
                axisLabel: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16,
                  rotate: 60,
                },
                axisLine: {
                  show: false,
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                name:"单位（亿元）",
                nameTextStyle: {
                  color: "#fff",
                  fontSize: 16,
                },
                axisLabel: {
                  color: "rgba(255,255,255,1)",
                  fontSize: 16,
                },
                // y轴线条样式
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2,
                    // type: "solid"
                  },
                },
                // y 轴分隔线样式
                splitLine: {
                  lineStyle: {
                    color: "rgba(255,255,255,0.3)",
                  },
                },
              },
            ],
            series: [
              {
                name: "直接访问",
                type: "bar",
                // 修改柱子宽度
                barWidth: "30%",
                // data: [200, 300, 600, 1500, 900, 1200, 1000],
                data:yyyeeCount,
                itemStyle: {
                  // 修改柱子圆角
                  barBorderRadius: 0,
                },
              },
            ],
          };
          // 把配置给实例对象
          myChart.setOption(option);
          // 让图表自适应屏幕
          window.addEventListener("resize", function () {
            myChart.resize();
          });
        })
      },1000)
    },
    // 行业分布模块（3d 饼状图）
    hhyeffbu() {
      var industryArrs = [];
      // var industryUrl = 'http://jiaming.vm68.suncoolnet.cn/api/manage/industry/count'
      // axios.post(industryUrl).then(function (res) {
      industry_count().then(function (res) {
        const industryContentList = res.data.data;
        for (let i=0;i<industryContentList.length;i++) {
          industryArrs[i] = [industryContentList[i].id,parseInt(industryContentList[i].count)]
        }
      }).then(function() {
        var chart = Highcharts.chart('detailsTwoContentOne', {
          chart: {
            // 改变背景颜色
            backgroundColor:"transparent",
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 60,
              beta: 0,
            },
          },
          // 不同块设置不一样的颜色
          colors:[
            "#FFC1C1",
            "#8A2BE2",
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#32c5e9",
            "#1d9dff",
            "#FFE4C4",
            "#00BFFF",
            "#BFEFFF",
            "#F5FFFA",
            "#96CDCD",
            "#E6E6FA"
          ],
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 40,
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                  fontSize: '21px',  // 这个是改饼状图里面显示的字体
                  color:'#fff',
              }
              }
            }
          },
          series: [{
            type: 'pie',
            data: industryArrs,
          }]
        });
      })
      setInterval(() => {
        // axios.post(industryUrl).then(function (res) {
        industry_count().then(function (res) {
          const industryContentList = res.data.data;
          for (let i=0;i<industryContentList.length;i++) {
            industryArrs[i] = [industryContentList[i].id,parseInt(industryContentList[i].count)]
          }
        }).then(function() {
          var chart = Highcharts.chart('detailsTwoContentOne', {
            chart: {
              // 改变背景颜色
              backgroundColor:"transparent",
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 60,
                beta: 0,
              },
            },
            // 不同块设置不一样的颜色
            colors:[
              "#FFC1C1",
              "#8A2BE2",
              "#065aab",
              "#066eab",
              "#0682ab",
              "#0696ab",
              "#06a0ab",
              "#32c5e9",
              "#1d9dff",
              "#FFE4C4",
              "#00BFFF",
              "#BFEFFF",
              "#F5FFFA",
              "#96CDCD",
              "#E6E6FA"
            ],
            title: {
              text: ''
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 40,
                dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style: {
                    fontSize: '21px',  // 这个是改饼状图里面显示的字体
                    color:'#fff',
                }
                }
              }
            },
            series: [{
              type: 'pie',
              data: industryArrs,
            }]
          });
        })
      },86400000)  // 每隔 1 天刷新一次 86400000
    },
    // 规模分布模块（3d 饼状图）
    gvmoffbu() {
      var scaleArrs = [];
      // var scaleUrl = 'http://jiaming.vm68.suncoolnet.cn/api/company/manage/scale'
      // axios.post(scaleUrl).then(function (res) {
      manage_scale().then(function (res) {
        const scaleContentList = res.data.data;
        for (let i=0;i<scaleContentList.length;i++) {
          scaleArrs[i] = [scaleContentList[i]._id,parseInt(scaleContentList[i].count)]
        }
      }).then(function() {
        var chart = Highcharts.chart('detailsTwoContentTwo', {
          chart: {
            // 改变背景颜色
            backgroundColor:"transparent",
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 60,
              beta: 0,
            },
          },
          // 不同块设置不一样的颜色
          colors:[
            '#00AAFF',  
            '#00FF00',
            '#FF6A6A',
            '#00B400',
            '#DAA520',
            
          ],
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 40,
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                  fontSize: '21px',  // 这个是改饼状图里面显示的字体
                  color:'#fff',
              }
              }
            }
          },
          series: [{
            type: 'pie',
            data: scaleArrs,
          }]
        });
      })
      setInterval(() => {
        // axios.post(scaleUrl).then(function (res) {
        manage_scale().then(function (res) {
          const scaleContentList = res.data.data;
          for (let i=0;i<scaleContentList.length;i++) {
            scaleArrs[i] = [scaleContentList[i]._id,parseInt(scaleContentList[i].count)]
          }
        }).then(function() {
          var chart = Highcharts.chart('detailsTwoContentTwo', {
            chart: {
              // 改变背景颜色
              backgroundColor:"transparent",
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 60,
                beta: 0,
              },
            },
            // 不同块设置不一样的颜色
            colors:[
              '#00AAFF',  
              '#00FF00',
              '#FF6A6A',
              '#00B400',
              '#DAA520',
            ],
            title: {
              text: ''
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 40,
                dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style: {
                    fontSize: '21px',  // 这个是改饼状图里面显示的字体
                    color:'#fff',
                }
                }
              }
            },
            series: [{
              type: 'pie',
              data: scaleArrs,
            }]
          });
        })
      }, 86400000);  // 每隔 1 天刷新一次 86400000
    },
    // 行业分布模块（3d 饼状图）（复制）
    hhyeffbuCopy() {
      let industryArrs = [];
      // var industryUrl = 'http://jiaming.vm68.suncoolnet.cn/api/manage/industry/count'
      // axios.post(industryUrl).then(function (res) {
      industry_count().then(function (res) {
        const industryContentList = res.data.data;
        for (let i=0;i<industryContentList.length;i++) {
          industryArrs[i] = [industryContentList[i].id,industryContentList[i].count]
        }
      }).then(function() {
        var chart = Highcharts.chart('detailsTwoContentThree', {
          chart: {
            // 改变背景颜色
            backgroundColor:"transparent",
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 60,
              beta: 0,
            },
          },
          // 不同块设置不一样的颜色
          colors:[
            "#FFC1C1",
            "#8A2BE2",
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#32c5e9",
            "#1d9dff",
            "#FFE4C4",
            "#00BFFF",
            "#BFEFFF",
            "#F5FFFA",
            "#96CDCD",
            "#E6E6FA"
          ],
          title: {
            text: ''
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 40,
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                  fontSize: '21px',  // 这个是改饼状图里面显示的字体
                  color:'#fff',
              }
              }
            }
          },
          series: [{
            type: 'pie',
            data: industryArrs,
          }]
        });
      })
      setInterval(() => {
        // axios.post(industryUrl).then(function (res) {
        industry_count().then(function (res) {
          const industryContentList = res.data.data;
          for (let i=0;i<industryContentList.length;i++) {
            industryArrs[i] = [industryContentList[i].id,industryContentList[i].count]
          }
          
        }).then(function() {
          var chart = Highcharts.chart('detailsTwoContentThree', {
            chart: {
              // 改变背景颜色
              backgroundColor:"transparent",
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 60,
                beta: 0,
              },
            },
            // 不同块设置不一样的颜色
            colors:[
              "#FFC1C1",
              "#8A2BE2",
              "#065aab",
              "#066eab",
              "#0682ab",
              "#0696ab",
              "#06a0ab",
              "#32c5e9",
              "#1d9dff",
              "#FFE4C4",
              "#00BFFF",
              "#BFEFFF",
              "#F5FFFA",
              "#96CDCD",
              "#E6E6FA"
            ],
            title: {
              text: ''
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 40,
                dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style: {
                    fontSize: '21px',  // 这个是改饼状图里面显示的字体
                    color:'#fff',
                }
                }
              }
            },
            series: [{
              type: 'pie',
              data: industryArrs,
            }]
          });
        })
      },86400000)  // 每隔 1 天刷新一次
    },
    // 定时轮播
    lunbo(){
      window.addEventListener('load',function() {
        var lpboArea1 = document.querySelector(".lpboArea1")
        var first_li = lpboArea1.children[0].cloneNode(true);
        lpboArea1.appendChild(first_li);
        var num = 0;
        var circle = 1;
        var timmer = setInterval(function(){
          if(num >= 2) {
            lpboArea1.style.left = 0
            num = 0
          } 
          num ++;
          var mm = num * 825;
          animate(lpboArea1,-mm)  
          if(circle >= 2){
            circle = 0
          }
          $(".ProductsAndTrends a").eq(circle).addClass("active1");
          $(".ProductsAndTrends a").eq(circle).siblings().removeClass("active1");
          circle ++;
        },8000)
        // ------------------------------------------------
        var lpboArea2 = document.querySelector(".lpboArea2")
        var num2 = 0;
        var circle2 = 1;
        var timmer2 = setInterval(function(){
          if(num2 >= 2) {
            lpboArea2.style.left = 0
            num2 = 0
          } 
          num2 ++;
          var mm2 = num2 * 825;
          animate(lpboArea2,-mm2)  
          if(circle2 >= 2){
            circle2 = 0
          }
          $(".IndustryAndScale a").eq(circle2).addClass("active2");
          $(".IndustryAndScale a").eq(circle2).siblings().removeClass("active2");
          circle2 ++;
        },10000)
      })
    },
    // 数读嘉明
    uudujwmy(){
      // var uuduurl = 'http://jiaming.vm68.suncoolnet.cn/api/manage/company/amount'
      // axios.post(uuduurl).then(function (res) {
      company_amount().then(function (res) {
        const FourValues = res.data.data;
        let chanzhi = (FourValues.chanzhi/10000).toFixed(2)
        let lirun = (FourValues.lirun/10000).toFixed(2)
        let nashui = (FourValues.nashui/10000).toFixed(2)
        let yingyee = (FourValues.yingyee/10000).toFixed(2)
        document.querySelector(".firstdetailsOneValue span").innerHTML = yingyee
        document.querySelector(".firstdetailsTwoValue span").innerHTML = nashui
        document.querySelector(".seconddetailsOneValue span").innerHTML = lirun
        document.querySelector(".seconddetailsTwoValue span").innerHTML = chanzhi
      })
      // 数读嘉明
      setInterval(() => {
        // var uuduurl = 'http://jiaming.vm68.suncoolnet.cn/api/manage/company/amount'
        // axios.post(uuduurl).then(function (res) {
        company_amount().then(function (res) {
          const FourValues = res.data.data;
          let chanzhi = (FourValues.chanzhi/10000).toFixed(2)
          let lirun = (FourValues.lirun/10000).toFixed(2)
          let nashui = (FourValues.nashui/10000).toFixed(2)
          let yingyee = (FourValues.yingyee/10000).toFixed(2)
          document.querySelector(".firstdetailsOneValue span").innerHTML = yingyee
          document.querySelector(".firstdetailsTwoValue span").innerHTML = nashui
          document.querySelector(".seconddetailsOneValue span").innerHTML = lirun
          document.querySelector(".seconddetailsTwoValue span").innerHTML = chanzhi
        })
      },86400000)  // 1 天刷新一次
    },
    // 明星企业
    roll(t) {
      // ul1 就是 id 为 comment1 的 ul 标签
      // var ul1 = document.querySelector("#comment1");
      // // ul2 就是 id 为 comment2 的 ul 标签
      // var ul2 = document.querySelector("#comment2");
      // ulbox 是 div 标签
      var ulbox = document.querySelector(".famousEnterpriseListContent");
      // ul2 标签中的内容（innerHTML） 和 ul1 标签中的内容（innerHTML）一样
      /* 
      思考一下，为什么这里要创建一个里面的内容完全和 ul1 一样的 ul2 呢？
      解答：其实是这样的，为了防止滚动高度突然变零，会造成突然性的跳转，这里创建一个 ul2，滚动效果会更加的丝滑
      */
      // ul2.innerHTML = ul1.innerHTML;
      // scrollTop 表示滚动的高度，这里表示 ulbox 盒子最开始的时候滚动的高度为 0，也就是没有滚动
      ulbox.scrollTop = 0;
      // 调用 rollStart() 方法
      this.rollStart(t);
    },
    rollStart(t) {
      // ul1 就是 id 为 comment1 的 ul 标签
      let ul1 = document.querySelector("#comment1");
      // ul2 就是 id 为 comment2 的 ul 标签
      let ul2 = document.querySelector("#comment2");
      ul2.innerHTML = ul1.innerHTML;
      // ulbox 是 div 标签
      let ulbox = document.querySelector(".famousEnterpriseListContent");
      // 调用 rollStop() 方法，新建定时器之前，一定要先清除一下定时器
      this.rollStop();
      /*
      定义一个初始值为 0 的变量 i；在定时器中，让 i 不停的自增，并且将 i 的值赋值给 ulbox.scrollTop，
      来实现滚动的效果
      */ 
      let i = 0;
      // 执行定时器
      this.timer2 = setInterval(()=>{
        // 当滚动高度大于等于列表内容高度时恢复为 0，这里的 ul1.scrollHeight 的值是固定的，为 220px
        if (i >= ul1.scrollHeight) {
          i = 0;
        } else {
          // 当滚动的高度小于列表内容高度的时候，ulbox 盒子滚动的高度每隔 t 毫秒时，+1
          ulbox.scrollTop = i++;
        }
      }, t);
    },
    // rollStop() 方法 -> 清除定时器，停止滚动
    rollStop(){
      clearInterval(this.timer2);
    },
    // 给明星企业渲染数据
    myxyqiye(){
      // var myxyqiyeUrl='http://jiaming.vm68.suncoolnet.cn/api/manage/company/contrast'
      // axios.post(myxyqiyeUrl).then(function (res) {
      company_contrast().then(function (res) {
        var myxyList = res.data.data;
        // $("#comment1").html("")
        console.log(document.querySelectorAll("#comment1 li"))
        for(let i=0;i<myxyList.length;i++) {
          const myxyIndex = i + 1;
          document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[0].innerHTML = myxyIndex
          document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[1].innerHTML = myxyList[i].id.title
          document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[2].innerHTML = myxyList[i].count.toFixed(1)
          document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[3].innerHTML = myxyList[i].contrast.toFixed(1)
          // var lis = $("<li><span>"+myxyIndex+"</span><span>"+myxyList[i].id.title+"</span><span>"+(myxyList[i].count).toFixed(1)+"</span><span>"+(myxyList[i].contrast).toFixed(1)+"</span></li>")
          // $("#comment1").append(lis);
        }
        // ul1 就是 id 为 comment1 的 ul 标签
        var ul1 = document.querySelector("#comment1");
        // ul2 就是 id 为 comment2 的 ul 标签
        var ul2 = document.querySelector("#comment2");
        // ulbox 是 div 标签
        // var ulbox = document.querySelector(".famousEnterpriseListContent");
        // ul2 标签中的内容（innerHTML） 和 ul1 标签中的内容（innerHTML）一样
        /* 
        思考一下，为什么这里要创建一个里面的内容完全和 ul1 一样的 ul2 呢？
        解答：其实是这样的，为了防止滚动高度突然变零，会造成突然性的跳转，这里创建一个 ul2，滚动效果会更加的丝滑
        */
        ul2.innerHTML = ul1.innerHTML;
        // scrollTop 表示滚动的高度，这里表示 ulbox 盒子最开始的时候滚动的高度为 0，也就是没有滚动
      })
      // 一天更新一次
      setInterval(() => {
        company_contrast().then(function (res) {
          var myxyList = res.data.data;
          // $("#comment1").html("")
          console.log(document.querySelectorAll("#comment1 li"))
          for(let i=0;i<myxyList.length;i++) {
            const myxyIndex = i + 1;
            document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[0].innerHTML = myxyIndex
            document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[1].innerHTML = myxyList[i].id.title
            document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[2].innerHTML = myxyList[i].count.toFixed(1)
            document.querySelectorAll("#comment1 li")[i].querySelectorAll("span")[3].innerHTML = myxyList[i].contrast.toFixed(1)
            // var lis = $("<li><span>"+myxyIndex+"</span><span>"+myxyList[i].id.title+"</span><span>"+(myxyList[i].count).toFixed(1)+"</span><span>"+(myxyList[i].contrast).toFixed(1)+"</span></li>")
            // $("#comment1").append(lis);
          }
          // ul1 就是 id 为 comment1 的 ul 标签
          var ul1 = document.querySelector("#comment1");
          // ul2 就是 id 为 comment2 的 ul 标签
          var ul2 = document.querySelector("#comment2");
          // ulbox 是 div 标签
          // var ulbox = document.querySelector(".famousEnterpriseListContent");
          // ul2 标签中的内容（innerHTML） 和 ul1 标签中的内容（innerHTML）一样
          /* 
          思考一下，为什么这里要创建一个里面的内容完全和 ul1 一样的 ul2 呢？
          解答：其实是这样的，为了防止滚动高度突然变零，会造成突然性的跳转，这里创建一个 ul2，滚动效果会更加的丝滑
          */
          ul2.innerHTML = ul1.innerHTML;
          // scrollTop 表示滚动的高度，这里表示 ulbox 盒子最开始的时候滚动的高度为 0，也就是没有滚动
        })
      },86400000)
    },
    // 地图区域
    dituArea(){
      // GL 版命名空间为 BMapGL
      // 按住鼠标右键，修改倾斜角和角度
      var map = new BMapGL.Map("mapDetails");  // 创建 Map 实例，这里的 mapDetails 必须是 id
      map.centerAndZoom(new BMapGL.Point(115.98,36.45), 14);  // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true);  // 开启鼠标滚轮缩放
      map.setHeading(-10);  // 角度
      map.setTilt(50);  // 倾斜角，让地图看起来不再是 2d 的，有一个角度，看起来更加的立体
      let imgBlue = require("./imgs/myIcon1.png")
      let imgRedBig = require("./imgs/myIcon2.png")
      var myIcon1 = new BMapGL.Icon(imgBlue, new BMapGL.Size(36,36));
      var myIcon2 = new BMapGL.Icon(imgRedBig, new BMapGL.Size(128,128));
      // var addressUrl = 'http://jiaming.vm68.suncoolnet.cn/api/company/address'
      var addressArr = []
      var addressArrTrue = []
      // axios.post(addressUrl).then(function (res) {
      address().then(function (res) {
        addressArr = res.data.data
        for(let i=0;i<addressArr.length;i++) {
          if(addressArr[i].longitude !== "None" && addressArr[i].latitude !== "None" && addressArr[i].manage) {
            map.addOverlay(new BMapGL.Marker(new BMapGL.Point(addressArr[i].longitude,addressArr[i].latitude),{icon:myIcon1}));
            addressArrTrue.push(addressArr[i])
            // map.addOverlay(new BMapGL.Marker(new BMapGL.Point(addressArr[i].longitude,addressArr[i].latitude)));
            // addressArrTrue.push(addressArr[i])
          }
        }
        // 最开始的时候，添加一个 myIcon2，这样会好看一点
        map.addOverlay(new BMapGL.Marker(new BMapGL.Point(115.94468830576,36.508679401652),{icon:myIcon2}));
        let addressIndex = 0;
        setInterval(() => {
          // 清除自定义标记 1. 获取所有标记，遍历清除所有
          var allOverlay = map.getOverlays();
          for(let j=0;j<allOverlay.length;j++) {
            map.removeOverlay(allOverlay[j]);
          }
          // 添加自定义标记，遍历添加（除了 i == addressIndex 的点）
          for(let i=0;i<addressArrTrue.length;i++) {
            if(i == addressIndex) {  // 如果 i == addressIndex 的话，就不添加这个标记（这个点会做特殊样式，在下面添加）；否则添加（样式为原始样式）
            } else {
              map.addOverlay(new BMapGL.Marker(new BMapGL.Point(addressArrTrue[i].longitude,addressArrTrue[i].latitude),{icon:myIcon1}));
            }
          }
          if(addressIndex >= addressArrTrue.length) {
            addressIndex = 0;
          } else {
            var marker = new BMapGL.Marker(new BMapGL.Point(addressArrTrue[addressIndex].longitude,addressArrTrue[addressIndex].latitude),{icon:myIcon2})
            map.addOverlay(marker);
            var addressArrTrueDate = []
            var addressArrTureYyYee = []
            var addressArrTureNaShui = []
            var addressArrTrueItem = addressArrTrue[addressIndex];
            for(let j=0;j<addressArrTrueItem.nashui.length;j++) {
              addressArrTrueDate.push(addressArrTrueItem.nashui[j]._id)
            }
            for(let j=0;j<addressArrTrueItem.nashui.length;j++) {
              addressArrTureNaShui.push((addressArrTrueItem.nashui[j].count).toFixed(1))
            }
            for(let j=0;j<addressArrTrueItem.yingyee.length;j++) {
              addressArrTureYyYee.push((addressArrTrueItem.yingyee[j].count).toFixed(1))
            }
            document.querySelector(".enterpriseName").innerHTML = addressArrTrueItem.title;
            addressArrTrueDate = addressArrTrueDate?addressArrTrueDate:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
            addressArrTureYyYee = addressArrTureYyYee?addressArrTureYyYee:[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120];
            addressArrTureNaShui = addressArrTureNaShui?addressArrTureNaShui:[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79];
            // 实例化对象
            let myChart = echarts.init(document.querySelector(".enterpriseDetailsPrompt .listDetails"));
            // 指定配置和数据
            let option = {
              color: ["#00f2f1", "#ed3f35"],
              tooltip: {
                trigger: "axis",
              },
              legend: {
                textStyle: {
                  color: "#4c9bfd", // 图例文字颜色
                },
                right: "10%", // 距离右边10%
              },
              grid: {
                top: "5%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                show: true, // 显示边框
                borderColor: "#012f4a55", // 边框颜色
                containLabel: true, // 包含刻度文字在内
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: addressArrTrueDate,
                axisTick: {
                  show: false, // 去除刻度线
                },
                axisLabel: {
                  color: "#4c9bfd", // 文本颜色
                  rotate: 60,
                },
                axisLine: {
                  show: false, // 去除轴线
                },
                boundaryGap: false, // 去除轴内间距
              },
              yAxis: {
                type: "value",
                axisTick: {
                  show: false, // 去除刻度
                },
                axisLabel: {
                  color: "#4c9bfd", // 文字颜色
                },
                splitLine: {
                  lineStyle: {
                    color: "#ffffff33", // 分割线颜色
                  },
                },
              },
              series: [
                {
                  // name: "营业额",
                  type: "line",
                  data: addressArrTureYyYee,
                  smooth: true,
                },
              ],
            };
            // 把配置给实例对象
            myChart.setOption(option);
            // 让图表自适应屏幕
            window.addEventListener("resize", function () {
              myChart.resize();
            });
          }
          addressIndex++
        },5000)
      })

      // 自定义地图样式
      var myStyleJson2 = [{
        "featureType": "background",
        "elementType": "geometry",
        "stylers": {
            "color": "#020737ff",
            "visibility": "on"
        }
      }, {
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#020737ff"
        }
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#113549ff"
        }
      }, {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#0e1b30ff"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry.topfill",
        "stylers": {
            "color": "#113549ff"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry.sidefill",
        "stylers": {
            "color": "#143e56ff"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#dadada00"
        }
      }, {
        "featureType": "subwaystation",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#113549B2"
        }
      }, {
        "featureType": "education",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#12223dff"
        }
      }, {
        "featureType": "medical",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#12223dff"
        }
      }, {
        "featureType": "scenicspots",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "color": "#12223dff"
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "weight": 4
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#fed66900"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "weight": 2
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffeebb00"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on",
            "weight": 1
        }
      }, {
        "featureType": "local",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "local",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "local",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "local",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#979c9aff"
        }
      }, {
        "featureType": "local",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff"
        }
      }, {
        "featureType": "railway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "weight": 1
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#d8d8d8ff"
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#979c9aff"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "city",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "town",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#454d50ff"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "districtlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "district",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "manmade",
        "elementType": "geometry",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff"
        }
      }, {
        "featureType": "entertainment",
        "elementType": "geometry",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "shopping",
        "elementType": "geometry",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
      }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
      }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
      }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
      }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
      }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
      }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
      }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
      }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
      }, {
        "featureType": "subwaylabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "subwaylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "provincialwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "provincialwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "nationalwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "nationalwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "highwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "highwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "village",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "district",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 20
        }
      }, {
        "featureType": "district",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "district",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "country",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "country",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff10"
        }
      }, {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "provincialway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 20
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "nationalway",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 20
        }
      }, {
        "featureType": "provincialway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "provincialway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "provincialway",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 20
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 20
        }
      }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "estate",
        "elementType": "geometry",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "scenicspotsway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "scenicspotsway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "universityway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "universityway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "vacationway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "vacationway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "fourlevelway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#12223dff"
        }
      }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "transportationlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "transportationlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "transportationlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "transportationlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "educationlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
      }, {
        "featureType": "educationlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "educationlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "educationlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "transportation",
        "elementType": "geometry",
        "stylers": {
            "color": "#113549ff"
        }
      }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "medicallabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "medicallabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "medicallabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "airportlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "estatelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "estatelabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "estatelabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "companylabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "companylabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "companylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "governmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "governmentlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "governmentlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "restaurantlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "restaurantlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "restaurantlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "hotellabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "hotellabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "hotellabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "shoppinglabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "shoppinglabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "shoppinglabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "carservicelabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "carservicelabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "carservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "financelabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "financelabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "financelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "otherlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "otherlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "otherlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
      }, {
        "featureType": "manmade",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "manmade",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "transportation",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "transportation",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "education",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "education",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "medical",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "medical",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }, {
        "featureType": "scenicspots",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2dc4bbff"
        }
      }, {
        "featureType": "scenicspots",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
      }]
      map.setMapStyleV2({
        styleJson: myStyleJson2
      });
    },
    // 企业提示框（只是一开始的时候加载一次）
    qiyetiui() {
      // 实例化对象
      let myChart = echarts.init(document.querySelector(".enterpriseDetailsPrompt .listDetails"));
      // 指定配置和数据
      let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            color: "#4c9bfd", // 图例文字颜色
          },
          right: "10%", // 距离右边10%
        },
        grid: {
          top: "5%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a55", // 边框颜色
          containLabel: true, // 包含刻度文字在内
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
          axisTick: {
            show: false, // 去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd", // 文本颜色
            rotate: 60,
          },
          axisLine: {
            show: false, // 去除轴线
          },
          boundaryGap: false, // 去除轴内间距
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false, // 去除刻度
          },
          axisLabel: {
            color: "#4c9bfd", // 文字颜色
          },
          splitLine: {
            lineStyle: {
              color: "#ffffff33", // 分割线颜色
            },
          },
        },
        series: [
          {
            // name: "营业额",
            type: "line",
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            smooth: true,
          },
        ],
      };
      // 把配置给实例对象
      myChart.setOption(option);
      // 让图表自适应屏幕
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  }
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  #map img {
    max-width: inherit;
  }
  /* 主题内容区域 */
  .mainor {
    width: 6656px;
    height: 1536px;
    background-color: #020737;
    overflow: hidden !important;
  }
  /* 主题区域头部 */
  .mainor .top {
    width: 100%;
    height: 247px;
    background-image: url(./imgs/TOP.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .mainor .contentes {
    /* 采用 flex 布局 */
    display: flex;
    margin: -31px 126px 0 86.38px;
    justify-content: space-between;
  }
  /* 内容第一部分 */
  .contentOne {
    width: 810px;
    height: 1225px;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow: hidden;
  }
  /* 第一部分日期和星期几区域 */
  .contentOne .timeAndDate {
    margin: 42px 155px 0 165px;
    width: 482px;
    height: 41px;
    line-height: 41px;
    /* background: pink; */
    color: #fff;
    font-size: 41px;
  }
  .contentOne .timeAndDate .date {
    float: left;
  }
  .contentOne .timeAndDate .week {
    float: right;
  }
  /* 第一部分时间区域 */
  .contentOne .timer {
    margin: 52px auto 0;
    width: 347px;
    height: 64px;
    /* background: pink; */
    text-align: center;
    font-size: 84px;
    line-height: 64px;
    font-family: IdeaFonts;
    color: #fff;
    text-shadow: #2d69e3 -3px -3px 8px, #2d69e3 3px 3px 8px;
  }
  /* 第一部分温度区域 */
  .contentOne .temperature {
    width: 723px;
    height: 161px;
    margin: 67px auto 0;
    /* background: pink; */
    background-image: url(./imgs/temperature.png);
    background-size: 100%;
    /* overflow: hidden 用于清除盒子擦边 */
    overflow: hidden;
    font-size: 44px;
    color: #c0e0e9;
  }
  .contentOne .temperature iframe {
    font-size: 44px;
  }
  .contentOne .temperature .weather {
    float: left;
    width: 126px;
    height: 128px;
    line-height: 128px;
    text-align: center;
    margin: 21px 0 12px 45px;
    background-image: url('../../assets/weatherIcon/qing.png');
    background-size: 100%;
  }
  .contentOne .temperature .title {
    float: left;
    width: 126px;
    height: 128px;
    margin: 21px 0 12px 80px;
  }
  .contentOne .temperature .title .chineseTitle {
    display: inline-block;
    padding: 5px 0 0 0;
    font-size: 44px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #00c7ff;
  }
  .contentOne .temperature .title .englishTitle {
    font-size: 34px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
  }
  .contentOne .temperature .temperatureNum {
    float: right;
    margin: 54px 49px 46px 0;
    width: 166px;
    height: 61px;
    line-height: 61px;
    font-size: 76px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    text-align: left;
    color: #00c7ff;
  }
  /* 值班列表区域 */
  .contentOne .watchList {
    width: 722px;
    height: 688px;
    background-image: url(./imgs/watchListBackground.png);
    background-size: 100%;
    margin: 47px auto 0;
  }
  /* 值班列表标题 */
  .contentOne .watchList .watchListTitle {
    width: 100%;
    height: 106px;
    margin: 44px 0 0 0;
    /* background: pink; */
    background-image: url(./imgs/watchListTitle.png);
    background-size: 100% 106px;
    background-repeat: no-repeat;
  }
  /* 值班列表内容区域第一行 */
  .contentOne .watchList .watchListHead {
    width: 634px;
    height: 57px;
    margin: 0 auto;
    /* background: deeppink; */
  }
  .contentOne .watchList .watchListHead ul {
    width: 100%;
  }
  .contentOne .watchList .watchListHead ul li {
    width: 100%;
    height: 60px;
  }
  .contentOne .watchList .watchListHead ul li span {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    font-size: 27px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    letter-spacing: 2.54px;
    font-weight: 700;
    color: #60c7fa;
  }
  /* 第一行第一列宽度为 30% 居中显示 */
  .contentOne .watchList .watchListHead ul li span:nth-child(1) {
    width: 30%;
    text-align: center;
  }
  /* 第一行第二列宽度为 30% 居中显示 */
  .contentOne .watchList .watchListHead ul li span:nth-child(2) {
    width: 30%;
    text-align: center;
  }
  /* 第一行第三列宽度为 38% 默认居左显示 */
  .contentOne .watchList .watchListHead ul li span:nth-child(3) {
    width: 38%;
  }
  /* 值班列表内容区域 */
  .contentOne .watchList .watchListContent {
    width: 634px;
    height: 480px;
    margin: 0 auto;
    /* background: pink; */
    overflow: hidden;
  }
  .contentOne .watchList .watchListContent ul {
    width: 100%;
  }
  .contentOne .watchList .watchListContent ul li {
    width: 100%;
    height: 60px;
  }
  /* 序号为偶数的 li 标签背景颜色不一样 */
  .contentOne .watchList .watchListContent ul li:nth-child(2n+1) {
    background: #0a2152;
  }
  .contentOne .watchList .watchListContent ul li span {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    font-size: 27px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 2.54px;
  }
  /* 第一列宽度为 30% 居中显示 */
  .contentOne .watchList .watchListContent ul li span:nth-child(1) {
    width: 30%;
    text-align: center;
  }
  /* 第二列宽度为 30% 居中显示 */
  .contentOne .watchList .watchListContent ul li span:nth-child(2) {
    width: 30%;
    text-align: center;
  }
  /* 第三列宽度为 38% 默认居左显示 */
  .contentOne .watchList .watchListContent ul li span:nth-child(3) {
    width: 38%;
  }

  /* 内容第二部分 */
  .contentTwo {
    width: 825px;
    height: 1225px;
    /* 
    background: #020D45;
    border: 1px solid #96a9f9;  
    */
  }
  /* 内容区域第二部分的上半部分 */
  /* 产品走势&能耗走势 */
  .contentTwo .detailsOne {
    width: 100%;
    height: 583px;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow: hidden;
    position: relative;
  }
  /* 上半部分的标签栏区域 */
  .contentTwo .detailsOne .detailsOneTitle {
    width: 761px;
    height: 26px;
    margin: 56px auto 0;
    background-image: url(./imgs/splitLine.png);
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: pink; */
    position: relative;
  }
  .contentTwo .detailsOne .detailsOneTitle div {
    position: absolute;
    top: -20px;
    width: 500px;
    height: 50px;
    /* background: pink; */
  }
  .contentTwo .detailsOne .detailsOneTitle div a {
    display: inline-block;
    font-size: 19px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 4px;
  }
  /* 就是说默认情况下，a 标签中的 icons 是不显示的 */
  .contentTwo .detailsOne .detailsOneTitle div a .icons {
    display: none;
  }
  .contentTwo .detailsOne .detailsOneTitle div .active1 {
    font-size: 25px !important;
    color: #fff;
    margin: 0 15px 0 10px;
  }
  /* active 是变化的（同一时间 active 类只能加在一个 a 标签上面，30s 循环一次） */
  .contentTwo .detailsOne .detailsOneTitle div .active1 .icons {
    display: inline-block;
    left: 0px;
    width: 40px;
    height: 38px;
    background-size: 100%;
    margin-bottom: -6px;
  }
  /* 这里分别再定义类 icons1 和 icons2，是因为两个 icons 要展示的图标可能不一样 */
  .contentTwo .detailsOne .detailsOneTitle div .active1 .icons1 {
    background-image: url(./imgs/Icon1.png);
  }
  .contentTwo .detailsOne .detailsOneTitle div .active1 .icons2 {
    background-image: url(./imgs/Icon1.png);
  }
  /* 上半部分的内容（轮播图区域） */
  .contentTwo .detailsOne .lpboArea1 {
    width: 400%;
    height: 460px;
    /* background: pink; */
    margin-top: 30px;
    position: absolute;
    left: 0;
  }
  /* 上半部分的内容（轮播图区域）第一个图表 */
  .contentTwo .detailsOne .lpboArea1 .detailsOneContentOne {
    width: 721px;
    height: 460px;
    /* background: pink; */
    margin: 0 52px;
    float: left;
  }
  /* 上半部分的内容（轮播图区域）第二个图表 */
  .contentTwo .detailsOne .lpboArea1 .detailsOneContentTwo {
    width: 721px;
    height: 460px;
    /* background: pink; */
    margin: 0 52px;
    float: left;
  }
  /* 上半部分的内容（轮播图区域）第三个图表（和第一个图表完全一样，为了轮播相当于复制了一下） */
  .contentTwo .detailsOne .lpboArea1 .detailsOneContentThree {
    width: 721px;
    height: 460px;
    /* background: pink; */
    margin: 0 52px;
    float: left;
  }
  /* 上半部分数据块 */
  .contentTwo .detailsOne .dataBlock {
    display: flex;
    width: 720px;
    height: 55px;
    line-height: 55px;
    justify-content: space-between;
    /* background: pink; */
    margin: 0 auto;
  }
  .contentTwo .detailsOne .dataBlock span {
    width: 100px;
    text-align: center;
    background: #0c2478;
    color: #fff;
    font-size: 27px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #47eaf8;
    border-radius: 5px;
  }
  /* 最新的数据块颜色不一样 */
  .contentTwo .detailsOne .dataBlock .active {
    background: #80e7f5;
    color: #011753;
  }


  /* 内容区域第二部分的下半部分 */
  /* 行业分布&规模分布 */
  .contentTwo .detailsTwo {
    margin: 60px 0 0 0;
    width: 100%;
    height: 582px;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow: hidden;
    position: relative;
  }
  .contentTwo .detailsTwo .detailsTwoTitle {
    /* 子绝父相 */
    position: relative;
    width: 761px;
    height: 26px;
    margin: 56px auto 0;
    background-image: url(./imgs/splitLine.png);
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: pink; */
  }
  .contentTwo .detailsTwo .detailsTwoTitle div {
    position: absolute;
    top: -20px;
  }
  .contentTwo .detailsTwo .detailsTwoTitle div a {
    display: inline-block;
    font-size: 19px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 4px;
  }
  /* 就是说默认情况下，a 标签中的 icons 是不显示的 */
  .contentTwo .detailsOne .detailsOneTitle div a .icons {
    display: none;
  }
  .contentTwo .detailsTwo .detailsTwoTitle div .active2 {
    font-size: 25px !important;
    color: #fff;
    margin: 0 15px 0 10px;
  }
  /* active 是变化的（同一时间 active 类只能加在一个 a 标签上面，30s 循环一次） */
  .contentTwo .detailsTwo .detailsTwoTitle div .active2 .icons {
    display: inline-block;
    left: 0px;
    width: 40px;
    height: 38px;
    background-size: 100%;
    margin-bottom: -6px;
  }
  /* 这里分别再定义类 icons1 和 icons2，是因为两个 icons 要展示的图标可能不一样 */
  .contentTwo .detailsTwo .detailsTwoTitle div .active2 .icons1 {
    background-image: url(./imgs/Icon1.png);
  }
  .contentTwo .detailsTwo .detailsTwoTitle div .active2 .icons2 {
    background-image: url(./imgs/Icon1.png);
  }
  /* 下半部分的内容（轮播图区域） */
  .contentTwo .detailsTwo .lpboArea2 {
    width: 400%;
    height: 480px;
    /* background: pink; */
    position: absolute;
    left: 0;
  }
  .contentTwo .detailsTwo .detailsTwoContentOne {
    float: left;
    width: 721px;
    height: 480px;
    /* background: pink; */
    margin: 0 52px;
  }
  .contentTwo .detailsTwo .detailsTwoContentTwo {
    float: left;
    width: 721px;
    height: 480px;
    /* background: pink; */
    margin: 0 52px;
  }
  .contentTwo .detailsTwo .detailsTwoContentThree {
    float: left;
    width: 721px;
    height: 480px;
    /* background: pink; */
    margin: 0 52px;
  }

  /* 地图区域 */
  .contentThree {
    /* 子绝父相 */
    position: relative;
    width: 2960px;
    height: 1225px;
    /* background: #020D45; */
    background-image: url(./imgs/mapbc.png);
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  /* mapDetails 是真正的地图盒子 */
  .contentThree .mapDetails {
    width: 2850px;
    height: 1060px;
    margin: 50px auto;
    /* background: pink; */
    background-image: url(./imgs/Snipaste_2022-11-08_13-52-01.png);
    /* width: 100%; */
    /* height: 100%; */
    background-size: 100%;
    background-position: center,center;
    background-repeat: no-repeat;
    border-radius: 0;
    border-radius: 100px;
    box-shadow: #020737 0 0 10px;
    overflow: hidden;
  }
  /* 企业的详情提示框 */
  .contentThree .enterpriseDetailsPrompt {
    position: absolute;
    bottom: 200px;
    left: 240px;
    width: 500px;
    height: 500px;
    background-image: url(./imgs/promptBoxBc.png);
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 999;
  }
  .contentThree .enterpriseDetailsPrompt .logoName {
    width: 420px;
    height: 62px;
    line-height: 62px;
    margin: 60px auto 0;
    /* background: deeppink; */
    overflow: hidden;
  }
  .contentThree .enterpriseDetailsPrompt .logoName .logobc {
    float: left;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(./imgs/logs.png);
  }
  .contentThree .enterpriseDetailsPrompt .logoName .enterpriseName {
    float: left;
    width: 338px;
    padding-left: 15px;
    font-size: 24px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #00d4ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* 产值走势 */
  .contentThree .enterpriseDetailsPrompt .listNameLogo {
    width: 420px;
    height: 35px;
    line-height: 35px;
    margin: 27px auto 0;
    /* background: deeppink; */
    font-size: 24px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #00d4ff;
  }
  .contentThree .enterpriseDetailsPrompt .listNameLogo .listName {
    float: left;
  }
  .contentThree .enterpriseDetailsPrompt .listNameLogo .Logo {
    float: left;
    padding-left: 15px;
    width: 56px;
    height: 17px;
    background: url(./imgs/outputTrend.png);
    background-size: 100%;
    margin-top: 9px;
  }
  .listDetails {
    width: 420px;
    height: 220px;
    margin: 15px auto 0;
    /* background: pink; */
  }
  /* 区域四 */
  .contentFour {
    width: 831px;
    height: 1225px;
  }
  /* 区域四的上半部分 */
  .contentFour .detailsOne {
    width: 100%;
    height: 604px;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow: hidden;
  }
  /* 区域四上半部分标签栏区域 */
  /* 数读嘉明 */
  .contentFour .detailsOne .detailsOneTitle {
    /* 子绝父相 */
    position: relative;
    width: 746px;
    height: 26px;
    margin: 64px auto 0;
    background-image: url(./imgs/splitLine.png);
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: pink; */
  }
  .contentFour .detailsOne .detailsOneTitle div {
    position: absolute;
    top: -20px;
    width: 500px;
    height: 60px;
    /* background: pink; */
  }
  .contentFour .detailsOne .detailsOneTitle div .active {
    display: inline-block;
    font-size: 25px !important;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin: 0 0 0 55px;
  }
  .contentFour .detailsOne .detailsOneTitle div .active .icons {
    display: inline-block;
    position: absolute;
    left: 0px;
    width: 40px;
    height: 38px;
    background-image: url(./imgs/Icon1.png);
    background-size: 100%;
    top: -5px;
  }
  /* 区域四上半部分内容区域 */
  .contentFour .detailsOne .detailsOneContent {
    margin: 80px auto 0;
    width: 891px;
    height: 429px;
    /* background: pink; */
  }

  .contentFour .detailsOne .detailsOneContent .first {
    display: flex;
    width: 100%;
    height: 140px;
    /* background: deeppink; */
    justify-content: space-around;
  }
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsOne,
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsTwo
  {
    /* display: inline-block; */
    width: 40%;
    height: 100%;
    /* background: pink; */
    background-image: url(./imgs/polygon.png);
    /* background-size: 170px 166px; */
    background-size: auto 140px;
    background-repeat: no-repeat;
    /* 子绝父相 */
    position: relative;
  }
  /* 园区产值 */
  /* Icon 盒子，里面的 Icon 垂直居中显示 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsOne .firstdetailsOneIconBox {
    width: 135px;
    height: 131px;
    /* background: pink; */
    position: relative;
  }
  /* Icon 图标，是垂直居中显示的 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsOne .firstdetailsOneIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    /* 盒子往上走自己高度的一半，盒子往左走自己宽度的一半 */
    transform: translate(-50%,-50%);
    /* width: 66px; */
    /* height: 76px; */
    /* 由于第一个 icon 和后面三个大小不一样，所以这里的设置的宽和高也不一样 */
    width: 90px;
    height: 80px;
    background-image: url(./imgs/Icon1.png);
    background-size: 100%;
  }
  /* 分类 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsOne .firstdetailsOneclassification {
    position: absolute;
    position: absolute;
    width: 105px;
    height: 30px;
    /* border: 1px solid #85f0f7; */
    text-align: center;
    top: 2px;
    right: -140px;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #ffffff;
  }
  /* 值 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsOne .firstdetailsOneValue {
    position: absolute;
    width: 175px;
    height: 90px;
    line-height: 90px;
    /* border: 1px solid #ffffff; */
    text-align: center;
    bottom: -10px;
    right: -175px;
    font-size: 35px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #ffffff;
  }

  /* 利税 */
  /* Icon 盒子，里面的 Icon 垂直居中显示 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsTwo .firstdetailsTwoIconBox {
    width: 135px;
    height: 131px;
    /* background: pink; */
    position: relative;
  }
  /* Icon 图标，是垂直居中显示的 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsTwo .firstdetailsTwoIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    /* 盒子往上走自己高度的一半，盒子往左走自己宽度的一半 */
    transform: translate(-50%,-50%);
    width: 60px;
    height: 70px;
    background-image: url(./imgs/Icon2.png);
    background-size: 100%;
  }
  /* 分类 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsTwo .firstdetailsTwoclassification {
    position: absolute;
    width: 105px;
    height: 30px;
    /* border: 1px solid #85f0f7; */
    text-align: center;
    top: 2px;
    right: -140px;
    /* left: 180px; */
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #ffffff;
  }
  /* 值 */
  .contentFour .detailsOne .detailsOneContent .first .firstdetailsTwo .firstdetailsTwoValue {
    position: absolute;
    width: 175px;
    height: 90px;
    line-height: 90px;
    /* border: 1px solid #ffffff; */
    text-align: center;
    bottom: -10px;
    right: -175px;
    font-size: 35px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #ffffff;
  }

  /* 数读嘉明的第二部分，包含用工和党员 */
  .contentFour .detailsOne .detailsOneContent .second {
    display: flex;
    width: 100%;
    height: 140px;
    /* background: deeppink; */
    margin-top: 80px;
    justify-content: space-around;
  }
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsOne,
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsTwo
  {
    /* display: inline-block; */
    width: 40%;
    height: 100%;
    /* background: pink; */
    background-image: url(./imgs/polygon.png);
    /* background-size: 170px 166px; */
    background-size: auto 140px;
    background-repeat: no-repeat;
    /* 父绝子相 */
    position: relative;
  }
  /* 用工 */
  /* Icon 盒子，里面的 Icon 垂直居中显示 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsOne .seconddetailsOneIconBox {
    width: 140px;
    height: 155px;
    /* background: pink; */
    position: relative;
  }
  /* Icon 图标，是垂直居中显示的 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsOne .seconddetailsOneIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    /* 盒子往上走自己高度的一半，盒子往左走自己宽度的一半 */
    transform: translate(-50%,-50%);
    width: 60px;
    height: 70px;
    background-image: url(./imgs/Icon3.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  /* 分类 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsOne .seconddetailsOneclassification {
    position: absolute;
    width: 105px;
    height: 30px;
    /* border: 1px solid #85f0f7; */
    text-align: center;
    top: 2px;
    right: -135px;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #ffffff;
  }
  /* 值 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsOne .seconddetailsOneValue {
    position: absolute;
    width: 175px;
    height: 90px;
    line-height: 90px;
    /* border: 1px solid #ffffff; */
    text-align: center;
    bottom: 10px;
    right: -170px;
    font-size: 35px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #ffffff;
  }

  /* 党员 */
  /* Icon 盒子，里面的 Icon 垂直居中显示 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsTwo .seconddetailsTwoIconBox {
    width: 135px;
    height: 155px;
    /* background: pink; */
    position: relative;
  }
  /* Icon 图标，是垂直居中显示的 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsTwo .seconddetailsTwoIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    /* 盒子往上走自己高度的一半，盒子往左走自己宽度的一半 */
    transform: translate(-50%,-50%);
    width: 60px;
    height: 70px;
    background-image: url(./imgs/Icon4.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  /* 分类 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsTwo .seconddetailsTwoclassification {
    position: absolute;
    width: 105px;
    height: 30px;
    line-height: 30px;
    /* border: 1px solid #85f0f7; */
    text-align: center;
    top: 2px;
    right: -140px;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #ffffff;
  }
  /* 值 */
  .contentFour .detailsOne .detailsOneContent .second .seconddetailsTwo .seconddetailsTwoValue {
    position: absolute;
    width: 175px;
    height: 90px;
    line-height: 90px;
    /* border: 1px solid #ffffff; */
    text-align: center;
    bottom: 10px;
    right: -175px;
    font-size: 35px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    color: #ffffff;
  }

  /* 区域四的下半部分 */
  /* 明星企业 */
  .contentFour .detailsTwo {
    width: 100%;
    height: 604px;
    margin: 17px 0 0 0;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow: hidden;
  }
  /* 区域四下半部分标签栏区域 */
  .contentFour .detailsTwo .detailsTwoTitle {
    /* 子绝父相 */
    position: relative;
    width: 746px;
    height: 26px;
    margin: 64px auto 0;
    background-image: url(./imgs/splitLine.png);
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: pink; */
  }
  .contentFour .detailsTwo .detailsTwoTitle div {
    position: absolute;
    top: -20px;
  }
  /* .contentFour .detailsTwo .detailsTwoTitle div a {
    display: inline-block;
    font-size: 23px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 0 55px;
  } */
  .contentFour .detailsTwo .detailsTwoTitle div .active {
    display: inline-block;
    font-size: 25px !important;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin: 0 0 0 55px;
  }
  .contentFour .detailsTwo .detailsTwoTitle div .active .icons {
    display: inline-block;
    position: absolute;
    left: 0px;
    width: 45px;
    height: 42px;
    background-image: url(./imgs/Icon1.png);
    background-size: 100%;
    top: -5px;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle {
    width: 730px;
    margin: 36px auto 0;
    /* background: skyblue; */
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul {
    width: 100%;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li {
    width: 100%;
    height: 42px;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li span {
    font-size: 21px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #e95d6a;
    line-height: 42px;
    letter-spacing: 1.92px;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li span:nth-child(1) {
    display: inline-block;
    width: 8%;
    text-align: center;
    font-family: DIN, DIN-Bold;
    font-weight: 700;
    font-style: italic;
    color: #ff5353;
    letter-spacing: 1.92px;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li span:nth-child(2) {
    display: inline-block;
    width: 50%;
    text-align: left;
    font-family: DIN, DIN-Bold;
  }
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li span:nth-child(3) {
    display: inline-block;
    width: 20%;
    text-align: left;
    font-family: DIN, DIN-Bold;
  } 
  .contentFour .detailsTwo .famousEnterpriseListTitle ul li span:nth-child(4) {
    display: inline-block;
    width: 17%;
    text-align: left;
    font-family: DIN, DIN-Bold;
  } 
  .contentFour .detailsTwo .famousEnterpriseListContent {
    width: 730px;
    height: 400px !important;
    overflow: hidden;
    margin: 0 auto;
    /* background: pink; */
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul {
    width: 100%;
    /* height: 100%; */
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul li {
    width: 100%;
    height: 42px;
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul li:nth-child(2n+1) {
    background: #0a2152;
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul li span {
    font-size: 21px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 42px;
    letter-spacing: 1.92px;
    /* 用省略号代替被删除的内容 */
    text-overflow:ellipsis;
    /* 容器是有宽度的，超出后隐藏 */
    overflow:hidden;
    /* 规定段落中的文字不进行换行 */
    white-space:nowrap;
  }
  /* .contentFour .detailsTwo .famousEnterpriseListContent ul li:nth-child(1) span {
    font-size: 26px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    color: #e95d6a;
    line-height: 51px;
    letter-spacing: 1.92px;
  } */
  .contentFour .detailsTwo .famousEnterpriseListContent ul li span:nth-child(1) {
    display: inline-block;
    width: 8%;
    text-align: center;
    font-style: italic;
    color: #ff5353;
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul li span:nth-child(2) {
    display: inline-block;
    width: 50%;
    text-align: left;
  }
  .contentFour .detailsTwo .famousEnterpriseListContent ul li span:nth-child(3) {
    display: inline-block;
    width: 20%;
    text-align: left;
  } 
  .contentFour .detailsTwo .famousEnterpriseListContent ul li span:nth-child(4) {
    display: inline-block;
    width: 17%;
    text-align: left;
  } 

  /* 区域五部分 */
  /* 实时监控 */
  .contentFive {
    width: 824px;
    height: 1225px;
    background: #020D45;
    border: 1px solid #96a9f9;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
  }
  /* 区域五标签栏区域 */
  .contentFive .contentFiveTitle {
    /* 子绝父相 */
    position: relative;
    width: 760px;
    height: 26px;
    margin: 54px auto 0;
    background-image: url(./imgs/splitLine.png);
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: pink; */
  }
  .contentFive .contentFiveTitle div {
    position: absolute;
    top: -20px;
  }
  /* .contentFive .contentFiveTitle div a {
    display: inline-block;
    font-size: 23px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 30px;
  } */
  .contentFive .contentFiveTitle div .active {
    display: inline-block;
    font-size: 25px !important;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin: 0 0 0 55px;
  }
  .contentFive .contentFiveTitle div .active .icons {
    display: inline-block;
    position: absolute;
    left: 0px;
    width: 40px;
    height: 38px;
    background-image: url(./imgs/Icon1.png);
    background-size: 100%;
    top: -5px;
  }
  .contentFive .contentFiveList .contentFiveListVideoes {
    width: 712px;
    height: 400px;
    margin: 49px 56px 0;
  }


  /* 行业分布的样式部分修改 */
  /* 隐藏图标（右上角） */
  .highcharts-button-box {
    display: none;
  }
  .highcharts-button-symbol {
    display: none;
  }
  /* 隐藏 highcharts 图标（右下角） */
  .highcharts-credits {
    display: none;
  }

</style>

<style scoped>
  ul {
    margin-bottom:0px !important;
  }
</style>