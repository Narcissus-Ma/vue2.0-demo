import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home.vue";
import Mixins from "../pages/mixins.vue";
import Transition from "../pages/transition.vue";
import SlotFather from "../pages/slotFather.vue";
import CustomPlugin from "../pages/customPlugin.vue";
import TodoList from "../pages/todoList.vue";
import VuexDemo from "../pages/vuexDemo.vue";
import NextTick from "../pages/nextTickDemo.vue";
import CustomDirectives from "../pages/customDirectives.vue";
import ListDND from "../pages/ListDND.vue";
import TeamWork from "../pages/TeamWork.vue";

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/Mixins",
    name: "Mixins",
    component: Mixins,
  },
  {
    path: "/transition",
    name: "transition",
    component: Transition,
  },
  {
    path: "/slotFather",
    name: "slotFather",
    component: SlotFather,
  },
  {
    path: "/customPlugin",
    name: "customPlugin",
    component: CustomPlugin,
  },
  {
    path: "/todoList",
    name: "todoList",
    component: TodoList,
  },
  {
    path: "/vuexDemo",
    name: "vuexDemo",
    component: VuexDemo,
  },
  {
    path: "/nextTickDemo",
    name: "nextTickDemo",
    component: NextTick,
  },
  {
    path: "/customDirectives",
    name: "customDirectives",
    component: CustomDirectives,
  },
  {
    path: "/listDND",
    name: "listDND",
    component: ListDND,
  },
  {
    path: "/teamWork",
    name: "teamWork",
    component: TeamWork,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes,
});

export default router;
