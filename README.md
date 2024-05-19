# react-modules

### Modal component

- [x] 모달 props
  - [x] 모달 위치
  - [x] 모달 타이틀
  - [x] 모달 내용
  - [x] 모달 닫는 방식
    - [x] prop 이름 : closeButtonPosition : 'top' | 'bottom'
- [x] 모달 event
  - [x] 열기
  - [x] 닫기 - dimmer 눌러도 닫혀야된다.
  - [ ] 확인 - optional
- [x] npm으로 배포하기
- [x] 설치 후 import해서 사용하기

### Payment custom hook

- 유효성 검사 결과와 에러 정보를 반환한다.

- [x] useCardNumber
  - [x] 숫자여야한다.
  - [x] 16자리여야한다.
- [x] useCardHolder
  - [x] 영어 대문자+공백만 입력가능하다.
  - [x] 공백 포함 15자까지만 가능하다.
- [x] useExpiryDate
  - [x] 월은 1~12만 입력 가능하다. (월도 두자리로 입력해달라는 description 추가 )
  - [x] 년도 2자리 숫자만 입력 가능하다.
  - [x] 년,월 조합을 봤을 때 오늘보다 과거이면 에러를 낸다.
- [x] useCVC
  - [x] 3자리 숫자만 입력 가능하다.
- [x] useCardType
  - [x] 선택한 값이 있는지 검증한다.
- [x] usePassword
  - [x] 2자리 숫자만 입력 가능하다.
- [ ] npm으로 배포하기
- [ ] 설치 후 import해서 사용하기

  ### Storybook

  - [x] 모달 위치에 대한 테스트 시나리오
  - [x] 모달 내용에 대한 테스트 시나리오
  - [x] 모달 이벤트 핸들러에 대한 테스트 시나리오

  ### RTL

  - [ ] 페이먼트 유효성 검사 커스텀 훅의 동작을 검증
  - [ ] 다양한 입력 값에 대한 커스텀 훅의 결과
    - [ ] 유효성 통과하는 경우
    - [ ] 유효성 통과하지 않는 경우

---

step2 기능 구현 목록

### Modal

- [x] Alert 모달 구현
- [x] Confirm 모달 구현
- [x] Prompt 모달 구현
- [x] Modal Size Option 제공
  - [x] 모바일,태블릿,pc 화면 별로 small,medium,large 사이즈 옵션 제공

### Hooks

- [x] 카드 식별 모듈
  - [x] AMEX,Diners,UnionPay 추가
- [x] 카드 번호 포맷팅 기능 추가

- [x] 커스텀 훅스에 대한 RTL 작성
- [ ] Storybook 구현
