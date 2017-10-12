<template>
  <div class="home">
    <my-title/>
    <router-link :to="{ name: 'other', params: {id: 2} }">go other page</router-link>
  </div>
</template>

<script>
import MyTitle from '../Title'

export default {
  name: 'Home',
  components: {
    MyTitle
  },
  data() {
    return {}
  },
  computed: {
    msg () {
      return this.$store.state.home.msg
    }
  },
  methods: {
    change() {
      this.$store.commit('changeMsg')
    }
  },
  mounted() {

  }
}
</script>
