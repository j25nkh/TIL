# Functional Programming (함수형 프로그래밍)

### 함수형 프로그래밍의 3가지 특징

1. `Pure Function` (순수함수): Side Effect (외부의 scope를 참조하여 데이터를 변경)가 없는 함수
2. `Immutability` (불변성): 한번 할당된 데이터가 변하지 않음
3. `Referential Transparency` (참조투명성): 함수가 호출된 결과 값과 함수의 호출은 서로 동일하게 여겨져 서로 대체 가능함. 위 1, 2의 조건이 충족되는 함수는 참조투명함

### 함수를 조립해서 사용하는 방법들

1. HOF (고차함수): 함수를 함수로 감싸서 추가적인 기능 부여

    출처: 바닐라코딩
    ```JavaScript
    function loveAnimal(animal) {
        return `I love ${animal}.`;
    }

    function checkIsAnimal(animal, callback) {
    const humans = ["Ken", "Justin", "Leo"];

    if (humans.includes(animal)) {
        console.log("It is not an Animal!");
        return;
    } else {
        return callback(animal);
    }
    }

    checkIsAnimal("cheetah", loveAnimal);
    ```
    함수 loveAnimal 에 전달될 인자가 인간인지 아닌지 확인하기 위해 checkIsAnimal 이라는 고차함수로 감싸줌

2. Composition (함수조합)

    출처: 바닐라코딩
    ```JavaScript
    // 순수함수들
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    // 선언된 (순수한) 합성함수
    const calculate = (a, b, c) => add(multiply(a, b), c);

    const a = calculate(1, 2, 3);
    const b = calculate(4, 5, 6);
    const c = calculate(7, 8, 9);
    ```
3. Curring (커링): 여러개의 인자를 받는 함수를, 동일한 기능의 더 적은 인자를 받는 함수로 변환시키는 과정

    출처: 바닐라코딩
    ```JavaScript
    // 커링 미적용, 2개의 인자를 받아 결과 반환
    function loveAnimals(name1, name2) {
        return `I love ${name1} and ${name2}`;
    }

    // 커링 적용
    loveAnimals("dogs", "cats");

    function loveAnimals(name1) {
        return function (name2) {
            return `I love ${name1} and ${name2}`;
        };
    }

    // partial application
    const loveDogsAnd = loveAnimals("dogs");

    loveDogsAnd("cats");
    loveDogsAnd("tigers");
    loveDogsAnd("lions");

    // 또는
    loveAnimals("dogs")("cats");
    ```
