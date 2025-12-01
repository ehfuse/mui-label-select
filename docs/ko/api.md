# API 레퍼런스

## 목차

-   [LabelSelect](#labelselect)
-   [Props](#props)
    -   [label](#label)
    -   [value](#value)
    -   [onChange](#onchange)
    -   [options](#options)
    -   [size](#size)
    -   [enableWheel](#enablewheel)
    -   [showLabel](#showlabel)
    -   [emptyLabel](#emptylabel)
    -   [readOnly](#readonly)
    -   [showEmptyOption](#showemptyoption)
    -   [fullWidth](#fullwidth)
    -   [formControlProps](#formcontrolprops)
    -   [className](#classname)
    -   [style](#style)
    -   [sx](#sx)
    -   [inputProps](#inputprops)
    -   [defaultValue](#defaultvalue)
-   [타입](#타입)
    -   [LabelSelectOption](#labelselectoption)
    -   [LabelSelectProps](#labelselectprops)
-   [주의사항](#주의사항)

---

## LabelSelect

Material-UI Select를 확장한 라벨이 포함된 Select 컴포넌트입니다.

```tsx
import { LabelSelect } from "@ehfuse/mui-label-select";
```

---

## Props

| Prop                                  | 타입                                 | 기본값       | 필수 | 설명                       |
| ------------------------------------- | ------------------------------------ | ------------ | ---- | -------------------------- |
| [label](#label)                       | `string`                             | -            | ✅   | 라벨 텍스트                |
| [value](#value)                       | `string \| number`                   | `""`         | -    | 현재 선택된 값             |
| [onChange](#onchange)                 | `(event: SelectChangeEvent) => void` | -            | ✅   | 값 변경 핸들러             |
| [options](#options)                   | `LabelSelectOption[]`                | -            | ✅   | 선택 가능한 옵션 목록      |
| [size](#size)                         | `"small" \| "medium"`                | `"medium"`   | -    | Select 크기                |
| [enableWheel](#enablewheel)           | `boolean`                            | `false`      | -    | 마우스 휠로 값 변경 활성화 |
| [showLabel](#showlabel)               | `boolean`                            | `true`       | -    | 라벨 표시 여부             |
| [emptyLabel](#emptylabel)             | `string`                             | `"선택안함"` | -    | 빈 옵션의 라벨 텍스트      |
| [readOnly](#readonly)                 | `boolean`                            | `false`      | -    | 읽기 전용 모드             |
| [showEmptyOption](#showemptyoption)   | `boolean`                            | `true`       | -    | 빈 옵션 표시 여부          |
| [fullWidth](#fullwidth)               | `boolean`                            | `true`       | -    | 전체 너비 사용             |
| [formControlProps](#formcontrolprops) | `FormControlProps`                   | -            | -    | FormControl에 전달할 props |
| [className](#classname)               | `string`                             | -            | -    | CSS 클래스명               |
| [style](#style)                       | `CSSProperties`                      | -            | -    | 인라인 스타일              |
| [sx](#sx)                             | `SxProps<Theme>`                     | -            | -    | MUI sx prop                |
| [inputProps](#inputprops)             | `InputBaseComponentProps`            | `{}`         | -    | input 요소에 전달할 props  |
| [defaultValue](#defaultvalue)         | `string \| number`                   | -            | -    | 기본 선택 값               |

---

### label

라벨 텍스트를 지정합니다.

```tsx
<LabelSelect label="과일 선택" ... />
```

---

### value

현재 선택된 값입니다. `string` 또는 `number` 타입을 지원합니다.

```tsx
const [value, setValue] = useState<string | number>('apple');

<LabelSelect value={value} ... />
```

---

### onChange

값이 변경될 때 호출되는 핸들러입니다.

```tsx
const handleChange = (event: SelectChangeEvent<string | number>) => {
  setValue(event.target.value);
};

<LabelSelect onChange={handleChange} ... />
```

---

### options

선택 가능한 옵션 목록입니다. `LabelSelectOption[]` 타입입니다.

```tsx
const options = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 1, label: '1번' },  // number 타입도 가능
];

<LabelSelect options={options} ... />
```

---

### size

Select 컴포넌트의 크기를 지정합니다.

-   `"small"`: 작은 크기
-   `"medium"`: 기본 크기 (기본값)

```tsx
<LabelSelect size="small" ... />
```

---

### enableWheel

`true`로 설정하면 마우스 휠로 값을 변경할 수 있습니다.

```tsx
<LabelSelect enableWheel={true} ... />
```

> ⚠️ `readOnly`가 `true`인 경우 휠 변경이 비활성화됩니다.

---

### showLabel

`false`로 설정하면 라벨을 숨깁니다. 라벨이 숨겨지면 placeholder 스타일로 표시됩니다.

```tsx
<LabelSelect showLabel={false} ... />
```

---

### emptyLabel

빈 옵션(값이 없는 옵션)의 라벨 텍스트를 지정합니다.

```tsx
<LabelSelect emptyLabel="전체" ... />
```

---

### readOnly

`true`로 설정하면 읽기 전용 모드가 됩니다. 드롭다운 아이콘이 숨겨지고 값을 변경할 수 없습니다.

```tsx
<LabelSelect readOnly={true} ... />
```

---

### showEmptyOption

`false`로 설정하면 빈 옵션을 표시하지 않습니다.

```tsx
<LabelSelect showEmptyOption={false} ... />
```

---

### fullWidth

기본값이 `true`이므로 컴포넌트가 부모 요소의 전체 너비를 차지합니다. `false`로 설정하면 컨텐츠 너비에 맞춰집니다.

```tsx
// 기본: 전체 너비
<LabelSelect label="과일" ... />

// 컨텐츠 너비
<LabelSelect label="과일" fullWidth={false} ... />
```

---

### formControlProps

내부 FormControl 컴포넌트에 전달할 props입니다. `size`, `disabled`, `error`, `required` 등 FormControl이 지원하는 모든 props를 전달할 수 있습니다.

```tsx
<LabelSelect
  formControlProps={{
    size: 'small',
    error: true,
    required: true,
    sx: { marginBottom: 2 }
  }}
  ...
/>
```

---

### className

CSS 클래스명을 지정합니다.

```tsx
<LabelSelect className="my-select" ... />
```

---

### style

인라인 스타일을 지정합니다.

```tsx
<LabelSelect style={{ width: 300 }} ... />
```

---

### sx

MUI의 sx prop을 사용하여 스타일을 지정합니다.

```tsx
<LabelSelect sx={{ minWidth: 200, bgcolor: 'background.paper' }} ... />
```

---

### inputProps

내부 input 요소에 전달할 props입니다.

```tsx
<LabelSelect inputProps={{ 'aria-label': '과일 선택' }} ... />
```

---

### defaultValue

기본 선택 값을 지정합니다.

```tsx
<LabelSelect defaultValue="apple" ... />
```

---

## 타입

### LabelSelectOption

옵션 아이템의 타입입니다.

```tsx
interface LabelSelectOption {
    value: string | number;
    label: string;
}
```

### LabelSelectProps

LabelSelect 컴포넌트의 props 타입입니다. `SelectProps`를 확장합니다.

```tsx
import type { LabelSelectProps } from "@ehfuse/mui-label-select";
```

---

## 관련 문서

-   [시작하기](./getting-started.md)
-   [예제](./examples.md)

---

## 주의사항

### FormControl 이중 감싸기 금지

**LabelSelect 컴포넌트는 내부적으로 FormControl을 포함하고 있습니다.** 외부에서 FormControl로 감싸지 마세요.

❌ **잘못된 사용**:

```tsx
// FormControl이 이중으로 감싸짐 - 경고 발생!
<FormControl>
  <LabelSelect label="과일" options={options} ... />
</FormControl>
```

✅ **올바른 사용**:

```tsx
// FormControl 없이 직접 사용
<LabelSelect label="과일" options={options} ... />

// FormControl 속성이 필요한 경우 formControlProps 사용
<LabelSelect
  label="과일"
  options={options}
  formControlProps={{
    size: 'small',
    error: true,
    required: true,
  }}
  ...
/>
```

> ⚠️ 개발 모드에서 FormControl로 이중 감싸면 콘솔에 경고 메시지가 표시됩니다.
