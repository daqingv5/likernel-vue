<template>
  <div id="app" class="flyout">
    <myNavbar></myNavbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myNavbar from "./pages/Common/Navbar";
import myFooter from "./pages/Common/Footer";

export default {
  name: 'app',
  components: {
    myNavbar,
    myFooter
  }
};

</script>

<style>
.brand-logo{
  text-shadow: rgb(48, 117, 165) 0px 0px 0px, rgb(48, 119, 167) 1px 1px 0px, rgb(49, 120, 169) 2px 2px 0px, rgb(50, 122, 172) 3px 3px 0px, rgb(50, 124, 174) 4px 4px 0px, rgb(51, 126, 177) 5px 5px 0px, rgb(52, 127, 179) 6px 6px 0px, rgb(53, 129, 182) 7px 7px 0px, rgb(53, 131, 184) 8px 8px 0px;
  color: rgb(255, 255, 255);
  height: 40px;
  width: 100px;
  line-height: 30px;
  text-align: center;

}
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
</style>
