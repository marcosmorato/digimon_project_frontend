import React from "react";
import { SelectChangeEvent, Select } from "@mui/material";

import * as S from "./styles";
import { truncate } from "fs/promises";

// Definindo uma interface para as propriedades do componente
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
    <S.FormControlMui modalVersion={modalVersion} variant="filled">
      <S.InputLabelMui>{label}</S.InputLabelMui>
      <S.SelectMui
        label={label}
        value={selectedValue}
        onChange={handleSelectChange}
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
