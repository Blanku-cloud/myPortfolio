<template>
  <div>
    <div class="my-5">
      <p>
        My mastery of standard three for checkpoint three was achieved through
        the reading of Grendel by John Gardner and the bible presentation on
        <RouterLink
          to="/Modern-Mythology/Projects/Bible-Story"
          class="text-sky-500 hover:underline"
          >Good Samaritan.</RouterLink
        >
      </p>
    </div>
    <div class="my-5">
      <p>
        Learning Target 3.A., 3.B., 3.C., and 3.D. are achieved through in-class
        activities such as the teamwork
        <RouterLink
          to="/Random/Jigsaw-Poster"
          class="text-sky-500 hover:underline"
          >jigsaw poster</RouterLink
        >
        where our group is to share our discussion of how the Dragon influences
        Grendal’s mind. Here my group and I, after finishing reading chapter
        five, were able to use what we learn from reading and reflect on how the
        dragon, who is archetypal of nihilism, after living for so long,
        developed a sense of nihilism that influenced how Grendel thinks. The
        Dragon uses his large pile of gold and gems in his cave to prove this
        because although it may seem hypocritical to gather and protect the gold
        knowing how everything will end, the gold becomes valuable as it is
        being protected by him. This talk made Grendel look for something
        meaningful in this bleak world such as studying human action. In
        addition, this encounter also amplifies the nihilism seed in Grendel’s
        mind later in the book because this encounter made Grendel invulnerable,
        which slowly causes Grendel to become very bored with his life. He can
        kill everything in his path, but he does get hurt and doesn’t have fun
        killing humans.
        <a
          href="https://drive.google.com/drive/folders/1bvncmKhfttNKDjDOu2uI_rlo8MlxhKK6"
          class="text-sky-500 hover:underline"
          >Chapter 8’s</a
        >
        activity of symbolism allows the mastery of Learning Target 3. E and
        Learning Target 3.I. because this is where Red Horse shows up, which has
        both a cultural significance and universal significance. Red Horse in
        the book is an anarchist that believes that the government is wrong and
        fertile. In a cultural sense, the Red Horse in the bible is said to
        bring war and bloodshed, connecting with how in the book Red Horse is
        proposing a revolution to end the government. In a universal sense, the
        color red in the name signifies life and love. However, their meeting in
        the context means different things: in the bible, the Red Horse is used
        as a symbol of divine judgment and warning, while in Grendel is a symbol
        of human ambition and greed for power. Through our in-class discussions,
        I have achieved mastery in Learning Target 3.G.: We have talked about
        the different critical views and how it affects our understanding of the
        book. The most memorable one for me is viewing the book in Marxist
        theory because most of the time it is the power and class that influence
        the character’s action. This is especially apparent in chapter 8 as it
        portrays a society that is divided between the wealthy, powerful humans
        and monsters, connecting this to Harlem Redlining. Learning target 3.F.
        was found through the presentation on the Good Samaritan which tries to
        teach society to help people who are in distress no matter who they are,
        which coins the term Good Samaritan law to those doing chest compression
        with the fear of being sued. I was able to present the story and tell
        the lesson of the story, therefore, meeting the requirement of Learning
        Target 3.J. Learning Target 3.I. and 3.H. is obtained through reading
        Grendel and Beowulf because although both stories take place in the same
        universe, Beowulf is about Beowulf’s heroism and his journey to defeat
        the monster Grendel and doesn’t take upon the perspective of Grendel.
        While the book Grendel is more philosophical and takes upon the struggle
        of Grendel with the mix of modern problems.
      </p>
    </div>
    <div class="my-5">
      <p>
        In the checkpoint, I think I struggled the most with reading Grendel and
        Interview with the Vampire, but this wasn’t all that bad when I found
        out that there were audiobooks for them. I feel it is much easier when
        someone else is reading it to me and more efficient. I think I am an
        auditory learner, which is surprising because I thought I was more of a
        visual learner. When my cousin introduced me to his bible study, I dozed
        off and found it to be boring. After studying the bible in class, I
        found out that the bible was quite interesting with each section and
        verse telling a different story.
      </p>
    </div>
    <div class="my-5">
      <p>
        Through writing this reflection, I was on a journey of emotion since
        college results are rolling out. This usually causes me to slack off
        because I was getting sad about being rejected from schools that I want
        to go to. However, by the end of the day, I can’t keep pushing back
        problems because of something I am unable to control. I also really
        enjoy the reading of Grendel and the author’s philosophical look upon
        life and how different this book was compared to Beowulf.
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
