import LogoAirPortugal from "../assets/AirPortugalLogo.svg";
import LogoSmiles from "../assets/SmilesLogo.svg";
import LogoLatamPass from "../assets/LatamPassLogo.svg";
import LogoTudoAzul from "../assets/TudoAzulLogo.svg";

interface optionsData {
  value: string;
  label: string;
  logo: string;
  alt: string;
}

export const optionsConfig: optionsData[] = [
  {
    value: "TudoAzul",
    label: "Tudo Azul",
    logo: LogoTudoAzul,
    alt: "Logo Tudo Azul",
  },
  {
    value: "AirPortugal",
    label: "Air Portugal",
    logo: LogoAirPortugal,
    alt: "Logo Air Portugal",
  },
  {
    value: "Smiles",
    label: "Smiles",
    logo: LogoSmiles,
    alt: "Logo Smiles",
  },
  {
    value: "LatamPass",
    label: "Latam Pass",
    logo: LogoLatamPass,
    alt: "Logo Latam Pass",
  },
];
