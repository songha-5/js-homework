# 커밋 컨밴션
feat: 새로운 기능 / UI 화면 추가

style: UI 디자인 변경 (CSS, 마크업 수정)

docs: 문서 수정

refactor: 결과 변경 없는 구조 개선

fix: 버그 수정

a11y: 웹 접근성 개선

chore: 설정, 빌드, 패키지

## 커밋 메세지 예시

``feat: 헤더 로고 추가``

``style: 헤더 로고 width, height 추가``

``docs: README.md에 커밋 컨벤션 항목 추가``


# 네이밍 규칙
- const: 기본 - camelCase
- 영원히 변하지 않는 값 - 대문자, 대문자_사이는_언더스코어_추가
- let: camelCase
- var: 사용지양

## 네이밍 예시

``const=ID_CARD``

``let=selectOption``

---
---

# - 과제 수행 과정 기록
- 문서/과제를 제대로 이해후 폴더구조를 작성해야하는데 마음이 급해서 중간에 불필요한 작업(폴더구조를 뒤바꿈)을 하게됨
- 변수/상수명 짓는게 고민이 된다 너무 긴거같긴한데 내용을 다 넣어야할거같다는 고민이 든다. 일단 후자를 선택하긴 했지만 여전히 고민이 크다
- 커밋 컨벤션이 제대로 짜였는지 의문이 든다 parseInt에 10진수만 추가하는데 feat으로 다는게 맞는지 모르겠다.
- 상수명을 한번 더 바꿨다 과제하다 찾아보니 상수명이 시스템ID같은 경우만 대문자만 사용한다고해서 다 바꾸게 됬다 
- 한두시간 정도 코드를 째려보기만 했다. boolean을 사용하면 될거같은데 막상 짜보려니 어떻게 짜야할지몰라서 검색하는데 30분을 추가로 사용했다. 
- 이상하다. 됬다가 안됬다가 한다. 분명히 똑같은 조건식을 적었고 안되서 30분동안 고생했는데 다른 코드로 바꾸었다가 다시 그 코드를 주석 풀었더니 된다.

# - 테스트 코드 작성
- welcomeMessage()

  - console.log(welcomeMessage('김가가', true))
  - console.log(welcomeMessage('김나나', false))

- deliveryCalculate()

  - console.log(deliveryCalculate('0', '제주'))
  - console.log(deliveryCalculate('3000', '도서'))
  - console.log(deliveryCalculate('5000', '대구'))
  - console.log(deliveryCalculate('50000', '도서'))

# - 과제 코드 리뷰
- welcomeMessage 함수

  - welcomeMessage() 코드에서 "return (isVip && vipWelcome) || (isVip || nomalWelcome)" 이 코드가 읽기 너무 불편하고 한눈에 알아보기 힘들다. 
  
  - 실제로 "(isVip || nomalWelcome)" 이 코드에서 ||을 &&로 썼는데 작동이 안되서 꽤나 고생했다. 알고보니 &&연산자는 isVip값이 false면 더이상 연산을 돌리지 않기 때문에 뒤의 welcome값이 안보였던 것이였다.
  
  - isVip가 중복으로 들어가 해당 코드를 너무 읽기 힘들다. 물론 중간에 ||이 있어 두개 다른 연산자로 묶여있다는걸 알 수 있어 좋지만 뭔가 미묘하게 복잡하다고 느껴진다.

- deliveryCalculate 함수
  - 배열을 하나씩 const를 만들어서 제주, 도서로 만드니 쓰기도, 관리하기도 힘들었다 더 나은 방법이 없는지 알아봐야겠다.

# - 회고 (깨달은 점, 아쉬운 점 등)
- 첫 문제를 풀때, 결국 첫문제를 온전한 내 힘으로 풀지 못하고 검색을 사용해서 풀었다는 점에서 많이 아쉬웠다. 이 지식이 내 지식이 되려면 더 시간이 필요할거같다는 생각이 들고, 과제제출이 끝나면 이 문제랑 비슷한 문제를 풀어봐야겠다는 생각이 들었다.


# 노트정리
https://www.notion.so/3-2df953634c9d80228cc2df7749a19f89?source=copy_link