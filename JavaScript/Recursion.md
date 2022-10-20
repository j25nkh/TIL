# Recursion (재귀)

> 스스로를 다시 부르는 행위

재귀 함수를 구현할 때는 반드시 `Termination Case`가 있어야 함

Life of rabbit 예제: 첫 해에는 토끼 한쌍, 토끼가 태어난 후 셋때 해부터 매해 한쌍의 토끼를 낳을 때 n해의 토끼수를 구하는 공식 (`피보나치 수열`)

```JavaScript
function rabbits(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return rabbits(n - 1) + rabbits(n - 2);
}
```

Factorial의 값을 구하는 예제:

```JavaScript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n = n * factorial(n - 1);
}

// factorial(5) = 120
```


