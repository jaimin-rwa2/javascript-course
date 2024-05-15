/* multipul promises to run ascyncroniously */
async function pss() {
    let start = new Date().getTime();

    const p1 = new Promise( (res, rej) => {
        setTimeout(res, 2000, "p1")
    })

    const p2 = new Promise( (res, rej) => {
        setTimeout(res, 5000, "p2")
    })

    const p3 = new Promise( (res, rej) => {
        setTimeout(res, 1000, "p3")
    })

    const p4 = new Promise( (res, rej) => {
        setTimeout(res, 3000, "p4")
    })

    let r = await Promise.all([p1, p2, p3, p4])
        .then(value => console.log(value))

    var end = new Date().getTime();
    var time = end - start;

    console.log("Time taken by p : "+time)

    return r
}
console.log(pss()) // gives log of pending

