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
