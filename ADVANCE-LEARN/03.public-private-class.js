class One{
    nikName = null;  // Private variable
    static count = 0;
    constructor(name){
        this.name = name;
        One.count += 1; // Way to access static.
    }
    changeNikName(name){
        if (name == undefined){
            this.nikName = "golu"
        }else{
            this.nikName = name;
        }
        
    }
}

const o = new One("jaimin");
// const p = new One("gunjan");
// console.log(One.count);
// o.changeNikName('jigo')
o.changeNikName()
// p.changeNikName('bbu')
// console.log(o.name)
console.log(o.nikName)
