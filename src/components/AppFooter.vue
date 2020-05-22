<template>
  <v-footer absolute app color="dark2" padless>
    <v-row justify="center" no-gutters class="dark1">
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-1"
      >
        {{ link }}
      </v-btn>
    </v-row>
    <v-container>
      <v-row justify="center">
        <v-col sm="9">
          <v-card flat tile class="dark2 white--text text-center">
            <v-card-text>
              <!-- <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn> -->
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text mt-n5"
                text
              >
                <v-icon size="50" left>{{ icon }}</v-icon
                ><span class="pl-2">Something</span>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim luctus accumsan id ultrices nunc. Sed at
              orci sed massa consectetur dignissim
            </v-card-text>

            <!-- <v-divider></v-divider> -->
            <!-- <v-row>
              <v-col
                sm="4"
                md="2"
                v-for="sponsor in sponsors"
                :key="sponsor.src"
              >
                <v-img
                  height="100"
                  width="100"
                  class="mx-4"
                  :src="sponsor.src"
                ></v-img>
              </v-col>
            </v-row> -->

            <v-tabs dark background-color="dark2" show-arrows height="140">
              <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

              <v-tab v-for="(sponsor, index) in sponsors" :key="index">
                <v-img
                  height="140"
                  width="140"
                  class="mx-4"
                  :src="sponsor.src"
                ></v-img>
              </v-tab>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-col class="dark1 py-1 text-center white--text" cols="12">
      <span class="text-uppercase"
        >Copyright 2009-{{ new Date().getFullYear() }} ruby all rights
        reserved</span
      >
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data: () => ({
    links: [
      "Home",
      "About Us",
      "Team",
      "Services",
      "Blog",
      "Contact Us",
      "Something More",
      "Hello",
      "Blog",
      "Contact Us",
      "Something More",
      "Hello",
    ],

    icons: ["mdi-facebook", "mdi-twitter"],
    sponsors: [
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg/1200px-Philippine_Amusement_and_Gaming_Corporation_%28PAGCOR%29.svg.png",
      },
    ],
  }),
};
</script>

<style></style>
