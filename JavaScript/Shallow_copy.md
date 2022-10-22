# Shallow Copy (얕은 복사)

만약 배열을 복사한 후 복사본만 변경하고 싶을 떄,

```JavaScript
let nums = [1, 2, 16, 35, 44, 100, 200, 500];
let nums2 = nums;
nums2.sort();

console.log(nums2); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
console.log(nums); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
```

당연히 원본의 배열까지 바뀌게 됨. 이때 반복문을 쓰지 않고 간편하게 할 수 있는 방법에는 `shallow copy`가 있음:

```JavaScript
let nums = [1, 2, 16, 35, 44, 100, 200, 500];
let nums2 = [...nums];
nums2.sort();

console.log(nums2); // [ 1, 100, 16, 2, 200, 35, 44, 500 ]
console.log(nums); // [ 1, 2, 16, 35, 44, 100, 200, 500 ]
```