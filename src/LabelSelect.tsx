/**
 * LabelSelect.tsx
 *
 * @license Proprietary License (독점 라이선스)
 * @copyright 2025 김영진 (Kim Young Jin)
 * @author 김영진 (ehfuse@gmail.com)
 */

import { useRef, useEffect } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { LabelSelectProps } from "./types";

export function LabelSelect({
    label,
    value = "",
    onChange,
    options,
    inputProps = {},
    enableWheel = false,
    showLabel = true,
    emptyLabel = "선택안함",
    readOnly = false, // 읽기 전용 모드
    showEmptyOption = true, // 기본값은 빈 옵션 표시
    fullWidth = true, // 기본값은 전체 너비
    formControlProps,
    ...selectProps
}: LabelSelectProps) {
    const formControlRef = useRef<HTMLDivElement>(null);

    // FormControl 이중 감싸기 감지
    useEffect(() => {
        if (process.env.NODE_ENV !== "production" && formControlRef.current) {
            let parent = formControlRef.current.parentElement;
            while (parent) {
                if (parent.classList.contains("MuiFormControl-root")) {
                    console.warn(
                        "[LabelSelect] LabelSelect 컴포넌트는 이미 FormControl을 포함하고 있습니다. " +
                            "외부에서 FormControl로 감싸지 마세요. FormControl 속성을 설정하려면 " +
                            "formControlProps를 사용하세요."
                    );
                    break;
                }
                parent = parent.parentElement;
            }
        }
    }, []);

    // value가 options에 없는 경우 빈 값으로 처리
    const safeValue =
        value && options.some((option) => option.value === value) ? value : "";

    // 마우스 휠로 Select 값 변경 핸들러
    const handleSelectWheel = (e: React.WheelEvent) => {
        if (!enableWheel || readOnly) return; // readOnly 모드에서는 휠 변경 비활성화

        e.stopPropagation();

        const allOptions = ["", ...options.map((option) => option.value)];
        const currentIndex = allOptions.indexOf(safeValue);
        if (currentIndex === -1) return;

        let newIndex;
        if (e.deltaY > 0) {
            // 아래로 스크롤 - 다음 옵션
            newIndex = Math.min(currentIndex + 1, allOptions.length - 1);
        } else {
            // 위로 스크롤 - 이전 옵션
            newIndex = Math.max(currentIndex - 1, 0);
        }

        if (newIndex !== currentIndex) {
            const newValue = allOptions[newIndex];
            const syntheticEvent = {
                target: { value: newValue, name: "" },
            } as SelectChangeEvent<string | number>;
            onChange(syntheticEvent);
        }
    };

    return (
        <FormControl
            ref={formControlRef}
            fullWidth={fullWidth}
            {...formControlProps}
            sx={{
                minWidth: 0,
                ...formControlProps?.sx,
            }}
        >
            {showLabel && (
                <InputLabel id={`${label}-label`}>{label}</InputLabel>
            )}
            <Select
                {...selectProps}
                variant={
                    selectProps.variant === "filled" ||
                    selectProps.variant === "standard"
                        ? "outlined"
                        : selectProps.variant
                }
                labelId={showLabel ? `${label}-label` : undefined}
                value={safeValue}
                onChange={onChange}
                label={showLabel ? label : undefined}
                inputProps={inputProps}
                onWheel={handleSelectWheel}
                displayEmpty={!showLabel}
                readOnly={readOnly}
                sx={{
                    width: "100%",
                    minWidth: 0,
                    "& .MuiSelect-select": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    },
                    // readOnly 모드에서는 focused 상태의 테두리 제거
                    ...(readOnly && {
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(0, 0, 0, 0.23)", // 기본 테두리 색상으로 복원
                                borderWidth: "1px", // 기본 테두리 두께로 복원
                            },
                        },
                        "& .MuiSelect-select.Mui-disabled": {
                            WebkitTextFillColor: "rgba(0, 0, 0, 0.87)", // 읽기 전용일 때 텍스트 색상 유지
                        },
                        "& .MuiInputBase-root": {
                            cursor: "default", // 마우스 커서를 기본으로
                        },
                        "& .MuiSelect-icon": {
                            display: "none", // 드롭다운 아이콘 숨기기
                        },
                    }),
                    ...selectProps.sx,
                }}
                renderValue={(selected) => {
                    if (selected === "") {
                        return <span style={{ color: "#999" }}>{label}</span>;
                    }
                    // 실제 option에서 label 찾기
                    const option = options.find(
                        (opt) => opt.value === selected
                    );
                    return (
                        <span
                            style={{
                                display: "block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {option ? option.label : selected}
                        </span>
                    );
                }}
            >
                {showEmptyOption && <MenuItem value="">{emptyLabel}</MenuItem>}
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
