<template>
  <div id="rose-chart">
    <div class="rose-chart-title">全国业务分布</div>
    <dv-flyline-chart-enhanced
      :config="config"
      style="width: 80%; height: 100%; margin: auto"
    />
  </div>
</template>

<script>
export default {
  name: "RoseChart",
  data() {
    return {
      option: {},
      config: {
        points: [
          {
            name: "聊城",
            coordinate: [0.75, 0.476],
            icon: {
              src: require("@/assets/img/mapCenterPoint.png"),
              width: 30,
              height: 30,
            },
            text: {
              color: "#673ab7",
              fontSize: 14,
              offset: [-15, 15],
            },
          },
          {
            name: "北京",
            coordinate: [0.75, 0.37],
          },
          {
            name: "大连",
            coordinate: [0.841, 0.398],
            text: {
              offset: [15, -10],
            },
          },
          {
            name: "淄博",
            coordinate: [0.79, 0.458],
            text: {
              offset: [0, -10],
            },
          },
          {
            name: "济南",
            coordinate: [0.775, 0.468],
            text: {
              offset: [10, 15],
            },
          },
          {
            name: "青岛",
            coordinate: [0.825, 0.47],
            text: {
              offset: [20, 5],
            },
          },
          {
            name: "潍坊",
            coordinate: [0.81, 0.458],
            text: {
              offset: [20, -10],
            },
          },
          {
            name: "太原市",
            coordinate: [0.68, 0.451],
            text: {
              offset: [-20, -10],
            },
          },
          {
            name: "肇庆市",
            coordinate: [0.705, 0.85],
            text: {
              offset: [25, 10],
            },
          },
          {
            name: "嘉兴市",
            coordinate: [0.85, 0.643],
            text: {
              offset: [25, 10],
            },
          },
        ],
        lines: [
          {
            source: "北京",
            target: "聊城",
          },
          {
            source: "大连",
            target: "聊城",
          },
          {
            source: "淄博",
            target: "聊城",
          },
          {
            source: "济南",
            target: "聊城",
          },
          {
            source: "青岛",
            target: "聊城",
          },
          {
            source: "潍坊",
            target: "聊城",
          },
          {
            source: "太原市",
            target: "聊城",
          },
          {
            source: "肇庆市",
            target: "聊城",
          },
          {
            source: "嘉兴市",
            target: "聊城",
          },
        ],
        Flyline: {
          show: false,
        },
        icon: {
          show: true,
          src: require("@/assets/img/mapPoint.png"),

        },
        text: {
          show: true,
          color: "#ffffff",
          // fontSize: 14,
          offset: [20, 0],
        },
        flylineColor: "#00aaf0",
        lineWidth: 10,
        bgImgSrc: require("@/assets/img/china.png"),
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less">
#rose-chart {
  width: 60%;
  height: 100%;
  // background-color: rgba(6, 30, 93, 0.5);
  background-color: #00020699;
  border-top: 2px solid #0199d180;
  box-sizing: border-box;

  .rose-chart-title {
    margin: 20px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    position: absolute;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>
