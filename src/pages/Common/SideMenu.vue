<template>
  <div class="side-menu">
    <ul>
      <li>仪表盘
        <ul>
          <li>概要</li>
          <li>基础设置</li>
        </ul>
      </li>
      <li>文章
        <ul>
          <li>撰写文章</li>
          <li>所有文章</li>
          <li>标签</li>
          <li>分类</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mdbListGroup, mdbListGroupItem } from 'mdbvue';
  export default {
    name: "SideMenu",
    components: {
      mdbListGroup,
      mdbListGroupItem
    }
  };
</script>

<style scoped>
  .side-menu{
    padding-top: 20px;
    padding-left: 5px;
  }
  .menu-content{
    border: white;
  }

</style>
