import React, { useEffect, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import * as GS from "../../utils/globalStyles/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../select";
import { schemaDigimonFilter } from "../../utils/yup/index";
import {
  IFields,
  IDigimonData,
  IDigimonReducer,
} from "../../utils/interfaces/digimons/index";

interface IDigimon {
  name: string;
  xAntibody: boolean;
  levels: string[];
  attributes: string[];
  fields: IFields[];
}

interface ISelectOptions {
  name: string;
  xAntibody: string;
  levels: string;
  attributes: string;
  fields: string;
}

interface FilterBoxProps {
  onSetDigimonFilter: (newValue: boolean) => void;
  digimonsName: IDigimonData[] | [];
  setDigimonFilters: React.Dispatch<React.SetStateAction<IDigimonReducer>>;
}

const Filter: React.FC<FilterBoxProps> = ({
  onSetDigimonFilter,
  digimonsName,
  setDigimonFilters,
}) => {
  const [selectedOption, setSelectedOption] = useState<ISelectOptions>({
    name: "",
    xAntibody: "",
    levels: "",
    attributes: "",
    fields: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDigimonFilter),
  });

  const handleSelectChange = (key: string, value: string) => {
    setSelectedOption({ ...selectedOption, [key]: value });
  };

  const FilterDigimons = (
    filter: ISelectOptions,
    data: IDigimon[]
  ): IDigimon[] => {
    return data.filter((digimon) => {
      // Verifique se o campo "attributes" do selectOption está vazio ou presente no Digimon
      if (filter.attributes && filter.attributes !== "") {
        if (!digimon.attributes.includes(filter.attributes)) {
          return false;
        }
      }

      // Faça o mesmo para os outros campos (name e levels)
      if (filter.name && filter.name !== "") {
        // Verifique se o campo "name" do selectOption está contido no nome do Digimon
        if (!digimon.name.toLowerCase().includes(filter.name.toLowerCase())) {
          return false;
        }
      }

      if (filter.levels && filter.levels !== "") {
        if (!digimon.levels.includes(filter.levels)) {
          return false;
        }
      }

      // Verifique o campo xAntibody
      if (filter.xAntibody === "infected" && !digimon.xAntibody) {
        
        return false;
      }

      if (filter.xAntibody === "not infected" && digimon.xAntibody) {
        return false;
      }

      // Verifique o campo "fields" do selectOption
      if (filter.fields && filter.fields !== "") {
        // Verifique se o campo "fields" do selectOption está presente em algum objeto "field" do Digimon
        if (!digimon.fields.some((field) => field.field === filter.fields)) {
          return false;
        }
      }

      return true;
    });
  };

  const handleForm = (formData: any) => {
    let filteredDigimons: any = [];
    filteredDigimons = FilterDigimons(selectedOption, digimonsName);

    setDigimonFilters({ digimonsFilters: filteredDigimons });
  };

  const levels = [
    { label: " ", value: "" },
    { label: "Baby I", value: "Baby I" },
    { label: "Baby II", value: "Baby II" },
    { label: "Child", value: "Child" },
    { label: "Armor", value: "Armor" },
    { label: "Adult", value: "Adult" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Perfect", value: "Perfect" },
    { label: "Ultimate", value: "Ultimate" },
    { label: "Unknown", value: "Unknown" },
  ];

  const attributes = [
    { label: " ", value: "" },
    { label: "No Data", value: "No Data" },
    { label: "Variable", value: "Variable" },
    { label: "Free", value: "Free" },
    { label: "Data", value: "Data" },
    { label: "Vaccine", value: "Vaccine" },
    { label: "Virus", value: "Virus" },
    { label: "Unknown", value: "Unknown" },
  ];

  const fields = [
    { label: " ", value: "" },
    { label: "Nature Spirits", value: "Nature Spirits" },
    { label: "Virus Busters", value: "Virus Busters" },
    { label: "Wind Guardians", value: "Wind Guardians" },
    { label: "Unknown", value: "Unknown" },
    { label: "Metal Empire", value: "Metal Empire" },
    { label: "Deep Savers", value: "Deep Savers" },
    { label: "Dark Area", value: "Dark Area" },
    { label: "Nightmare Soldiers", value: "Nightmare Soldiers" },
    { label: "Dragon's Roar", value: "Dragon's Roar" },
    { label: "Jungle Troopers", value: "Jungle Troopers" },
  ];

  const xAntibody = [
    { label: " ", value: "" },
    { label: "Infected", value: "infected" },
    { label: "Not Affected", value: "not infected" },
  ];
  
  const defaultValues = {
    name: "",
    xAntibody: "",
    levels: "",
    attributes: "",
    fields: "",
  };
  
  const handleReset = () => {
    setSelectedOption(defaultValues)
    setDigimonFilters({ digimonsFilters: digimonsName })
  }

  return (
    <GS.ContainerFilter>
      <GS.TitleBox variant="h3">Filters</GS.TitleBox>
      <S.FormBox>
        <S.Filters>
          <S.Filter>
            <S.Label>Digimon Name:</S.Label>
            <S.inputBox>
              <S.InputText
                autoComplete="off"
                size="small"
                variant="outlined"
                margin="dense"
                type="string"
                placeholder="Insert Name"
                value={selectedOption.name}
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSelectedOption({ ...selectedOption, name: e.target.value })
                }
              ></S.InputText>
            </S.inputBox>
          </S.Filter>
          <S.Filter>
            <S.Label>Levels:</S.Label>
            <S.SelectContainer>
              <CustomSelect
                label="Levels"
                options={levels}
                onChange={(value) => handleSelectChange("levels", value)}
                selectedValue={selectedOption.levels}
                modalVersion={"modal"}
              />
            </S.SelectContainer>
          </S.Filter>
          <S.Filter>
            <S.Label>Fields:</S.Label>
            <S.SelectContainer>
              <CustomSelect
                label="Fields"
                options={fields}
                onChange={(value) => handleSelectChange("fields", value)}
                selectedValue={selectedOption.fields}
                modalVersion={"modal"}
              />
            </S.SelectContainer>
          </S.Filter>
          <S.Filter>
            <S.Label>Attributes:</S.Label>
            <S.SelectContainer>
              <CustomSelect
                label="Attributes"
                options={attributes}
                onChange={(value) => handleSelectChange("attributes", value)}
                selectedValue={selectedOption.attributes}
                modalVersion={"modal"}
              />
            </S.SelectContainer>
          </S.Filter>  
          <S.Filter>
            <S.Label>X-Antibody:</S.Label>
            <S.SelectContainer>
              <CustomSelect
                label="X-Antibody"
                options={xAntibody}
                onChange={(value) => handleSelectChange("xAntibody", value)}
                selectedValue={selectedOption.xAntibody}
                modalVersion={"modal"}
              />
            </S.SelectContainer>
          </S.Filter>
        </S.Filters>
        <S.Buttons>
          <S.Reset type="submit" color="primary" variant="contained" onClick={handleReset}>
            Reset
          </S.Reset>
          <S.Search type="submit" color="primary" variant="contained" onClick={handleSubmit(handleForm)}>
            Search
          </S.Search>
        </S.Buttons>
      </S.FormBox>
    </GS.ContainerFilter>
  );
};

export default Filter;
