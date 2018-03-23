<template>
<v-toolbar
  app
  flat
  dense
  color="primary"
  dark
>
  <top-menu />
  <v-spacer></v-spacer>
  <search-bar />
  <notifications-icon 
    :badge="notifications.items.length"
    :title="notifications.title"
    @click="togglePanel"
  />
  <user-menu />
</v-toolbar>
</template>

<script>
import SearchBar from './SearchBar'
import TopMenu from './TopMenu'
import NotificationsIcon from './NotificationsIcon'
import UserMenu from './UserMenu'

export default {
  name: 'TopToolbar',
  components: {
    SearchBar,
    TopMenu,
    NotificationsIcon,
    UserMenu
  },
  computed: {
    notifications () {
      return this.$store.state.notifications
    },
  },
  methods: {
    togglePanel () {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', true)
    }
  }
}
</script>
