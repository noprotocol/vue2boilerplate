<template>
    <div class="hompage">
        <h1>Homepage</h1>
        <div class="homepage_user" v-for="user in users">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
    import './Homepage.scss'
    import api from '../services/api'

    export default {
        name: 'Homepage',
        subscriptions: {
            users: api.users$.startWith([])
        },
        methods: {
            hide(user) {
                console.log(user)
            }
        }
    }
</script>