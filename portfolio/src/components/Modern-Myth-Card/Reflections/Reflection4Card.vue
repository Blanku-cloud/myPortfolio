<template>
  <div>
    <div class="my-5">
      <p>
        Since this will be my last reflection for this class, I would like to
        spend more time on my growth as a person and as a reader, while also
        focusing on the last learning. Learning Target 2 will center around
        nonfiction text, which I have achieved mastery through my
        <RouterLink
          to="/Modern-Mythology/Blogs/Blog-2"
          class="text-sky-500 hover:underline"
          >blog 2</RouterLink
        >
        and
        <RouterLink
          to="/Modern-Mythology/Writing-Pieces/IVT-Essay"
          class="text-sky-500 hover:underline"
          >Interviews with the Vampire essay.</RouterLink
        >
      </p>
    </div>
    <div class="my-5">
      <p>
        Interview With the Vampire ticks all the learning Target 2 as I revise
        this two paragraph essay into a standard english essay. In my
        introduction, I claim that there are two major differences between the
        book and movie that create slight alteration, which give us a different
        outlook on Louis and his relation with Armand. (Learning Target 2.E. &
        2.B. & 2.D) Through each of the body paragraphs I explain the difference
        in the impact of the difference to the reader before giving evidence to
        back up the claim. (Learning Target 2.A.) The difference was evident
        from the beginning of the movie as his reason to live was different:
        book - for his brother and movie - from his wife. Although the loss of
        both of these members are detrimental to one’s health, the book creates
        more build up to why the death of his brother was so meaningful to. In
        the essay, I quoted that he couldn’t stand the blame he got from the
        death of his brother , because Louis greatly loved and cared for his
        brother. Louis did his best to protect and care for him by building an
        oratory to prevent his mother and sister from dragging him around.
        (Learning Target 2.C.) In the end of the essay, I wrap up the essay by
        reclaiming my point in the introduction that maybe they should have
        stuck to the book rather than creating the difference in the movie.
        (Learning Target 2.F.)
      </p>
    </div>
    <div class="my-5">
      <p>
        In my second blog, I wrote about Socio-political Consciousness, where I
        mainly focus on the power, who holds it and how it affects the people.
        From my blog, I was backing up each of my claims with historical events,
        but I present a counter argument in the end of my essay stating that
        because I am researching the historical event at a surface level, I
        might be wrong about some of the reasons I said. This creates a
        consequence of the need to take a deeper look at each of the events I
        provided to prove my claim. (Learning Target 2.H.) Although I didn’t
        mention any critical theory in my blog, I would like to link my blog to
        marxism theory, which focuses on the struggle between the social class
        and creating a more equal society based on communism. (Learning Target
        2.G.)
      </p>
    </div>
    <div class="my-5">
      <p>
        This year has been a long year, with all the crazy nights I pull writing
        my college applications while studying for tests and completing my
        homeworks. Although it was a tiring year, I had a lot of fun especially
        in this class due to all the team projects. This class is probably the
        most collaborative class I ever took in all four years. I can remember
        all the discussions I had with my team members on each part of the
        project and staying up late with them to perfect them. If I had to rank
        all the big projects I had done I would rank them this way: Monster
        Project followed by Creation Story followed by Norse Project. Monster
        Project is one of my personal favorites because of all the action
        performed and our creative liberty in how we want each part of our movie
        to be. We also get to put our acting into play. From this I found out
        that I am a terrible actor that can’t memorize their lines. As a result,
        there are so many bloopers from me. It was a lot of fun making it,
        especially because we have to be physically together to act and film for
        each scene.
      </p>
    </div>
    <div class="my-5">
      <p>
        I am glad that everything has been finished and this summer I can look
        forward to relaxing and doing all the stuff I couldn’t do during this
        school year.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useOpenStore } from "@/stores/counter";
export default {
  setup() {
    //better way to do this
    const openStore = useOpenStore();
    onMounted(() => {
      openStore.changeStatementFalse();
    });
    return {};
  },
};
</script>
