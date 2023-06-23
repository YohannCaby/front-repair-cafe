<!--MenuCoponent.vue-->
<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title
        ><v-icon size="large" color="orange-darken-2">mdi-cog-outline</v-icon>
        Jetter? Hors de question!
        <v-icon size="large" color="orange-darken-2"
          >mdi-tools</v-icon
        ></v-app-bar-title
      >
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.path">
        <v-list-item-icon
          ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
        >
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Hello World",
        value: "helloworld",
        icon: "mdi-home",
        path: "/",
      },
      {
        title: "About",
        value: "about",
        icon: "mdi-information",
        path: "/about",
      },
    ],
  }),
  methods: {
    foomethod() {
      alert("foo");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
