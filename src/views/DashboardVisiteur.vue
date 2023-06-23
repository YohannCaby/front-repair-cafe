<template>
  <div v-if="ctxVisiteur.currentVisiteur !== null">
    <v-card variant="outlined">
      <div class="float-left pa-2 ma-2">
        <v-btn
          color="primary"
          prepend-icon="mdi-arrow-left-bold"
          @click="checkAndGoBack"
          >RETOUR</v-btn
        >
      </div>
      <br />
      <v-card-title
        >{{ ctxVisiteur.currentVisiteur.nom }}
        {{ ctxVisiteur.currentVisiteur.prenom }}</v-card-title
      >
      <br />
      <v-row>
        <v-col cols="4">
          <v-card title="Coordonées" class="ma-2 pa-2" prepend-icon="mdi-home">
            <v-card-text>
              <CoordVisitor
                :visiteur="ctxVisiteur.currentVisiteur"
              ></CoordVisitor>
              <v-btn
                class="float-right"
                v-if="ctxVisiteur.hasVisiteurChanged"
                variant="outlined"
                @click="saveVisiteur"
                >Modifier</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            title="Adhésion"
            class="ma-2 pa-2"
            prepend-icon="mdi-handshake"
          >
            <v-card-text>
              <DetailAdhesionVisiteur
                :adhesions="ctxVisiteur.currentVisiteur.adhesions"
              ></DetailAdhesionVisiteur>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="Objets" class="ma-2 pa-2" prepend-icon="mdi-tools">
            <ListObjetsVisiteur
              :visiteur="ctxVisiteur.currentVisiteur"
            ></ListObjetsVisiteur>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import CoordVisitor from "@/components/form/CoordVisitor.vue";
import DetailAdhesionVisiteur from "@/components/DetailAdhesionVisiteur.vue";
import ListObjetsVisiteur from "@/components/ListObjetsVisiteur.vue";
import { useContexteVisiteurStore } from "@/store/ContexteVisiteur";
import { useContexteAlerteStore } from "@/store/ContexteAlerte";
import { showAlerte } from "@/manager/AlerteManager";
export default {
  name: "DashboardVisiteur",
  components: {
    CoordVisitor,
    DetailAdhesionVisiteur,
    ListObjetsVisiteur,
  },
  data() {
    return {
      ctxVisiteur: useContexteVisiteurStore(),
      ctxAlere: useContexteAlerteStore(),
    };
  },
  methods: {
    saveVisiteur() {
      console.log(this.ctxVisiteur.currentVisiteur);
      this.ctxVisiteur.defineHasVisiteurChanged(false);
    },
    checkAndGoBack() {
      if (this.ctxVisiteur.hasVisiteurChanged) {
        showAlerte(
          "warning",
          "Les modifications apportées sur le visiteur n'ont pas été sauvegardées"
        );
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
