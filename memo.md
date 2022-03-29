# CSS Layout

## Flexbox

- flexbox는 행과 열 형태로 항목 무리를 배치하는 일차원 레이아웃 메서드입니다.
- 항목은 부족한 공간에 맞추기 위해 축소되거나 여분의 공간을 채우기 위해 변형된다.
- https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox

## flexbox의 두 개의 축

- flexbox를 다루려면 주축(main axis)과 교차축(cross axis)이라는 두 개의 축에 대한 정의를 알아야 합니다.
- 주축은 flex-direction 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정됩니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
- flex-direction이 row인 경우 => main axis는 가로(수평)이고, cross axis는 세로(수직)이다.
- flex-direction이 column인 경우 => main axis는 세로(수직)이고, cross axis는 가로(수평)이다.
- - main axis의 자식 엘리먼트들을 정렬하려면 justify-content를 쓰고, cross axis를 정렬하려면 align-items를 쓴다.

## Flex direction(row, column)에 따른 main axis와 cross axis 차이 (이미지 참조)

- https://miro.medium.com/max/1400/1*bw4hK0MYxFXbw7ylW2fR5Q.png

## align-self

- align-self CSS 속성은 하나의 그리드 또는 하나의 플렉스 아이템의 align-items 값을 재정의합니다.
- (하나의 엘리먼트에 align-items값을 개별적으로 주는 것이다.)
- 그리드에서는 grid area 안에 항목을 정렬합니다. Flexbox에서는 item을 cross axis에 정렬합니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/align-self

## order

- order CSS 속성은 플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정합니다.
- 컨테이너 아이템의 정렬 순서는 오름차순 order 값이고, 같은 값일 경우 소스 코드의 순서대로 정렬됩니다.
- Flex 항목의 기본 order 값은 0이므로 0보다 큰 정수 값을 가진 항목은 지정되지 않은 항목 뒤에 표시됩니다.
- (order는 숫자 값이 적을 수록 앞에 배치됨)
- 참고: order 속성은 논리적인 순서나 탭 순서와는 전혀 상관 없이 화면에 보이는 순서에만 영향을 줍니다. 따라서 비시각적 매체에 적용해선 안됩니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/order

## flex-wrap

- CSS flex-wrap property는 flex-item 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성입니다.
- 만약 영역 내에서 벗어나지 못하게 설정한다면, 동시에 요소의 방향 축을 결정할 수 있습니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

## flex-shrink

- flex-shrink CSS property는 flex-item 요소의 flex-shrink 값을 설정하는 속성입니다.
- 만약 flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 flex-shrink 속성을 사용하는데, 설정된 숫자값에 따라 flex-container 요소 내부에서 flex-item 요소의 크기가 축소됩니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/flex-shrink

```css
flex-shrink: 2;
flex-shrink: 0.6;
```

## flex-grow

- flex-grow CSS property 는 flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언합니다.
- 만약 형제 요소로 렌더링 된 모든 flex-item 요소들이 동일한 flex-grow 값을 갖는다면, flex-container 내부에서 동일한 공간을 할당받습니다.
- 하지만 flex-grow 값으로 다른 소수값을 지정한다면, 그에 따라 다른 공간값을 나누어 할당받게 됩니다.
- 보통 flex-grow를 사용할땐, flex-shrink, flex-basis 속성을 함께 사용합니다.
- 그리고 일반적으로는 모든 값이 설정되었음을 보장하기 위하여 flex 속성을 이용해 축약형으로 사용합니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow

## flex-basis

- flex-basis CSS 속성은 플렉스 아이템의 초기 크기를 지정합니다. box-sizing을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경합니다.
- flex-basis의 크기는 main axis를 기준으로 아이템들의 크기를 변경한다.
- https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis

```css
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;
```

## Grid

- CSS 그리드 레이아웃은 웹페이지를 위한 이차원 레이아웃 시스템입니다.
- 이 기능을 통해 콘텐츠를 행과 열에 배치할 수 있으며 복잡한 레이아웃을 직접 직관적으로 구축할 수 있는 많은 기능이 있습니다.
- https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Grids

## 그리드 레이아웃이란?

- 그리드는 수평선과 수직선으로 이루어진 집합체로, 디자인 요소를 정렬할 수 있는 대상 패턴을 생성한다.
- 이 디자인은 페이지에서 페이지로 이동할 때 요소가 널뛰거나 너비가 바뀌지 않는 디자인 생성에 도움을 주어 웹 사이트의 일관성을 높여준다.
- https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Grids#what_is_grid_layout

## grid-template-rows

- 그리드 행의 크기 조정 기능을 추적합니다.

```
grid-template-rows: 60px 60px 40px;
grid-template-rows: 1fr 2fr 1fr;
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows

## grid-template-columns

- 그리드 열의 크기 조정 기능을 추적합니다.

```
grid-template-columns: 60px 60px;
grid-template-columns: 1fr 2fr;
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns

## gap

- gap은 행과 열 사이의 간격을 설정합니다.
- row-gap 및 column-gap의 단축어입니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/gap

```css
gap: 10%;
gap: 10px 20px;
gap: calc(20px + 10%);
```

## repeat()

- repeat() 함수는 반복되는 패턴을 나타내는 많은 수의 열이나 행을 보다 간결한 형태로 작성할 수 있습니다.
- 이 함수는 CSS 그리드 속성 grid-template-columns 및 grid-template-rows에서 사용할 수 있습니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/repeat

```js
repeat(4, 1fr)
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(4, 250px)
```

## grid-template-areas

- grid-template-areas은 격자 영역을 지정하여 격자에 셀을 설정하고 이름을 할당합니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas

```css
grid-template-areas:
  "head head"
  "nav main"
  "nav foot";

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}
```

## grid-column-start

- grid-column-start는 그리드 배치에 line, span을 통해 그리드 열 내에서 그리드 아이템의 시작 위치를 지정합니다.
- 이 시작 위치는 그리드 영역의 블록 시작 가장자리를 정의합니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start

```css
grid-column-start: auto;
grid-column-start: 2;
grid-column-start: -1;
grid-column-start: span 2; // (줄이 아닌 블럭의 영역을 지정)
```

## grid-column-end

- 그리드 항목의 끝 위치를 지정함으로써 그리드 영역의 블록 끝 가장자리를 지정합니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end

## grid-row-start

- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start

## grid-row-end

- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end

## Layout using named grid lines

- grid-template-rows 및 grid-template-columns 속성으로 그리드를 정의할 때 그리드의 일부 또는 모든 라인에 이름을 지정할 수 있습니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}

.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}
```

## Grid내의 각각의 셀 내부에서 그리드의 요소 위치 조정

## justify-items

- justify-items 속성은 상자의 모든 항목에 대한 기본 justify-self를 정의하여 모든 항목에 적절한 축을 따라 각 상자를 정렬하는 기본 방법을 제공합니다.
- (모든 아이템들에 justify-self를 정의한 것과 동일)
- https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items

```css
justify-items: center;
justify-items: start;
justify-items: end;
```

## align-items

- align-items 속성은 모든 직계 자식의 align-self 값을 그룹으로 설정합니다. Flexbox에서는 Cross Axis의 항목 정렬을 제어합니다.
- 그리드 레이아웃에서는 그리드 영역 내에서 블록 축의 항목 정렬을 제어합니다. (플랙스에서와 그리드에서의 align-items는 약간 다름)
- https://developer.mozilla.org/en-US/docs/Web/CSS/align-items

```css
align-items: center;
align-items: start;
align-items: end;
```

## place-items (align-items and justify-items 단축어)

- Syntax: 'align-items' 'justify-items'
- https://developer.mozilla.org/en-US/docs/Web/CSS/place-items

## 전체 Grid의 위치 조정

## justify-content

- justify-content 속성은 브라우저가 플렉스 컨테이너의 기본 축과 그리드 컨테이너의 인라인 축을 따라 콘텐츠 항목 사이와 주위에 공간을 분배하는 방법을 정의합니다.
- https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

```css
justify-content: center;
justify-content: start;
justify-content: end;
```

## align-content

- align-content 속성은 콘텐츠 사이와 콘텐츠 주위 빈 공간을 플렉스 박스'의 교차축 또는 그리드의 블록 축을 따라 배치하는 방식을 결정합니다.
- https://developer.mozilla.org/ko/docs/Web/CSS/align-content

```css
align-content: center;
align-content: start;
align-content: end;
```

## place-content (align-content and justify-content 단축어)

- Syntax: 'align-content' 'justify-content'
- https://developer.mozilla.org/en-US/docs/Web/CSS/place-content

## grid-auto-rows

- grid-auto-rows CSS 속성은 암시적으로 생성된 그리드 행 트랙 또는 트랙 패턴의 크기를 지정합니다.
- (grid-template-row에서 지정한 행을 벗어난 요소들에 크기를 지정)
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows

```css
grid-auto-rows: 100px;
grid-auto-rows: 3fr;
grid-auto-rows: minmax(100px, auto);
```

## grid-auto-columns

- grid-auto-columns CSS 속성은 암시적으로 생성된 그리드 열 트랙 또는 트랙 패턴의 크기를 지정합니다.
- (grid-template-column에서 지정한 열을 벗어난 요소들에 크기를 지정)
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns

```css
grid-auto-columns: 100px;
grid-auto-columns: 3fr;
grid-auto-columns: minmax(100px, auto);
```

## grid-auto-flow

- grid-auto-flow CSS 속성은 자동 배치 알고리즘의 작동 방식을 제어하여 자동 배치 항목이 그리드로 흐르는 방식을 정확히 지정합니다.
- (grid의 방향 조정. flex-direction과 비슷)
- grid-auto-flow를 column으로 지정시, 세로 방향을 기준으로 정렬
- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow

```css
/* 기본 값 */
grid-auto-flow: row;
grid-auto-flow: column;
```

## minmax()

- minmax() CSS 함수는 최소보다 크거나 같고 최대보다 작거나 같은 크기 범위를 정의합니다. CSS 그리드와 함께 사용됩니다.
- 쉽게 설명하자면 min-width(min-height)와 max-width(max-height)를 주는 것이라고 볼 수 있다.
- ex) minmax(최소 너비, 최대 너비)
- https://developer.mozilla.org/en-US/docs/Web/CSS/minmax

```css
grid-template-columns: minmax(20px, auto) 1fr 1fr;
minmax(200px, 1fr)
minmax(min-content, 400px)
minmax(max-content, auto)
```

## auto-fill

- 남는 공간을 빈 셀로 남겨둔다.
- ex) grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

## auto-fit

- 남는 공간을 크기를 늘려 채운다.
- ex) grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

## auto-fill, auto-fit은 주로 repeat함수 내에서 사용하고, minmax와 함께 사용한다.

- https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
