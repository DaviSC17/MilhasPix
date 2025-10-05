import type { StylesConfig } from "react-select";
import type { OptionI } from "../types/MenuStyles";


export const MenuStyles = (error: boolean): StylesConfig<OptionI, false> => ({
  control: (provided, state) => ({
    ...provided,
    borderRadius: "3.5rem",
    cursor: "pointer",
    borderColor: error ? "#F87171" : state.isFocused ? "#1E90FF" : "#E2E2E2",
    borderWidth: 1,
    padding: "0.6rem 0.625rem",
    "&:hover": {
      borderColor: error ? "#F87171" : "#1E90FF",
    },
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),

  option: (provided, state) => ({
    ...provided,
    padding: "0.375rem 1.25rem",
    cursor: "pointer",
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

  placeholder: (provided) => ({
    ...provided,
    color: error ? "#F87171" : provided.color,
  }),
});
