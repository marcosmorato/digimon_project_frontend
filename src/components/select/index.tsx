import React from "react";
import { SelectChangeEvent } from "@mui/material";
import * as S from "./styles";

interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (selectedValue: string) => void;
  selectedValue: string;
  modalVersion: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  onChange,
  selectedValue,
  modalVersion,
}) => {
  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string;
    onChange(newValue);
  };

  return (
    <S.FormControlMui modalVersion={modalVersion} >
      <S.SelectMui
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        value={selectedValue}
        onChange={handleSelectChange}
        size="small"
      >
        {options.map((option) => (
          <S.MenuItemMui key={option.value} value={option.value}>
            {option.label}
          </S.MenuItemMui>
        ))}
      </S.SelectMui>
    </S.FormControlMui>
  );
};

export default CustomSelect;
