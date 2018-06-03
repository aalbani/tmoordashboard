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
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
            @click=""
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
        { icon: 'lightbulb_outline', text: 'Notes' },
        { icon: 'touch_app', text: 'Reminders' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' }
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