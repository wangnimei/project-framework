<template>
  <div class="home">
    <h1>This is home page!</h1>
    <router-link :to="{name: 'other'}">go other page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

