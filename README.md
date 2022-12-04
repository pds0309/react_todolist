## React Todolist app

<br>

### 목표

- todo를 등록
- todo 목록을 상태별(진행중, 완료)로 조회
- todo 상태(진행중, 완료)를 수정
- todo를 삭제

<br>

### Assignment Checklist

**기본적인 구성**

- [x] 기본 레이아웃, 스타일을 구성
- [x] Header section 구성
- [x] TODOLIST 페이지, 상태를 구성

<br>

**TODO를 등록할 수 있다.**

- [x] todo `title`, `content`를 입력받아 TODO를 생성할 form section component를 구성
- [x] todo 등록 기능 추가 : todo 등록 시 `진행중` 상태가 된다.

<br>

**TODO목록이 보여진다.**

- [x] `todo_cardlist` 컴포넌트를 구성
- [x] `todo_card` 컴포넌트를 구성
- [x] `완료`, `진행중` 목록으로 보여질 수 있다.

<br>

**TODO 상태를 변경, 삭제할 수 있다.**

- [x] `todo_card`가 `진행중` 또는 `완료` 상태로 변경될 수 있다: `todo_card` `완료` 버튼을 위한 기능을 구현
- [x] 삭제 시 `todo_cardlist`에서 삭제되어야 한다: `todo_card` `삭제` 버튼을 위한 기능을 구현

<br>

**Redux 적용하기**

- [x] 기존 todo `state` `props`를 리덕스 전역 상태 관리로 리팩터링

<br>

**routing, details Page**

- [ ] `todoDetail` 페이지를 구성
- [ ] routing 적용 - 카드를 클릭해 페이지로 이동할 수 있다.

### etc

- [x] `proptypes`를 사용해 `type-safe`하게 구성하라

```javascript
    'react/prop-types': 'error',
```
