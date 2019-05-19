import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Character from './components/Character.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';
import Game from './components/Game.vue';
import Chapter from './components/Chapter.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/chapter:number/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '/chapter:number',
      name: 'chapter',
      component: Chapter,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    }
  ]
});

export default router;
