<template>
  <span>
    <h1>Vue2 Boilerplate</h1>
    <router-view></router-view>
  </span>
</template>

<script>

import { sync } from 'vuex-router-sync'
import router from '../router'
import store from '../store'

export default {
    name: "App",
    store,
    router
}

</script>