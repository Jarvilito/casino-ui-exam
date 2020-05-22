<template>
  <fragment>
    <v-system-bar app color="dark2" height="40" class="px-12">
      <div class="d-flex">
        <div
          v-for="(menu, index) in upperLeftMenus"
          :key="index"
          class="white--text mr-2"
        >
          <v-icon left :class="menu.color" size="30">{{ menu.icon }}</v-icon>
          {{ menu.label }}
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(menu, index) in upperRightMenus"
        :key="index"
        class="ma-2 bordered-right"
        tile
        small
        outlined
        color="white"
        :class="menu.bgColor"
      >
        {{ menu.label }}
      </v-btn>
    </v-system-bar>
    <!-- <v-toolbar flat>
      <v-toolbar-title>My Document</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-switch
          v-model="sticky"
          label="Sticky Banner"
          hide-details
        ></v-switch>
      </div>
    </v-toolbar> -->
    <v-app-bar class="app-bar px-12 dark1" height="75" app clipped-left>
      <v-toolbar-title>
        <v-img height="65" width="75" src="@/assets/img/app-logo.png"></v-img>
        <!-- <v-avatar color="indigo" size="52">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar> -->
      </v-toolbar-title>

      <div>
        <v-btn
          v-for="(menu, index) in mainMenus"
          :key="index"
          small
          text
          class="ma-2"
          :class="menu.textColor"
        >
          {{ menu.label }}
          <v-icon right dark>mdi-chevron-down</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn tile outlined color="white" class="ma-2 white--text">
        Navigation
      </v-btn>
      <v-btn tile outlined color="white" class="ma-2 white--text">
        Navigation
      </v-btn>
      <v-btn tile outlined color="white" class="ma-2 white--text">
        Navigation
      </v-btn>
    </v-app-bar>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "nav-bar",
  components: { Fragment },
  data() {
    return {
      mainMenus: [
        {
          label: "Menu 1",
          textColor: "white--text",
        },
        {
          label: "Menu 2",
          textColor: "red--text",
        },
        {
          label: "Menu 3",
          textColor: "white--text",
        },
        {
          label: "Menu 4",
          textColor: "white--text",
        },
        {
          label: "Menu 5",
          textColor: "white--text",
        },
        {
          label: "Menu 6",
          textColor: "white--text",
        },
        {
          label: "Menu 7",
          textColor: "white--text",
        },
        {
          label: "Menu 8",
          textColor: "white--text",
        },
        {
          label: "Menu 9",
          textColor: "white--text",
        },
        {
          label: "Menu 10",
          textColor: "white--text",
        },
      ],
      upperLeftMenus: [
        {
          label: "Upperleft 1",
          icon: "mdi-book-multiple",
          color: "red darken-4",
        },
        {
          label: "Upperleft 2",
          icon: " mdi-weather-windy-variant",
          color: "cyan",
        },
        {
          label: "Upperleft 3",
          icon: "mdi-bitcoin",
          color: "yellow darken-1",
        },
      ],

      upperRightMenus: [
        {
          label: "Upperright 1",
          bgColor: "",
        },
        {
          label: "Upperright 2",
          bgColor: "",
        },
        {
          label: "Upperright 3",
          bgColor: "",
        },
        {
          label: "Upperright 4",
          bgColor: "red accent-1",
        },
        {
          label: "Upperright 5",
          bgColor: "",
        },
        {
          label: "Upperright 6",
          bgColor: "",
        },
        {
          label: "Upperright 7",
          bgColor: "",
        },
      ],
    };
  },
};
</script>

<style>
.app-bar {
  margin-top: 40px !important;
}
.bordered-right {
  border-radius: 0 10px !important;
}
</style>
