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
    <v-list-tile @click="">
      <v-list-tile-action>
        <v-icon>person_add</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>
        12 new users registered
      </v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile @click="">
      <v-list-tile-action>
        <v-icon>data_usage</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>
        DB overloaded 80%
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'Notifications',
  data () {
    return {
      right: true,
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
