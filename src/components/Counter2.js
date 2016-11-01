
const Counter = {
    props: ['label'],
    data: () => ({
        count: 0
    }),
    render(h) {
        const {label, count, increment} = this
        return <div>
            <h1>{label}: {count}</h1>
            <button on-click={increment}>+</button>
        </div>
    },
    methods: {
        increment() {
            this.count++
        }
    }

}

export default Counter