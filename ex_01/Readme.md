## 강의 : https://opentutorials.org/course/743/6508(콜백)

```
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function (a, b) {
    return a - b;
};
```

https://opentutorials.org/course/50/109
: 생활코딩 JS 사전 - 배열(sort)

### 우선 배열 numbers[0], numbers[1]을 비교해보자

- 20 - 10 = 10 으로 양수 return
- 양수 값을 전달 받았으므로 두 배열의 값을 [10, 20 ...] 으로 순서를 바꾼다
- 그 다음, numbers[0], numbers[2]을 비교해보자
- 10 - 9 = 1 으로 양수 retrun
- 동일하게, [9, 20, 10 ...]
- 이렇게 반복하다 보면, 가장 작은 값인 1 값이 앞으로 가게 된다.
- 결과적으로 [1, 2, 3 ...] 으로 배열이 정렬된다.
