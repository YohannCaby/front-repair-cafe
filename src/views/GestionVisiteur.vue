<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="float-left pa-2 ma-2">
                    <v-btn color="primary" prepend-icon="mdi-arrow-left-bold" @click="$router.go(-1)">RETOUR</v-btn>
                </div>
                <h2>Formulaire visiteur</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="7" class="ma-2 pa-2">
                <CoordVisitor :visiteur="vis"></CoordVisitor>
            </v-col>
            <v-col cols="4" class="ma-2 pa-2" >
                <div :hidden="hideAdhesion">
                    <CreationAdhesion :adhesion="adh"></CreationAdhesion>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="d-flex flex-row-reverse">
                    <v-btn prepend-icon="mdi-account-plus" @click="saveVisiteur()">Enregistrer Visiteur <v-icon icon="mdi-arrow-right-bold"></v-icon></v-btn>
                </div>
            </v-col>
            <v-col>
                <div :hidden="hideAdhesion" >
                    <div class="d-flex flex-row-reverse">
                        <v-btn prepend-icon="mdi-account-plus" @click="saveAdhesion()">Valider Adhesion<v-icon icon="mdi-arrow-right-bold"></v-icon></v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CoordVisitor from '@/components/form/CoordVisitor.vue';
import CreationAdhesion from '@/components/form/CreationAdhesion.vue';
import { Adhesion } from '@/model/Adhesion';
import { Visiteur } from '@/model/Visiteur';
export default {
    name: 'GestionVisiteur',
    props: {

    },
    data(){
        return {
            vis: new Visiteur(),
            adh: new Adhesion(new Date()),
            id: this.$route.params.id,
            hideAdhesion: true,
        }
    },
    components: {
        CoordVisitor,
        CreationAdhesion
    },
    methods: {
        saveVisiteur(){
            console.log(this.vis);
            this.hideAdhesion = false;
        },
        saveAdhesion(){
            console.log(this.adh);
            this.$router.push({name:'home'});
        }
    }
}
</script>