# 시작하기

`@ehfuse/mui-label-select`는 Material-UI 기반의 라벨이 포함된 Select 컴포넌트입니다.

## 설치

```bash
npm install @ehfuse/mui-label-select
```

### Peer Dependencies

이 패키지는 다음 패키지들이 필요합니다:

-   `react` >= 17.0.0
-   `react-dom` >= 17.0.0
-   `@mui/material` >= 5.0.0
-   `@emotion/react` >= 11.0.0
-   `@emotion/styled` >= 11.0.0

## 기본 사용법

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

function MyComponent() {
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

## 주요 기능

-   **라벨 표시/숨기기**: `showLabel` prop으로 라벨 표시 여부 제어
-   **마우스 휠 네비게이션**: `enableWheel` prop으로 휠로 값 변경 가능
-   **읽기 전용 모드**: `readOnly` prop으로 읽기 전용 상태 설정
-   **빈 옵션 표시**: `showEmptyOption` prop으로 빈 옵션 표시 여부 제어
-   **사이즈 옵션**: `size` prop으로 small/medium 크기 설정

---

## 관련 문서

-   [API 레퍼런스](./api.md)
-   [예제](./examples.md)
