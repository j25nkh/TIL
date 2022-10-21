# Variable (변수)

> const, let, var

- 배열 객체는 메모리 주소를 참조하기 때문에 아래와 같이 const를 써도 내용을 바꿀 수 있으며, 인덱스에 접근해서 값을 변경하는 것도 가능

```JavaScript
const array = [1];
array.push(2);
array[2] = 3;
```

