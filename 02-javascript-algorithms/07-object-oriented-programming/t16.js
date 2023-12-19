//Understand the Prototype Chain

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  
  
  Object.prototype.isPrototypeOf(Dog.prototype);