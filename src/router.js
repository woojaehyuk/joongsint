// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/components/HomeComponent';
import LoginComponent from '@/components/Account/LoginComponent';
import JoinComponent from '@/components/Account/JoinComponent';
import ProfileComponent from '@/components/Profile/ProfileComponent';

import ContactComponent from '@/components/Board/ContactComponent';
import IntroComponent from '@/components/Board/IntroComponent';
import BoardList from '@/components/Board/BoardList';
import BoardDetail from '@/components/Board/BoardDetail';
import BoardCreate from '@/components/Board/BoardCreate';
import NotFound from '@/components/Board/NotFound';

Vue.use(VueRouter);

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
  {
    path: '/',
    redirect: '/home',
  }, // 루트(/)로 접속했을때, Home 컴포넌트를 보여준다.
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/join',
    component: JoinComponent,
  },
  {
    path: '/profile',
    component: ProfileComponent,
  },

  {
    path: '/contact',
    component: ContactComponent,
  },
  {
    path: '/intro',
    component: IntroComponent,
  },
  {
    path: '/board',
    name: 'BoardList',
    component: BoardList,
  },
  {
    path: '/board/detail/:contentId',
    name: 'BoardDetail',
    component: BoardDetail,
  },
  {
    path: '/board/create/:contentId?',
    name: 'BoardCreate',
    component: BoardCreate,
  },
  {
    path: '*',
    component: NotFound,
  },
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
  mode: 'history',
  routes: route,
});

export default router;
