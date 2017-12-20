<template>
    <div class="mycon">
        <b-card :title="title"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-0">
            <p class="card-text">
            {{ body }}
            </p>
            <b-button href="#" variant="primary">Read more...</b-button>
        </b-card>
    </div>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

export interface PostInterface {
    id: string;
    title: string;
    body: string;
}

@Component({
  props: ['id', 'title', 'body']
})
export default class Post extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mycon {
    display: flex;
}
</style>
