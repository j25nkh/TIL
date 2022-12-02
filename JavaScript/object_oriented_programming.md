# OOP: Object Oriented Programming (객체지향형 프로그래밍)

- 객체지향 프로그래밍의 4가지 특징
  1. Abstraction (추상화): 세부적인 것들을 제외하여 공통의 속성과 기능을 명확히 하는 것
  2. Encapsulation (캡슐화): 외부에서 객체의 정보에 직접 접근할 수 없도록 정보를 보호하는 것
  3. Inheritance (상속): 재사용을 위해 상위 개념의 특징을 하위개념이 물려받는 것
  4. Polymorphism (다형성): 다양한 형태의 제공을 통해 유연성을 높임



### Factory Fuction (팩토리 함수) 사용
  - object를 return하는 방식으로 사용

```JavaScript
function factoryPerson(name, language, profession) {
  return {
    name,
    language,
    profession,
    eat: function() {
      console.log("Yum yum");
    }
  }
}

const FacotoryJake = factoryPerson("Jake", "Korean", "Developer");
console.log(FacotoryJake); 
// { name: 'Jake', language: 'Korean', profession: 'Developer', eat: [λ: eat] }
FacotoryJake.eat(); //Yum yum
```

### Constructor Fuction (생성자 함수) 사용

  - `new` 키워드 사용
  - `This` 사용
  - 대문자 네이밍
  - `prototype`을 이용한 메소드 생성

```JavaScript
function ConstructorPerson(name, language, profession) {
  this.name = name;
  this.language = language;
  this.profession = profession
}

ConstructorPerson.prototype.eat = function () {
  console.log("Yum yum");
}

const ConstructorJake  = new ConstructorPerson("Jake", "Korean", "Developer");
console.log(ConstructorJake);
// { name: 'Jake', language: 'Korean', profession: 'Developer' }
ConstructorJake.eat(); // Yum yum
```

### Class 사용

  - 2015년 도입, 묶어서 보기 편함

```JavaScript
class classPerson {
  constructor(name, language, profession) {
    this.name = name;
    this.language = language;
    this.profession = profession
  }

  eat() {
    console.log("Yum yum");
  }
}

const ClassJake  = new classPerson("Jake", "Korean", "Developer");
console.log(ClassJake); 
// { name: 'Jake', language: 'Korean', profession: 'Developer' }
ClassJake.eat(); //Yum yum
```
