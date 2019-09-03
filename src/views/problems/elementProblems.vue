<template>
  <div class="elementProblems-container">
    <!-- 顶部菜单 -->
    <template class="elementProblems-tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in elementProblemsCatas" :key="item.id" :label="item.title" />
      </el-tabs>
    </template>
    <!-- cssBox列表 -->
    <ul class="elementProblems-item">
      <router-link to="info-detail">
        <li v-for="item in list" :key="item.id">
          <div class="elementProblems-title">
            {{ item.title }}
          </div>
          <div class="elementProblems-summary">
            {{ item.summary }}
          </div>
          <div class="elementProblems-detail">
            <div class="elementProblems-author">
              {{ item.author }}
            </div>
            <div class="elementProblems-publishTime">
              {{ item.publishTime }}
            </div>
          </div>
        </li>
      </router-link>
    </ul>
    <!-- 加载更多 -->
    <el-button type="text">点击加载更多</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeName: 'second',
      elementProblemsCatas: [
        {
          id: 12,
          title: '原生'
        },
        {
          id: 13,
          title: '弹性'
        },
        {
          id: 14,
          title: '动画'
        },
        {
          id: 15,
          title: 'position'
        },
        {
          id: 16,
          title: 'float'
        }
      ],
      list: [
        {
          id: '15',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '16',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '17',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '18',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '19',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '20',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        },
        {
          id: '21',
          title: 'Array.from() 五个超好用的用途',
          summary: '翻译：刘小夕原文链接：https://dmitripavlutin.com/javascript-array-from-applications/因水平有限，',
          publishTime: '2019-08-31',
          author: 'YvetteLau'
        }
      ]

    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.elementProblems-container {
  padding: 40px 45px 20px 50px;
  .elementProblems-item {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
  }
  li {
    padding: 18px 24px;
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    .elementProblems-title {
      text-align: left;
      max-width: 98%;
      color: #3d3d3d;
      display: block;
      line-height: 24px;
      height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 700;
    }
    .elementProblems-summary {
      text-align: left;
      margin-bottom: 4px;
      color: #8a8a8a;
      font-size: 14px;
      line-height: 24px;
    }
    .elementProblems-detail {
      height: 24px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      .elementProblems-author {
        font-size: 13px;
        color: darkgray;
        text-align: left;
      }
      .elementProblems-publishTime {
        font-size: 13px;
        color: darkgray;
        text-align: right;
      }
    }
  }
  el-button {
    float: right;
  }
}

</style>
