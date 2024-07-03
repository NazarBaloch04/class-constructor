"use strict";
// Classes
// We declare a new Student. This class has three members: a property called name, age, slot, rollNo a constructor, and a method information.
// You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.
// In the last line we construct an instance of the Student class using new. This calls into the constructor we defined earlier, creating a new object with the BioData shape, and running the constructor to initialize it.
class Student {
    constructor(a, b, c, d) {
        this.name = a;
        this.age = b;
        this.slot = c;
        this.rollNo = d;
    }
    information() {
        return `Hello this is ${this.name} , i am ${this.age} old , my timing is wednesday${this.slot} and my rollNo: ${this.rollNo}`;
    }
}
let BioData = new Student("Nazar Baloch", 19, "2-5", 423110); //  Instance of a class  // Class ka Object //new keyword calls constructor function
console.log(BioData.information());
console.log(BioData);
// Inheritance
// In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance.
class Game {
    move(distanceInKilometers = 0) {
        console.log(`Wolf ran way   ${distanceInKilometers}Km.`);
    }
}
class Dog extends Game {
    bark() {
        console.log("after that dog did it prey");
    }
}
const dog = new Dog();
dog.move(10);
dog.bark();
