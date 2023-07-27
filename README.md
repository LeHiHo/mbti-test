# 🏃 스프린트 프로젝트 - MBIT 테스트 페이지 만들기

---

## ✏ 23.07.25
### ✅ 메인, 테스트페이지 구현 [[Feat: add main,test page]](https://github.com/LeHiHo/mbti-test/commit/79a9a814457d8c729ddec931aa45e3a961c9c3dd)
### 🤔 요구사항 도출
1. 메인 페이지 구현
   - 텍스트 박스(+ 폰트)
   - 이미지(+ 애니메이션)
   - START 버튼(+ 테스트 항목 띄워주기)
2. 테스트 페이지 구현
   - 문제, 답변 박스

### 🔍 요구사항 명세
1. 텍스트 박스
   - html + css로 적당히 구현(적당한 사이간격)
   - css로 폰트 연결
2. 이미지
   - 이미지 넣고 css로 돌아가게 만들기
3. START 버튼
   - 누르면 main section은 `display: 'none'`, test section은 `display: 'block'`
4. 문제, 답변 박스
   - html + css로 적당히 구현(추후 js와 연결해야됨)

### 🧘 회고
- 간단한 html 구조를 짜는것도 추후 연계된 기능을 상정해야한다.
- **여러 컴포넌트들을 하나로 묶는 형태가 이상적인가?**
- css 디렉티브(@)로 다양한 기능(?)을 추가할 수 있다.(ex. 반응형웹, 애니메이션...)
- `display` 속성으로 하나의 html로 여러 페이지가 있는것처럼 구현할 수 있다.
- `querySelector` or `getElement~`로 요소에 접근하고 `addEventListener`로 특정한 동작을 감지할 수 있다.
- 접근한 요소에 .style로 html태그의 style 속성을 조작할 수 있다.**(다른 속성도되나?..)**
  
---

## ✏ 23.07.26
### ✅ 테스트 페이지 기능구현 [[Feat: add function start, nextQuestion]](https://github.com/LeHiHo/mbti-test/commit/07ff66bd999611b5961a11fac4e9cb386535c2fa#)
### 🤔 요구사항 도출
1. 테스트 문항과 답변을 만들고 박스에 띄우기
2. 사용자가 문항박스에 마우스를 올리면 색깔을 변화시켜 무엇을 고르는지 명확히 알게하기
3. 테스트 답변 누르면 다음 문항 나오기
4. 사용자가 누른 답변을 배열 형태로 저장하기
5. 마지막 문항을 완료하면 결과페이지로 넘어가기
   
### 🔍 요구사항 명세
1. 테스트 문항과 답변을 만들고 박스에 띄우기
   - js에 배열로 저장하고 `innerText`로 삽입
2. 사용자가 문항박스에 마우스를 올리면 색깔을 변화시켜 무엇을 고르는지 명확히 알게하기
   - CSS :hover을 이용
3. 테스트 답변 누르면 다음 문항 나오기, 사용자가 누른 답변을 배열 형태로 저장하기, 마지막 문항을 완료하면 결과페이지로 넘어가기
   - nextQuestion 함수에서 `event.target`으로 클릭이 발생한 요소를 찾고(맞나?) `.push`로 미리 만들어놓은 빈 배열에 id를 추가
   - nextQuestion 함수에서 if-else문으로 `question_num === testList.length - 1`이 되면 결과페이지를 불러오는 `done()` 실행
   - else 일떈 `question_num += 1` 해주고 `~.innerText = testList[question_num].~`으로 다음문항 불러오기
   
### 🧘 회고
- 사용자가 클릭했는지를 더 확실히 알려주기위해 클릭시 반짝이는 기능을 구현해야겠다.
- nextQuestion 함수에 if-else문이 꼭 들어가야할까?(`testList` 배열의 마지막에 done 함수를 실행하게 만들 수 있진않을까?)
- `innerText`로 태그 내부의 텍스트를 변경할 수 있다.
- `querySelector` 부분을 좀더 간결하게 작성할 수 있지 않을까?(불러오는 과정이 번잡해보임)

---
## ✏ 23.07.27
### ✅ ? [[Feat: add function start, nextQuestion]](https://github.com/LeHiHo/mbti-test/commit/07ff66bd999611b5961a11fac4e9cb386535c2fa#)
### 🤔 요구사항 도출
1. 결과 페이지 구현
   - 결과 알고리즘 구현
   - 결과값에 맞는 이미지 넣기
   - 결과값에 맞는 운동명, 설명넣기
   - 다시하기 버튼(메인페이지로 이동하기)
2. 상태바 구현
3. 질문 넘어갈때마다 박스 반짝이기
   
### 🔍 요구사항 명세
1. 테스트 문항과 답변을 만들고 박스에 띄우기
   - js에 배열로 저장하고 `innerText`로 삽입
2. 사용자가 문항박스에 마우스를 올리면 색깔을 변화시켜 무엇을 고르는지 명확히 알게하기
   - CSS :hover을 이용
3. 테스트 답변 누르면 다음 문항 나오기, 사용자가 누른 답변을 배열 형태로 저장하기, 마지막 문항을 완료하면 결과페이지로 넘어가기
   - nextQuestion 함수에서 `event.target`으로 클릭이 발생한 요소를 찾고(맞나?) `.push`로 미리 만들어놓은 빈 배열에 id를 추가
   - nextQuestion 함수에서 if-else문으로 `question_num === testList.length - 1`이 되면 결과페이지를 불러오는 `done()` 실행
   - else 일떈 `question_num += 1` 해주고 `~.innerText = testList[question_num].~`으로 다음문항 불러오기
   
### 🧘 회고
- 사용자가 클릭했는지를 더 확실히 알려주기위해 클릭시 반짝이는 기능을 구현해야겠다.
- nextQuestion 함수에 if-else문이 꼭 들어가야할까?(`testList` 배열의 마지막에 done 함수를 실행하게 만들 수 있진않을까?)
- `innerText`로 태그 내부의 텍스트를 변경할 수 있다.
- `querySelector` 부분을 좀더 간결하게 작성할 수 있지 않을까?(불러오는 과정이 번잡해보임)