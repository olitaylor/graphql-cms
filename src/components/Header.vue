<template>
  <div>
    <router-link to="/">Dashboard</router-link>
    <router-link to="account">Account</router-link>

    <div data-netlify-identity-menu></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
