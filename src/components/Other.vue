<template>
  <div class="other">
    <h1>This is other page!</h1>
    <router-link :to="{name: 'home'}">go home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Other'
}
</script>