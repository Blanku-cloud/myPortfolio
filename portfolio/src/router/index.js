import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/About-Me",
      name: "about-me",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutMe.vue"),
    },
    {
      path: "/Random/Norse-Feedback",
      name: "norse-feedback",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/Modern-Myth-Card/Random/NorseFeedback.vue"),
    },
    {
      path: "/Random/Jigsaw-Poster",
      name: "jigsaw-project",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/Modern-Myth-Card/Random/JigsawPoster.vue"),
    },

    {
      path: "/Modern-Mythology",
      name: "modern-mythology",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ModernMyth.vue"),
      children: [
        {
          path: "/Modern-Mythology/Writing-Pieces/Fairytale",
          name: "writing-pieces-fairytale",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Writing-Pieces/FairytaleCard.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Writing-Pieces/IVT-Essay",
          name: "jigsaw-project",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Writing-Pieces/IVTEssay.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Writing-Pieces/The-Book-of-the-Dead",
          name: "writing-pieces-the-book-of-the-dead",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Writing-Pieces/BookofDead.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Blogs/Blog-1",
          name: "blogs-blog1",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import("../components/Modern-Myth-Card/Blogs/Blog1Card.vue"),
        },
        {
          path: "/Modern-Mythology/Blogs/Blog-2",
          name: "blogs-blog2",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import("../components/Modern-Myth-Card/Blogs/Blog2Card.vue"),
        },
        {
          path: "/Modern-Mythology/Projects/Creation-Story",
          name: "projects-creation-story",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Projects/CreationStoryCard.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Projects/Bible-Story",
          name: "bible-story",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Projects/BibleStoryCard.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Projects/Norse-Project",
          name: "norse-project",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Projects/NorseProjectCard.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Reflections/Reflection-1",
          name: "reflections-reflection1",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Reflections/Reflection1Card.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Reflections/Reflection-2",
          name: "reflections-reflection2",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Reflections/Reflection2Card.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Reflections/Reflection-3",
          name: "reflections-reflection3",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Reflections/Reflection3Card.vue"
            ),
        },
        {
          path: "/Modern-Mythology/Reflections/Reflection-4",
          name: "reflections-reflection4",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              "../components/Modern-Myth-Card/Reflections/Reflection4Card.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
