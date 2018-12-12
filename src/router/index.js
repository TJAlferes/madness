import Vue from 'vue';
import Router from 'vue-router';

import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

import Settings from '../views/Settings.vue';

import User from '../views/User.vue';
import Users from '../views/Users.vue';

import CreatePost from '../views/CreatePost.vue';
import EditPost from '../views/EditPost.vue';
import DeletePost from '../views/DeletePost.vue';

import Thread from '../views/Thread.vue';
import Forum from '../views/Forum.vue';
import Board from '../views/Board.vue';

import NotFound from '../views/NotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},

    {path: '/settings', component: Settings},

    {path: '/users/:username', compoent: User},
    {path: '/users', component: Users},

    {path: '/create-post', component: CreatePost},
    {path: '/edit-post', component: EditPost},
    {path: '/delete-post', component: DeletePost},

    {path: '/:thread', component: Thread},
    {path: '/:forum', component: Forum},
    {path: '/', component: Board},

    {path: '*', component: NotFound}
  ]
});

export default router;