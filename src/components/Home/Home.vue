<template>
  <div class="home">
    <h1>{{msg}}</h1>
    <button @click="change">click</button>
    <input type="text" name="user">
    <router-link :to="{ name: 'other', params: {id: 2} }">go other page</router-link>
    <router-link :to="{ name: 'home', params: {id: 3} }">go this component</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  computed:{
    msg() {
      return this.$store.state.home.msg
    }
  },
  methods: {
    change() {
      this.$store.commit('changeMsg')
    }
  }
}
</script>
