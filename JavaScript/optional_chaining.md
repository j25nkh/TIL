# Optional Chaining `?.`

- `?.` 앞의 평가 대상이 `undefined`나 `null`이면 평가를 멈추고 `undefined`를 반환
- 프로퍼티가 없는 중첩 객체를 에러없이 안전하게 접근 가능
- 기존 &&을 사용하여 프로퍼티가 존재하는지 확인 후 접근했던 방식을 대체

[참고: JavaScript.info](https://ko.javascript.info/optional-chaining)

- property가 없을 경우 error 발생
    ```JavaScript
    let user = {}; // 주소 정보가 없는 사용자
    alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
    ```
- 따라서 && 연산자를 사용하여 property 존재하는 지 확인
    ```JavaScript
    let user = {}; // 주소 정보가 없는 사용자
    alert(user && user.address && user.address.street); // undefined, 에러가 발생하지 않습니다.
    ```
- 옵셔널 체이닝 사용
    ```JavaScript
    let user = {}; // 주소 정보가 없는 사용자
    alert( user.address?.street ); // undefined, 에러가 발생하지 않습니다.
    ```

    - 옵셔널 체이닝은 존재하지 않아도 괜찮은 대상에만 사용해야 함
    - 위의 예제에서 논리상 user는 반드시 있어야 하므로 user?.을 사용하지 않음
    - 또한 실수로 user에 값을 할당하지 않았다면 에러를 알아차릴 수 있어야 함
    - `?.`앞의 변수는 꼭 선언되어 있어야 함

### Optional Chaining 응용

```JavaScript
let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  }
}

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.(); // 에러없이 평가 멈춤
```

- `?.`은 `delete`와 조합하여 사용 가능

```JavaScript
delete user?.name; // user가 존재하면 user.name을 삭제합니다.
```