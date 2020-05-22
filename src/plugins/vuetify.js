import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#757575",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        dark1: "#212121",
        dark2: "#2b2b2b",
        dark3: "#616161",
      },
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    iconfont: "fa",
  },
});
