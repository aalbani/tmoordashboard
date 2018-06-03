<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
      right
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">

          <v-list-tile
            :key="i"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Etmoor&nbsp;<span class="text">Dashboard</span></span>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'home', text: 'Home' , link: '/' },
        { icon: 'local_shipping', text: 'Delivery', link : '/delivery' },
        { icon: 'list_alt', text: 'Today\'s tasks', link: '/tasks' },
        { icon: 'history', text: 'History', link: '/history' },
        { icon: 'face', text: 'Complaints', link: '/complaints' },
        { icon: 'store_mall_directory', text: 'Manage inventory', link: '/inventory' },
      ]
    }),
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
  #inspire {
    direction: rtl
  }
</style>