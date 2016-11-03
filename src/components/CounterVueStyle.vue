<template>
    <div>
        <h1>{{label}}: {{count}}</h1>
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
const CounterVueStyle = {
    props: ['label'],
    data: () => ({
        count: 0
    }),
    methods: {
        increment() {
            this.count++
        }
    }
}
export default CounterVueStyle
</script>