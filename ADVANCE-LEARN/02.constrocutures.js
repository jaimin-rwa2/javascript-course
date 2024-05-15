function CunstructorName(name, address, bod) {
    this.name = name,
    this.address = address,
    this.bod = bod
    this.myFunc = function () {
        console.log(`my name is ${this.name}`)
    }
}


let obj = new CunstructorName("jaimin", "add", "14-11-1999")
obj.myFunc()