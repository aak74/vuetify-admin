<template>
<v-navigation-drawer
  width="250"
  class="blue-grey darken-4"
  dark
  persistent
  :mini-variant="miniMenu"
  v-model="drawer"
  fixed
  app
>
  <v-toolbar flat class="transparent" dense>
    <v-list class="pa-0" :class="{'list-border-bottom' : miniMenu}">
        <v-list-tile>
          <v-list-tile-action v-if="!miniMenu">
            <v-icon large color="green">settings_applications</v-icon>
          </v-list-tile-action>
          <v-list-tile-content v-if="!miniMenu">
            <v-list-tile-title><h2>Admin</h2></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="toggleMini">
              <v-icon v-html="miniMenu ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
    </v-list>
  </v-toolbar>
  <v-divider></v-divider>

  <v-tooltip right :disabled="!miniMenu">
    <v-toolbar flat class="transparent" dense slot="activator">
      <v-list class="pa-0" :class="{'list-border-bottom' : miniMenu}">
        <v-list-tile
          to="/"
          exact
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <span>Project Overview</span>
  </v-tooltip>
  <v-divider></v-divider>

  <menu-items 
    :items="menuItems"
    :mini="miniMenu"
  />
</v-navigation-drawer>
</template>

<script>
import MenuItems from './MenuItems'
import status from '../mixins/status'

export default {
  name: 'Sidebar',
  components: {
    MenuItems
  },
  mixins: [ status ]  ,
  computed: {
    menuItems () {
      return this.$store.state.leftMenu
    },
    miniMenu () {
      return this.status.miniMenu
    },
  },
  data () {
    return {
      drawer: true,
      fixed: false,
      right: true,
      tabs: null,
      tabsItems: [
        {id: 1, title: 'Indicators', link: 'indicators'},
        {id: 2, title: 'Backup', link: 'backup'},
        {id: 3, title: 'Logs', link: 'logs'}
      ],
    }
  },
  methods: {
    toggleMini () {
      this.$store.commit('TOGGLE_MENU_MINI')
    }
  }
}
</script>

<style>
.bottom-menu {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.searching {
  overflow: hidden;
  width: 208px;
  padding-left: 8px;
  transition: $primary-transition;
}
.searching--closed {
  padding-left: 0;
  width: 0;
}
.searching > * {
  right: 8px;
}
.searching--closed > * {
  display: none;
}
.hidden-searching {
  @media $display-breakpoints.sm-and-down {
    display: none !important;
  }
}
.list-border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}

.subheader {
  text-transform: uppercase;
}
</style>