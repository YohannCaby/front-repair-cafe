<template>
    <div>
        <v-card variant="outlined">
            <div class="float-left pa-2 ma-2">
                <v-btn color="primary" prepend-icon="mdi-arrow-left-bold" @click="$router.go(-1)">RETOUR</v-btn>
            </div>
            <br>
            <v-card-title>{{ ctxVisiteur.currentObjet.nom }}</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <FormObjet :objet="ctxVisiteur.currentObjet"></FormObjet>
                        </v-col>
                        <v-col>
                            <ListReparationObjet :objet="ctxVisiteur.currentObjet"></ListReparationObjet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import FormObjet from '@/components/form/FormObjet.vue';
import { useContexteVisiteurStore } from '@/store/ContexteVisiteur';
import ListReparationObjet from '@/components/ListReparationObjet.vue'
export default {
    name: 'GestionObjet',
    data(){
        return {
            ctxVisiteur: useContexteVisiteurStore(),
        }
    },
    components:{
        FormObjet,
        ListReparationObjet
    }
}
</script>
