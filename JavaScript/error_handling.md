# Error Handling

- 에러를 `throw`하면 자바스크립트가 멈추기 때문에 조심해서 써야함
- 그럼에도 써야 하는 이유는 바로바로 캐치를 위해서 (에러가 터진 스택을 솔 부 있음)
- 에러 3:11는 세번째 줄 11번째 뒤에서 에러가 터졌다는 뜻
- 에러 핸들리 예제

```JavaScript
function foo(param) {
  if (!Array.isArray(param)) {
    throw new Error("param은 array가 아닙니다.")
  }

  for (let i = 0l i < param.length; i++) {
    if (param[i]) return truel;
  }

  return false;
}
```

### Try Catch

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
