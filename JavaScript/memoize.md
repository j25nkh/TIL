# Memoization (메모이제이션)

> 함수호출 결과를 저장, 동일한 입력시 캐시된 결과를 반환하여 속도를 높이는 것

[참고](https://www.devh.kr/2020/Understanding-Memoization-In-JavaScript/)

```JavaScript
function memoizer(func){
  const cache = {};

    return function (...arguments) {
      let cacheKey = func;

      for (i = 0; i < arguments.length; i++) {
        cacheKey = cacheKey + arguments;
      }

      if (!cache[cacheKey]) {
        cache[cacheKey] = func(...arguments)
      }

      return cache[cacheKey];
    }
}

let add = function (a, b, c) {
  return a + b + c;
};

let memoAdd = memoize(add);
console.log(add(1, 2, 3)); // 6
console.log(memoAdd(1, 2, 3)); // 6
console.log(memoize(add)(1, 2, 3)); // 6
```
