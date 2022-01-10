import { createRouter, createWebHistory } from "vue-router";

import RandomQuote from "./pages/RandomQuote.vue";
import AuthorQuotes from "./pages/AuthorQuotes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: RandomQuote,
      props: true,
    },
    {
      path: "/quotes/:author",
      component: AuthorQuotes,
      props: false,
    },
  ],
});

export default router;
