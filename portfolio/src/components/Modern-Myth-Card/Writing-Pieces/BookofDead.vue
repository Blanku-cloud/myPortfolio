<template>
  <div>
    <div>
      <h3 class="font-bold underline mb-5 text-center">The Book of the Dead</h3>
    </div>
    <div class="my-5">
      <p>
        The Egyptian dynasty lasted for three thousand years, and as a result,
        the belief in death slowly changed. Different dynasties have different
        preparations for getting to the underworld, and over a long period, even
        the common people were able to improve their chances of achieving the
        afterlife. However, one belief is certain: life is short, but the
        afterlife is eternal. Therefore, the Egyptians believe that life is used
        to prepare for achieving immortality.
      </p>
    </div>
    <div class="my-5">
      <p>
        It is stressed that to achieve immortality, people must travel on a
        dangerous journey through the twelve gates and be placed for judgment by
        Osiris. Consequently, people will do whatever they can to increase their
        rate of passing through the gate. This is especially important to the
        people of the lower class because they know that to change their life
        around, this is the chance. This fuels them to work hard during their
        life to purchase the Book of Dead, guiding them through the underworld,
        and try their best to get themself mummified. On the other hand, the
        Pharaohs see it as a duty and honor to die because they will be a task
        with the well-being of their people. When the Pharaohs reach hell, they
        will merge with the Sun God, Ra, and be tasked with raising the sun from
        the east to the west. But to do this, they still need to travel the
        journey. This is why the Pharaohs have such a grand pyramid built for
        them, which contains all types of hieroglyphs, images, and stone
        statues. These items and writing are magical spells that pharaohs bring
        with them, and if anything were to happen to them, then the people would
        suffer.
      </p>
    </div>
    <div class="my-5">
      <p>
        Death to the Egyptians has religious values and was taught to all
        people. Its special meaning was known: that death is just a new
        beginning. I, on the other hand, was never taught any special meaning of
        death. All I know is that death means the end of living, so to me, I’m
        scared of death. Will I be gone from his world? Will there be an
        afterlife? Will I be reborn? There is no answer to these questions. I
        think it is this fear of not knowing that further makes me anxious about
        death. However, sometimes I think that death is beautiful once I accept
        that death is inevitable. Death is like a source of motivation. I know
        that I only have one life, so I must savor this chance for me to do
        everything I could do. It makes me want to work hard to make sure I
        don't mess up my chances.
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

<style lang="scss" scoped></style>
