- 앱 개발의 미래, 리액트 네이티브로 모바일 앱 제작하기

  - 강명구, 정주원 멘토님 

  - React Native - 가성비 좋은 모바일 크로스 플랫폼 프레임워크

  - Native 앱 개발 - 협업, 코드 리뷰, 이슈 트래킹 

    - ios와 안드로이드는 코드 swap을 할 수 없음 

  - React Native - JAVASCRIPT 언어 하나로 한 번에 개발 가능 

    - performance는 Native앱에 뒤지지 않음

  - EXPO - React Native 시작 시 환경 설정이 필요 없음 

    - 단점 : 기본적으로 들어가는 라이브러리가 많아 용량 많이 차지

    - 시작은 Expo에서 하다가 중간에 빼서 native로 가능함

    - 만들고 있는 앱을 실시간으로 공유할 때 QR 사용 가능

      - 프로젝트 생성 및 오픈 
      - QR 코드로 디바이스에서 실행 
      - 흔들어서 개발 메뉴 or Ctrl + M 

    - Live Reloading 

      - 파일이 변경될 경우 앱을 리로드

    - Hot Reloading

      - 해당 변경 부분만을 리로드

    - Expo

      - Tunnel - EXpo에서 제공해주는 서버 사용 
        - 어디서든 사용 가능
      - Lan -wifi 사용(권장)
      - Localhost - 시뮬레이터에서 사용(제일 빠름)

    - 디버깅 

      - Debug remote js을 키면 사용할 수 있음 
        - 코드를 훑으면서 개발할 수 있음 
        - Development mode 권장 
        - camelCase(CamelCase)를 주로 사용
          - 컴포넌트들을 만들면서 개발할 수 있다는 것을 알 수 있음 

    - Flexbox를 통해 개념을 많이 잡음 

    - flex 

      - 상위 컴포넌트를 기준으로 얼마의 비율을 차지할 것인가? 

    - Component

      - React.js에서 component를 상속받아 React Native를 사용
      - 독립적인 단위 모듈
      - React.js에서 상속
      - 단방향 데이터 흐름을 강제
      - Class 방식 vs Functional 방식
        - class 
          - Full Feature
          - State, Props, LifeCycle
        - Functional 
          - Simple Feature
          - Props, No state, No lifeCycle

      ```react
      class App extends React.Component {
          componentDidMount = () => {
              
          };
      	render() {
              return <RootStack />;
          }
      }
      
      
      // import react를 Functional에선 해주어야 함
      App = () => {
          return <RootStack />;
      }
      ```

    - Props

      - 컴포넌트에서 사용할 데이터 중 변동되지 않는 데이터
      - parent 컴포넌트에서 child 컴포넌트로 데이터를 전할 때 주로 사용

    - style 

      - View 이외의 다른 컴포넌트들로 가질 수 있어 

    - TopBar 

      - Header 부분 

    - expo-constants 

      - 옛날엔 내장이었지만, 지금은 따로 설치해서 사용해 주어야 함

      ```react
      import { Constants } from 'expo-constants';
      // ...
      <View style={styles.statusBar} />
      // ...
      const styles = StyleSheet.create({
          statusBar : {
            height: Constants.statusBarHeight  
          },
          container : {
              flex : 1,
          }
      });
      ```

    - justifyContent : 'space-between'

      - 좌우로 최대한 떨어뜨려놓은 부분 
      - flexbox의 요소로 사용함

    - statusBar는 유동적 => Constants

    - height를 주석처리하고 flex를 1로 해보자

      - 명시적으로 준 부분은 일단 주고
      - 명시한 부분을 제외하고 화면을 꽉 차게 하는 것

    - this.props.style - 외부에서 사용할 style을 사용해보자 

      - 외부에서 style 프로퍼티를 받을 준비가 된 것

    - style에 여러 스타일을 넣으려면 배열로써 사용해야 한다.

    - this.props.title || 'TITLE'

      - 왼쪽 부분이 비어있을 때 'TITLE'을 출력해주는 부분

    - State 

      - 컴포넌트 내부에서 사용할 유동적인 데이터 

    - Window 용 브릿지를 만들어서 사용할 수 있어

      - React Native 브릿지 
      - 나중에 궁금증이 생길 떄는 더 찾아봐도 좋음

    - 컴포넌트를 재활용한다?

    - 화면에 띄워놓고 실시간으로 적용되는 것을 보며 작업을 많이 함

    - render - 화면을 그릴 때마다 사용되는 부분

    - return - 화면을 보여주는 부분

    - destructing

      - Object에서 요소를 뽑아내는 부분 

    - 실제 데이터는 주소를 어떻게 받을 것인가?

    - 외부 API를 통해서 주기적으로 정보를 가져올 때 내부적으로 어떻게 화면에 반영할 것인가?

      - state를 사용하자

    - getcoinDatas - API 통신은 대부분 비동기라 async를 사용

    - 비동기를 동기적으로 실행시키기 위해 await가 들어가 있는 것

    - this.state 는 처음 초기화할 때만 쓰고, state 이후에 수정 시 

    - this.setState를 해서 사용 

      - 왜? 

      - this.state으로 읽어오면 setState를 통해서 변할 때 

        render 화면이 다시 동작을 하게 됨 

      - this.state로 하면 화면이 갱신이 되지 않음 

      - 렌더링에 관계되는 변수를 사용할 때는 setState를 사용해라

    - property는 외부에서 데이터를 주었음

    - state는 내부에서 변화되는 값을 정의할 때 사용 

      - setState를 통해 변수값을 변화시켜주어야만 화면이 같이 변화가 오게 되는 것 

    - await 부분만 주의! 

    - prop와 state의 차이를 아는 것이 매우 중요!

    - componentDidMount 

      - 어딘가에 들어가서 나오게 되는 순간 동작하는 함수

    - this.state.coinDatas만을 사용해서 코드를 수정할 수 있어 

    - Data Flow (어떻게 컴포넌트에서 다른 컴포넌트로 데이터를 넘기는가????)

      - components/CoinView.js - Refresh
      - =>  App.js (props.function을 통해)
      - => componenets/TopBar.js

    - 리액트에서 화면을 그려주는 방식을 이해하는 것!

      - 퍼포먼스에 부담을 최소한으로 하는 방법은?
      - key 값? 반복되는 컴포넌트를 구별해주기 위한 방법 

    - refreshDate가 바뀔 때마다 App.js에서 TopBar로 넘겨줌 

    - CoinView -> refreshDate을 coinview.js에서 받아서 this.props.refreshDate로 받아 사용하는 부분이 존재

      - setRefreshDate를 사용한 값을 넘겨주는 부분

      - coinView에서 refreshDate를 호출하게 됨 

      - prop에 function을 넘겨 coinview에 위해 실행이 되게 되는 것 
  
    - ScrollView에선 justifyContent, alignItems가 적용이 안 됨
    
    - stretch -> 화면을 꽉 채우는 옵션 
    
    - backgroundColor로 각각의 컴포넌트 영역들을 구분해서 코드 작성을 많이 함
    
    - 실제 개발에선 styled은 따로 뺴서 작업을 하는 경우가 대부분 
    
    - 데이터가 많아질 부분에 대해선 ListView를 사용해야 더욱 효율적으로 개발할 수 있어 
    
    - 상태 관리 라이브러리를 사용해보기
    
    - Native 앱으로 만들기 위해서 React-native 프레임워크를 사용하는 것 
    
    - Expo eject 명령어???
    
    - 순수 react-native-cli 명령어만 사용해서 만드는 방법 
    
      - Expo에서 쓰는 기능들을 사용할 수는 없다
      - expo 상에서 지원이 되지 않는 Native SDK 쓰려면 React-Native 자체를 사용하면 된다.
        - 아니면 reject 해야해 ㅠㅠㅠ