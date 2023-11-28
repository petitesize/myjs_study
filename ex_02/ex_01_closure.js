```클로저 함수```
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}
for (var index in arr) {
  console.log(arr[index]());
}

```아래의 실행 값은 5 5 5 5 5 이다.```

var arr = []
// for문이 실행되면 각 arr[i]는 retrun i를 가진다.
// for문을 모두 마치면, i는 5가 되고, 각 arr[i]들은 return 5를 하기 때문에
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
