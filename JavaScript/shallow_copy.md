# Shallow Copy (얕은 복사)

만약 배열을 복사한 후 복사본만 변경하고 싶을 떄,

```JavaScript
let nums = [1, 2, 16, 35, 44, 100, 200, 500];
let nums2 = nums;
nums2.sort();

console.log(nums2); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
console.log(nums); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
```

당연히 원본의 배열까지 바뀌게 됨. 이때 반복문을 쓰지 않고 간편하게 할 수 있는 `shallow copy`에는 2가지 방법이 있음:

1. `...` Spread element
    - works only with objects that are iterable

```JavaScript
let nums = [1, 2, 16, 35, 44, 100, 200, 500];
let nums2 = [...nums]; // spread operator
nums2.sort();

console.log(nums2); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
console.log(nums); // [ 1, 2, 16, 35, 44, 100, 200, 500 ]
```

2. Array.from()
    - work also on array-like objects that are not iterable

```JavaScript
const arrayLikeObject = { 0: 'a', 1: 'b', length: 2 };

console.log(Array.from(arrayLikeObject));
// ['a', 'b']

console.log([...arrayLikeObject]);
// Error occur
```

