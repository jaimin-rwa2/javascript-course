class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    get combName(){
        return this._name + this._age;  // get & set both methods are set then only _variable return valid value.
    }

    set name(newName){
        if(newName!=this.name && newName != "" && newName != "jaimin"){
            this._name = newName;
        }else{
            console.log("not valid inputs")
        }
    }
}

class Rebbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const rebbit = new Rebbit("rebbit", 19, 24);
const fish = new Fish("fish", 12, 16);


console.log(rebbit.name)
rebbit.name = "jaimin" // this will not work
console.log(rebbit.age)
console.log(rebbit.combName)
