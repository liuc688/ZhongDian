<template>
  <div id="digital-flop">
    <div
      class="digital-flop-item"
      v-for="item in digitalFlopData"
      :key="item.title"
    >
      <div class="digital-flop-title">{{ item.title }}</div>
      <div class="digital-flop">
        <a-statistic :valueStyle="{ color: item.color }" :value="item.number" />
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>
    <dv-decoration-10 />
  </div>
</template>

<script>
export default {
  name: "DigitalFlop",
  data() {
    return {
      digitalFlopData: [],
      docnum: 470196,
      visitnum: 7423966,
      todynum: 56932,
      monnum: 1707960,
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.docnum = this.docnum + randomExtend(0, 2);
      this.digitalFlopData = [
        {
          title: "用户数",
          number: 7824,
          color: "#4d99fc",
          unit: "用户",
        },
        {
          title: "站点数",
          number: 2321,
          color: "#f46827",
          unit: "个",
        },
        {
          title: "目录数",
          number: 27677,
          color: "#40faee",
          unit: "个",
        },
        {
          title: "文档数",
          number: this.docnum,
          color: "#4d99fc",
          unit: "份",
        },
        {
          title: "总访问量",
          number: this.visitnum,
          color: "#f46827",
          unit: "次",
        },
        {
          title: "今日访问量",
          number: this.todynum,
          color: "#40faee",
          unit: "次",
        },
        {
          title: "本月访问量",
          number: this.monnum,
          color: "#4d99fc",
          unit: "次",
        },
        {
          title: "服务器数量",
          number: 24,
          color: "#f46827",
          unit: "个",
        },
        {
          title: "主题资源",
          number: 228,
          color: "#40faee",
          unit: "个",
        },
      ];
    },
    createDatas(){
      const { randomExtend } = this;
      var randomnum=randomExtend(0, 2)
      this.visitnum = this.visitnum + randomnum;
      this.todynum = this.todynum + randomnum;
      this.monnum = this.monnum + randomnum;
      this.digitalFlopData = [
        {
          title: "用户数",
          number: 7824,
          color: "#4d99fc",
          unit: "用户",
        },
        {
          title: "站点数",
          number: 2321,
          color: "#f46827",
          unit: "个",
        },
        {
          title: "目录数",
          number: 27677,
          color: "#40faee",
          unit: "个",
        },
        {
          title: "文档数",
          number: this.docnum,
          color: "#4d99fc",
          unit: "份",
        },
        {
          title: "总访问量",
          number: this.visitnum,
          color: "#f46827",
          unit: "次",
        },
        {
          title: "今日访问量",
          number: this.todynum,
          color: "#40faee",
          unit: "次",
        },
        {
          title: "本月访问量",
          number: this.monnum,
          color: "#4d99fc",
          unit: "次",
        },
        {
          title: "服务器数量",
          number: 24,
          color: "#f46827",
          unit: "个",
        },
        {
          title: "主题资源",
          number: 228,
          color: "#40faee",
          unit: "个",
        },
      ];
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    },
  },
  created() {
    const nowDate = new Date("2021-06-01 00:00:00").getTime();
    var nowDate1 = new Date().getTime();
    const dince = parseInt((nowDate1 - nowDate) / 1000);
    // 判断设定基数
    if (dince > 0) {
      this.docnum = parseInt(470196 + parseInt((0.002 * dince).toFixed(0)));
      this.visitnum = parseInt(7423966 + parseInt((0.005 * dince).toFixed(0)));
      this.todynum = parseInt(56932 + parseInt((0.005 * dince).toFixed(0)));
      this.monnum = parseInt(1707960 + parseInt((0.002 * dince).toFixed(0)));
    } else {
      this.docnum = 470196;
      this.visitnum = 7423966;
      this.todynum = 56932;
      this.monnum = 1707960;
    }
  },
  mounted() {
    const { createData ,createDatas} = this;
    createData();
    setInterval(createData, 60000);
    setInterval(createDatas, 2000);
  },
};
</script>

<style lang="less">
#digital-flop {
  position: relative;
  height: 15%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: rgba(6, 30, 93, 0.5);
  background-color: #00020699;

  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }

  .digital-flop-item {
    width: 11%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
  }

  .digital-flop-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .digital-flop {
    display: flex;
  }

  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 5px;
  }
}
</style>
