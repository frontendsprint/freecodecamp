//Change the Prototype to a New Object

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 3,
    eat: function() {
      console.log('nom nom nom');
    },
    describe: function() {
      console.log('My name is' + this.name)
    }
  
  };