<template>
<div>
  <h2>{{ routeName }}</h2>
  <data-table
    :headers="headers"
    :items="items"
    :loading="status.loading"
    :controls="controls"
    @editItem="editItem"
    @deleteItem="deleteItem"
    v-if="isShow"
  />
</div>
</template>

<script>
import DataTable from '../components/DataTable'
import status from '../mixins/status'

export default {
  name: 'Entity',
  components: {
    DataTable
  },
  mixins: [status],
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadEntity', this.$route.meta);
    },
    editItem (item) {
      console.log('Data editItem', item);
    },
    deleteItem (item) {
      console.log('Data deleteItem', item);
    },
  },
  computed: {
    // currentHeaders () {
    //   return this.$store.state.data.currentHeaders;
    // },
    controls () {
      return this.$store.state.ui.defaultControls;
    },

    isShow () {
      // return true;
      return this.headers && this.headers.length;
    },

    // headers () {
    //   let headers = this.currentHeaders.slice();
    //   if (this.controls && this.controls.length) {
    //     headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
    //   }
    //   return headers;
    // },
    items () {
      return this.$store.getters.items;
    },
    headers () {
      return this.$store.getters.headers;
    },
    routeName () {
      return this.$route.name;
    }
  }
}
</script>