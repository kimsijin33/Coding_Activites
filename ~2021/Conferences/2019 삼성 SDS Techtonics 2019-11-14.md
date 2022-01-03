- 2019 삼성 SDS Techtonics

  - 이번이 2회차 => 계속 참여할 생각

  - 일시 : 2019.11.14

  - 환영사 - 삼성 SDS 홍원표 대표이사

    - keynote - Partner, Disrupt, Foresee - 삼성 SDS 윤심 부사장, 권영준 상무, 백동훈 상무
    - technology innovation
      - PM, 개발자, CX, 품질 -> PJT 대부분 적용
      - Brightics Studio -> 오픈소스 생태계 기여
      - Partner
      - Disrupt
        - 로드맵이 중요하다 (사업/상품/기술)
        - Technology Adoption Framework
          - 여러 데이터가 확보되어 어울려야 함 + 플랫폼화
          - 고객의 비즈니스를 도와줌
        - AI - 영상에 중점 : 사람이 직접 X : AI가 추천해서 효율적으로 프로젝트 가능
        - Blockchain - 블록체인 모바일 ticking : 속도의 문제 : 가속기를 적용 : 트랜잭션이 빨라짐 : IBM과 협력 
        - Cloud - Application 개발, 운영을 어떻게 효율적으로?
          - SRE - 한 사이트의 신뢰도를 최고로 높여주기 위함
        - Data - 공정 데이터만으로는 부족 , 시장데이터 -> 출하하고 나서의 오류 => 결합
        - Security -> 동형 암호 분석, 복호화 없이 바로 분석 가능한 기술
        - SEP -> SDS 개발 플랫폼을 찾아 공부해보자
          - 모든 기술을 통합해 제공중
    - AI 생산성 향상을 위한 Accelerated AI(Triple AI) - 권영준 상무
      - 수화를 기계 번역하기 위해서는?
      - 데이터 준비에 오랜 시간을 투자함 
      - Active Learning -> 질의 반복으로 정확도 상승
        - 라벨링 자동화 -> 모델 추천 필요 
          - black art이기 때문(여러 시행 착오로 인한 시간 투자), 시스템 적인 아키텍처가 없다는 게 문제 
        - NAS 알고리즘 -> 매우 흥미로움
          - GPU 리소스가 많이 필요
          - provenance -> 데이터 => AI에 관련 부분준비 중 
      - 삼성 SDS 클라우드
        - AWS-14 Leadership -> google과 함께 개발 중임
        - GCP Next 2017 -> 마켓 Leader X
          - 개발자, 비 개발자 모두 이해할 수 있게
          - 자원 생각이 X
        - 컨테이너 기반 => 효율적 -> DevOps -> Microsoft Architecture
        - 적용 사례 => 모놀리틱이라 코드 베이스가 매우 큼 
          - 모듈마다 테스트 -> 전체적
        - 공통적인 개발 환경을 만들 수 있음 
          - 글로벌 e-커머스 
          - 동탄의 HPC는 AI, 전력이 많이 필요
    - Foresee
      - 더 autonomous하게 가겠다
      - GPU를 다 shared 해서 쓸 수 있거나 적절한 job에 배포를 자동으로?
        - autonomous cloud -> R&D 클라우드

  - SRE 실전 적용

    - SRE - site reliability Engineering - 사이트(서비스)의 신뢰성을 높이는 공학

    - 목표 : SW로 서비스의 신뢰, 확장성을 높임

    - 역할 

      1) 자동화 - 수작업/반복적 업무의 자동화

      2) 모니터링 - 서비스 수준 - 목표 설정(SLO)

      3) 협업 방식 - 서비스 공동 책임, 소통 확산

      ​	=> 1),2),3) => 신뢰성이 증가

    - e 커머스 서비스 => 빠르게 변화하는 리테일 시장 대응을 위해 신속한 서비스, 확산과 안정적인 서비스 제공이 필요

    - 빠른 제품 출시, 글로벌 국가 특수성 / 급격한 거래량 변화

    - 고객이 원하는 것은?

      - e 커머스 서비스의 신속한 글로벌 확산 및 안정적인 서비스 운영 요구
      - 신속한 글로벌 확산/배포
        - 기존 권역 및 국가 확산 11주 소요
      - 모니터링 체계 구축
        - 서비스 분석 및 처리 어려움
      - 글로벌 협업 / 통합 운영
        - 신속한 처리 미흡

      => 1. 자동화(인프라, SW, APP, 배포 자동화) / 2. 모니터링 (오픈소스 기반의 모니터링 체계 구축) / 3. 협업 방식 개선

    1. 역할보다는 역량! => 개인의 SW 역량!

       - 새로운 시도를 지지하고 실패를 허용하는 문화, 팀윅이 중요

    2. SRE 적용 사례 -> RCS 메시지 적용

       - Reach Communication Service

       - RCS Chatbot developer tools

         - Service discovery가 connect에 포함 

       - CI/CD, on-call, Java, Go .... => 개발까지 잘해야 

       - SRE는 생소, pagerduty, 지표를 고도화

       - R&D Cloud -> GPU 클러스터링을 통한 공유 및 분산처리 플랫폼

         1) 왜 GPU가 중요한가?  => 여럿이 모여 엄청난 퍼포먼스 실행

         ​	CPU가 수행하던 작업을 GPU가 할 수 있을까?

         ​	GPGPU - 비트 코인, 게임, AI

         2) GPU 사용 시 이슈

  - Opensource는 나의 경쟁력을 높일 수 있는가?

    - 경쟁력, 최적의 opensource 선정, 오픈소스 잘 활용하기, 함께 성장
    - Linux, BigData,Hadoop, ecosystem 
      - cloudra & hortonoworks 합병
    - Cloud -> CNCF*
    - 벤더 종속성 탈피 가능
    - Message Queue 선정 사례
      - 커미터 수, issue 있을 때 대응 속도
      - 로드맵이 있느냐, 성숙도(얼마나 오래되었느냐)
      - 얼마나 많은 사람들이 쓰고 있는가?
        - 나에게 잘 맞는가?
      - 어떤 base, 어떤 기술을 선호하는지, 어떠한 환경을 보유하고 있는가?
        - 뭐가 좋은가?
    - 오픈소스 DBMS 적용, 튜닝 사례 소개
      - architecture, Data 
      - on-premise
        - 조회성
        - All stop 가능성, master에 대한 가용성 보장 필요
      - public cloud
        - cloud에서 제공하는 Managed service 활용 
        - 고비용 -> HW 구성 가능 