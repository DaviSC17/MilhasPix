interface OptionsWantToReceiveI {
  optionValue: string;
  label: string;
}

export const optionsWantToReceive: OptionsWantToReceiveI[] = [
  { optionValue: "imediato", label: "Imediato" },
  { optionValue: "2dias", label: "em 2 dias" },
  { optionValue: "7dias", label: "em 7 dias" },
  { optionValue: "depoisVoo", label: "Depois do voo" },
];
