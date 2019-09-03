<template>
  <div class="info-content-box">
    <div class="info-detail-title">
      <h1>
        {{ infodata.title }}
      </h1>
      <div class="info-detail-subtitle">
        <span>发表时间 {{ infodata.publishtime }}</span>
        <span>作者 {{ infodata.author }}</span>
      </div>
    </div>
    <div class="info-detail-content">
      {{ infodata.content }}
    </div>
    <comment />
  </div>
</template>

<script>
import comment from '../uitls/comment'

export default {
  components: {
    'comment': comment
  },
  data() {
    return {
      infodata: {
        id: 1,
        title: '阿里工程师',
        publishtime: '2019-09-01',
        author: 'ali',
        content: '导读：我们每天都与代码打交道，但当被问道什么是好的代码时，很多人可能会先愣一下，然后给出的回答要么比较空泛，要么比较散，没办法简单明了地概括出来。显然，这个问题并没有唯一的标准答案，谁都可以谈论自己的理解，今天谈谈我对于好代码的理解。'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .info-content-box {
    // overflow:scroll;
    position: relative;
    padding: 40px 45px 20px 50px;
    background: #fff;
    box-sizing: inherit;

    .info-detail-title {
      border-bottom: 1px solid #e0e0e0;
      padding-top: 16px;
      z-index: 9;
      background-color: #fff;

      .info-detail-subtitle {
        color: #858585;
        width: 88%;
        height: 24px;
        overflow: hidden;
        display: flex;
        justify-content: space-between
      }
    }
    .info-detail-content {
      word-wrap: break-word;
      padding: 20px 10px;
      font-size: 14px;
      color: rgb(38,38,38);
      line-height: 24px;
      letter-spacing: .05em;
    }
  }
</style>
