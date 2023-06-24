<template>
  <div>
    <v-container variant="outlined">
      <v-row align="center">
        <v-col cols="1">
          <v-btn
            color="primary"
            prepend-icon="mdi-arrow-left-bold"
            @click="$router.go(-1)"
            >RETOUR</v-btn
          >
        </v-col>
        <v-col>
          <h2>{{ ctxVisiteur.currentObjet.nom }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <FormObjet
            :objet="ctxVisiteur.currentObjet"
            :editMode="false"
          ></FormObjet>
        </v-col>
        <v-col>
          <ListReparationObjet
            :objet="ctxVisiteur.currentObjet"
          ></ListReparationObjet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import FormObjet from "@/components/form/FormObjet.vue";
import { useContexteVisiteurStore } from "@/store/ContexteVisiteur";
import ListReparationObjet from "@/components/ListReparationObjet.vue";
export default {
  name: "GestionObjet",
  data() {
    return {
      ctxVisiteur: useContexteVisiteurStore(),
    };
  },
  components: {
    FormObjet,
    ListReparationObjet,
  },
};
</script>
