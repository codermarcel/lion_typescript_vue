<template>
  <div>
    <my-header></my-header>

    <div class="cont">
      <div :hidden="isReady">
        Loading...
      </div>

      <div class="error-con" :hidden="!hasError">
        <div class="my-container">
            <b-alert dismissible class="my-content" show variant="danger">
                <h4 class="alert-heading">Oops!</h4>
                <p>
                    Something went wrong while trying to fetch the posts from the server, please try again later!.
                </p>
                <hr>
                <p class="mb-0">
                    <i>Sorry for the inconvenience.</i>
                </p>
            </b-alert>
        </div>
      </div>

      <div class="item" v-for="item in posts" :key="item.id" :hidden="!isReady">
        <post :id="item.id" :title="item.title" :body="item.body"></post>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Post, { PostInterface } from './post.vue'
import Header from './header.vue'
import Axios from '../helpers/axios'

@Component({
  name: 'posts',
  components: {
    'post': Post,
    'my-header': Header
  }
})
export default class PostsComponent extends Vue {
  posts: PostInterface[] = []
  isReady: boolean = false
  hasError: boolean = false
  onClick () {
    this.hasError = false
  }
  mounted () {
    Axios.get('/posts', {
    })
    .then((response) => {
      this.posts = response.data
    })
    .catch(() => {
      this.hasError = true
    })
    .then(() => {
      this.isReady = true
    })
  }
}
</script>

<style scoped>
@media(max-width:768px) {
  .cont{
    margin: 0rem 0rem !important;
  }
  .item {
    flex-basis: 100% !important;
  }
}
.error-con {
  display: flex;
  flex-direction: column;
}
.cont{
  margin: 2rem 4rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction:row;
  flex-wrap: wrap;
}

.item {
  flex-basis: 30%;
  box-sizing: border-box;
  margin: 0.4rem 0.4rem;
  display: flex;
}
</style>
