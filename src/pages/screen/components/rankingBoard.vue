<template>
  <div id="ranking-board">
    <div class="ranking-board-title">热门目录</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '政策文件',
            value: 122
          },
          {
            name: '政策解读',
            value: 120
          },
          {
            name: '意见征集',
            value: 78
          },
          {
            name: '财政信息',
            value: 66
          },
          {
            name: '重点领域信息',
            value: 56
          },
          {
            name: '公示公告',
            value: 45
          },
          {
            name: '规划计划',
            value: 29
          },
          {
            name: '双随机一公开',
            value: 29
          },
          {
            name: '重大建设项目',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  }
}
</script>

<style lang="less">
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  // background-color: rgba(6, 30, 93, 0.5);
  background-color: #00020699;
  border-top: 2px solid #0199d180;
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
