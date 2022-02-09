# 원티드 프리온보딩 프론트엔드 코스 사전과제

## 어플리케이션 실행 방법

### 1. Netlify 배포

- 아래의 URL을 클릭하여 테스트할 수 있습니다.
- https://epic-carson-9ee275.netlify.app/

### 2. 로컬 환경

- https://github.com/starhn87/wanted_pre_onboarding.git 레포지토리를 클론합니다.
- 해당 레포지토리 경로로 들어간 뒤 yarn 또는 npm install을 입력 후 엔터키를 눌러서 node 모듈을 설치합니다.
- node 모듈 설치가 끝난 뒤 yarn start 혹은 npm run start를 입력 후 엔터키를 눌러서 실행시킵니다.
- https://localhost:3000 주소로 들어간 뒤 테스트할 수 있습니다.

<br>
<br>

## 컴포넌트

### 전체적으로 고려한 점

재사용성과 확장성을 고려하여 부모 컴포넌트에서 해당 컴포넌트를 불러와서 쓸 때 어떻게 하면 편리하게 재사용할 수 있을까를 고민하였습니다. 그래서 확장성과 내부 기능 구현 사이의 적절한 지점을 찾으려 노력하였습니다.
<br>
<br>

### 공통. Wrapper

#### 구현 방법 및 이유

레이아웃 스타일을 정의한 컴포넌트 Wrapper를 만들어서 기능 구현한 컴포넌트를 감싸도록 하였습니다.
컴포넌트들의 레이아웃을 공통 모듈로 관리하기 위하여 구현하였습니다.

##### props

| 이름       | 타입              | 상세                             |
| ---------- | ----------------- | -------------------------------- |
| `title`    | `string`          | Wrapper를 나타내는 제목          |
| `children` | `React.ReactNode` | Wrapper로 감싸서 보여줄 컴포넌트 |

#### 실행 방법

Toggle, Modal 등의 컴포넌트를 Wrapper로 감싸주고 title에 컴포넌트를 나타낼 제목을 적으면 됩니다.
<br>
<br>

### 공통. MouseCircle

#### 구현 방법 및 이유

mousedown, mousemove, mouseup 이벤트리스너를 추가하여 마우스를 누르고 있을 때 커서 주위에 원이 나타나는 효과를 주었습니다.
공통 기능이므로 모듈로 사용할 수 있게 구현하였습니다.

#### 실행 방법

어플리케이션 실행 후 DOM 안에서 어느 곳을 클릭하던지 해당 기능을 사용하실 수 있습니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/151656821-c5542afa-2834-4b95-be39-6a77603848bc.gif">
<br>
<br>

### 1. Toggle

#### 구현 방법 및 이유

토글 관련 요소들을 prop으로 받아 Toggle 안에서 클릭 이벤트가 발생할 때마다 업데이트시킴으로써 해당 컴포넌트가 상태에 따른 동작을 할 수 있도록 구현하였습니다.

##### props

| 이름       | 타입       | 기본값  | 상세                           |
| ---------- | ---------- | ------- | ------------------------------ |
| `checked`  | `boolean`  |         | 토글 스위치 On/Off 여부 상태   |
| `onClick`  | `function` |         | 토글 스위치 클릭시 동작할 함수 |
| `disabled` | `boolean`  | `false` | 토글 스위치 disabled 옵션      |

#### 에러 로그

색깔을 방향성 있게 채우고 비우게 하는 것에서 난관이 있었습니다.
그래서 css 속성을 검색하여 background 속성 중 linear-gradient라는 속성을 추가하여 구현하였습니다.

#### 실행 방법

토글 스위치를 클릭하시면 스위치가 토글되며 On/Off 여부에 따라 아래의 텍스트도 같이 변경됩니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/151660862-fbca442b-1d6b-49ed-a1ff-d67d9a8e034c.gif">
<br>
<br>

### 2. Modal

#### 구현 방법 및 이유

modal 활성화 여부 상태와 상태 변경 함수, 컨텐츠 등을 prop으로 받아 Modal 활성화시킬 수 있고 활성화 여부에 따라 다르게 동작할 수 있도록 구현하였습니다.

##### props

| 이름           | 타입       | 기본값  | 상세                                                           |
| -------------- | ---------- | ------- | -------------------------------------------------------------- |
| `value`        | `boolean`  |         | 모달 활성화 여부 상태                                          |
| `onChange`     | `function` |         | 모달 활성화 상태가 변경될 때 동작할 함수                       |
| `content`      | `string`   |         | 모달 활성화시 보여줄 컨텐츠                                    |
| `outsideClose` | `boolean`  | `false` | 모달 활성화 후 모달 이외의 부분 클릭시 모달 비활성화 동작 여부 |

#### 실행 방법

Open Modal 버튼 클릭시 모달이 보여지고 모달의 X 버튼 클릭시 모달이 사라집니다.
만약, 모달 이외의 부분 클릭시 모달이 사라지게끔 하고 싶다면 outsideClose Prop을 true로 설정하시면 됩니다.
아래의 예시는 outsideClose를 true로 설정한 경우입니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/151684355-f28f2eaa-c211-4d5f-95b3-fb258ea52afc.gif">
<br>
<br>

### 3. Tab

#### 구현 방법 및 이유

prop으로 탭을 정의하는 객체 배열과 활성화된 탭 상태와 상태 변경 함수를 받아서 동작하도록 하였습니다.
현재는 없지만 탭 정의 객체 배열에 onCLick 요소를 추가할 수 있도록 하여 각 탭마다 클릭시 다른 동작을 할 수 있게끔 하였습니다. (prop type에 정의)

##### props

| 이름          | 타입       | 상세                                |
| ------------- | ---------- | ----------------------------------- |
| `selectedTab` | `number`   | 활성화된 탭 상태                    |
| `onChange`    | `function` | selectedTab이 변경될 때 동작할 함수 |
| `items`       | `object`   | 탭 정보가 담긴 객체                 |

#### 에러 로그

탭 선택에 따른 텍스트 변경을 어떤 식으로 처리할 지 고민하였습니다.
TABS_ITEMS 객체의 key 값을 index처럼 사용할 수 있게 두고 selectedTab과 연동될 수 있도록 하여 바로 가져올 수 있도록 해결하였습니다. (e.g. TABS_ITEMS[selectedTab].desc)

#### 실행 방법

탭을 클릭하시면 활성화되는 탭이 바뀌면서 문구도 바뀌게 됩니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/151799658-abb8f875-800b-40ac-ad34-64facad4a426.gif">
<br>
<br>

### 4. Tag

#### 구현 방법 및 이유

태그 컴포넌트이므로 필요한 상태와 함수들은 prop으로 받도록 하고 내부 기능 구현에 필요한 상태들은 내부에서 선언하여 따로 관리될 수 있게끔 구현하였습니다.

##### props

| 이름           | 타입       | 상세                           |
| -------------- | ---------- | ------------------------------ |
| `value`        | `string`   | 입력값 상태                    |
| `onChange`     | `function` | 입력값이 변경될 때 동작할 함수 |
| `onPressEnter` | `function` | 엔터 누를시 실행될 함수        |
| `tags`         | `array`    | 태그들이 담긴 배열 상태        |
| `onRemoveTag`  | `function` | 태그 제거 함수                 |

#### 에러 로그

input 안에 어떻게 태그를 넣는 과정에서 난관을 겪었습니다.
문제를 해결하기 위해 tag 부분과 input을 감싸는 div를 만들어서 tag와 input을 나란히 배치되도록 하고 input 창 포커스시 div에 효과를 주어서 input 박스 안에 태그와 입력 부분이 있는 것처럼 구현하였습니다.

#### 실행 방법

입력창을 클릭하고 원하시는 단어 입력 후 엔터 키를 누르면 태그가 생깁니다.
태그를 없애고 싶으면 x 버튼을 누르면 됩니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/151896791-623db991-583c-49db-9ad6-a29b00b3bc47.gif">
<br>
<br>

### 5. AutoComplete

#### 구현 방법 및 이유

Top 100 영화 데이터셋을 기준으로 하였습니다.
데이터셋과 자동 완성될 배열 상태와 상태 변경 함수를 prop으로 받고 input 입력값과 active 여부는 내부적으로 선언하여 따로 관리하게끔 구현하였습니다.

##### props

| 이름                      | 타입       | 상세                                               |
| ------------------------- | ---------- | -------------------------------------------------- |
| `value`                   | `string`   | 입력값 상태                                        |
| `onChange`                | `function` | 입력값 변경시 실행될 함수                          |
| `suggestions`             | `array`    | auto complete된 정보 배열 상태                     |
| `onSuggestionClick`       | `function` | 자동 완성 리스트 중 하나를 클릭했을 때 실행될 함수 |
| `onResetValue`            | `function` | 입력값을 초기화할 때 동작할 함수                   |
| `onOutOfSuggestionsClick` | `function` | 자동완성 리스트 이외의 영역 클릭시 동작할 함수     |

#### 에러 로그

input에 포커스/블러된 경우, 입력 중에 매칭되는 데이터가 있을/없을 경우, 매칭되는 데이터 중 하나를 클릭했을 경우, 데이터 이외의 영역을 클릭했을 경우 등의 경우의 수에 따른 로직을 생각하는 과정에서 약간의 시간 지체가 있었습니다. 최대한 심플하게 처리하기 위해 기존의 prop와 state를 활용하여 경우의 수에 따른 효과를 줄 수 있도록 구현하였습니다.

#### 실행 방법

input을 클릭하고 생각나는 영화를 입력하시면 Top 100과 매칭될 경우 자동 완성된 리스트가 보여지게 됩니다.
그 중 하나를 클릭하여 자동 완성을 적용할 수 있고 x 버튼을 클릭하여 입력 값을 리셋할 수 있습니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/152119982-c4a0c64f-76da-4953-8010-2de7be37d8e6.gif">
<br>
<br>

### 6. ClickToEdit

#### 구현 방법 및 이유

컴포넌트는 재사용 가능한 최소한의 단위이므로 input과 그 관련 속성들, 클릭시 값 상태와 상태 변경 함수를 prop으로 받도록 하여 재사용할 수 있도록 구현하였습니다.
나이 입력 후 클릭시 숫자가 아닌 값이 들어오면 모달을 재사용하여 숫자 입력을 유도하였습니다.

##### props

| 이름       | 타입                                              | 상세                                        |
| ---------- | ------------------------------------------------- | ------------------------------------------- |
| `label`    | `string`                                          | 입력창의 제목                               |
| `name`     | `string`                                          | input의 name 속성값                         |
| `value`    | `string \| number` (name과 age에 대응해야 하므로) | 입력 후 click시 입력값이 반영되는 값의 상태 |
| `onChange` | `function`                                        | value 상태 변경 함수                        |

#### 실행 방법

이름 혹은 나이 입력창을 클릭하여 값을 변경하시고 포커스가 해제되면 아래의 텍스트에 반영되는 것을 볼 수 있습니다.
<br>
<img src="https://user-images.githubusercontent.com/36434219/152985981-a8a7421c-513b-4938-9e1f-4ea652cd7521.gif">
<br>
<br>
