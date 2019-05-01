// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })
console.log(__dirname, __filename);

class Person {
   constructor(name, age){
      this.name = name;
      this.age = age;
   }
   greeting(){
      return `My name is ${this.name} I'm ${this.age} old `;
   }
}

module.exports = Person;