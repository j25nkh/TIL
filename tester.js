console.log(0); // 동기

const p1 = new Promise(function (resolve, reject) {
  console.log(1); // 동기로 바로 실행

  setTimeout(function () {
    console.log(2); // 비동기
    resolve();
  }, 1000);
});

console.log(3); // 동기

p1.then(function one () {
  console.log(4); // 비동기
})
  .then(function two () {
    console.log(5); // 비동기
  })
  .catch(function onError () {
    console.log(6); // 비동기
  })
  .finally(function final () {
    console.log(7); // 비동기
  });

console.log(8); // 동기

// 찍히는 순서는 0 - 1 - 3 - 8  - (1초뒤) - 2 - 4 - 5 - 7
