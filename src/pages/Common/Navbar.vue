<template>
  <mdb-navbar id="main-navbar" dark position="top" color="blue-gradient" scrolling :scrollingOffset="20">
    <mdb-navbar-brand class="brand-logo" to="/" waves style="font-weight: bolder;">
      likernel
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav class="fixed-transparent-navbar" right>
        <mdb-nav-item to="/index">首页</mdb-nav-item>
        <mdb-nav-item to="/blog">博客</mdb-nav-item>
        <mdb-nav-item to="/tutorial">教程</mdb-nav-item>
        <!--<mdb-nav-item to="/wiki">Wiki</mdb-nav-item>-->
        <mdb-nav-item to="/gallery">相册</mdb-nav-item>
        <mdb-nav-item to="/timeline">时间轴</mdb-nav-item>
        <!--<mdb-nav-item to="/lab">实验室</mdb-nav-item>-->
        <!--<mdb-nav-item to="/entertainment">娱乐</mdb-nav-item>-->
        <mdb-nav-item to="/about">关于</mdb-nav-item>

        <!--<mdb-nav-item to="/css">CSS</mdb-nav-item>-->
        <!--<mdb-nav-item to="/components">Components</mdb-nav-item>-->
        <!--<mdb-nav-item to="/advanced">Advanced</mdb-nav-item>-->
        <!--<mdb-nav-item to="/navigation">Navigation</mdb-nav-item>-->
        <!--<mdb-nav-item to="/forms">Forms</mdb-nav-item>-->
        <!--<mdb-nav-item to="/tables">Tables</mdb-nav-item>-->
        <!--<mdb-nav-item to="/modals">Modals</mdb-nav-item>-->
        <!--<mdb-nav-item to="/plugins">Plugins & addons</mdb-nav-item>-->
      </mdb-navbar-nav>
      <div class="nav-right-content">
      </div>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand} from 'mdbvue';
  export default {
    name: "Navbar",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbNavbarBrand
    }
  };
</script>

<style scoped>
.nav-right-content{
  margin-left: 20%;
}
</style>
