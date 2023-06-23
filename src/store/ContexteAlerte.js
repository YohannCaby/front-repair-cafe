import { Alerte } from "@/model/Alerte";
import { defineStore } from "pinia";

export const useContexteAlerteStore = defineStore("ContexteAlerte", {
  state: () => ({
    payload: Alerte,
  }),
  getter: {
    getPayload: (state) => {
      state.payload;
    },
  },
  actions: {
    showAlerte(payload) {
      console.log("Set pinia store : defineAlerte => ", payload);
      this.$patch((state) => {
        state.payload = payload;
      });
    },
    $reset() {
      this.payload = null;
      console.log("Reset ContexteAlerte");
    },
  },
});
