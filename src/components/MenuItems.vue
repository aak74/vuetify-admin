<template>
  <div>
    <v-list 
      subheader 
      :class="{'list-border-bottom' : mini}" 
      v-for="menu in items"
    >
      <v-subheader>{{ menu.title }}</v-subheader>
      <template v-for="item in menu.items">
        <v-tooltip right :disabled="!mini">
          <v-list-tile
            :key="item.icon"
            :to="item.link"
            exact
            slot="activator"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
            <span v-text="item.title"></span>
        </v-tooltip>
      </template>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'MenuItems',
  props: ['items', 'mini']
}
</script>
