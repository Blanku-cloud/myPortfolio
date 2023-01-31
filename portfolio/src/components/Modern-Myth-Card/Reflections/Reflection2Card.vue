<template>
  <div>
    <div class="my-5">
      <p>
        My mastery of Standard 5, encompassing listening and speaking, is
        achieved through the
        <RouterLink
          to="/Modern-Mythology/Projects/Norse-Project"
          class="text-sky-500 hover:underline"
        >
          Norse Project</RouterLink
        >
        and the
        <RouterLink
          to="/Modern-Mythology/Projects/Creation-Story"
          class="text-sky-500 hover:underline"
        >
          Egyptian Creation Story </RouterLink
        >.
      </p>
    </div>
    <div class="my-5">
      <p>
        I have demonstrated appropriate physical choices such as body position,
        poise, gestures, and eye contact in the Egyptian Creation Story video
        which can be seen at 9:00 to 9:44 and 12:29 to 13:00. During those time
        intervals I was presenting my slides on Ra’s Journey and Modern
        Connections, and while presenting the slides, I was making gestures and
        talking towards the class to keep them engaged. (Learning Target 5.A.)
        In addition to the body position, I believe that my voice was loud and
        clear, but I do need to work on articulation and word choices because I
        was stumbling during my presentation. I also need to work on changing
        the loudness of my voice because I use the same loudness for both my
        presentation and acting, which can be seen from 9:00 to 9:44 and 12:29
        to 13:00 in the Egyptian Creation Story video and the Norse Project
        video from 6:58 to 11:00. One way to improve upon both problems is
        giving myself more time to practice what I am going to say during the
        presentation and the play. To see how well I do, I can present it to the
        mirror to resemble its presentation for an audience, getting rid of my
        fear of people looking at me during the presentation. During both my
        presentations, I was able to respect and pronounce the names of each
        historical character properly. (Learning Target 5.B.; Learning Target
        5.D.; Learning Target 5.E.; Learning Target 5.G.) In both the Norse
        Project and the Egyptian Creation Story I think I fail in furthering the
        conversation because I just focus on my slides, and I don’t stop and ask
        my peers if they have any questions. I also think that I was too nervous
        about the questions my peers were going to ask me because I’m scared
        that I couldn’t answer the questions they threw at me. However, now
        thinking about it, I think I should have slowed down and asked my peers
        if they have any questions and not be afraid of their questions.
        Questions are meant to ask how well I understood my topic and maybe give
        me another point of view on my topic. (Learning Target 5.C.) I can
        present and act out the play using verbal and nonverbal transitions,
        equity of voice, and cues. From 11:12 to 11:32 of the Egyptian Creation
        Story video, I was able to cooperate with my teammate Jalen to prevent
        him from getting beaten to the ground by him. During the entire play of
        the Norse Project, I was able to cooperate with my peers by waiting for
        their line to be finished before transitioning to my lines. For example,
        from 6:45 to 7:00 in the Norse Project video, after Juhyoung finished
        his lines, I came into the room and began my lines. (Learning Target
        5.F.) After our presentation, I was able to actively listen to other
        groups' presentations and give meaningful feedback through
        the<RouterLink
          to="/Random/Norse-Feedback"
          class="text-sky-500 hover:underline"
        >
          feedback sheet</RouterLink
        >. I think I did a good job with the feedback for group 4, The Unicorns.
        I was able to tell them how the whole piece flows and comes together,
        and I included where they have to further work on. (Learning Target
        5.H.)
      </p>
    </div>
    <div class="my-5">
      <p>
        From these presentations, I learned that I need to work on my
        communication skills the most, and I need to stop being afraid of asking
        and receiving questions. To become a better learner and presenter, it is
        crucial to strengthen these skills, so I can better understand the
        materials and lessons. I also feel angry about myself because of how
        much I procrastinate. I guess I was so busy getting my college
        application done that I forgot to prepare my part of the presentation.
        Procrastination is scary, yet I never overcome this. Even in college
        applications, I procrastinated until last week, which led to a snowball
        effect on me pushing back other assignments that I need to do. In the
        end, I have to cramp everything in one night. Those days, I never get
        enough sleep. However, I was very proud of both the actions of the
        lesson and plays, and I had fun seeing my teammate and myself act.
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

<style scoped></style>
