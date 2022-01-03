# PWA + Azure

[PWA를 구성하는 기술들](https://medium.com/@euncho/pwa%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%98%EB%8A%94-%EA%B8%B0%EC%88%A0%EB%93%A4-a5be57df5575)

PWA & Microsoft Azure

- GitHub Actions를 통해 Azure로 배포하는 사이클을 돌려보는 워크샵
    - 지속적으로 이벤트를 진행할 예정
- Session 1 : PWA
    - PWA : 웹 앱을 만들기 위한 모든 기술들을 도합
    - Progressive Enhancement
        - 콘텐츠는 어디서나 접근 가능
        - 지원범위에 따라 더 나은 UI 제공해야 하는 것
        - 예) carousel로 지원하던 것을 list로
    - PWA가 너무 모호한데?
        - 개념이 잘 안 잡힘
        - 웹을 더 좋게 만들기 위한 기술의 집약체
        - img도 legacy ⇒ picture라는 요소를 이용하자
            - 미디어 쿼리를 이용해 사용 가능
            - img보단 picture가 더 나은 사용성, 성능 제공
            - 권장일 뿐 img를 써도 문제가 되지는 않음
    - PWA에선 offline은 Service Worker를 이용하지 않으면 background refresh, local cash 등 접근이 불가능
        - offline 지원 자체가 불가능
            - 필수처럼 느껴짐
        - 오프라인 지원하지 않을꺼면 사용할 필요 없음
    - 어떤 기술이든 PWA가 될 수 있어
        - 구성하는 대부분이 legacy
    - F.I.R.E
        - Fast, Integrated, Reliable, Engaging
    - PWA
        1. Service Worker
        2. Web App Manifest
    - Service Worker???
        - 기존에는 브라우저가 떠 있는 상태에서 worker가 돌아가는 게 불가능
        - 이제는 가능
        - 오프라인?
            - 인터넷이 느려지는 상태일 때 Service worker를 이용해서 지원 가능
        - Push 서버도 지원
        - 사용자들이 앱을 편하게 이용할 수 있게 만들 수 있음
        - 필수는 아님
    - Web App Manifest
        - Web의 configuration을 담당하는 파일
        - Add to Home Screen
            - 마치 애플리케이션처럼 접근하게 함
        - MS EDGE 브라우저로 트위터 접속
        - PWA을 지원하면 window, mac에 상관없이 접근 가능
            - ios는 지원하지 않음
            - 나머지는 다 지원
    - 삼성 Store, Microsoft Store에 자동으로 PWA로 만든 앱이 지원
        - 웹 앱을 PWA로 만들기만 하면 Window Application, Mac Application, Andriod에 잘 대응할 수 있음
    - Native FileSystem API 등
        - 다양한 것에 접근 가능
        - spotify도 웹 앱으로 구성

    ---

    Live Coding

    NPX ⇒ node.js 8.1 버전부터 지원 

    ⇒ 가능하면 최신 버전으로 사용하자

    - create-react-app에 기본적으로 PWA가 최소한으로 되어 있어
        - 권장을 하는 이유
            - 쓰기만 하면 초기 환경이 세팅되어 있어
            - But, 개발을 깊이 들어가면 잘 되지 않음
                - 신규 앱을 만들 때만 create-react-app을 사용할 수 있음
    - manifest의 identity, presentation만 하면 지원이 됨
    - index.js의 serviceWorker를 register 바꾸어 주면 동작을 해야 함
    - create-react-app을 하면 기본적으로 setting이 되어 있다
        - 여기서의 serviceWorker는 굉장히 고도화되어 있는 것
        - process.env ⇒ 이부분을 production에서 development로 바꾸면 serviceWorker를 사용가능
        - create-react-app은 뭔가 문제가 생겼다

    ---

    한땀한땀 개발하는 환경을 사용해보자

    - npm init - 기본적인 환경을 설정
    1. 설치
        - react, react-dom을 —save 옵션으로
        - webpack

            npm install --save react react-dom
            npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin

        - 다 save로 하면 용량이 커짐
            - save ⇒ production
            - save-dev ⇒ development

            npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

        - create-react-app이 여기까지 다 해줌
        - 왜 설치해야 하는가???
            - package.json
                - 방금 설치했던 것들이 나옴
            - webpack
                - 여러 js파일을 모아서 하나로 해줌
                - 번들링과 preprocessing을 같이 해줌
                - 비슷한 도구로 parcel이 존재
                    - 왜 이걸 안 쓰는가?
                        - Customizable한 부분이 작아짐
                        - 자동으로 해준다는 것은 그만큼 커스텀화가 작아짐
            - babel
                - IE는 ES5까지만 지원해야 함
                - ES6 ⇒ ES5로 변경을 해줌
    2. New Folder ⇒ 
        - public과 src
            - public : 실제로 배포
                - src에서 빌드해서 나온 것들을 여기에 넣을 것
            - src : 개발될 부분
        - emmet (에멧) : html:5 기본 완성
    3. index.js에 코드 작성
        - document.getElementById가 querySelector보다 조금 더 빠르다.
        - Angular, Vue.js, Svelte 등도 많이 보아야 한다.
            - React는 Clientside에 초점
            - 웹 애플리케이션 부분에선
                - Angular를 보아야 한다.
                    - 현업에서 쓰기는 약간 어려움
    4. project root에 webpack.config.js를 생성 및 수정
        - path, HtmlWebpackPlugin을 지정 후 module.exports
        - module & plugin
            - css, js를 preprocessing ⇒ 모듈
            - 완전히 새로 생성 ⇒ plugin
    5. babel 설정 ⇒ 같은 위치에 .babelrc
        - 얘는 한번 만들고 안 건드림
    6. public에 index.html
        - 하나만 추가
            - script src="index.bundle.js" 추가
    7. package.js의 scripts 수정
        - —hot, —mode, —open
        - build는 빌드해서 public에 넣어주기만 하면 됨
    8. .gitignore 수정 
        - node_modules, public은 버전 관리가 되어야 하지 않음
        - 원래는 init 하고 바로 추가했어야 함
        - 커밋하는 습관을 들이자
            - 코드 날려먹지 말고 ㅠㅠㅠ
    9. webAppManifest를 수정 

            npm install --save-dev webpack-pwa-manifest

        - plugin을 많이쓰게 될 것
        - webpack.config.js에 추가
            - plugins에도 추가

            const WebpackPwaManifest = require('webpack-pwa-manifest');

        - icon size는 빌드할 때 자동으로 크기에 맞추어 생성됨
    10. icons를 추가 ⇒ src/assets 안에 추가해야 함
        - build시 icon 생성 및 manifest에 따라 public/index.html에 생성됨
    11. ServiceWorker는 어디서부터 써야 하는가????
        - ex) 라우터에 따라 별도의 캐시 정책
            - 나머지는 캐시를 안 태우는 등의 많은 일들을 함
        - 오늘은 serviceWorker 등록하는 데까지만 할 것
        - Google workbox
            - 서비스워커 관련된 모든 도구가 들어가 있음

        [Workbox | Google Developers](https://developers.google.com/web/tools/workbox)

        - 서비스워커를 생으로 작성하지 말고 Workbox을 사용해라

            npm install --save-dev workbox-webpack-plugin

        - 코드는 간결할 수록 좋다?
            - 그냥 plugin을 쓰는 것을 권장함
                - 조금만 복잡해지고 싶다면 쓰지 말고
            - 실제로 현업에서도 사용할 듯
        - 추가

            const { GenerateSW } = require('workbox-webpack-plugin');
            // SW -> Service Worker

        - 기본적으로는 이것으로 끝
            - 원래는 많은 것을 해야함
            - asset을 오프라인에 넣어야 오프라인에서 화면이 제대로 뜸
        - ServiceWorker
            - 이 웹사이트에서 쓸 거다라는 것을 등록해야 함 ⇒ 설치

                if('serviceWorker' in navigator) // 
                {
                
                }

        - index.html, index.bundle.js가 캐시를 타서 workbox를 써서 offline에서 볼 수 있음
        - 문제가 잇음
            - 캐시를 클라이언트에서 탐
                - 클라이언트 캐시를 탐
            - 서비스 워커를 항상 마지막에 register해야 함
                - serviceWorker, workbox를 잘 이해해서 사용하자
        - PWA 기술에 대한 경험
            - 어디까지 오프라인으로 지원할 것인지의 전략도 매우 중요
        - workbox, manifest, webpack 등 지원 가능
        - PWA에 대해 고급 테크닉, 궁금한 점 있으면 메일, 페이스북 메시지를 주면 답장을 주신다고 함
            - medium  조은 PWA 검색 ㄱㄱ

- Session 2 : GitHub Actions
    - 깃헙 액션을 통해 애저로 PWA 배포하기
    - Senior cloud adcovate → Justin Yoo
        - aliencube.org
        - @justrinchronicle
        - @aliencube.community
    - GitHub action이 GA가 11월에 됨
        - 아직까지 github enterprise에는 지원되지 않음
    - 오늘 할 것
        - 애저 리소스 프로비저닝
        - 로컬에서 PWA를 애저로 수동 배포
        - 깃헙 액션으로 PWA를 애저로 자동 배포하기
        - 깃헙 액션으로 경계가 명확한 CI/CD 구현하기
    - 애저 리소스 프로비저닝
        - S3 버킷 같은 블록 저장소
            - 그곳에 프로비저닝하는 거야
        - 애저 포탈, 애저 CLI, 파워쉘(크로스플랫폼임), ARM 템플릿
        - 리소스 그룹
            - 언제 만들었는지, 자라나고 있는지, 관리하는지, 여러 정보들을 관리하기 편함
        - 리포지토리에 보면 관련 명령어가 존재
            - 키 저장소 1개, 블록 저장소 2개가 만들어짐
            - Network latency에 따라 생성되는 속도가 달라짐
        - 삭제할 때는 리소스그룹을 다 삭제하면, 문제가 되지 않음
    - powershell에선 `, bash에선 \을 사용해서 문제점을 해결할 수 있음
    - github actions은 전체 workflow를 가리키기도 함
        - 프로덕션을 했을 때 어떻게 이루어지는 지 정의하는 부분
        - job: 어떤 일을 할지 지정
        - runs-on : 구동되는 환경
            - 리눅스는 우분투에서 돌아감
            - github에서 제공해주는 러너를 쓰거나, 내가 러너를 만들 수 있어
        - steps 안에 여러 가지 action이 존재
            - 전체 workflow, event, job, runner, action 의 개념만 알고 잇으면 가능
        - 서드파티의 marketplace에 잇는 actions들도 존재
        - uses: Azure/login@v1 ⇒ Azure의 login 액션이 또 존재하는 것
        - github repo의 secrets
            - credential값을 만들어서 사용
        - github 액션에서 parameter를 action으로 넘겨주는 방법이 secret이 유일함
    - 만약에 배포를 한 군데가 아닌 라이브가 올라가기 전에
        - QA나 테스트 환경에 우선 배포를 해보고 잘 돌아가면 라이브 환경으로 가고 싶을 때는
        - 테스트 이전 단계랑 배포 단계랑 분리가 되어야 한다.
            - 별도의 job으로 정의해서 활용한다
            - 한 job의 결과를 다른 job에서 쓰려면 저장을 해놓고 있어야 한다
                - 정적 파일들을 어딘가에 업로드 시켜야 함
                - 업로드, 다운로드 하는 과정이 사이에 추가된다.
                - needs로 의존성을 지정한다. ⇒ needs:build_and_publish :이게 실행된다음에 해라
    - 배포 시나리오
        - 순차적으로 배포하는 방법 ⇒ 라이브 환경 배포
            - 의존성을 체인을 주어서 needs에 작성
        - 빌드 / 테스트 후 개발, 테스트, 라이브 환경에 동시 배포
            - 의존성을 build_and_test라는 job에 맞추어서 테스트의 needs에 다 넣어주는 것

- 못한 것
    - 액션 직접 만들기 / GitOps / ChatOps
        - 개발, 테스트에는 배포하지만 매니저가 승인을 해야만 라이브에 올리는 것처럼
            - 중간에 승인 과정이 필요할 때
                - GitOps, ChatOps ⇒ 별도의 추가가 필요
                - GitOps는 PR를 날려서
                - ChatOps는 Teams, Slack을 활용해서 메시지가 슬랙 채널에 올라감
                    - 다음 시간에 기회가 된다면 심화과정으로 사용할 듯
- 질문
    - cafe24 같은 웹 호스팅 서버에 올려도 PWA 성능 차이가 없음
    - 배포 시나리오
        - 중간에 시크릿 정보가 repo에 올라가는 것을 매우 조심해야 함!!!!
        - AWS 같은 경우 비밀번호 저장하는 서비스
        - Azure : Key-valut 같은 경우 저장해서 사용하는 경우
            - 민감한 정보를 따로 빼서 사용해야 하는 경우를 매우 조심하자
            - github actions은 서버가 미국에만 있음
                -