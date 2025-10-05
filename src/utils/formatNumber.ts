import type { Dispatch, SetStateAction } from "react";

export const createCurrencyFormatter = (
  event: React.ChangeEvent<HTMLInputElement>,
  onChange: (val: string) => void,
  setValue: Dispatch<SetStateAction<string>>
) => {
  const numericString = event.target.value.replace(/\D/g, "") || "0";
  const numericValue = parseInt(numericString, 10);
  const formattedValue = (numericValue / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  setValue(formattedValue);
  onChange(formattedValue);
};

export const valueForApi = (inputValue: string) => {
  return parseFloat(inputValue.replace(/\./g, "").replace(",", "."));
};

export const valueForRanking = (num: number) =>
  num.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
