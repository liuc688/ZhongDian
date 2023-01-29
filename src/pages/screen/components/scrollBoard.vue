<template>
  <div id="scroll-board">
    <h3>访问趋势图</h3>
    <div id="container1"></div>
    <hr />
    <h3>访问时段图</h3>
    <div id="container2"></div>
  </div>
</template>

<script>
import { Area , Line} from "@antv/g2plot";

export default {
  name: "ScrollBoard",
  data() {
    return {
      data: [],
      data2: [
        { year: "1时", value: 4 },
        { year: "2时", value: 3 },
        { year: "3时", value: 1 },
        { year: "4时", value: 0 },
        { year: "5时", value: 0 },
        { year: "6时", value: 5 },
        { year: "7时", value: 14 },
        { year: "8时", value: 24 },
        { year: "9时", value: 44 },
        { year: "10时", value: 54 },
        { year: "11时", value: 45 },
        { year: "12时", value: 42 },
        { year: "13时", value: 46 },
        { year: "14时", value: 54 },
        { year: "15时", value: 64 },
        { year: "16时", value: 66 },
        { year: "17时", value: 67 },
        { year: "18时", value: 52 },
        { year: "19时", value: 45 },
        { year: "20时", value: 10 },
        { year: "21时", value: 2 },
        { year: "22时", value: 2 },
        { year: "23时", value: 0 },
        { year: "24时", value: 0 },
      ],
      days: "",
    };
  },
  created() {
    for (let i = 1; i < 30; i++) {
      this.data.push({
        year: this.datas(30 - i),
        value: this.sunny(30 - i),
      });
    }
    this.data.push({
      year: this.days,
      value: this.randomExtend(200, 300),
    });
  },
  methods: {
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    },
    datas(num) {
      let n = num;
      let d = new Date();
      let year = d.getFullYear();
      let mon = d.getMonth() + 1;
      let day = d.getDate();
      this.days = year + "/" + mon + "/" + day;
      if (day <= n) {
        if (mon > 1) {
          mon = mon - 1;
        } else {
          year = year - 1;
          mon = 12;
        }
      }
      d.setDate(d.getDate() - n);
      year = d.getFullYear();
      mon = d.getMonth() + 1;
      day = d.getDate();
      let s =
        year +
        "/" +
        (mon < 10 ? "0" + mon : mon) +
        "/" +
        (day < 10 ? "0" + day : day);
      return s;
    },
    sunny(num) {
      let n = num;
      let d = new Date();
      let year = d.getFullYear();
      let mon = d.getMonth() + 1;
      let day = d.getDate();
      if (day <= n) {
        if (mon > 1) {
          mon = mon - 1;
        } else {
          year = year - 1;
          mon = 12;
        }
      }
      d.setDate(d.getDate() - n);
      var s = d.getDay();
      return s == 0 || s == 6
        ? this.randomExtend(50, 120)
        : this.randomExtend(200, 300);
    },
  },
  mounted() {
    const line = new Line("container2", {
      data: this.data2,
      xField: "year",
      yField: "value",
      label: {
        offsetY: -5,
        style: {
          fill: "#fff",
          fontSize: 16,
        },
      },
      color: "#1370fb",
      point: {
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#5B8FF9",
          lineWidth: 2,
        },
      },
      // tooltip: { showMarkers: false },
      tooltip: {
        showMarkers: false,
        showTitle: false,
        formatter: (datum) => {
          return { name: datum.year, value: datum.value };
        },
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: "#000",
            fill: "red",
          },
        },
      },
      interactions: [{ type: "marker-active" }],
    });
    line.render();
    const lines = new Area("container1", {
      data: this.data,
      xField: "year",
      yField: "value",
      label: {
        offsetY: -5,
        style: {
          fill: "#fff",
          // fontSize: 16,
        },
      },
      color: "#1370fb",
      smooth: true,
      point: {
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#5B8FF9",
          lineWidth: 3,
        },
      },
      tooltip: {
        showTitle: false,
        formatter: (datum) => {
          return { name: datum.year, value: datum.value };
        },
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: "#000",
            fill: "red",
          },
        },
      },
      interactions: [{ type: "marker-active" }],
    });
    lines.render();
  },
};
</script>

<style lang="less">
#scroll-board {
  width: 40%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
  // background: #0b1b4c;
  background-color: #00020699;
  border-top: 2px solid #0199d180;
  color: #ffffff;
}
#scroll-board h3 {
  padding: 1px 5px;
  color: #ffffff;
}
#container2 {
  height: 40%;
}
#container1 {
  height: 40%;
}
</style>
