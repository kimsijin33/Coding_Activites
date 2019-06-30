# JAVASCRIPT IS EVERYTHING 

- ![ticket](D:\2019-Toys\ToysProject\Conferences\2019_JAVASCRIPT_IS_EVERYTHING\ticket.PNG)

- 신청 계기

  - 이번 6월 22일에 한국 Microsoft 11층에서 열린 행사에 참여하게 되었습니다.
  - JAVASCRIPT을 좋아하고 주 언어로 삼고 있는 제게 큰 도움 & 시야를 넓힐 수 있는 계기가 될 거 같아 신청하였습니다.

- 13:50~14:30 1 Session 

  - Electron 시작 및 배포 - 김동우 개발자님
  - Electron - chromium, Node.js 생태계 사용 가능 
  - 크로스 플랫폼(데스크톱 앱)
  - Electron으로 개발하셨던 querypie에 사용하셨던 기술 스택
    - React 16.8 + Mobx + Mobx-state-tree
    - electron + Node.js + Java, gRPC...
  - Insomnia - Rest API 지원
  - Cross Platform - window 점유율의 빠른 하락 
  - Electron 
    - Web Tech
      - React, Vue.js, Angular 
    - Chromium 
      - 크로미움 브라우저 기반, 강력 & 가장 널리 쓰임 
    - Node.js 
      - V8 엔진 기반의 뛰어난 성능 
    - Node.js 런타임을 그대로 활용 가능 
    - 단점 : 메모리를 많이 먹음 (성능, 보안성, 호환성 팔방미인)
  - 어떻게 시작할 것인가?
    - main.js : App 시작점 
    - preload.js : 공통적인 것을 정의( ex) 통신 )
    - index.html
    - render.js ( index.html에 부르는 script )
  - process
    - main process - Node.js로 동작하는 메인
    - Render process - chromium으로 동작하는 UI, 브라우저 특성, main의 일부 API
  - 통신 구조 
    - IPC ( Interporcess communication ) 
      - 서로를 직접 부를 수 없음, 단방향, 비동기 동작으로 흐름 제어가 어려움 
      - Main.js <---------------------------------> index.html
        - 서로 간 message를 주고 받음
    - Electron.remote - 비동기로 하는 것을 동기로 해줌
      - 대부분의 동작은 IPC를 통해(복잡, 비효율)
      - electron-common-ipc
      - Node.js의 EventEmiter의 인스턴스 
      - request 효율 좋음
    - Application - document 참조
  - 소스코드 보호하기 ( 매우 중요!)
    - Electron 앱의 소스코드는 노출됨
      - Node.js로 분리, 비즈니스 로직을 Node.js로 분리 
      - Node.js 서버 앱도 pkg로 패키징이 가능 
    - child Process spawn (노출 되지 X, 사용은 가능)
      - Electron-common-ipc로 통신하는 것이 편리
    - QueryPie - 앞 뒤가 열려도 가운데가 막혀 있어 소스코드가 보호됨 
    - Webpack으로 electron 빌드 - Webpack : Js Module bundler
    - V8 엔진 - 길어지면 Interpreting이 느려짐 
      - main Process 
        - 파일 크기 감소, 빠른 구동, 빠른 동작, 함수 길이 축소 
        - 소스 코드 격리, 소스 코드 난독화, 환경 변수 내장(plugin으로 웹에서 모듈 사용 목적)
      - Renderer Process 
        - 쉬운 개발(Dev Server, HMR), 모듈 사용 
        - 빠른 구동(code splitting), Less, Sass
        - 소스코드 난독화, 환경 변수 내장 가능 
        - process.env 사용 X
  - Insomnia API 도구 => 참고해 볼 만함
  - OS 별 패키지 설정 
    - Windows 
      - NSIS(NullSalt Scriptable Install System)
        - 자동 업데이트 확인
        - NSH 스크립트 지원
          - perMachine 설정 -> 권한 생성 가능
    - MacOS
      - squirrel.Mac
      - 배경 이미지 지원
      - 아이콘 크기 설정, 자동 업데이트, dmg & zip
    - Linux
      - AppImage ( 아무데서나 실행 가능)
  - 패키징, 자동 업데이트 
    - electron-builder
      - 빌드 타겟 별로 Node.js 네이티브 모듈 처리
      - code signing(경고 없이 실행하기 위해) - 매우 중요
      - 다양한 배포 방식 & 자동 업데이트 지원
        - S3 or GitHub
      - OS 별 패키징 타입 지원 
        - Docker로 windows <-> Linux 빌드 
        - URL 스킴, 확장자 연결 지원
  - code signing
    - Windows Code signing 
      - EV Code Signing Certificate : 공식 
      - code signing certificate : 개인 
    - MacOS Code signing
      - Apple 개발자 등록
      - PKG 버그 존재
    - Electron-updater 
      - 앱에게 중요한 업데이트를 간편하게 사용 
  - End to End Test
    - 사용자 입장에서 테스트
    - Electron에선 E2E Test가 꼭 필요하다고 생각!
    - Web, App에서 GUI
    - Unit Test -> API 테스트, TDD
    - E2E Test -> UI 테스트, 큰 부분 단위로 테스트
      - 통합된 실행, QA / QC, CI / CD에 적합
      - Selenium, Cypress, TestCafe
    - TestCafe 
      - testcafe-browser-provider-electron으로 가능 
    - Error tracking
      - sentry : 자동화된 에러 트래킹 solution
      - sentry init, sentry exception
  - Query 개발 경험
    - HMR(Hot module Replace) 되는 효율적 개발 환경 
    - mobx-state-tree의 snapshot으로 HMR에서 상태 유지
    - Node.js - gaze 모듈로 소스코드 변화 감지
      - Node.js Reload
      - 빠른 UI를 위한 최적화
      - npm 모듈 별 패키징 
  - Proto - protocol Buffers -
    - gRPC
    - protobuffs -> typescript 변환
    - rxjs-grpc -> grpc를 서비스화
    - grpc -----> Nodes ------> 웹
    - mobx-state-tree의 IPC SYNC가 가능 
    - JAVA-sky walking

- 14:40 ~ 15: 30 개발하면서 실수한 것들 - 장기영 개발자님 
  
  - SQLGATE.QueryPie(DB Connection, DB query)
    - Datagrid로 보이는 부분만 grid 작업함 
    - https://medium.com/querypie - 개발과정 및 이야기 
    - React -> snapshot 기능으로 종료 직전의 상태 관리 가능 
      - mobx-state-tree
    - Java에선 JDBC 드라이버로 하자 - 생태계
      - Node.js의 JDBC 컨트롤이 완벽하지 않다
    - Jira를 이용해 2주 단위로 sprint
    
  - 개발하면서 실수한 것들 
  
    1. CSS
       - Flexbox 안에 scroll 처리문제 ( 레이아웃 넘치는 현상 등 )	
         - container 감싸는 display가 flex라 오류
       - 웹 폰트 easter egg ( Ant Design christmas easter egg)
         - electron에선 웹 폰트 사용 X
    2. React Component & TS, Ant Design
       - Mobx의 observerable과 this.state 함께 사용하다가 무한 루프에 빠진 것(렌더가 무한 반복)
         - 서로 교차해서 setState X
       - Timezone 문제
         - moment TimeZone으로 해결 
       - Typescript enum이 필요 없을 것이라고 속단한 것 
       - async confirmModal을 잘못 사용한 것
         - async-await, Ant Design의 Modal component
         - context menu component 
       - 복잡한 구조의 컴포넌트 단위 설계 미스
         - React에선 부모로 올리지 X
       - Child component에선 state를 가지고 있지 않게 됨
         - 훨씬 더 용이 
       - Ant D Popper content - 3가지 click, over 방식 존재
         - visible을 child에 주어서 확인 
  
    - 모든 실수는 제대로 이해하고 있지 못하고 & 문서를 잘 읽자 
  
  - End to End Test FrameWork 
  
    - unit test는 못함 
    - Cypress, TestCafe
      - Cypress -> Electron 지원 X, Web만 지원 
  
  - Test 코드 작성 시 문제 
  
    - React Selector
    - Test 단위 별 only, before, after
    - 보이지 않는 Element를 조작하려고 한 것
      - Element box-size가 없어 testCafe가 찾지 못함
    - Set Electron Dialog Handler를 먼저 선언 
  
- 15:40 ~ 16:20 

  - 오픈 소스 모듈 ( 풀스택으로 만들고 공유하는 방법 )
    - graphQL, TS
    - cancelabs-event 모듈 
    - infinite-js, Folder-Logger
    - 백엔드 - MicroService
    - GraphQL : 원하는 데이터 처리 가능 
    - Common-gpl 모듈, GraphQl-editor
    - cordora, Electron
    - Svelte - 프레임워크 라이브러리
    - sapper, SEO & SSR 지원

- 16:20 ~ 17:00

  - 격변하는 프론트 환경에서 빠르게 새로운 것 익히기 

    - ZeroCho 개발자님

    - react, mobx....

    - 어느 정도면 할 줄 아는 것? - 새로운 것을 어떻게 배워야 하지?

      - 원리를 이해함
        - 추상적 이해
        - 잊었더라도 공식문서는 다시 한 번 보면 기억이 남
        - 아는 것을 사용해 원하는 것을 만들 수 있음
      - 에러가 발생할 때 해결 방법을 알고 있을 정도

    - 왜 새로운 것을 배워야 하지?

      - 기술 호기심, 성장 요구 ( 개인적 이유 )
      - 주변의 감시 & 선언 ( 사회적 이유 )

    - 잘못된 방법을 알아서 그렇게 하지 말자

    - 어떻게 해야 효과적으로 배울 수 있을까?

      1. 적절한 동기 부여
         - 스스로 보상, 환경 만들기 or 환경에 처하기
         - 퀴즈 : 제로초의 동기는 무엇인가? .....
      2. 올바른 공부 방법 
         - 아무리 노력해도 이상한 방법으로 하면 효과 없음
         - 스스로 터득하는 경우
         - 실제로 쓸 수 있는 코드를 써야
         - 좋은 스승님 

    - 잘못된 공부 방법

      - 공식 문서를 안 읽음 
        - 읽으면서 만들고 싶은 프로젝트에 어떻게 적용해야 할 지 생각하며 읽어야 함
      - API만 달달 외움 
        - 중요한지 모른다, 하다보면 저절로 외워짐
        - 원리를 이해하는 데 중요
      - 튜토리얼 따라함
        - 다른 프로젝트에 적용하자
      - 에러를 마주했을 때 대처 방법을 공부 X 
        - 에러 메시지 읽고, 에러 해결 방법을 공부해야 함
      - 사소한 것에 집착함 
        - 뭐가 중요하고, 안 중요한지 모르는 유형 
        - 원리를 이해하는 것은 좋으나, 뜯어볼 필요는 없음

    - 추상화하는 능력 필요

      - V8 - 자바스크립트 코드를 해석해준다.

    1.  공식 문서 읽음 
    2.  튜토리얼을 따라해 봄
    3.  자신만의 프로젝트 ( 튜토리얼 수준 ) => 바로 망이지
    
    - 실제 서비스로 가능한 수준의 프로덕트를 만들어야 함
      - 쉽지 않음, 시간적 여유 부족
    - 코드 피드백을 받아야 함 - 피드백을 해줄 사람이 X, 우물 안 개구리 문제
    - 데이터를 많이 넣어야 함 - 10000개 정도!
    
    1. 실제 서비스로 가능한 수준의 프로덕트를 만들어야 함 
       - 난이도는 조금 높게
       - 어려운 문제 - 결심은 쉬움, 실천이 어려움, 완성은 더더욱 어려움
       - 조금씩 발전시켜 나가기(애자일)
       - 동기가 필요함
       - 추천 : 블로그! - 블로그 직접 제작해보기(풀 스택으로)
         - 글 쓰고 나면 방문자들이 찾아옴 ( 실 사용자 확보 )
         - 프론트부터 서버까지 풀스택으로 공부 가능 
         - 다양한 방법으로 활용 가능
    2.  코드 피드백 
       - 오픈 소스 활용 
         - 보일러플레이트 소스 분석
         - 보일러플레이트에 컨트리뷰트
         - 스승님 : 내 코드를 피드백 해줄 수 있는 정도면 됨
       - 항상 의구심을 가지는 게 매우 좋음 
    
    - 보일러 플레이트 
      - 실무에서 쓰일 만한 구조로, 더 구체적으로 만들어 둔 코드 
      - 보통 프레임워크 튜토리얼에서 기본적 폴더 구조 제시
      - 보일러플레이트가 그 문제 해결책 제시
      - ex) reactGo 보일러 플레이트로 검색
        - 보일러플레이트 검색하다 발견
        - 파일 / 폴더 구조와 그렇게 한 이유를 이것 저것 물어봄 
        - 용기를 내서 pull request(PR) 함
          - 간단한 문서 + 기능 추가
      - 보일러플레이트는 개인적으로 만드는 것이라 애칭이 ㄷㄷ
    
    3. 데이터를 많이 넣어봐야 함
       - 프론트 : 서버로부터 많은 데이터 불러오기
         - virtualized list??
         - 렌더링 이슈, 더미 데이터 많이 넣기
       - 서버 : 접속자가 많은 상황
         - 서버 터지는 이슈!
         - 로드 테스트 돌려보기
       - 남의 코드를 많이 봐야 함
         - 같은 프레임워크도 다양한 방식을 코딩 가능
         - 공식 문서만으로는 부족한 부분 채울 수 있어
         - 오픈소스 활용 -> 라이브러리 코드를 많이 까보자
         - 보일러 플레이트 -> d3. jquery 코드를 까보자
       - 에러 해결 방법을 알아야 함
         - 에러만 빠르게 잘 해결해도 시간을 대폭 절약할 수 있음 
         - 에러 해결 방법들을 모아둔 블로그를 작성하자
         - 공식 문서를 많이 읽어두자, 오타 조심하자
         - GitHub 이슈를 먼저 검색
         - stack overflow & 구글링
         - 소스 직접 수정하기 
           - fork-pull request 해보자
         - 다른 프레임워크는 어떻게?
           - 기존 프레임워크 프로젝트를 포팅
           - 기존 방식대로 만들면 충돌 발생
           - 차이점 이해하기 ( 다른 코딩 스타일은 )
         - 자신만의 시그니처 프로젝트를 만들어보는 것도 좋음
           - ex) Nodebird, RealWorld 프로젝트 
           - RealWorld 프로젝트
             - 여러가지 언어로 같은 것을 만들어 비교하기 쉽게 되어 있어
         - 처음에는 풀스택 목표로 
    4. 동시에 어떻게?
       - 자나깨나 공식문서 ( 프레임워크, 라이브러 별로 )
       - 주기적으로 업데이트데이(Update day) 가지기
       - 잊어버리는 것은 받아들이자, 추상적인 원리 이해하기
       - 배워야하는 이유를 찾아
       - 나의 환경에서 적절한 공부 방법을 찾자
       - 공식문서를 주기적으로 읽고 업데이트하자.
       - 