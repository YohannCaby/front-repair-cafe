<template>
  <div>
    <VueDatePicker
      class="pa-2 ma-2"
      v-model="fadhesion.date"
      :month-change-on-scroll="false"
      inline
      auto-apply
      :enable-time-picker="false"
      locale="fr"
      utc
    >
    </VueDatePicker>
    <v-textarea
      class="pa-2 ma-2"
      label="Commentaire"
      v-model="fadhesion.commentaire"
    ></v-textarea>
  </div>
</template>
<script>
import { Adhesion } from "@/model/Adhesion";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "CreationAdhesion",
  props: {
    adhesion: Adhesion,
  },
  components: {
    VueDatePicker,
  },
  data() {
    return {
      fadhesion: this.adhesion,
    };
  },
  methods: {},
};
</script>
