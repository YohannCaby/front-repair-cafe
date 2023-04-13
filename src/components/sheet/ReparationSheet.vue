<template>
    <v-sheet
    border="mb"
    elevation="12"
    rounded="lg"
    witdh="100%">
        <v-container>
            <v-row class="rounded-lg  bg-orange-lighten-2">
                <v-col cols="8"> 
                    <p  class="mx-auto" text="text-left">{{ reparation.date.toLocaleDateString("fr-fr")}} - <strong>{{ reparation.benevole.nom }} {{ reparation.benevole.prenom }}</strong></p>
                </v-col>
                <v-col cols="2" offset="2"><v-btn icon="mdi-pencil" variant="text"></v-btn></v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="text-left">Etat : </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    {{ reparation.etat }}
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="text-left">Durée: </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    {{ reparation.duree }} min
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="text-left">Commentaire: </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="ml-10">
                    <p class="text-justify">{{ reparation.commentaire }}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
import { Reparation } from '@/model/Reparation';

export default {
    name: 'ReparationSheet',
    props:{
        reparation: Reparation
    }
}
</script>
