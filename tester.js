function Animal (name) {
    this.name = name;
  }
  
  Animal.prototype.sleep = function () {
    console.log("sleep");
  };
  
  function Human (name, language) {
    Animal.call(this, name);
    this.language = language
  }
  
  Human.prototype = Object.create(Animal.prototype);
  // Animal.prototype이 프로토타입인 빈 객체가 Human.prototype의 프로토타입
  
  Human.prototype.constructor = Human;
  // 모든 constructor (생성자함수)에 프로토타입이 존재하듯, 모든 프로토타입에도 constructor가 존재
  // 윗 줄에서 prototype을 지정해주었기 때문에 constructor 또한 지정해주어야 함
  
  Human.prototype.write = function () {
    console.log("write");
  };
  
  // inheritance를 통해 Object > Animal > Human 순으로 계층이 형성
  
  var dog = new Animal("badooki");
  var ken = new Human("ken", "Korean");

console.log(dog);
console.log(dog.name);
console.log(dog.language);

console.log(ken);
console.log(ken.write);
 