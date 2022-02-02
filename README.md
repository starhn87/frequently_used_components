# 원티드 프리온보딩 프론트엔드 코스 사전과제

<br>

## 공통. Wrapper

### 구현 방법 및 이유

레이아웃 스타일을 정의한 컴포넌트 Wrapper를 만들어서 기능 구현한 컴포넌트를 감싸도록 하였습니다.
Toggle, Modal 등의 컴포넌트들의 레이아웃을 공통 모듈로 관리하기 위하여 구현하였습니다.

### 실행 방법

Toggle, Modal 등의 컴포넌트 렌더링을 위한 JSX의 가장 바깥에 Wrapper를 import한 태그로 감싸주고 title과 children 속성에 맞게 작성하면 됩니다.
<br>
<br>

## 공통. MouseCircle

### 구현 방법 및 이유

mousedown, mousemove, mouseup 이벤트리스너를 추가하여 마우스 클릭시 커서 주위에 원이 나타나는 효과를 주었습니다.
공통 기능이므로 컴포넌트를 만들어서 App에 추가하는 방식으로 하면 중복되는 코드를 줄이고 간단하게 공통 모듈로 사용할 수 있기에 컴포넌트를 추가하는 방식으로 구현하였습니다.

### 실행 방법

어플리케이션 실행 후 DOM 안에서 어느 곳을 클릭하던지 해당 기능을 사용하실 수 있습니다.
<img src="https://user-images.githubusercontent.com/36434219/151656821-c5542afa-2834-4b95-be39-6a77603848bc.gif">
<br>
<br>

## 1. Toggle

### 구현 방법 및 이유

checked라는 state를 만들어서 mouseup라는 이벤트 발생시마다
state를 업데이트시켜서 해당 컴포넌트를 리렌더링시키고 그때 css 효과를 주게끔 구현하였습니다.
Props로 defaultChecked, color, disabled을 추가하여 옵션으로 적용할 수 있도록 하였습니다.
자세히 보면 색이 채워질 때 동시에 채워지는 것이 아니라 방향성을 가지고 채워지므로 그런 디테일을 구현해보고 싶었습니다.

### 에러 로그

색깔을 방향성 있게 채우고 비우게 하는 것에서 난관이 있었습니다.
그래서 css 속성을 검색하여 background 속성 중 linear-gradient라는 속성이 이 경우에 제격이라는 것을 알아내어 적용시켰습니다.

### 실행 방법

토글 스위치에 마우스를 갖다대고 길게 클릭하시거나 짧게 클릭하시면 스위치가 토글됩니다.
<img src="https://user-images.githubusercontent.com/36434219/151660862-fbca442b-1d6b-49ed-a1ff-d67d9a8e034c.gif">
<br>
<br>

## 2. Modal

### 구현 방법 및 이유

clicked라는 state를 만들어서 mouseup 이벤트가 발생할 때마다 Modal 컴포넌트가 업데이트되면서 css 효과가 적용되어 리렌더링되게끔 구현하였습니다.
버튼 색깔, 버튼 글자 색깔, 모달 컨텐츠 글자 색깔, 모달 컨텐츠 텍스트와 모달 이외의 부분을 클릭시 모달이 사라지는 기능을 선택할 수 있게끔 옵션으로 두었습니다.

### 에러 로그

버튼 클릭시 나오는 모달 관련 디테일적인 부분에서 css 효과를 주는 데에 시간이 약간 소요되었습니다.
css 스타일에서 중복되는 코드가 발생하여 Toggle 컴포넌트의 style을 재활용할 수 있게 공통 모듈화하여 재사용할 수 있도록 하였습니다.

### 실행 방법

Open Modal 버튼 클릭시 모달이 보여지고 모달의 X 버튼 클릭 혹은 모달 이외의 부분 클릭시 모달이 사라집니다.
만약, 모달 이외의 부분 클릭시 모달이 사라지게끔 하고 싶다면 outsideClose Prop을 true로 설정하시면 됩니다.
밑의 예시는 outsideClose를 true로 설정한 경우입니다.
<img src="https://user-images.githubusercontent.com/36434219/151684355-f28f2eaa-c211-4d5f-95b3-fb258ea52afc.gif">
<br>
<br>

## 3. Tab

### 구현 방법 및 이유

selected라는 state를 두어 탭 내에서 클릭 이벤트가 발생할 때마다 onClick 속성으로 selected가 변경되도록 하여 highlight될 수 있도록 하였습니다.
default 활성화 탭, 탭 색깔, 탭 문구와 탭 컨텐츠 문구를 정의하는 객체를 옵션으로 설정함으로써 변경할 수 있도록 하였습니다.
컴포넌트 단위로 동작하는 리액트의 특성에 맞게 JSX에 data-attribute 속성이나 id를 추가하기 보다는 onClick 함수를 넣어줌으로써 구현하였습니다.

### 에러 로그

탭 선택에 따른 텍스트 변경을 어떤 식으로 처리할 지 고민하였습니다.
TABS_ITEMS 객체의 key 값을 index처럼 사용할 수 있게 두고 selected state와 연동될 수 있도록 하여 바로 가져올 수 있도록 해결하였습니다.

### 실행 방법

탭을 클릭하시면 활성화되는 탭이 바뀌면서 문구도 바뀌게 됩니다.
<img src="https://user-images.githubusercontent.com/36434219/151799658-abb8f875-800b-40ac-ad34-64facad4a426.gif">
<br>
<br>

## 4. Tag

### 구현 방법 및 이유

입력한 tag들을 담은 배열인 tags와 focus라는 state를 가지고 태그 입력시와 포커스 여부에 따라 컴포넌트가 업데이트되어 리렌더링하게끔 구현하였습니다.
엔터 키를 누르거나 x 버튼 클릭시 tags 배열을 업데이트하여 리렌더링되도록 하였고 focus state를 만들어서 포커스 여부에 따라 변경되도록 하여 css 효과를 주었습니다.

### 에러 로그

input 안에 어떻게 태그를 넣는 과정에서 난관을 겪었습니다.
문제를 해결하기 위해 tag list와 input을 감싸는 div를 만들어서 tag list와 input을 나란히 배치되도록 하고 input 창 포커스시 div에 효과를 주어서 input 박스 안에 태그와 입력 부분이 있는 것처럼 하였습니다.

### 실행 방법

input을 클릭하고 원하시는 단어 입력 후 엔터 키를 누르시면 태그가 생깁니다.
태그를 없애고 싶으시면 x 버튼을 누르시면 됩니다.
<img src="https://user-images.githubusercontent.com/36434219/151896791-623db991-583c-49db-9ad6-a29b00b3bc47.gif">
<br>
<br>

## 5. AutoComplete

### 구현 방법 및 이유

Top 100 영화 데이터셋을 기준으로 하였습니다.
입력값인 value와 데이터셋과 매칭될 데이터의 배열인 wordList을 상태로 두었습니다.
입력값이 바뀔 때마다 filter 함수를 통해 입력값을 포함하는 데이터의 배열로 wordList을 set하고 화면에 보여지게 하였습니다.

### 에러 로그

input에 포커스/블러된 경우, 입력 중에 매칭되는 데이터가 있을/없을 경우, 매칭되는 데이터 중 하나를 클릭했을 경우, 데이터 이외의 영역을 클릭했을 경우 등의 경우의 수에 따른 로직을 생각하는 과정에서 약간의 시간 지체가 있었습니다. 최대한 심플하게 처리하기 위해 기존의 state를 활용하며 경우의 수에 따른 효과를 줄 수 있도록 구현하였습니다.

### 실행 방법

input을 클릭하고 생각나는 영화를 입력하시면 Top 100과 매칭될 경우 자동 완성된 리스트가 보여지게 됩니다.
그 중 하나를 클릭하여 자동 완성을 적용할 수 있습니다.
<img src="https://user-images.githubusercontent.com/36434219/152099522-08ee638d-0c57-40c6-b48d-2dbac7cf266c.gif">
<br>
<br>

## 6. ClickToEdit
