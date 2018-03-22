<template>
<v-toolbar
  app
  flat
  dense
  color="primary"
  dark
>
  <v-toolbar-side-icon
    @click.stop="drawer = !drawer"
    class="hidden-lg-and-up"
    :class="searching ? 'hidden-xs-only' : ''"
  />
  <top-menu />
  <v-spacer></v-spacer>

  <search-bar />

  <v-tooltip bottom>
    <v-btn icon @click.stop="togglePanel" slot="activator">
      <v-badge color="red" overlap>
        <span slot="badge">2</span>
        <v-icon>notifications</v-icon>
      </v-badge>
    </v-btn>
    <span>2 unread notifications</span>
  </v-tooltip>

  <v-menu
    bottom
    left
  >
  <v-btn icon slot="activator">
    <v-avatar class="white" size="32">
      <v-icon color="primary">person</v-icon>
    </v-avatar>
  </v-btn>
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-avatar class="primary" size="48px">
            <v-icon dark>person</v-icon>
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>John Doe</v-list-tile-title>
          <v-list-tile-sub-title>Administrator</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>

      <v-list-tile key="profile" @click="">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>My Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>

      <v-list-tile key="lock_open" @click="">
        <v-list-tile-action>
          <v-icon>lock_open</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</v-toolbar>
</template>

<script>
import SearchBar from './SearchBar'
import TopMenu from './TopMenu'

export default {
  name: 'TopToolbar',
  components: {
    SearchBar,
    TopMenu
  },
  computed: {
    searching () {
      return this.$store.state.searching
    },
  },
  methods: {
    togglePanel () {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', true)
    }
  }
}
</script>
