<template>
  <div class="other">
    <h1>{{msg}}</h1>
    <router-link :to="{ name: 'home', params: {id: 4} }">go home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'other',
  computed: {
    msg() {
      return this.$store.state.other.msg
    }
  },
  created() {
    // console.log(this.$route.params)
  }
}
</script>

