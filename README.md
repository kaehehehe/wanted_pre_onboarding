# 원티드 프리온보딩 코스
결과물은 여기서 확인할 수 있습니다. 👉 [보러 가기](https://kaehehehe.github.io/wanted_pre_onboarding/)

<br />

## ✨ 공통
- DRY(Don't Repeat Yourself) 원칙을 지키기 위해 반복적으로 써야 하는 코드는 재활용하도록 노력했습니다.
- CSS는 styled-components를 사용했습니다.
- 반응형 웹으로 구현했습니다.

<br />
<br />

## ✨ Toggle
- input 태그의 checkbox를 활용해서 구현했습니다.
- 해당 toggle을 실제로 적용한 토이프로젝트가 있어서 여기에도 적용했습니다. 👉 [보러 가기](https://kaehehehe.github.io/my-pomodoro/)
- toggle을 클릭할 때마다 dark mode, light mode로 변경됩니다.
- 배경 색이 바뀌는 부분은 theme라는 상태(state)를 만들어서 styled-components 코드에다가 현재 theme를 전달하는 방식으로 구현했습니다.

![KakaoTalk_Photo_2022-02-06-13-26-50](https://user-images.githubusercontent.com/77221488/152667766-6b6bb64a-884f-4f6c-b8d1-9b38a06b5687.gif)

### ✅ Error Handling Log

#### What kind of error?

순수 css에서는 아래 코드와 같이 content 속성값을 이모지로 지정해주기만 하면 테마에 맞는 이모지가 보이는 toggle을 구현할 수 있었습니다. 하지만 styled-components으로 구현하려고 하니까 이 방법으로는 이모지가 화면에 보이지 않았습니다.

```css
.slider::after {
  position: absolute;
  content: '🌞';
  font-size: 22px;
  right: 5px;
}
```

#### How to solve the problem

LightModeIcon 컴포넌트와 DarkModeIcon 컴포넌트를 만들어서 theme에 따라`display` 속성이 `block`이 되거나  `none`이 되도록 구현해서 이 문제를 해결했습니다. 

이모지 위치는 toggle(StyledToggle 컴포넌트) 기준으로 `position: absolute`를 사용해서 위치를 지정했습니다.

```jsx
const LightModeIcon = styled.div`
  display: ${({ theme }) => (theme === 'dark' ? 'block' : 'none')};
  position: absolute;
  font-size: 25px;
  top: -1px;
  left: 3px;
  z-index: 100;
`;

const DarkModeIcon = styled(LightModeIcon)`
  display: ${({ theme }) => (theme === 'dark' ? 'none' : 'block')};
  left: 38px;
`;

return (
    <ToggleContainer theme={theme}>
      <ToggleTitle theme={theme}>Toggle</ToggleTitle>
      <StyledToggle>
        <LightModeIcon theme={theme}>🌞</LightModeIcon>
        <DarkModeIcon theme={theme}>🌛</DarkModeIcon>
        <Input type="checkbox" onClick={handleToggle} />
        <Slider theme={theme} />
      </StyledToggle>
      <Text theme={theme}>{theme} mode</Text>
    </ToggleContainer>
  );
```

<br />
<br />

## ✨ Modal
- 사용자 편의성을 고려해서 모달 창의 x 버튼을 찾아서 클릭하지 않아도 모달 창 외의 아무 곳이나 클릭하면 창이 닫히게 구현했습니다.
- 모달 창이 떴을 때 나타나는 배경에다가 id 값을 지정해서 click 이벤트를 활용해 e.target.id가 해당 id일 때 모달 창이 닫히는 방식으로 구현했습니다. 

![KakaoTalk_Photo_2022-02-01-14-21-34 003](https://user-images.githubusercontent.com/77221488/151917113-97a8a286-9d36-4335-8e16-dbae69b3c6cc.gif)

<br />
<br />

## ✨ Tab
- 각 tab마다 id 값을 지정해서 해당 tab이 target이 되었을 때 className을 활용해서 tab 색상이 바뀌도록 구현했습니다.
- 창 크기에 따라 tab 폭이 변경되도록 구현했습니다.

![KakaoTalk_Photo_2022-02-01-14-20-39 001](https://user-images.githubusercontent.com/77221488/151917158-24459494-9b31-4cb3-bbcd-c32466a8843d.gif)

<br />
<br />

## ✨ Tag
- 태그가 중복되는 경우에는 반복 추가되지 않도록 구현했습니다.
- 한국어나 일본어도 태그로 추가할 수 있도록 keydown 이벤트 대신 keyup 이벤트를 사용해서 구현했습니다. 엔터키를 누르면 태그가 추가됩니다.
- input에 focus 되었을 때 테두리 색이 하늘색으로 변경되도록 구현했습니다.

![KakaoTalk_Photo_2022-02-01-14-20-41 002](https://user-images.githubusercontent.com/77221488/151917175-80e92835-b9c3-4600-80fd-c4f4c7fbc36c.gif)

<br />
<br />

## ✨ AutoComplete
- 디자인은 구글 검색 창을 기반으로 했습니다.
- 마우스로도 키워드 선택이 가능하지만 키보드 사용을 선호하는 유저를 위해 키보드만으로도 선택할 수 있도록 구현했습니다.
- 입력한 값과 동일한 값으로 시작되는 키워드가 자동으로 나타나도록 구현했습니다.(slice 메서드를 활용)<br/> e.g.) "co"를 입력하면 "co"로 시작하는 단어들이 나온다.

![KakaoTalk_Photo_2022-02-01-17-44-52](https://user-images.githubusercontent.com/77221488/151937614-bb5c8bc9-a817-47cf-ae70-a9db0c849601.gif)

<br />
<br />

## ✨ ClickToEdit
- 나이는 0보다 작은 숫자가 될 수 없으므로 0보다 작은 숫자를 입력하면 반영되지 않도록 구현했습니다.
- 이름과 나이를 빈 칸으로 입력하는 경우 유효하게 반영되지 않도록 구현했습니다.
- 사용자가 값을 입력할 때마다 렌더링되는 것은 비효율적이기 때문에 useRef를 활용하여 구현했습니다. 해당 input에서 focus가 되지 않았을 때(blur 이벤트를 활용) 딱 한번만 렌더링 되도록 구현했습니다.
- 사용자 편의성을 고려해서 빈 칸이 아니라 해당 칸의 타이틀을 클릭하는 경우에도 해당 input에 포커싱되도록 구현했습니다.

![KakaoTalk_Photo_2022-02-01-14-21-32 001](https://user-images.githubusercontent.com/77221488/151917198-ff2b056c-6efa-4901-81f8-3b1abb820dbc.gif)

<br />
<br />

## ✨ 회고
이번 과제는 코드스테이츠 교육 과정에서 이미 구현한 적이 있는 기능도 있었고, 특히 toggle, modal, ClickToEdit같은 경우에는 다른 프로젝트를 통해 이미 한번 처음부터 끝까지 혼자서 구현한 경험이 있었기 때문에 구현하는데 에러가 생기거나 크게 어려운 점은 없었습니다. 그 대신 이번에는 코드 가독성이나 반복적으로 써야 하는 코드를 어떻게 관리하는지에 대해서 조금 더 신경을 써서 작업했습니다.
<br />
유지보수하기 편하고, 제3자가 보았을 때도 쉽게 파일을 찾을 수 있도록 data, style이라는 폴더를 따로 만들었으며 반복적으로 써야 하는 css 파일은 style이라는 폴더를 만들어서 별도로 관리했습니다. data 폴더 안에는 AutoComplete 컴포넌트에서 쓰이는 더미 데이터 파일을 넣었는데, 지금은 몇개 밖에 단어를 추가하지 않았지만 추후 유지보수를 하면서 늘리게 될 것을 미리 생각해서 data 폴더를 따로 만들었습니다.
