<template>
  <div>
    <div>
      <h3 class="font-bold underline mb-5 text-center">
        Socio-political Consciousness
      </h3>
    </div>
    <div class="my-5">
      <p>
        Inequity, oppression, and power is something that will continue until
        the end of mankind. It is something we must live with and learn to live
        around because there is no such thing as a world that is free of
        inequality, oppression and the hunger for power. Our civilization is
        just built upon these qualities. Even since the beginning of mankind,
        these traits can be seen. During the hunter and gathering age to the
        present day, those who held power are the ones with the most resources.
        Would they mind sharing a bulk of their resources to help everyone? Most
        likely not because doing so would make them lose their cozy lifestyle.
        This is especially apparent during the Gilded Age, where, due to the
        industrial revolution, many people were able to get rich. These people
        wouldn’t dare to lose such status, so they would lobby representatives
        to represent their best interests rather than the general population. As
        a result, during this period, the three traits can be observed. This is
        the battle between the rich and the poor, a battle where the poor just
        couldn’t win. There was nothing the poor could do. If they were to
        protest, where would they work? It is often that they have to work under
        the rich and have no choice but to shut their mouth. Even with such
        power, the rich desire for more, often setting up monopolies and
        creating trusts. The disparity between the classes is just immeasurable.
      </p>
    </div>
    <div class="my-5">
      <p>
        However, power compared to inequity and oppression just sounds much
        better to me because the desire for power can swing both ways: for good
        or for bad. When it is used right, power can do so much to change the
        world around us. Take a look at all those protests during the fight for
        equal rights for blacks. The push for certain rights like voting rights,
        with fierce efforts was passed, allowing for the snowball effect to take
        place. This allowed for the different laws to be passed as power lands
        on the people’s hand. When the power lands on the bad, destruction would
        often occur. Take a look during the time when Europe took over the newly
        found continent. The Europeans were able to easily take over western
        continent due to their superior technology. They then enslave massive
        amounts of native to be used as slaves and often put into harsh working
        environment.
      </p>
    </div>
    <div class="my-5">
      <p>
        I know what I have said has flaws in them such as the Europeans were
        powerful not due to their advanced technology like guns but due to the
        disease they carry. (The bow was deadlier compared to the gun due to the
        gun having to reload much slower.) But even with them not knowing, the
        Europeans were still able to suppress them, showing off their dominance
        and oppression through enslavement. My flaws could be patched up by
        exploring each of the topics I have talked about further because these
        traits in each event are not that simple. It is just like how I used to
        think that Columbus was the first person to found the new hemisphere,
        but when I dig a bit deeper I realize that he was not the first. It was
        Leif Erikson that first discovered it. The information from where I get
        my information is just as important from research a bit more into
        certain topics, because the same information can be written with
        different intent and light of an event. I need to be cautious about what
        I read when I choose to dive deeper into a topic such as this one.
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

<style lang="scss" scoped></style>
