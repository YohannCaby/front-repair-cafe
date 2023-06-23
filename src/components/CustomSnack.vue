<template>
  <div>
    <v-snackbar
      v-model="ctxAlerte.payload.show"
      timeout="3000"
      :color="ctxAlerte.payload.level"
      min-height="150"
      variant="elevated"
    >
      <v-icon
        size="64"
        v-if="ctxAlerte.payload.icon"
        :icon="ctxAlerte.payload.icon"
      ></v-icon>
      {{ ctxAlerte.payload.message }}

      <template v-slot:actions>
        <v-btn variant="text" @click="ctxAlerte.payload.show = false">
          FERMER
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { useContexteAlerteStore } from "@/store/ContexteAlerte";
export default {
  name: "CustomSnack",
  data() {
    return {
      ctxAlerte: useContexteAlerteStore(),
    };
  },
};
</script>
