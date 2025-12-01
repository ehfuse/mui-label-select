/**
 * types.ts
 *
 * @license Proprietary License (독점 라이선스)
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import type { SxProps, Theme, FormControlProps } from "@mui/material";
import { SelectProps, SelectChangeEvent } from "@mui/material";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import type { CSSProperties } from "react";

export interface LabelSelectOption {
    value: string | number;
    label: string;
}

export interface LabelSelectProps
    extends Omit<SelectProps, "value" | "onChange" | "defaultValue"> {
    size?: "small" | "medium"; // Select 크기
    label: string; // 라벨 텍스트
    value?: string | number; // 현재 선택된 값
    onChange: (event: SelectChangeEvent<string | number>) => void; // 값 변경 핸들러
    options: LabelSelectOption[]; // 선택 가능한 옵션 목록
    inputProps?: InputBaseComponentProps; // input 요소에 전달할 props
    enableWheel?: boolean; // 마우스 휠로 값 변경 활성화
    showLabel?: boolean; // 라벨 표시 여부
    emptyLabel?: string; // 빈 옵션의 라벨 텍스트
    defaultValue?: string | number; // 기본 선택 값
    readOnly?: boolean; // 읽기 전용 모드
    showEmptyOption?: boolean; // 빈 옵션 표시 여부
    className?: string; // CSS 클래스명
    style?: CSSProperties; // 인라인 스타일
    sx?: SxProps<Theme>; // MUI sx prop
    formControlProps?: Omit<FormControlProps, "children">; // FormControl에 전달할 props
}

export type { SelectChangeEvent };
