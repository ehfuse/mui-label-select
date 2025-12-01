import { useState } from "react";
import {
    Typography,
    Box,
    Paper,
    FormControl,
    Switch,
    FormControlLabel,
    Divider,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { LabelSelect } from "@ehfuse/mui-label-select";

const fruitOptions = [
    { value: "apple", label: "사과" },
    { value: "banana", label: "바나나" },
    { value: "orange", label: "오렌지" },
    { value: "grape", label: "포도" },
    { value: "strawberry", label: "딸기" },
];

const sizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
];

const longTextOptions = [
    {
        value: "long1",
        label: "연면적 5천제곱미터 이상의 문화 및 집회시설, 종교시설, 판매시설, 운수시설 중 여객용 시설, 의료시설, 노유자시설, 수련시설, 운동시설, 숙박시설 중",
    },
    {
        value: "long2",
        label: "이것은 매우 긴 텍스트 옵션입니다. 텍스트가 길어지면 ellipsis 처리가 되어야 합니다.",
    },
    { value: "short", label: "짧은 옵션" },
];

export default function HomePage() {
    const [fruit, setFruit] = useState<string | number>("");
    const [size, setSize] = useState<string | number>("medium");
    const [longText, setLongText] = useState<string | number>("long1");

    // 옵션 스위치 상태
    const [enableWheel, setEnableWheel] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [showLabel, setShowLabel] = useState(true);
    const [showEmptyOption, setShowEmptyOption] = useState(true);
    const [sizeOption, setSizeOption] = useState<"small" | "medium">("medium");

    const handleFruitChange = (event: SelectChangeEvent<string | number>) => {
        setFruit(event.target.value);
    };

    const handleSizeChange = (event: SelectChangeEvent<string | number>) => {
        setSize(event.target.value);
    };

    const handleLongTextChange = (
        event: SelectChangeEvent<string | number>
    ) => {
        setLongText(event.target.value);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                @ehfuse/mui-label-select
            </Typography>
            <Typography variant="body1" paragraph>
                A Material-UI Select component with label support, wheel
                navigation, and read-only mode.
            </Typography>

            {/* 옵션 컨트롤 패널 */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    옵션 설정
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={enableWheel}
                                onChange={(e) =>
                                    setEnableWheel(e.target.checked)
                                }
                            />
                        }
                        label="enableWheel (휠 네비게이션)"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={readOnly}
                                onChange={(e) => setReadOnly(e.target.checked)}
                            />
                        }
                        label="readOnly (읽기 전용)"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={showLabel}
                                onChange={(e) => setShowLabel(e.target.checked)}
                            />
                        }
                        label="showLabel (라벨 표시)"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={showEmptyOption}
                                onChange={(e) =>
                                    setShowEmptyOption(e.target.checked)
                                }
                            />
                        }
                        label="showEmptyOption (빈 옵션)"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={sizeOption === "small"}
                                onChange={(e) =>
                                    setSizeOption(
                                        e.target.checked ? "small" : "medium"
                                    )
                                }
                            />
                        }
                        label="size: small (기본: medium)"
                    />
                </Box>
            </Paper>

            <Divider sx={{ my: 3 }} />

            {/* 예제 */}
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    예제
                </Typography>
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 3 }}>
                    <FormControl sx={{ minWidth: 200 }}>
                        <LabelSelect
                            label="과일 선택"
                            value={fruit}
                            onChange={handleFruitChange}
                            options={fruitOptions}
                            enableWheel={enableWheel}
                            readOnly={readOnly}
                            showLabel={showLabel}
                            showEmptyOption={showEmptyOption}
                            size={sizeOption}
                        />
                    </FormControl>

                    <FormControl sx={{ minWidth: 200 }}>
                        <LabelSelect
                            label="사이즈"
                            value={size}
                            onChange={handleSizeChange}
                            options={sizeOptions}
                            enableWheel={enableWheel}
                            readOnly={readOnly}
                            showLabel={showLabel}
                            showEmptyOption={showEmptyOption}
                            size={sizeOption}
                        />
                    </FormControl>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box>
                    <Typography variant="body2" color="text.secondary">
                        선택된 과일: <strong>{fruit || "없음"}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        선택된 사이즈: <strong>{size || "없음"}</strong>
                    </Typography>
                </Box>
            </Paper>

            <Divider sx={{ my: 3 }} />

            {/* 긴 텍스트 예제 */}
            <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    긴 텍스트 (Ellipsis 처리)
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    긴 텍스트가 있는 옵션을 선택하면 ellipsis(...)로 잘려서
                    표시됩니다.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, width: "800px" }}>
                    <Box sx={{ display: "flex", gap: 2, flex: 1, minWidth: 0 }}>
                        <FormControl fullWidth>
                            <LabelSelect
                                label="시설물 설명"
                                value={longText}
                                onChange={handleLongTextChange}
                                options={longTextOptions}
                                readOnly={readOnly}
                                showEmptyOption={false}
                            />
                        </FormControl>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
