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
  />
</div>
</template>

<script>
import DataTable from '../components/DataTable'
import status from '../mixins/status'

export default {
  name: 'Users',
  components: {
    DataTable
  },
  props: ['currentEntity'],
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
    headers () {
      let headers = this.$store.state.data.currentHeaders.slice();
      if (this.controls && this.controls.length) {
        headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
      }
      return headers;
    },
    items () {
      return this.$store.getters.items;
    },
    controls () {
      return [
        {name: 'Edit', icon: 'edit', color: 'teal', emit: 'editItem'},
        {name: 'Delete', icon: 'delete', color: 'pink', emit: 'deleteItem'},
      ]
    },
    routeName () {
      return this.$route.name;
    }
  }
}
</script>