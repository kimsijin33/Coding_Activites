- Naver Cloud Platform Intermediate - media

  - 2019-12-27, 강남N타워 19층 Naver Cloud 10:00~18:00

  - ex) 쇼핑몰 - 결제, admin, 상품, 관리 

  - focus는 이미지!! - 하나의 이미지로 많은 썸네일을 만들어서 모바일에도 대응되어야 함

    - 웹 페이지에 딱 맞는 이미지가 만들어짐 

  - 목적

    - 네이버 클라우드 플랫폼의 미디어 상품을 활용한 웹 사이트 구축
    - 미디어 상품들의 다양한 특성 & 프로그램에 어떻게 적용하고 활용할 수 있는지 확인 
    - 국내 소규모 쇼핑몰은 PHP로 구성됨 
      - C#(ASP.net), PHP, JAVA로 3등분 되어 있음

  - 내용

    - font, 글을 어떻게 이쁘게, 이미지 size를 어떻게 최적화 시킬 것인가
    - Image Optimizer => 썸네일 생성
      - 상품 이미지, crop을 잘 해야 함
      - 그러나 일반 툴을 가지고는 resource가 많이 들어감
      - 혜택 : 비용 절감
    - 물리적 IDC, 서버, 스토리지, 네트워크, 플랫폼, 데이터베이스, MEDIA, GAME, AI Service, Dev tools, Application Service, Biz Application, Market Place
    - 원본 이미지는 Object Storage에 올라가야 함
      - 이미지 소스는 Object Storage, output은 CDN에 있음
    - 네이버 클라우드 플랫폼 체험용 서버인 마이크로 서버 제공 => 작은 것에 해볼 수 있음
    - VM이 여러 개 올라가 있으면 간섭을 일으킬 수 있음 => VDS가 처리
    - HPC - 윈도우즈 클러스터를 이용하고 있음 
    - Init Script
      - 서버를 만들고 나서 한 번 실행함 
      - 오늘 실습은 Linux 서버 
        - windows는 실행된 이후 레지스트리에서
        - Linux는 rc 밑에서 
    - 서버 Operation - ACG
      - AWS의 보안 그룹과 비슷
    - fail-over => Clould DB for MySQL
      - 로컬에 mysql 설치는 이중화, 백업이 안되는 부분이 존재!
        - 백업은 스크립트로 가능하지만, 이중화는?
        - 서버 crash가 발생하게 되면 서버가 정지됨
        - Cloud DB는 root 권한을 주지 않고 Naver Cloud Platform이 전부 관리
          - 왜??
            - 서버 crash가 났을 때 자동으로 fail-over가 되어 => 이중화가 되어
            - DB 서버가 죽더라도 서비스에는 문제가 없을 것이다.
            - 백업이 자동으로 걸려 있음
      - Slave도 구성 가능 
    - Apache
      - Open source -> OS의 의존성 없음
      - 2위는 nginx, 3위가 IIS
      - 1,2위는 공짜라서 / Window에 웹 서버를 올리게 되면 문제가 생김
        - 리눅스에서 .net 올릴 수 있지만 => monoproject
        - 비용 및 보안 업데이트 때문에 서버를 껏다 켜야하는 issue
      - RPM을 이용할 듯 => 소스 컴파일은 모듈하나 올리면 re컴파일해야 함
        - 아직도 삼성 같은 데는 compile => 필요한 기능만 넣어서 사용하려고
        - 구지?? 요즘에도 이렇게 해야하나?
      - Apache 1.0은 설정 파일 하나에 다 때려 박았다면, 2.0은 include해서 가져옴
        - 가독성을 높이기 위한 작업 => 구분을 해놈 
        - log 파일이 access, error 로그 2개가 기본적으로 쌓임
    - PHP
      - 네이버는 이제는 JAVA가 9, PHP가 낮은 확률로 점유
      - 코드 재사용이 힘듬, monolithic
      - 혼자 만들 때는 좋음 => 여러 사람이 쓰기에는 어려움이 존재
      - html과 섞이면 맺고 끊는 게 어려움
      - apache의 일부처럼 동작을 함
        - <?php를 만나면 apache가 php를 불러옴
        - JAVA는 tomcat에서 java를 불러옴 => 둘이 달라
      - php.conf => apache에서 php 관련 설정
      - php.ini가 php에 대한 설정 파일 
    - MySQL
      - Mariadb가 분리됨 => 코드가 달라지기 시작함 ㅠㅠ

    ---

    Step1

     - PHP 소스가 Object Storage를 이용할 수 있어야 함 

     - SDK가 전혀 없어 => 추가적으로 설명을 해주실 듯

       	- AWS SDK를 이용해 데이터를 넣는 방법
       	- S3 fuse를 이용해 마운트를 이용해 => Object Storage를 NAS 마운트 하듯이 이용할 수 있게 함

       1. ACG -> 방화벽 처럼 동작을 함

          1. 80은 어디서든지 접속 가능하게 함

       2. Init Script 작성

       3. Centos 7.3으로 서버를 생성

          - SSH -> window에선 putty,
          - sftp -> filezilla
          - s3 -> s3 browser
          - MySQL -> Workbench
          - 아직 서버에 공인 IP가 없어 접속이 불가능 
            - 할당 받아도 apache가 기동이 안 되어 있어서 접속 불가
            - putty 말고 Ultraedit를 이용해도 가능(30일간 무료)
            - 인증키를 가지고 서버에 초기하된 password로 접근을 해야 함 

       4. 아파치 기본 설정이 필요 

          - conf.d : 각 모듈별 설정
            - conf 파일안으로 include로 설정되어 있음
            - httpd.conf : 전역 설정 / 나머지는 각각의 모듈 설정 

       5. 데이터 베이스 설정

          - index.html => 일단 구조 파악 
          - /var/www/html 밑에서 source.tgz를 작업해야 하는 이유
            - Apache 설정에서 DocumentRoot가 /var/www/html이 됨
            - VirtualHost, userdirectory 등은 나중에 
          - 권한 변경이 필요 Permission 바꾸지 말고 owner를 바꾸는 게 보안 문제를 줄일 수 있어
            -  http://211.249.50.207/sample.zip  상품등록 이미지 다운
          - 이미지가 망가져 있어
            - 왜??
            - index.html은 기본적으로 php로 구성되어 있음 
            - 이미지를 가져오는 것은 최근의 것을 가져와야 함
            - 이미지의 크기가 매우 중요
            - 요즘에는 팝업보단 돋보기 기능을 주로 사용하는 듯
          - BLOB? -> 바이너리를 아예 넣는 것
          - 동기화할 수 있는 방법이 필요 => NAS, Object Directory 등 
            - 다수의 서버를 쓸 때는 문제가 될 수 있어
            - 불펌을 막으려고 워터마크도 사용해야 함
            - 공유 스토리지 => 속도 이슈 발생 가능성 

       6. Review 

          - 이미지 불러오는 방식
            - 데이터를 다 받아서 브라우저에서 리사이즈 작업을 하는 것
              - 네트워크 트래픽이 어마어마함
              - 사용자 브라우저가 느려짐
              - 사이트 개편 시 코드를 찾아서 바꾸어야 함 
              - size에 대한 이슈도 언제든지 발생할 수 있음
                - hard coding은 안 좋음

       7. 코드 분석

          - enctype은 form 태그에 필수 => multipart/form-data
          - /tmp => 777 permission : 모두 접근 가능 
            - DDOS 공격하는 것들이 tmp가 차고 넘쳐 root partition을 먹어버리는 공격을 할 수 있음 
            - tmp, var directory는 파티셔닝을 보안적으로 따로 빼는 게 좋음 
              - 타인에 의해서 꽉 찰수가 있기 때문에 
          - 1번째 방식의 문제
            - 트래픽, 하드코딩의 문제, 이미지가 크기가 의도치 않게 줄어듬
            - 이미지를 다 받아서 오기 때문에 
          - index.html 내부에서 변수 처리하는 것이 맞음 => 테이블에서
          - php는 db를 열 때마다 계속 새로 connection을 잡음 
          - 2번째 방식
            - 이미지 크기에 따라 만들고 각 폴더에 넣어주는 것 
            - 1번째 방식보단 낫지만, 이 작업에 대한 리소스가 엄청 들어감 
              - 썸네일 작업을 다시 다하고 업로드 해야하는 불편
              - croping 했으면서 원래 차의 모습 그대로 달라지는 것 
            - 이게 싫다면 상용 라이브러리, 엄청난 코딩을 하면 가능(gd library)
          - 3번째 방식
            - Image Optimizer

       8. 아파치, php 설정을 바꾸었기 때문에 restart해야 함

       9. 이미지 생성을 위한 전체 흐름 

          - file을 밀어 넣으면 Object Storage로 보내고 DB에도 넣어주는 게 깔끔

       10. Image Optimizer 

           - multipath로 올라가기 때문에 업로드가 매우 빠름

           - 우리 Object Storage에서만 CDN이 연동이 됨

           - 그럼 어떻게 access를 할까?

             - PHP에서 Object Storage에 접근 불가

             - 두 가지 방법 존재

               1. 순수 PHP에 AWS SDK를 올려 PHP에서 코드로 작업하는 방법
               2. 시스템 적으로 해결하는 방법 -> s3fs fuse mount
                  - img다가 NAS mount 하듯이 Object Storage를 mount 한다면??? 

               - 가장 좋은 것은 SDK => 확장성 부분에서 더 나음
                 - 하지만 2번은 코드를 안 바꾸어도 되는 장점이 존재 

           - vendor => AWS SDK가 다 모여있는 디렉토리

           - 이미지 등록 후 불러올 때 파라미터까지 맞아야 이미지를 정확히 불러올 수 있음 

             - 사진이 썸네일을 변경할 수 있었다는 부분 
             - 솔직히 파라미터 넣는 것도 하드코딩
               - 결국 php 코드 안에서 다 변수화 시킴

           - PHP 특징 -> 엄한 라인을 오류로 출력함 

           - 구조적이고 확장성이 좋은 이미지를 사이트에 삽입 가능!

             - parameter, cdnurl 부분은 변수화시켜 넣으면 개발, 서비스에 매우 편함
             - PHP 이용해서 native 하게 구현하는 게 나음
             - s3fs는 부팅될 때마다 마운트 되어야 한다는 문제
             - Image Optimizer 