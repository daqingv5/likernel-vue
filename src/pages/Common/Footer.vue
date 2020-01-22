<template>
  <mdb-footer color="blue-gradient" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">关于本站</h5>
          <p>1.本站基于drf+vue开发。</p>
          <p>2.本站发布于2019年12月14日，持续迭代中。</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">友情链接</h5>
          <p>xxx</p>
          <p>xxx</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright   <a href="https://www.likernel.com"> likernel.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';
  export default {
    name: "Footer",
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  };
</script>

<style scoped>

</style>
