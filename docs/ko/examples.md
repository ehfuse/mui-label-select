# 예제

## 목차

-   [기본 사용법](#기본-사용법)
-   [라벨 숨기기](#라벨-숨기기)
-   [마우스 휠 네비게이션](#마우스-휠-네비게이션)
-   [읽기 전용 모드](#읽기-전용-모드)
-   [빈 옵션 숨기기](#빈-옵션-숨기기)
-   [사이즈 옵션](#사이즈-옵션)
-   [스타일링](#스타일링)

---

## 기본 사용법

가장 기본적인 LabelSelect 사용 예제입니다.

```tsx
import { useState } from "react";
import { FormControl } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { LabelSelect } from "@ehfuse/mui-label-select";

const options = [
    { value: "apple", label: "사과" },
    { value: "banana", label: "바나나" },
    { value: "orange", label: "오렌지" },
];

function BasicExample() {
    const [value, setValue] = useState<string | number>("");

    const handleChange = (event: SelectChangeEvent<string | number>) => {
        setValue(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <LabelSelect
                label="과일 선택"
                value={value}
                onChange={handleChange}
                options={options}
            />
        </FormControl>
    );
}
```

---

## 라벨 숨기기

`showLabel={false}`로 설정하면 라벨을 숨기고 placeholder 스타일로 표시됩니다.

```tsx
<FormControl sx={{ minWidth: 200 }}>
    <LabelSelect
        label="과일 선택"
        value={value}
        onChange={handleChange}
        options={options}
        showLabel={false}
    />
</FormControl>
```

---

## 마우스 휠 네비게이션

`enableWheel={true}`로 설정하면 마우스 휠로 값을 변경할 수 있습니다.

```tsx
<FormControl sx={{ minWidth: 200 }}>
    <LabelSelect
        label="과일 선택"
        value={value}
        onChange={handleChange}
        options={options}
        enableWheel={true}
    />
</FormControl>
```

> 💡 Select 컴포넌트 위에서 마우스 휠을 위/아래로 스크롤하면 이전/다음 옵션으로 변경됩니다.

---

## 읽기 전용 모드

`readOnly={true}`로 설정하면 읽기 전용 모드가 됩니다.

```tsx
<FormControl sx={{ minWidth: 200 }}>
    <LabelSelect
        label="과일 선택"
        value="apple"
        onChange={handleChange}
        options={options}
        readOnly={true}
    />
</FormControl>
```

읽기 전용 모드에서는:

-   드롭다운 아이콘이 숨겨집니다
-   클릭해도 드롭다운이 열리지 않습니다
-   휠 네비게이션이 비활성화됩니다
-   텍스트 색상이 유지됩니다 (disabled와 다름)

---

## 빈 옵션 숨기기

`showEmptyOption={false}`로 설정하면 "선택안함" 빈 옵션을 숨깁니다.

```tsx
<FormControl sx={{ minWidth: 200 }}>
    <LabelSelect
        label="과일 선택"
        value={value}
        onChange={handleChange}
        options={options}
        showEmptyOption={false}
    />
</FormControl>
```

빈 옵션의 텍스트를 변경하려면 `emptyLabel`을 사용합니다:

```tsx
<LabelSelect
    label="과일 선택"
    value={value}
    onChange={handleChange}
    options={options}
    emptyLabel="전체"
/>
```

---

## 사이즈 옵션

`size` prop으로 컴포넌트 크기를 설정할 수 있습니다.

```tsx
{
    /* Small 사이즈 */
}
<FormControl sx={{ minWidth: 150 }}>
    <LabelSelect
        label="Small"
        value={value}
        onChange={handleChange}
        options={options}
        size="small"
    />
</FormControl>;

{
    /* Medium 사이즈 (기본값) */
}
<FormControl sx={{ minWidth: 150 }}>
    <LabelSelect
        label="Medium"
        value={value}
        onChange={handleChange}
        options={options}
        size="medium"
    />
</FormControl>;
```

---

## 스타일링

### className 사용

```tsx
<LabelSelect
    label="과일 선택"
    value={value}
    onChange={handleChange}
    options={options}
    className="my-custom-select"
/>
```

```css
.my-custom-select {
    background-color: #f5f5f5;
}
```

### style 사용

```tsx
<LabelSelect
    label="과일 선택"
    value={value}
    onChange={handleChange}
    options={options}
    style={{ width: 300, marginTop: 16 }}
/>
```

### sx prop 사용

```tsx
<LabelSelect
    label="과일 선택"
    value={value}
    onChange={handleChange}
    options={options}
    sx={{
        minWidth: 200,
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
        },
    }}
/>
```

---

## 관련 문서

-   [시작하기](./getting-started.md)
-   [API 레퍼런스](./api.md)
