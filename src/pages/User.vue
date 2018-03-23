<template>
<div>
  User {{ $route.params.id }}
</div>
</template>

<script>
export default {
  name: 'User',
  watch: {
    '$route' (to, from) {
      console.log('watch $route', to, from, this.$route.matched);
      
      
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', to, from);
    next()
  },  
}
</script>

