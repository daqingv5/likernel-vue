<template>
  <div>

    <mdb-parallax
      src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg'"
      height="full"
      factor="2">
      <mdb-mask overlay="blue-slight" flexCenter>
        <mdb-row class="mb-5 pb-5 text-center white-text">
          <mdb-col md="12" xl="12" class="mx-auto">
            <h1 style="margin-top: 100px" class="display-3 font-weight-bold animated fadeInDown">Guoqing <a class="indigo-text">Xue</a></h1>
            <h5 class="font-weight-bold pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 animated fadeInDown">Web developer & devopser</h5>
            <mdb-btn size="lg animated fadeInDown" color="light-blue">About</mdb-btn>
            <mdb-btn size="lg animated fadeInDown" color="indigo">Resume</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-mask>
    </mdb-parallax>
    <main>
      <mdb-container>
        <div>
          <h2 class="text-center mt-5 font-weight-bold">Why develop this website?</h2>
          <mdb-col md="10" class="mx-auto text-center">
            <ul style="text-align: left">
              <li><p class="pt-4">1.Record my life.</p></li>
              <br>
              <li><p>2.Accumulate and share knowledge.</p></li>
              <br>
              <li><p>3.Technology applied to practice.</p></li>
            </ul>



          </mdb-col>
        </div>
        <hr class="my-5">
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="book" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Blog</h4>
              <p class="grey-text">Animations, colours, shadows, skins and many more! Get to know all our css styles in one place.</p>
              <mdb-nav-item router href="/css" waves-fixed><mdb-btn size="sm" color="blue darken-1">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon fab icon="wikipedia-w" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Wiki</h4>
              <p class="grey-text">Ready-to-use components that you can use in your applications. Both basic and extended versions!</p>
              <mdb-nav-item router href="/components" waves-fixed><mdb-btn size="sm" color="default">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon far icon="images" size="2x" class="green-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Gallery</h4>
              <p class="grey-text">Advanced components such as charts, carousels, tooltips and popovers. All in Material Design version.</p>
              <mdb-nav-item router href="/advanced" waves-fixed><mdb-btn size="sm" color="blue darken-1">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
        <hr class="my-5">
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="flask" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Lab</h4>
              <p class="grey-text">Ready-to-use navigation layouts, navbars, breadcrumbs and much more! Learn more about our navigation components.</p>
              <mdb-nav-item router href="/navigation" waves-fixed><mdb-btn size="sm" color="blue darken-1">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon fab icon="github" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Project</h4>
              <p class="grey-text">Inputs, autocomplete, selecst, date and time pickers. Everything in one place is ready to use!</p>
              <mdb-nav-item router href="/forms" waves-fixed><mdb-btn size="sm" color="default">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon fab icon="gratipay" size="2x" class="green-text"/>
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Collect</h4>
              <p class="grey-text">Basic and advanced tables. Responsive, datatables, with sorting, searching and export to csv.</p>
              <mdb-nav-item router href="/tables" waves-fixed><mdb-btn size="sm" color="blue darken-1">Go</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </main>
  </div>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbContainer, mdbParallax, mdbMask, mdbRow, mdbCol, mdbBtn, mdbIcon} from 'mdbvue';
  export default {
    name: "IndexPage",
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbContainer,
      mdbParallax,
      mdbMask,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbIcon
    }
  };
</script>

<style scoped>
  .top-nav-collapse {
    background-color: #82b1ff !important;
  }

  h1, h5 {
    text-transform: uppercase;
  }

  h5 {
    letter-spacing: 3px;
  }

  h1, h2 {
    font-weight: normal;
  }

  .home-feature-box {
    padding: 40px 0;
  }

  .home-feature-box i {
    font-size: 6rem;
  }

  .home-feature-box span {
    display: block;
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    color: #42b983;
  }
</style>
