<template>
  <div>
    <div class="font-bold underline mb-5 text-center">
      Interview With Vampire Essay
    </div>
    <div class="my-5">
      <p>
        Welcome to an extraordinary interview that dives into the shadow of
        immortality from the point of a vampire! This book, Interview with the
        Vampire, tells us the struggles, complexities, and existential questions
        faced by them. The protagonist Louis de Pointe du Lac who just recently
        turned into a vampire has to deal with these questions while figuring
        out between what is good and evil. The book spark the movie, which
        follows the same story; however, there were two differences between the
        book and the movie that create a different feeling toward the audience
        through Louis himself and his relationship with Armand.
      </p>
    </div>
    <div class="my-5">
      <p>
        Although both the book and the movie depict Louis' desire for death
        before he was turned into a vampire, the book showed that he wanted to
        do so because of his brother, while the movie depicts his longing
        because of the death of his wife and child. The book gives us a more
        detailed and sympathetic view of Louis, making us feel closer to him.
        Louis was caring for each of his family, especially his brother Paul. He
        even helped build an oratory for him to pray at. However, because of the
        sudden death of Pual from falling off the stairs, Louis was slowly
        losing credibility with people around him, making him feel guilty. From
        the book, it states that" ...they all stared at me as if I'd killed him.
        And I felt that I'd killed him." The look from the people around him
        surrendered rational thinking that it was him that killed his brother
        and made him want to hide away. This was exactly what he wanted to do as
        he moved to New Orleans, but the death of his brother haunted him. As a
        result, he slowly started to lose himself, wanting to give up
        everything. Now contrast this from the movie, Louis was feeling defeated
        because of the death of his wife and child. There was no build-up to the
        personal connection from the start that shows that Louis is a very
        caring person compared to the whole scene that was shown in the book. It
        jumps right into the action of his grief and sorrow.
      </p>
    </div>
    <div class="my-5">
      <p>
        The second difference occurs after the revenge for Claudia. In the
        movie, Louis still holds a grudge against Armand because Louis knew that
        Armand could have saved Claudia. However, Armand chose not to, resulting
        in Louis wanting to part ways. Contrary to this, the book never
        discusses parting ways between Louis and Armand. Rather, they talk about
        each other’s evil and how they are perfect for each other. Therefore,
        they became companions and went traveling together. This change impacted
        the audience's perception of the characters. In the book, Armand is
        trying to obtain Louis by slowly captivating him with his talk. In the
        end, Louis did fall for Armand, which made them seem like soulmates
        finding each other. In the movie, the progress made by Armand was
        completely thrown out of the window from all the progress in the movie,
        which seemed to have a sense of betrayal from Louis after Armand saved
        him.
      </p>
    </div>
    <div class="my-5">
      <p>
        The movie wasn’t a bad adaptation, although there were a few scenes
        other than the two that weren't mentioned in this essay that greatly
        affected the movie. I believe that movie should have stuck with what was
        already in the book because why change something when it was not broken?
        The slight change did create a difference in how we see both the
        character in the book and the movie.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useOpenStore } from "@/stores/counter";
export default {
  setup() {
    const openStore = useOpenStore();
    onMounted(() => {
      openStore.changeStatementFalse();
    });

    return {};
  },
};
</script>
