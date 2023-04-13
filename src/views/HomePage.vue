<template>
    <h1>ACCUEIL VISITEUR</h1>
    <br>
    <SearchVisitor></SearchVisitor>
    <br>
    <v-divider></v-divider>
    <br>
    <div class="float-center">
        <v-btn size="x-large" prepend-icon="mdi-account-plus" @click="this.$router.push({name:'nouveau-visiteur'})">Nouveau Visiteur</v-btn>
    </div>
</template>
<script>
import { useContexteVisiteurStore } from '@/store/ContexteVisiteur';
import SearchVisitor from '@/components/SearchVisitor.vue';
export default {
    name: 'HomePage',
    components:{
        SearchVisitor,
    },
    data() {
        return {
            ctxVisiteur : useContexteVisiteurStore(),
        }
    }
}
</script>