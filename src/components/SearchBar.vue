<template>
  <div class="search-bar">
    <v-btn class="icon-search" icon @click.native.stop="searchBegin">
      <v-icon>search</v-icon>
    </v-btn>
    <div :class="{'searching--closed': !searching}" class="searching">
      <v-text-field
        id="search"
        :value="search"
        @update="update"
        append-icon="close"
        :append-icon-cb="searchEnd"
        label="Search"
        hide-details
        single-line
        color="white"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    search () {
      return this.$store.state.search
    },
    searching () {
      return this.$store.state.searching
    },
  },
  methods: {
    onBlur () {
      this.$store.commit('STOP_SEARCHING')
    },
    searchBegin () {
      this.$store.commit('START_SEARCHING')
      setTimeout(() => document.querySelector('#search').focus(), 50)
    },
    searchEnd () {
      this.$store.commit('STOP_SEARCHING')
      document.querySelector('#search').blur()
    },
    update (e) {
      console.log('update', e);
      
    }
  }
}
</script>

<style>
.search-bar {
  position: relative;
}

.search-bar > button,
.search-bar > div {
  float: left;
}
</style>
