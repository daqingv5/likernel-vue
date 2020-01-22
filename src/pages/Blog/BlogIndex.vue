<template>
  <div class="main-content">
    <h2 class="h1-responsive font-weight-bold text-center my-5">博客</h2>
    <!-- Section description -->
    <p class="text-center mx-auto mb-5">薛国庆的个人博客，记录一些什么，还没想好，慢慢增加内容。</p>
    <!-- Grid row -->
    <div class="row">
      <div class="my-5 col-lg-8 article-list">
        <!-- Section heading -->
        <div v-for="(item, index) in ArticleList" :key="item.id">
          <div class="row" v-if="index %2 == 0">
            <div class="col-lg-5">
              <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                <img class="img-fluid" :src="item.cover" alt="Sample image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
            </div>
            <div class="col-lg-7">
              <!-- Category -->
              <a href="#!" class="green-text">
                <h6 class="font-weight-bold mb-3"><i class="fas fa-utensils pr-2"></i>{{item.category}}</h6>
              </a>
              <!-- Post title -->
              <h3 class="font-weight-bold mb-3"><strong>{{item.title}}</strong></h3>
              <!-- Excerpt -->
              <p>{{item.content}}</p>
              <!-- Post data -->
              <p>by <a><strong>xue</strong></a>, {{item.publish_time}}</p>
              <!-- Read more button -->
              <a class="btn btn-success btn-md" @click="toDetail(item.id)">Read more</a>

            </div>
          </div>
          <!-- Grid row -->

          <!-- Grid row -->
          <div class="row" v-if="index %2 == 1">

            <!-- Grid column -->
            <div class="col-lg-7">

              <!-- Category -->
              <a href="#!" class="pink-text">
                <h6 class="font-weight-bold mb-3"><i class="fas fa-image pr-2"></i>{{item.category}}</h6>
              </a>
              <!-- Post title -->
              <h3 class="font-weight-bold mb-3"><strong>{{item.title}}</strong></h3>
              <!-- Excerpt -->
              <p>{{item.content}}</p>
              <!-- Post data -->
              <p>by <a><strong>Carine Fox</strong></a>{{item.publish_time}}</p>
              <!-- Read more button -->
              <a class="btn btn-pink btn-md mb-lg-0 mb-4" @click="toDetail(item.id)">Read more</a>

            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-5">

              <!-- Featured image -->
              <div class="view overlay rounded z-depth-2">
                <img class="img-fluid" :src="item.cover" alt="Sample image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            <!-- Grid column -->

          </div>
          <hr class="my-5">
        </div>

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
      </div>
      <div class="col-lg-3 article-info-panel">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">标签</mdb-card-title>
            <hr>
            <mdb-row class="tags-list">
              <mdb-badge class="article-tag" pill color="pink" m="r2">Pink</mdb-badge>
              <mdb-badge class="article-tag" pill color="light-blue" m="r2">Light blue</mdb-badge>
              <mdb-badge class="article-tag" pill color="indigo" m="r2">Indigo</mdb-badge>
              <mdb-badge class="article-tag" pill color="purple" m="r2">Purple</mdb-badge>
              <mdb-badge class="article-tag" pill color="orange" m="r2">Orange</mdb-badge>
              <mdb-badge class="article-tag" pill color="green" m="r2">Green</mdb-badge>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>

        <mdb-card class="article-category">
          <mdb-card-body>
            <mdb-card-title tag="h5">分类</mdb-card-title>
            <hr>
            <mdb-row class="tags-list">
              <mdb-badge class="article-tag" pill color="pink" m="r2">Pink</mdb-badge>
              <mdb-badge class="article-tag" pill color="light-blue" m="r2">Light blue</mdb-badge>
              <mdb-badge class="article-tag" pill color="indigo" m="r2">Indigo</mdb-badge>
              <mdb-badge class="article-tag" pill color="purple" m="r2">Purple</mdb-badge>
              <mdb-badge class="article-tag" pill color="orange" m="r2">Orange</mdb-badge>
              <mdb-badge class="article-tag" pill color="green" m="r2">Green</mdb-badge>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>

        <mdb-card class="commend-article-list">
          <mdb-card-body>
            <mdb-card-title tag="h5">推荐文章</mdb-card-title>
            <hr>
            <mdb-row class="tags-list">
              <a href="">文章1</a>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
  import { mdbContainer, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbBtn, mdbInput, mdbRow, mdbIcon,
    mdbPagination, mdbPageNav, mdbPageItem,
    mdbCard, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody, mdbCardHeader,
    mdbBadge,
  } from 'mdbvue';
  import { GET_ARTICLE_LIST } from '../../api/api';
  import { BlogDetail } from './BlogDetail';

  export default {
    data () {
      return {
        ArticleList: [],
        leftList: [],
        rightList: [],
      };
    },
    name: "BlogIndex",
    components: {
      BlogDetail,
      mdbPagination,
      mdbPageNav,
      mdbPageItem,
      mdbContainer,
      mdbIcon,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem,
      mdbBtn,
      mdbInput,
      mdbRow,
      mdbCard,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardBody,
      mdbCardHeader,
      mdbBadge,
    },
    methods: {
      // 获取文章列表
      getData() {
        GET_ARTICLE_LIST({}).then(res => {
          // console.log(res.data.results);
          this.ArticleList = res.data.results;
        });
      },
      // 跳转文章详情页
      toDetail(id) {
        this.$router.push({name: 'BlogDetail', params: {id}});
      }
    },
    mounted() {
      this.getData();
    }
  };
</script>

<style scoped>
  .main-content {
    margin:0 40px;
    padding:0 20px;
  }
  .article-list {
    margin: 0 20px;
    padding: 0 20px;
  }
  .select-panel {
    margin: 20px 0 50px 0;
    padding: 20px 0;
    border: #ccc solid 1px;
    border-radius: 10px;
  }
  .select-group {
    margin-left:20px;
  }
  .article-pagination {
    margin-top: 50px;
  }
  .article-info-panel {
    margin-top: 50px;
  }
  .tags-list {
    margin-left: 0;

  }
  .article-tag {
    margin-top: 10px;
  }
  .article-category {
    margin-top: 40px;
  }
  .commend-article-list {
    margin-top: 40px;
  }



</style>
