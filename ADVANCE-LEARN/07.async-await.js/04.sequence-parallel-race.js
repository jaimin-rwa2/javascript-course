// Promise.race(promises) // : race will return only one Promise but accepts array of promise
// promise which will complete first will be returned and other will be discarded.


const promisify = (item, delay) => 
    new Promise((resolve)  => 
        setTimeout(()=> 
            resolve(item), delay));

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000)




async function sequence(){
    let start = new Date().getTime();

    const output1 = await a(); 
    const output2 = await b(); 
    const output3 = await c(); 
        
    let end = new Date().getTime();
    let time = end - start;
    console.log("Time taken by sequence : "+time)

    return `parallel is done: ${output1}, ${output2}, ${output3}`
}
// console.log(parallel())  : this dose not return apropreate values 

sequence().then(console.log) // : but this works


async function parallel(){
    let start = new Date().getTime();

    const promises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all(promises)
        
    let end = new Date().getTime();
    let time = end - start;
    console.log("Time taken by parallel : "+time)

    return `parallel is done: ${output1}, ${output2}, ${output3}`
}
// console.log(parallel())  : this dose not return apropreate values 

parallel().then(console.log) // : but this works




async function race(){
    let start = new Date().getTime();

    const promises = [a(), b(), c()]
    const output = await Promise.race(promises)
        
    let end = new Date().getTime();
    let time = end - start;
    console.log("Time taken by race : "+time)

    return `parallel is done: ${output}`
}
// console.log(parallel())  : this dose not return apropreate values 

race().then(console.log) // : but this works