<template>
    <div>
        <h1>count: {{ $store.state.count }}</h1>
        <button class="button" @click="increment">+</button>
    </div>
</template>

<style scoped lang="sass">
    .button {
        display: flex; /* autoprefix test */
        background: linear-gradient(to bottom, white, lightblue);

        &:hover { /* sass test */
            opacity: 0.6;
        }
    }
</style>

<script>
    export default {
        methods: {
            increment() {
                this.$store.dispatch('INCREMENT_COUNTER')
            }
        },
        name: 'counter'
    }
</script>
