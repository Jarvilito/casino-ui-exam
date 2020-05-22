<template>
  <v-navigation-drawer
    v-model="drawer"
    class="grey darken-4 nav"
    clipped
    absolute
    app
  >
    <v-list readonly dense nav class="mt-3 px-0 mx-0 mr-n1 ">
      <v-subheader class="subheader pl-0">
        <v-text-field
          class="search-button"
          height="70"
          full-width
          solo
          flat
          label="Search"
          color="grey darken-3"
          background-color="grey darken-2"
          append-icon="fas fa-search"
        ></v-text-field>
      </v-subheader>
      <v-list-group
        sub-group
        v-for="(menu, i) in menus"
        :key="i"
        value="true"
        class="dark2"
        prepend-icon=""
      >
        <template v-slot:activator>
          <v-list-item-title class="white--text">{{
            menu.label
          }}</v-list-item-title>
          <v-list-item-icon class="white--text"
            >({{ menu.subMenu.length }})</v-list-item-icon
          >
        </template>
        <v-list-item
          class="dark1 ma-0"
          v-for="(sub, index) in menu.subMenu"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              sub.label
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <!-- 
      <v-list-item class="dark2" v-for="(menu, i) in menus" :key="i">
        <v-list-item-content>
          <v-list-item-title class="white--text">{{
            menu.label
          }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon class="white--text"
          >({{ menu.subMenu.length }})</v-list-item-icon
        >
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "side-nav",
  data() {
    return {
      drawer: true,
      menus: [
        {
          label: "First Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
          ],
        },
        {
          label: "Second Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
            {
              label: "Submenu 3",
            },
          ],
        },
        {
          label: "Third Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
          ],
        },
        {
          label: "Fourth Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
            {
              label: "Submenu 3",
            },
            {
              label: "Submenu 4",
            },
            {
              label: "Submenu 5",
            },
          ],
        },
        {
          label: "Fifth Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
            {
              label: "Submenu 3",
            },
            {
              label: "Submenu 4",
            },
            {
              label: "Submenu 5",
            },
          ],
        },
        {
          label: "Sixth Menu",
          subMenu: [
            {
              label: "Submenu 1",
            },
            {
              label: "Submenu 2",
            },
            {
              label: "Submenu 3",
            },
            {
              label: "Submenu 4",
            },
            {
              label: "Submenu 5",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  background-color: #616161 !important;
  border-radius: 0% !important;
}
.text-white {
  color: white;
}

.search-button {
  border-radius: 0% !important;
}

.full-width {
  width: 100%;
}

.v-list-group__header__prepend-icon {
  color: red;
}
.v-navigation-drawer__content {
  overflow-y: scroll;
}
.v-navigation-drawer__content::-webkit-scrollbar {
  display: none !important;
}
</style>
