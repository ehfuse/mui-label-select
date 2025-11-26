# @ehfuse/mui-label-select

Material-UI 기반의 라벨이 포함된 Select 컴포넌트입니다. 휠 네비게이션, 읽기 전용 모드 등 편리한 기능을 제공합니다.

## 설치

```bash
npm install @ehfuse/mui-label-select
```

## 시그니처

```tsx
import { LabelSelect } from "@ehfuse/mui-label-select";

<LabelSelect
    label="라벨"
    value={value}
    onChange={handleChange}
    options={options}
    // 선택적 props
    size="medium"
    enableWheel={false}
    showLabel={true}
    emptyLabel="선택안함"
    readOnly={false}
    showEmptyOption={true}
    className=""
    style={{}}
    sx={{}}
/>;
```

## 문서

-   [한국어 문서](./docs/ko/getting-started.md)

## 라이선스

MIT © 김영진 (Kim Young Jin)
