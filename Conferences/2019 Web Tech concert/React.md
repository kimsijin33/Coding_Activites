- 이전 과정은 반드시 복습이 매우 중요하다 

  - DOM Script, Template Engine + Ajax

- Front-End Framework

  - 공부에 대한 의문을 가져라

  - 왜 쓰는가?

  - 뭘 모르고 있고 뭘 공부해야 하는가 => 학습 가이드를 제시하는 수업 

  - yamoo9.github.io/react-master => 사전 학습 가이드

  - 표준을 지키는 것은 많은 혜택이 존재 

  - 관념적 정리가 필요하다는 것 

    - 접근성, usability를 무조건 고려해야 함
    - 표현 디자인 
    - 디자인을 왜 하는가?
      - 컨텐츠를 사용자에게 짦은 시간에 효율적으로 어떻게 전달할 수 있을까?
      - CSS Layout을 어떤 것을 쓸 것인가?
        - 경험에 따라 다름
        - 현재는 flexbox
        - 기존에 가지던 틀을 깨야 한다
      - 계속 새로운 것을 공부해야 해 
    - 반응형 웹 디자인 
    - IT 기본 기술에 항상 충실하는 게 중요하다 
      - 표준에 따라가자

  - 반응형 웹 => 환경에 대한 배움 

  - 벡터 vs 픽셀

  - CLI => GUI => NUI로 인터페이스가 변화 중 

  - 표준이 존재 => 되기 전에 경쟁이 생김

    - Javascript, DOM 공부가 필요함 
      - JQuery의 시대가 끝났음
    - React, Vue, Angular
    - 비동기 프로그래밍 
    - 모던 자바스크립트
    - Nodejs => 개발하는 런타임 환경 
      - JS의 발전을 도모
      - 버전 관리 도구(Git)

  - 범용적인, 안정적인 라이브러리를 사용하겠다.

    - axios 
    - entry 파일로 하던 게 => main.js가 작동하려면 위의 3가지 모듈을 전부 순서대로 로딩되었어야 해
    - script, script defer, script async
      - script defer = 사용자의 경험에 
      - script async => 다운이 끝나는 즉시 실행 
      - 브라우저 호환 문제가 존재 
        - defer => 9 이상, async => 10이상 지원 

  - 내가 뭔가 부족한지 알아야 계속해서 배워나갈 수 있어 

  - 하나의 파일에 모두 때려넣으면 안 돼

  - Service의 규모가 엄청 커짐 

  - 유지보수, 효율적 관리를 생각한다면 잘게 쪼개야 함

    - 과거 앱의 성능적 이슈

    - 이제는 역할 별로 쪼개고 코드 로직을 관리하게 됨

    - normalize => common.js => layer.js, color.js

      - 역할, 의미적으로 코드를 개발 가능 

    - scirpt 속성에 type 을 이젠 사용가능 

      ```javascript
      script async type="module" src="~~~"
      ```

    - 표준 코드

      - import axios from './modules/axios.js'
      - bootstrap => 준비한다는 의미
        - 준비중 -> 렌딩 페이지, 스플레시 이미지를 보여줌
      - 데이터는 서버에서 관리되어야 해 
      - 모듈러 개념에 익숙해져야 함
      - Hogan??

    - export도 가능해짐 -> 내가 내보낼 것들을 지정할 수 있음 

    - 이제 부터의 JS는 보호, 불러올 수 내보낼 수도 잇음 

    - 

