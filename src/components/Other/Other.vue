<template>
  <div class="other">
    <my-title/>
    <router-link :to="{ name: 'home', params: {id: 4} }">go home page</router-link>
  </div>
</template>

<script>
import MyTitle from '../Title'

export default {
  name: 'other',
  components: {
    MyTitle
  },
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