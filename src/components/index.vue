<template>
    <div>
        <my-header></my-header>
        <div class="my-container">
            <b-alert dismissible class="my-content" show variant="info">
                <h4 class="alert-heading">Hey there!</h4>
                <p>
                    Aww yeah, you successfully read this important alert message.
                    I have some amazing posts to show you on the next page.
                </p>
                <hr>
                <p class="mb-0">
                    <i>Psst, click on List Posts above.</i>
                </p>
            </b-alert>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './header.vue'

@Component({
  components: {
    'my-header': Header
  }
})
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-container {
    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
    max-width: 100%;
}
</style>
