<template>
    <div>
        <v-text-field label="Nom" v-model="fvisiteur.nom" @update:modelValue="hasChanged()"></v-text-field>
        <v-text-field label="Prenom" v-model="fvisiteur.prenom" @update:modelValue="hasChanged()"></v-text-field>
        <v-text-field label="Commune" v-model="fvisiteur.commune" @update:modelValue="hasChanged()"></v-text-field>
        <v-text-field label="Téléphone" v-model="fvisiteur.telephone" @update:modelValue="hasChanged()"></v-text-field>
        <v-text-field label="Email" v-model="fvisiteur.email" type="email" @update:modelValue="hasChanged()"></v-text-field>
        <v-select label="Genre" :items="['','Femme','Homme','Ature']" v-model="fvisiteur.genre" @update:modelValue="hasChanged()"></v-select>
        <v-text-field label="Année de naissance" v-model="fvisiteur.naissance" type="number" @update:modelValue="hasChanged()"></v-text-field>
    </div>
</template>
<script>
import { Visiteur } from '@/model/Visiteur';
import { useContexteVisiteurStore } from '@/store/ContexteVisiteur';

export default {
    name: 'CoordVisitor',
    props: {
        visiteur: Visiteur,
    },
    data(){
        return {
            fvisiteur: this.visiteur,
            ctxVisiteur: useContexteVisiteurStore()
        }
    },
    methods:{
        hasChanged(){
            this.ctxVisiteur.defineHasVisiteurChanged(true);
        }
    }
}
</script>