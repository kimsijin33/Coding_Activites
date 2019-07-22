- GDG Daejeon I/O Extended 
  - ML on Google Cloud - 13:40 ~ 14:20 
  - Web Updates at I/O 2019 - 14:20 ~ 15:00
  - What`s new in Android Studio - 15:00 ~ 15:40
  - 구글의 AI, 그리고 소프트웨어 - 15:40 ~ 16:20 
  - Flutter And beyond Web - 16:20 ~ 17: 00 
  
- ML on Google Cloud - 백재연 강사님

  - On Premise - Cloud, Docker, Kubernetes, ML 
  - GCP에서 ML 찾기

  1. Compute Engine - 사용한 만큼 비용 / 간단 / 편함
     - 비쌈, 쉬움
  2. Cloud mahine Learnging Engine - 비용 우수, 어려움 
     - stackdriver - scale-tier
     - custom : infra 세팅 
     - 분산학습 내부적으로 제공
     - AI platform으로 변경(버전, prediction 등 )
       - 300 credit 제공 - gmail 여러개 제공 등등
  3. simple-flow : 구글 스토리지 등 기본 개념 
     - cloud talent solution -> job search / contact center AI
     - dialogflow를 위한 데이터 + 기술 파트너
     - AutoML - 데이터만 넣으면 나머지는 반 자동
     - cloud vision API ( video intelligence API)
       - 유해성 콘텐츠 검출
     - Big Query ML - Query만 잘 해도 ML 가능 
     - 구글 doc은 무조건 영어로 보자! - 다른 쪽도 대부분 마찬가지

- What`s new In Android Studio

  - 3.4 stable -> 이 이상을 사용해보자 => 3.5 안정된 버전
  - Android Studio 3.4 => Stable
    - Resource Manager - Resource 관리 개선 
    - draggable - 이미지의 구성 등, 도구들에서 나오는 것들이 모두 import 되는 것으로 변경 
    - preview layout - dragging a layout file
    - color picker, project structure Dialog, unresolved reference, import Intentions
  - Android Studio 3.5 
    - A.S 자체 강화 
    - ADS(Dev Summit) -> project marble
    - DataBindin UI Fressze, speed & cpu usage, Build speed
    - 도입해 볼 만 한 것
      - I/O File Access for windows -> 바이러스 탐지 경로에서 제외하라
      - Foldable support -> Android Q부터 지원 가능 
        - 8, 7.3인치에서
      - apply change -> Instant Run, Runtime Installation, Layout Editor, Design Preview mode

- 구글 AI and SW 

  - AI for mobile and IoT Devices : Tensorflow Lite
  - Federate Learning : ML on Decentrailized Date
  - 수십 억개  기계로 AI service 사용 시 사용자의 보안 지키면서 꾸준히 높은 수준의 기능 제공하기 위해선?
  - Tensorflow Lite - 모바일 기기, 임베디드에 탑재시키기 위한 작은 형태의 프레임워크 
  - Edge ML explosion - Network connectivity, security on device ML allows to new generation
    - 저전력에서도 가능한 새로운 기회 작은 메모리, 시계 등
    - ex) Dance Like + ML kit 
      - Jump start -> custom model -> performance -> Optimize
    - Edge TPU Delegate, MCU, Microcontrollers 
      - available now on tensorflow.org/
      - 큰 형태의 tensorflow를 작은 형태로 압축이 가능
        - Federated learning 
          - 신개념 : Machine learning on decentralized data - 데이터 집중화 X
          - 개인정보 보호 - 데이터를 모으지 말자! -> 어떻게 계속 살릴 수 있는가?
          - Improved latency, work offline, Better battery life => privacy 상승 목적
        - ex) Gboard - 단어 추천 -> 어떻게 해야할까? 
          - Federated computation
        - 서버는 사용자의 데이터가 아닌 합쳐서 된 정보를 가짐
          - map reduce <-> Federated : 커뮤니케이션 감소, 거대한 분업화
          - Gboard : wordcount 
            - 전체값이 아닌 필요한 부분만을 받아서 사용(특정값에 의해서만)
            - Secure aggregation
              - model engineer workflow 
                - 모두 다 동일한 starting point에서 시작
                - 소규모의 서비스에 유리(사용자들이 각각 학습을 해줌)
                - 현업에서도 굉장히 유용할 듯
                - Towards Federated Learning at Scale 논문 ㄱㄱㄱ

- Flutter & Beyond Web 

  - cross-platform의 선두

  1. Hot Reload를 통해 UI 작성, 기능 추가 버그 수정 
  2. material, coppertino(?) 디자인 -> Native에 가까운 성능 
  3. 하나의 코드 베이스로 다양한 적용 가능 
     - mobile, web, Desktop, embedded 가능
     - Dart 언어로 개발, Declarative UI, Everything is widget
       - stateless, stateful

  - Widget Life Cycle

    - stateless 
      - constructor -> build 의 반복
    - stateful
      - constructor -> createState 의 반복
    - React Life Cycle과 매우 유사
    - staeful widget + state object 
- platform channel
    - Native API or 3rd Party API를 호출하기 위해 이용 
  - Humming bird
    - HTML + CSS +Canvas 형태로 바꿈
    - 캔버스 할당, 크기 조정의 코스트가 매우 큼 
      - canvas를 여러개로 쪼개서 사용해보자!
      - composition multiple canvas
  - Dart 2 Js Compiler -> Js로 Dart 코드를 변환, Media Query
  - 플랫폼에 따른 코드만 잘 작성하면 모바일, 웹 모두 가능
  - Dart 효율이 매우 좋음
    - 모바일만 보면 ... ( 나머지는 아직 정식 지원 X)
  - 네이티브 기능(BLE, Sensor 등등)을 많이 요구하는 경우 반환 
    - 활발한 커뮤니티
  - 안드로이드, IOS, 웹에 모두 같이 하는데 좋다고 생각
  - 

