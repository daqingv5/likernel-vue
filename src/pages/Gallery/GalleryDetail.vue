<template>
  <div>
    <mdb-container class="mt-5">
      <mdb-row class="mdb-lightbox">
        <mdb-col :key="index" v-for="(item,index) in images" md="4" @click.native="preview(index)">
          <figure>
            <img :src="item" class="img-fluid" alt="">
          </figure>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
  import { mdbLightbox, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

  export default {
    name: "GalleryDetail",
    components: {
      mdbLightbox,
      mdbContainer,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        images: [
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
        ],
        index: 0
      };
    },
    methods: {
      preview(index) {
        this.$imagePreview({
          images: this.images,
          index: this.index
        });
      }

    }
  };
</script>

<style scoped>
</style>


