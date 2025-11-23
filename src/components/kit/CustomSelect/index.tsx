'use client'
import React from "react";
import Select from "react-select";

type OptionType = {
    value: string;
    label: string;
};

type CustomSelectProps = {
    options: OptionType[];
    defaultValue?: string;
    onChange: (value: string | null) => void;
    value?: string | number | null;
    className?: string;
    placeHolder?: string;
    instanceId?: string;
    components?: any;
    loading?: boolean;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    defaultValue,
    onChange,
    value,
    className,
    placeHolder,
    instanceId,
    components,
    loading
}) => {

    const selectedOption = options.find((o) => o.value === value);
    const defaultOption = options.find((o) => o.value === defaultValue);

    return (
        <Select
            className={className}
            classNamePrefix="custom-select"
            isClearable
            options={options}
            components={components}
            instanceId={instanceId}
            isLoading={loading}
            defaultValue={defaultOption}
            value={selectedOption}
            onChange={(option) => onChange(option ? option.value : null)}
            placeholder={placeHolder || "لطفا یک مورد را انتخاب کنید"}
            styles={{
                control: (provided) => ({
                    ...provided,
                    height: "36px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    borderColor: "#EBEBEB",
                    backgroundColor: "#fff",
                }),
                option: (provided, state) => ({
                    ...provided,
                    cursor: "pointer",
                    backgroundColor: state.isSelected
                        ? "#f0f0f0"
                        : state.isFocused
                            ? "#f9f9f9"
                            : "#fff",
                    color: "#000",
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: "#000",
                }),
                placeholder: (provided) => ({
                    ...provided,
                    color: "#999",
                }),
            }}
        />

    );
};

export default CustomSelect;
