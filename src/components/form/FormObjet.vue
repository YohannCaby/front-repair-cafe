<template>
    <div>
        <v-text-field label="nom" v-model="fobjet.nom" :disabled="!feditMode"></v-text-field>
        <div v-if="feditMode">
            <h3>Date de Création</h3>
            <VueDatePicker class="pa-2 ma-2" 
                v-model="fobjet.date_creation" 
                :month-change-on-scroll="false"
                inline 
                auto-apply 
                :enable-time-picker="false" 
                locale="fr" 
                utc>
            </VueDatePicker>
        </div>
        <div v-else>
            <v-text-field label="Date de Création" v-model="getDateCreationFormatted" :disabled="!feditMode"></v-text-field>
        </div>
        <v-text-field label="Categorie" v-model="fobjet.categorie.libelle" :disabled="!feditMode"></v-text-field>
        <v-text-field label="Marque Modèle" v-model="fobjet.marque_modele" :disabled="!feditMode"></v-text-field>
        <v-text-field label="Panne" v-model="fobjet.panne" :disabled="!feditMode"></v-text-field>
        <v-text-field label="Poids" v-model="fobjet.poids" type="number" suffix="gramme(s)" :disabled="!feditMode"></v-text-field>
        <v-btn class="float-right" v-if="!feditMode" @click="feditMode=true">Editer</v-btn>
        <v-btn class="float-right" v-if="feditMode" @click="feditMode=false">Valider</v-btn>
    </div>
</template>
<script>
import { Objet } from '@/model/Objet';

export default {
    name :'FormObjet',
    props:{
        objet: Objet,
        editMode: Boolean
    },
    data(){
        return {
            fobjet: this.objet,
            feditMode: this.editMode,
        }
    },
    computed:{
        getDateCreationFormatted(){
            return this.fobjet.date_creation.toLocaleDateString("fr-fr")
        }
    }
}
</script>