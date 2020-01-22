<template>
  <mdb-container>
    <h2 class="h1-responsive font-weight-bold text-center my-5">教程</h2>

    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>前端</strong></h4>
      <a href="" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-row>
      <mdb-card-group deck>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>

    <div class="article-pagination">
      <mdb-pagination class="pagination pg-blue justify-content-center">
        <mdb-page-nav prev></mdb-page-nav>
        <mdb-page-item active>1</mdb-page-item>
        <mdb-page-item>2</mdb-page-item>
        <mdb-page-item>3</mdb-page-item>
        <mdb-page-item>4</mdb-page-item>
        <mdb-page-item>5</mdb-page-item>
        <mdb-page-nav next></mdb-page-nav>
      </mdb-pagination>
    </div>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,mdbCardGroup, mdbIcon } from 'mdbvue';
  export default {
    name: "TutorialIndex",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardImage,
      mdbCardHeader,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbView,
      mdbMask,
      mdbCardGroup,
      mdbIcon,
      mdbPagination,
      mdbPageNav,
      mdbPageItem,
    },
    data() {
      return {
        items: [
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg",
            category: "Shoes",
            title: "Leather boots",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "69$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg",
            category: "Jeans",
            title: "Slim jeans",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "99$"
          },
          {
            img: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
            category: "Shorts",
            title: "Denim shorts",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "49$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg",
            category: "Accesories",
            title: "Summer hat",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "39$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg",
            category: "Shoes",
            title: "Black Heels",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "79$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(31).jpg",
            category: "Outwear",
            title: "Black jacket",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "149$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg",
            category: "Accesories",
            title: "Leather bag",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "29$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg",
            category: "Accesories",
            title: "Leather belt",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "79$"
          },
          {
            img:
              "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg",
            category: "Shoes",
            title: "Snickers",
            description:
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.",
            price: "139$"
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
