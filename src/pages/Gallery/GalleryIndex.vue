<template>
<mdb-container>
  <h2 class="h1-responsive font-weight-bold text-center my-5">相册</h2>
  <mdb-row>
    <mdb-col>
      <div class="gallery">
        <div class="gallery view overlay rounded z-depth-1-half mb-4">
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
        </div>

        <div class="gallery-info news-data d-flex justify-content-between">
          <span class="font-weight-bold blue-text">Title</span>
          <p class="font-weight-bold dark-grey-text"><i class="far fa-clock pr-2"></i>20/08/2020</p>
        </div>
      </div>
    </mdb-col>
    <mdb-col>
      <div class="gallery">
        <div class="gallery view overlay rounded z-depth-1-half mb-4">
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
        </div>

        <div class="gallery-info news-data d-flex justify-content-between">
          <span class="font-weight-bold blue-text">Title</span>
          <p class="font-weight-bold dark-grey-text"><i class="far fa-clock pr-2"></i>20/08/2020</p>
        </div>
      </div>
    </mdb-col>
    <mdb-col>
      <div class="gallery">
        <div class="gallery view overlay rounded z-depth-1-half mb-4">
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
        </div>

        <div class="gallery-info news-data d-flex justify-content-between">
          <span class="font-weight-bold blue-text">Title</span>
          <p class="font-weight-bold dark-grey-text"><i class="far fa-clock pr-2"></i>20/08/2020</p>
        </div>
      </div>
    </mdb-col>


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
  import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask, mdbCardGroup,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,mdbIcon } from 'mdbvue';
  export default {
    name: "GalleryIndex",
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
  };
</script>

<style scoped>

</style>
