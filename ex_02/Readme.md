```
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}
```

- 클로저 함수 : id를 매개변수로 받고, id를 return
  function (id) {
  retrun function() {
  return id;
  }
  }

- arr[i] = (function (id) {...})(i) : i가 id에 전달된다
  - for 문이 시작되면 위 함수가 '즉시실행'되기 때문에 arr[i]에 바로 값이 할당된다.
