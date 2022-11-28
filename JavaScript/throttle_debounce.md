# Throttle & Debounce

- 성능 향상을 목적으로 이벤트나 함수의 실행을 제어하는 것

### Debounce

- 함수 호출시 일정 시간 후 실행
- 만약 일정 시간 내 같은 요청이 추가로 들어오면 `이전 호출은 취소`

### Throttle

- 함수가 호출되어 실행되면, 일정기간동안 동일한 함수가 실행되지 않음

쓰로틀 구현
```JavaScript
function throttle(func, wait) {
  let throttleOn = false; // 처음 한번은 바로 실행되도록 throttle off

  return function() {
	  if (!throttleOn) {
		  func(); // 1) 함수를 실행
		  throttleOn = true; // 2) throttle on

		  setTimeout(function () {
			  throttleOn = false; // 3) wait만큼 시간이 지난 후 throttle이 off 되면서 다시 실행 가능
		  }, wait);
	  }
  };
};
```
