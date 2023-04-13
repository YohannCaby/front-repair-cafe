<template>
    <div>
        <v-text-field label="nom" v-model="fobjet.nom"></v-text-field>
    </div>
</template>
<script>
import { Objet } from '@/model/Objet';

export default {
    name :'FormObjet',
    props:{
        objet: Objet
    },
    data(){
        return {
            fobjet: this.objet,
        }
    },
}
</script>