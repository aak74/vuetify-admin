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
  <sidebar-toggler :mini="miniMenu" />
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
import SidebarToggler from './SidebarToggler'
import status from '../mixins/status'

export default {
  name: 'Sidebar',
  components: {
    MenuItems,
    SidebarToggler
  },
  mixins: [ status ],
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
      tabs: null,
    }
  },
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