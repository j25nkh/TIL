# DOM

> Documnet Object Model

HTML이란 초기 설계도의 개념으로 문서를 프로그래밍 하기 위한 interface.

Element (요소) 선택방법:

- ID: document.getElementById("~");
- Class: document.getElement`s`ByClassName("~");
- Tag: document.getElement`s`ByTagName("~");
- Selector: 
    - document.querySelector("`.`~");
    - document.querySelector`All`("`#`~"); (#~, .~, p 등)
    

# Element 조작

클래스 조작 (괄호 인자로서 "a", "b", array등 가능)
- .classList.add("~");
- .classList.remove("~");
- .classList.toggle("~");
    - 있으면 빼고, 없으면 넣음
    - toggle("visible", i < 10); 이런식으로 조건도 가능
- .classList.item(Number);
- .classList.contains(string);
- .classList.replace(old class, new class);

Element 추가 예시:

```JavaScript
var menu = document.createElement('a'); 
// 생성

menu.setAttribute('href', 'https://....';) 
// 속성추가

var span = document.querySleector('.pagetop'); 
//pagetop class 선택

span.appendchild(menu); 
//span (pagetop class)의 자식중 마지맞 위치에 추가
//append 대신 prepend를 사용하여 앞에 추가 가능

menu.style.width = '200px'
//style 설정에는 width 외에도 fontSize, height, background, display등 css요소가 있음
```
- loop을 이용해 append를 할 경우 document.createElement 또한 같이 loop을 해야 함
- .innerHTML = "~"; 을 통해 html의 내용을 변경할 수 있음

```JavaScript
document.body.innerHTML=""
//body의 전체 내용 삭제
```

# Events 조작

DomElement.addEventListener('mouseover' / 'click' / 'dblclick' 등), function(ev) {};

ev가 들어간 괄호에 들어가는 매개변수는 `event객체`라고 하며 통상 event, ev등으로 네이밍. 각종 event에 대한 상세정보가 이미 담겨있음.

예제 - HTML파트:

```HTML
<div>
    <p> 버튼 클릭시 경고 </p>
    <button> 경고1 </button>
    <button> 경고1 </button>
</div>
```

JavaScript 파트
```JavaScript
const div = document.querySelector("div");
div.addEventListener("click", function on Click (ev) {
    if (ev.target.tagName === "p") {
        return;
    }
    alert("경고합니다" + ev.target.textContent);
});
```

Target vs Current Target
- ev.target: event가 `발생`한 DOM Element `근원지`를 가리킴
- ev.currentTarget: event가 `등록`한 DOM Element를 가리킴



