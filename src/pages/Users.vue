<template>
<div>
  Users
</div>
</template>

<script>
export default {
  name: 'Users',
  watch: {
    '$route': {
      handler: 'fetchData',
      // handler: this.fetchData,
      immediate: true
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadUsers');
      // this.error = this.post = null
      // this.loading = true
      // // замените здесь `getPost` используемым методом получения данных / доступа к API
      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
    }
  }
  // beforeRouteEnter (to, from, next) {
  //   console.log('beforeRouteEnter', to, from);
  //   next()
  // },  
}
</script>