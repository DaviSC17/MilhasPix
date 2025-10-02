import type { StylesConfig } from "react-select";

export interface OptionI {
  value: string;
  label: string;
  alt?: string;
  logo?: string;
}

export const MenuStyles: StylesConfig<OptionI, false> = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "3.5rem",
    cursor: "pointer",
    borderColor: state.isFocused ? "#1E90FF" : provided.borderColor,
    borderWidth: 2,
    padding: "0.375rem 0.625rem",
    "&:hover": {
      borderColor: "#1E90FF",
    },
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),

  option: (provided, state) => ({
    ...provided,
    padding: "0.375rem 1.25rem",
    backgroundColor: state.isSelected ? "#1e8fff81" : provided.backgroundColor,
    "&:hover": {
      backgroundColor: state.isSelected ? "#1e8fff81" : "#1e8fff1f",
    },
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),

  menu: (provided) => ({
    ...provided,
    borderColor: "#1E90FF",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),
};
