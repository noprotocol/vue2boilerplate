<template>
    <router-view></router-view>
</template>

<script>

import { sync } from 'vuex-router-sync'
import store from '../services/store'
import router from '../services/router'

sync(store, router) 

export default {
    name: 'App',
    store,
    router
}

</script>