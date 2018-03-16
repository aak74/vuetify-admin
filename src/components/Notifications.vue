<template>
<v-navigation-drawer
  temporary
  :right="right"
  :value="panelNotificationsVisible"
  @input="inputPanelVisibility"
  fixed
  app
>
  <v-toolbar flat prominent dark class="primary">
    <v-toolbar-title>Notifications</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="closePanel">
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
  <v-list subheader dense>
    <v-subheader>All notifications</v-subheader>
    <notification 
      v-for="(notification, index) in notifications" 
      :title="notification.title" 
      :icon="notification.icon" 
      :key= "index"
    />
  </v-list>
</v-navigation-drawer>
</template>

<script>
import Notification from './Notification'

export default {
  name: 'Notifications',
  components: {
    Notification
  },
  props: ['right'],
  data () {
    return {
      notifications: [
        {
          title: '12 new users registered',
          icon: 'person_add',
        },
        {
          title: 'DB overloaded 80%',
          icon: 'data_usage',
        }
      ]
    }
  },
  computed: {
    panelNotificationsVisible () {
      return this.$store.state.panelNotificationsVisible
    }
  },
  methods: {
    inputPanelVisibility (visible) {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', visible)
    },
    closePanel () {
      this.$store.commit('SHOW_PANEL_NOTIFICATIONS', false)
    }
  }
}
</script>
