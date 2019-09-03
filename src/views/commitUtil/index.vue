<template>
  <div class="commitUtil-container">
    <h1>
      commitUtils
      <hr>
    </h1>

    <!-- 标题 -->
    <div class="commitUtil-title">
      Title
      <el-input v-model="commitUtilData.title" placeholder="...." type="text" maxlength="100" />
    </div>

    <!-- 详细 -->
    <div class="commitUtil-detiles">
      <div class="commitUtil-author">
        <span class="author-label">
          作者
        </span>
        <input v-model="commitUtilData.author" placeholder="...." type="text">
      </div>
      <div class="commitUtil-publishTime">
        <span class="publishTime-label">
          发布时间
        </span>
        <input v-model="commitUtilData.publishTime" placeholder="...." type="text">
      </div>
    </div>

    <!-- markdown编辑区 -->
    <div class="editor-container">
      <el-button type="primary">提交</el-button>
      <markdown-editor v-model="commitUtilData.content" height="800px" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '../../components/markdownEditer/index'

export default {
  components: { MarkdownEditor },
  data() {
    return {
      commitUtilData: {
        id: 0,
        title: 'css工具',
        author: 'jean',
        publishTime: '2019-08-31',
        content: '啦啦啦啦'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.commitUtil-container {
  padding: 40px 45px 20px 50px;
  .commitUtil-title {
    padding-bottom: 30px;
    font-size: 20px;
    line-height: 36px;
  }
  .commitUtil-detiles {
    padding-bottom: 30px;
    line-height: 36px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    .commitUtil-author{
      padding-right: 30px;
      display: inline-block;
        el-input {
          // height: 40px;
          // line-height: 40px;
          // outline: none;
          padding: 0 15px;
          // width: 100px;
          float:left;
        }
    }
    .commitUtil-publishTime {
      padding-right: 30px;
      display: inline-block;
        el-input {
          // height: 40px;
          // line-height: 40px;
          // outline: none;
          padding: 0 15px;
          // width: 100px;
          float: right;
        }
    }
  }
}
.editor-container{
  margin-bottom: 30px;
}
el-button {
  padding-top: 30px;
  float: right;
}
</style>
