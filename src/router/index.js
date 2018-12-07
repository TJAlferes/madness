import Vue from 'vue';
import Router from 'vue-router';

import SignUpView from '../views/SignUpView.vue';
import SignInView from '../views/SignInView.vue';
import AccountSettingsView from '../views/AccountSettingsView.vue';
import ProfileSettingsView from '../views/ProfileSettingsView.vue';
import ProfileView from '../views/ProfileView.vue';
import CreatePostView from '../views/CreatePostView.vue';
import EditPostView from '../views/EditPostView.vue';
import DeletePostView from '../views/DeletePostView.vue';
import ThreadView from '../views/ThreadView.vue';
import ForumView from '../views/ForumView.vue';
import BoardView from '../views/BoardView.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/signup', component: SignUpView},
      {path: '/signin', component: SignInView},
      {path: '/account-settings', component: AccountSettingsView},
      {path: '/profile-settings', component: ProfileSettingsView},
      {path: '/:username', compoent: ProfileView},
      {path: '/create-post', component: CreatePostView},
      {path: '/edit-post', component: EditPostView},
      {path: '/delete-post', component: DeletePostView},
      {path: '/:thread', component: ThreadView},
      {path: '/:forum', component: ForumView},
      {path: '/', component: BoardView}
    ]
  });
};