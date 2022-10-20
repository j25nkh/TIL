var age = 30;

const ken = {
  age: 20,
  logAge: function () {
    // 대부분의 상황에서 `this`는 객체입니다.
    console.log(this.age);
  },
};

const func = ken.logAge;

ken.logAge();
func();