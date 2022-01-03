- 클라우드 및 컨테이너 기반 가상화기술

  - 클라우드
- 자원활용 Utilization
  - 자원할당 (Apache+Tomcat +MySQL 1VM/2VM)
- multi-Tenancy ( 멀티테넌시 )
  - 도커는 

    - 가볍다, 활용하기가 좋다, 에코시스템 활성화
- 가상화 구현방식
  
  - ISA - VMWare / Hyper-V / VirtualBox
    - ABI - BlueStack / x86 Android / WindowsRT
  - API -> WineHQ
    - LXC(Kernel의 cgroups + namespace isolation)
    - Docker / Container
  - Container Orchestration
    - 서비스가 안죽도록(운영되도록 만드는 기술)
    - 장애대응, 복제(이중화), Roll-Over
    - DevOps(Development + Operation)
    - jar(packaging) -> 배포(deployment)
      - cf. installshield
  - 통합툴(Docker + Kubernetes)
  
  - 서비스 : 1개 이상의 컨테이너(동일한 종류)를 묶어서 관리
  - 로드밸런서 - 여러 개가 돌아가면서 응답
  - 고가용 - 하나의 컨테이너가 죽으면 다른 컨테이너가 서비스 대체 컨테이너를 실행
  - Rolling Update
  
  - 컨테이너(도커)-서비스(스윔)-Pod(쿠버네티스)
  - 유료(VMWare ESXi + vCenter)
  - 무료인데도 상용보다 좋음
    - BigData, Tensorflow, Docker/Kubernetes
