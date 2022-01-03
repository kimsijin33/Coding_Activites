- Front-End Open-Source Developer
  - With React and TypeScript
  
  - 장기영 개발자님
    
    - JSDEVKR
    
  - 프론트엔드 개발자
    
    
    - 사용자에게 보여지는 영역을 책임지는 사람
    - 개발스킬 & 미적감각이 동시에 필요
    - Renderer(웹 브라우저, App, Electron)에 의존적으로 개발
    - 주로 HTML, CSS, JAVASCRIPT을 이용하여 개발
    - 프론트엔드 => 새로운 유행을 옴
    
  - roadmap.sh
  
    - HTML, CSS, JAVASCRIPT
    - SASS에 집중 - 전처리기에 의해 프로그래밍 된 CSS를 사용함
      - SASS, Less => 대세는 SASS로 기울고 있어
      - 결국 둘 다 해야해
      - BEM => CSS 클래스 네이밍
      - Prettier, ESLint => 정리된 형태로 커밋을 하게 유도함
      - packagejons => pre-commit => Lint-staged 
    - CSS -> JS로 작성하는 방법을 알아야 함
      - Bundling 기법 -> 묶어서 하나의 JS를 만듬	
        - SPA를 만들기 위해 
    - JS는 Type이 없기 때문에 문서화를 해야 한다는 단점이 생김
      - 부서를 옮긴다거나 예전의 코드를 이해할 수 없기 때문에
    - Desktop Application => Electron
  
  - Webpack 안에 번들링을 담당 
  
  - Babel => 트랜스파일링 해줌
  
    - 최신 코드를 이전 코드로 바꾸어줌
  
  - js에선 array, object는 주소를 담고 있는 그릇일 뿐
  
    - const로 정의해도 내부적으로 바꿀 수 있음
    - 변수가 오염되는 일을 많이 겪음
  
  - 새로운 array로 만들기
  
    ```javascript
    const arr = [1,2,3,4]
    const arr2 = [...arr] 
    ```
  
  - JSX보다 템플릿 문자열이 빠름
  
  - async / await
  
    - 문법 표준이 됨
    - await의 응답이 있을 때까지 홀드 됨
    - new Promise를 리턴됨
  
  - 비구조화 할당
  
    - 값을 뽑아내는데 자주 사용 및 초기값을 할당 가능
  
  - getBoundingClientRect() 
  
    - 이 메서드 매우 중요
    - 어떤 항목의 너비와 높이를 알려줌
    - 날짜에서 특정 키를 뽑아내는 것
    - String에서 값을 뽑아낼 수 있음
  
  - 개발자는 머리가 안 좋은 것은 상관없음
  
    - 계속되는 훈련, 반복이 중요 
  
  -  React.js
  
    - 데이터를 broadcast하는 구나
      - 데이터가 방송된다 => 변형이 이루어지면 항상 위로 올라가야 해
    - 가상 돔과 비교해서 현재 돔과 비교해서 만들어주는 것
    - 화면에 보이는 부분만 계속 처리하는 것
    - create-react-app / CRACO를 활용하면 추가적 환경 설정을 위해서
  
  - Next.js
  
    - 스태틱 서버 렌더링을 매우 쉽게 할 수 있음
  
  - JSX에서
  
    - style={{}}로 작성해야 함
    - CSS의 Font Size와 조금 다르다는 것
      - JS에선 -를 처리 불가=> fontSize
    - StyledComponent를 많이 씀
    
  - Ant Design
  
    - 