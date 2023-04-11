<template>
    <v-form>
        <v-container>
            <v-row >
                <v-col>
                    <v-combobox label="Recherche visiteur" clearable></v-combobox>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
    <div class="d-flex flex-row-reverse">
        <v-btn prepend-icon="mdi-account-plus">Nouveau Visiteur</v-btn>
    </div>
</template>
<script>
export default {
    name: 'SearchVisitor'
}
</script>