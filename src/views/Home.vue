<template>
  <v-container class="dark2  fill-height" fluid>
    <div class="d-flex container">
      <!-- <div class="button-default-active button-slanted">
        <span class="button-slanted-content">Slanted Button</span>
      </div>
      <div class="button-default button-slanted">
        <span class="button-slanted-content">Slanted Button</span>
      </div> -->
      <span class="display-1 font-weight-bold white--text ml-n1"
        >TitleHere</span
      >
      <v-spacer></v-spacer>
      <v-btn bottom class="button-slanted active ">
        <span class="slant-text">Something</span>
      </v-btn>
      <v-btn bottom class="dark3 button-slanted">
        <span class="slant-text white--text font-italic"
          ><span class="amber--text text--darken-2">Something</span> Very long |
          <span class="amber--text text--darken-2">02-08-2020</span></span
        >
      </v-btn>
    </div>
    <v-row>
      <v-col v-for="image in images" :key="image.src" cols="12" sm="4" md="3">
        <v-card class="card-radius" max-width="400">
          <v-img height="250px" :src="image.src" />
        </v-card>
        <div>
          <p class="text-center white--text title">{{ image.title }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  data() {
    return {
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "My Title 1",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "My Title 2",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "My Title 3",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "My Title 4",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "My Title 5",
        },
      ],

      options: [
        { title: "Something very long text", active: false },
        { title: "Something 1 ", active: true },
      ],

      toggle_exclusive: 0,
    };
  },
};
</script>
<style scoped>
.position {
  margin-left: 20%;
  margin-top: 10%;
}

.card-radius {
  border-radius: 0 20px !important;
  margin: 0 auto !important;
}

.active {
  background-color: #ffca28 !important;
  height: 45px !important;
  margin-top: -4px !important;
  margin-right: -6px;
  z-index: 99;
}

.theme--light.v-btn-toggle:not(.v-btn-toggle--group) {
  background: none !important;
}

.button-slanted {
  -ms-transform: skewX(20deg);
  -webkit-transform: skewX(20deg);
  transform: skewX(25deg);
  border-radius: 0 10px;
}

.slant-text {
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg) !important;
  display: inline-block;
}
</style>
