<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand @click="$router.push('/')" href="#">TheLions</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
        <b-nav-item @click="$router.push('/posts')">List Posts</b-nav-item>
    </b-navbar-nav>

    </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'header'
})
export default class HeaderComponent extends Vue {
}
</script>

<style scoped>
</style>
