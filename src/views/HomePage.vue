<template>
    <h1>ACCUEIL VISITEUR</h1>
    <SearchVisitor></SearchVisitor>
    <DetailVisitor></DetailVisitor>
</template>
<script>
import SearchVisitor from '@/components/SearchVisitor.vue'
import DetailVisitor from '@/components/DetailVisitor.vue'
export default {
    name: 'HomePage',
    components:{
        SearchVisitor,
        DetailVisitor,
    }
}
</script>