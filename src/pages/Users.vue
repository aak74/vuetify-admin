<template>
<div>
  Users
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
  mixins: [status],
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadUsers');
    },
    editItem (item) {
      console.log('Users editItem', item);
    },
    deleteItem (item) {
      console.log('Users deleteItem', item);
    },
  },
  computed: {
    headers () {
      let headers = [
        { text: 'ID', value: 'id'},
        { text: 'Login', value: 'username'},
        { text: 'Fullname', value: 'fullname'},
      ];
      if (this.controls && this.controls.length) {
        headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
      }
      return headers;
    },
    items () {
      return this.$store.getters.users;
    },
    controls () {
      // return [];
      return [
        {name: 'Edit', icon: 'edit', color: 'teal', emit: 'editItem'},
        {name: 'Delete', icon: 'delete', color: 'pink', emit: 'deleteItem'},
      ]
    }
  }
}
</script>