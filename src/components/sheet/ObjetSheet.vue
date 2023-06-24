<template>
  <v-sheet border="mb" rounded="lg">
    <v-container>
      <v-row class="rounded-lg bg-orange-lighten-2" align="center">
        <v-col cols="9" class="me-auto">
          <p class="mx-auto" text="text-left">
            {{ objet.date_creation.toLocaleDateString("fr-fr") }} -
            <strong>{{ objet.nom }}</strong>
          </p>
        </v-col>
        <v-col
          ><v-btn icon="mdi-pencil" variant="text" @click="modify"></v-btn
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="col">
          <p class="text-left">Panne:</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ml-10">
          <p class="text-justify">{{ objet.panne }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import { Objet } from "@/model/Objet";
import { useContexteVisiteurStore } from "@/store/ContexteVisiteur";
import _ from "lodash";
export default {
  name: "ObjetSheet",
  props: {
    objet: Objet,
  },
  data() {
    return {
      ctxVisiteur: useContexteVisiteurStore,
    };
  },
  methods: {
    modify() {
      this.$emit("modify", _.cloneDeep(this.objet));
    },
  },
};
</script>
