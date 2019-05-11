* 폴더와 파일을 직접 생성하고 연결하면서 구조

1. 폴더와 파일들을 직접 생성하고 연결하면서 구조를 익힘!
    1. nodebird 폴더를 만들고 항상 package.json을 제일 먼저 생성해야 함. (scripts 부분에 start 속성은 잊지 말고 넣어주자)
    2. 시퀄라이즈를 설치 - SQL을 데이터베이스로 사용할 계획 
        * why? 사용자와 게시물 사이, 게시물과 해시태그 사이 관계가 중요
        * npm i sequelize mysql2 -> node_modules 폴더 & package-lock.json이 생성됨 
        * sequelize init => config, migrations, models, seeders 폴더가 생성 
    3. 다른 폴더 생성 필요 
        * views 폴더 - 템플릿 파일을 넣을 폴더, routes - 라우터를 넣을 폴더, public - 정적 파일을 넣을 폴더 
        * passport 폴더 - passport 패키지를 위한 폴더 
    4. app.js를 nodebird 폴더를 생성 => 폴더 구조 제공
        * 파일은 추가되지만, 폴더는 새로 생성되지 않음 
        * 고정된 구조가 아니므로 편의에 따라 바꿔도 됨 
        * 서비스가 성장하고 규모가 커질수록 폴더 구조도 복잡해짐 => 서비스에 맞는 구조를 적용
    5. 먼저 필요한 npm 패키지들을 설치하고 app.js를 작성 => 템플릿 엔진은 pug를 사용
        * npm i express cookie-parser express-session morgan connect-flash pug
        * npm i -g nodemon
        * npm i -D nodemon
        * 서버 코드에 수정 사항이 생길 때마다 매번 서버를 재시작하기는 귀찮음 => nodemon 모듈로 서버를 자동 재시작 
        * 앞으로 서버 코드를 수정하면 nodemon이 서버를 자동으로 재시작해줌 => nodemon이 실행되는 콘솔에 rs를 입력해서 수동으로 재시작할 수도 있음 
            * nodemon - 개발용으로만 사용할 것! => 배포 후에는 서버 코드가 빈번하게 변경될 일이 없음 -> nodemon을 사용하지 않아도 됨.
        

        
