import { createRouter, createWebHistory } from "vue-router";

import RandomQuote from "./pages/RandomQuote.vue";
import AuthorQuotes from "./pages/AuthorQuotes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: RandomQuote,
    },
    {
      path: "/quotes/:author",
      component: AuthorQuotes,
    },
  ],
});

export default router;
