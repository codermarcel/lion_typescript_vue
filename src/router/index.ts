import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
import IndexComponent from '@/components/index.vue';
import PostsComponent from '@/components/posts.vue';

// const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Index',
    component: IndexComponent
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsComponent
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
