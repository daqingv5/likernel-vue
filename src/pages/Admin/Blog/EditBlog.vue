<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <SideMenu></SideMenu>
      </div>
      <div class="col-lg-7 main-content">
        <h3>撰写新文章</h3>
        <mdb-input class="title-input" size="lg" type="text" label="标题" outline />
        <mavon-editor class="md-editor" v-model="value"/>
      </div>
      <div class="col-lg-3 article-setting">
        <div class="sub-list">
          <mdb-btn outline="info" darkWaves size="sm">保存草稿</mdb-btn>
          <mdb-btn outline="success" darkWaves size="sm">发布文章</mdb-btn>
        </div>
        <mdb-container class="mt-5 custom-section">
          <h3>文章设置</h3>
          <mdb-tabs
            :active="0"
            default
            :links="[
          { text: '选项' },
          { text: '高级' }]"
            :transition-duration="0.5"
            transition-style="linear"
          >
            <template :slot="'选项'">
              <mdb-container class="base-setting">
                <div class="time-select">
                  <label>发布日期</label>
                  <datetime v-model="date" class="date-pick"></datetime>
                </div>
                <div class="category-select">
                  <label>分类</label>
                  <div class="select-tree">
                    <ul class="category-list">
                      <li><input class="input-item" type="checkbox">大数据
                        <ul>
                          <li><input class="input-item" type="checkbox">HDFS</li>
                        </ul>
                      </li>
                      <li><input class="input-item" type="checkbox">大数据
                        <ul>
                          <li><input class="input-item" type="checkbox">HDFS</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tag-select">
                  <label>标签</label>
                  <input-tag v-model="tags" class="input-tags"></input-tag>
                </div>
                <div class="cover-select">
                  <label>封面</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile" aria-describedby="inputGroupFileAddon">
                      <label class="custom-file-label" for="inputGroupFile">选择封面</label>
                    </div>
                    <div class="input-group-append">
                      <mdb-btn size="md" outline="mdb-color" group>确认</mdb-btn>
                    </div>
                  </div>
                </div>
              </mdb-container>
            </template>
            <template :slot="'Blog'">
              <mdb-container>
                <div>2222</div>
              </mdb-container>
            </template>
          </mdb-tabs>
        </mdb-container>
      </div>
    </div>

  </div>
</template>

<script>
  import SideMenu from "../../Common/SideMenu";
  import { mdbInput,mdbContainer,mdbTabs,mdbBtn } from "mdbvue";

  export default {
    name: "EditBlog",
    components: {
      SideMenu,
      mdbInput,
      mdbContainer,
      mdbTabs,
      mdbBtn
    },
    data () {
      return {
        list: [],
        selectedTags: [
          'tags',
          'selected',
          'by',
          'default',
        ],
        // ALTERNATIVELY
        // selectedTags: 'tags,selected,by,default',
        value: '',
        date: ''
      };
    }
  };
</script>

<style scoped>
  .input-tags{
    border: none;
    margin: 0;
    padding: 0;
  }
  .input-tags >>> .input-tag{
    background-color: #4caf50;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    display: inline-block;
    padding: .25em .4em;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .5rem;
  }
  .input-tags >>> .new-tag{
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .date-pick >>> .vdatetime-input{
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .input-item{
    margin-right: 5px;
  }
  .sub-list{
    padding-top: 50px;
    text-align: center;
  }
  .main-content{
    padding-top: 20px;
  }
  .md-editor{
    height: 800px;
    z-index: 1;
  }
  .title-input{
    width: 100%;
  }
  .article-setting{
    padding-top: 20px;
    padding-right: 30px;
  }
  .base-setting{
    padding-top: 20px;
  }
  .category-select{
    padding-top: 20px;
  }
  .select-tree{
    border: 1px solid #ced4da;
    border-radius: .25rem;
  }
  .category-list{
    padding-top: 20px;
  }
  ul, li{
    list-style: none;
  }
  .tag-select{
    padding-top: 20px;
  }
  .cover-select{
    padding-top: 20px;
  }

</style>
