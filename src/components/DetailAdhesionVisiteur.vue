<template>
    <div v-if="!isLoaded">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
    </div>
    <div v-else>
        <v-card class="pa-2 ma-2" variant="tonal">
            <v-card-title>Dernière Adhesion</v-card-title>
            <div v-if="isValid">
                <v-card-text><v-icon icon="mdi-check-bold" color="green" size="128"></v-icon>  {{ lastAdhesion.date.toLocaleDateString("fr-fr") }}</v-card-text>
                <v-card-text>Prochain renouvellement : {{ this.saisonAdhesion.fin.toLocaleDateString("fr-fr") }}</v-card-text>
            </div>
            <div v-else>
                <v-card-text><v-icon icon="mdi-alert-box" color="red" size="128"></v-icon> Adhesion invalide depuis le {{ finValiditeLastAdhesion.toLocaleDateString("fr-fr") }}</v-card-text>
                <v-card-title>Renouveller l'adhésion</v-card-title>
                <CreationAdhesion :adhesion="nouvelleAdhesion"></CreationAdhesion>
                <v-btn class="float-right" variant="outlined" @click="save()">Valider</v-btn>
            </div>
            <v-card-text v-if="lastAdhesion.commentaire">Commentaire : {{ lastAdhesion.commentaire }}</v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="pa-2 ma-2" variant="outlined">
            <v-card-title>Ancienne adhesion</v-card-title>
            <v-card-item v-for="adhesion in oldOtherSortedAdhesions" :key="adhesion.date">
                <v-card-text>Date adhésion : {{ adhesion.date.toLocaleDateString("fr-fr") }}</v-card-text>
                <v-card-text v-if="adhesion.commentaire">Commentaire : {{ adhesion.commentaire }}</v-card-text>
            </v-card-item>
        </v-card>
    </div>
</template>
<script>
import { Adhesion } from '@/model/Adhesion';
import _ from 'lodash';
import CreationAdhesion from './form/CreationAdhesion.vue';
import {getSaisonAdhesion} from '@/mock/mockReference';
import { useContexteVisiteurStore } from '@/store/ContexteVisiteur';

export default {
    name: "DetailAdhesionVisiteur",
    components: { CreationAdhesion },
    props: {
        adhesions: [Adhesion],
    },
    data(){
        return{
            nouvelleAdhesion: new Adhesion(new Date()),
            saisonAdhesion:{},
            isLoaded:false,
            adhs: _.cloneDeep(this.adhesions),
            ctxVisiteur: useContexteVisiteurStore,
        }
    },
    computed: {
        lastAdhesion() {
            return _.orderBy(this.adhs, ["date"], ["desc"])[0];
        },
        oldOtherSortedAdhesions() {
            return _.slice(_.orderBy(this.adhs, ["date"], ["desc"]), 1);
        },
        isValid() {
            return (this.lastAdhesion.date < this.saisonAdhesion.fin && this.lastAdhesion.date > this.saisonAdhesion.debut)
        },
        finValiditeLastAdhesion(){
            let anneeLastAdhesion = this.lastAdhesion.date.getFullYear();
            if (this.lastAdhesion.getMonth > 8)
                anneeLastAdhesion++
            return new Date(anneeLastAdhesion,8,31)
        }
    },
    methods: {
        save(){
            this.adhs.push(this.nouvelleAdhesion);
            this.ctxVisiteur.addNouvelleAdhesion(this.nouvelleAdhesion)
        }
    },
    mounted(){
        getSaisonAdhesion().then((saison)=>{this.saisonAdhesion=saison}).then(()=>{this.isLoaded=true});

    }
}
</script>
