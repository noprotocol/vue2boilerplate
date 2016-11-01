<template>
    <div>
        <h1>{{label}}: {{count}}</h1>
        <button @click="increment">+</button>
    </div>
</template>

<script>
const Counter = {
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
export default Counter
</script>