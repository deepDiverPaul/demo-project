import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/FormsView.vue'),
    children: [
      {
        path: '',
        name: 'forms-list',
        component: () => import(/* webpackChunkName: "forms-list" */ '../components/forms/FormsList.component.vue'),
      },
      {
        path: 'edit/:id',
        name: 'form-edit',
        component: () => import(/* webpackChunkName: "form-edit" */ '../components/forms/FormEdit.component.vue'),
      },
    ],
  },
  {
    path: '/questionnaires',
    component: () => import(/* webpackChunkName: "questionnaires" */ '../views/QuestionnairesView.vue'),
    children: [
      {
        path: 'thank-you',
        name: 'questionnaire-thank-you',
        component: () => import(/* webpackChunkName: "questionnaire-thank-you" */ '../components/questionnaires/QuestionnaireThankYou.component.vue'),
      },
      {
        path: ':id',
        name: 'questionnaire-answer',
        component: () => import(/* webpackChunkName: "questionnaire-answer" */ '../components/questionnaires/QuestionnaireAnswer.component.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
