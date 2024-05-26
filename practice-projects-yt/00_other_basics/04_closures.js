function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increaed to ${count}`)
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};  // return this as obj
}

const counter = createCounter();
counter.increment();
counter.increment();


console.log(counter.getCount())
