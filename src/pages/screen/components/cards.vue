<template>
  <div id="cards">
    <div class="card-item" v-for="card in cards" :key="card.title">
      <div class="card-header">
        <div class="card-header-left">{{ card.title }}</div>
      </div>
      <dv-charts class="ring-charts" :option="card.ring" />
    </div>

    <div class="card-item" >
      <div class="card-header">
        <div class="card-header-left">依申请公开渠道</div>
      </div>
      <dv-active-ring-chart key="依申请公开渠道"
        :config="config" class="ring-charts"
      />
    </div>
    <div class="card-item">
      <div class="card-header">
        <div class="card-header-left">用户活跃度</div>
      </div>
       <dv-decoration-9 style="width:70%; height: 55%;margin: 0 auto">
        <h2 style="color: #04d4ed">79%</h2>
      </dv-decoration-9>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      cards: [],
      config: {
        data: [
          {
            name: "线上",
            value: 31,
          },
          {
            name: "线下",
            value: 69,
          },
        ],
        digitalFlopStyle	:{
          fill:['#13c2c2'],
          fontSize:19
        },
        lineWidth: 25,
        radius: "70%",
        activeRadius: "75%",
        showOriginValue: false,
        color:['#ffdb5c', '#00aaf0']
      }
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.cards = [
        {
          title: "依申请公开答复率",
          total: {
            number: [9000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold",
            },
          },
          num: {
            number: [99.9],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold",
            },
          },
          ring: {
            series: [
              {
                type: "gauge",
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: "80%",
                data: [{ name: "资金占比", value: 100 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: "#224590",
                  },
                },
                details: {
                  show: true,
                  formatter: "占比{value}%",
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ["#03d3ec"],
          },
        },
        {
          title: "督办办结率",
          total: {
            number: [9000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold",
            },
          },
          num: {
            number: [80],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold",
            },
          },
          ring: {
            series: [
              {
                type: "gauge",
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: "80%",
                data: [{ name: "办结率占比", value: 82 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: "#224590",
                  },
                },
                details: {
                  show: true,
                  formatter: "占比{value}%",
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ["#03d3ec"],
          },
        },
        {
          title: "文件关联率",
          total: {
            number: [9000],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#ea6027",
              fontWeight: "bold",
            },
          },
          num: {
            number: [80],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#26fcd8",
              fontWeight: "bold",
            },
          },
          ring: {
            series: [
              {
                type: "gauge",
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: "80%",
                data: [{ name: "延期率占比", value: 87 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: "#224590",
                  },
                },
                details: {
                  show: true,
                  formatter: "占比{value}%",
                  style: {
                    fill: "#1ed3e5",
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ["#03d3ec"],
          },
        }
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
  mounted() {
    const { createData } = this;

    createData();

    setInterval(this.createData, 30000);
  },
};
</script>

<style lang="less">
#cards {
  display: flex;
  justify-content: space-between;
  height: 45%;

  .card-item {
    // background-color: rgba(6, 30, 93, 0.5);
    background-color: #00020699;
    border-top: 2px solid #0199d180;
    width: 19%;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    height: 20%;
    align-items: center;
    justify-content: space-between;

    .card-header-left {
      font-size: 18px;
      font-weight: bold;
      padding-left: 20px;
    }

    .card-header-right {
      padding-right: 20px;
      font-size: 40px;
      color: #03d3ec;
    }
  }

  .ring-charts {
    height: 55%;
  }

  .card-footer {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card-footer-item {
    padding: 5px 10px 0px 10px;
    box-sizing: border-box;
    width: 40%;
    background-color: #061e5db3;
    border-radius: 3px;

    .footer-title {
      font-size: 15px;
      margin-bottom: 5px;
    }

    .footer-detail {
      font-size: 20px;
      color: #1294fb;
      display: flex;
      font-size: 18px;
      align-items: center;

      .dv-digital-flop {
        margin-right: 5px;
      }
    }
  }
}
</style>
