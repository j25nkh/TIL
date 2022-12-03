# Try Catch

- `동기`흐름의 가장 기본적인 에러 핸들링

```JavaScript
// 출처: 바닐라코딩
try {
    something();
    somethingElse();
    somethingOther();
} catch (err) {
    // Error Handling
    console.error(err);
}
```

- async await을 사용하여 비동기가 동기 흐름처럼 사용될 때 try..catch 구문을 사용할 수 있음

```JavaScript
// 출처: 바닐라코딩
function foo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(2);
      reject();
    }, 1000);
  });
}

async function bar() {
  try {
    const a = await foo();
    const b = await foo();
    return a;
  } catch (err) {
    console.error(err);
  }
}

bar();
// 2
// Cannot read properties of undefined (reading 'toString') 
```
