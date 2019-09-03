<template>
  <div class="commitproblem-container">
    <h1>
      commitproblem
      <hr>
    </h1>
    <!-- 标题 -->
    <div class="commitproblem-title">
      Title
      <el-input v-model="commitproblemData.title" placeholder="...." type="text" maxlength="100" />
    </div>

    <!-- 详细 -->
    <div class="commitproblem-detiles">
      <div class="commitproblem-author">
        <span class="author-label">
          作者
        </span>
        <input v-model="commitproblemData.author" placeholder="...." type="text">
      </div>
      <div class="commitproblem-publishTime">
        <span class="publishTime-label">
          发布时间
        </span>
        <input v-model="commitproblemData.publishTime" placeholder="...." type="text">
      </div>
    </div>

    <!-- markdown编辑区 -->
    <div class="editor-container">
      <el-button type="primary">提交</el-button>
      <markdown-editor v-model="commitproblemData.content" height="800px" />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '../../components/markdownEditer/index'

export default {
  components: { MarkdownEditor },
  data() {
    return {
      commitproblemData: {
        id: 0,
        title: '',
        author: '',
        publishTime: '',
        content: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.commitproblem-container {
  padding: 40px 45px 20px 50px;
  .commitproblem-title {
    padding-bottom: 30px;
    font-size: 20px;
    line-height: 36px;
  }
  .commitproblem-detiles {
    padding-bottom: 30px;
    line-height: 36px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    .commitproblem-author{
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
    .commitproblem-publishTime {
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

