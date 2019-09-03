<template>
  <div class="comment-box">
    <!-- 评论提交区 -->
    <div class="commit-comment">
      <el-input v-model="textarea" type="textarea" placeholder="请输入内容...不过不能超过130个字" maxlength="130" show-word-limit />
      <el-button type="success" plain>提交评论</el-button>
    </div>

    <!-- 评论列表区 -->
    <div class="comment-list">
      <div v-for="(item, index) in comments" :key="item.id" class="comment-item">
        <div class="comment-title">
          <span>
            第{{ index + 1 }}楼
          </span>
          <span>
            &nbsp;&nbsp; 用户：{{ item.name }}
          </span>
          <span>
            &nbsp;&nbsp; 发表时间：{{ item.time }}
          </span>
        </div>
        <div class="comment-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
      comments: [
        {
          id: 1,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        },
        {
          id: 2,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        },
        {
          id: 3,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        },
        {
          id: 4,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        },
        {
          id: 5,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        },
        {
          id: 6,
          name: '匿名用户',
          time: '2019-09-01',
          content: 'lalala'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-box {
  margin-top: 1px;
    .commit-comment {
      padding: 20px 10px;
    }
    .comment-list {
      padding: 20px 10px;
      height: 24px;
      line-height: 24px;
      .comment-item {
        color: #4d4d4d;
        font-size: 14px;
        margin-left: 0;
        vertical-align: top;
        .comment-title {
          display: flex;
          justify-content: space-between;
          line-height: 30px;
        }
        .comment-body {
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
}
</style>
