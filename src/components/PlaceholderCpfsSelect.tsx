import { components } from "react-select";
import { type PlaceholderProps } from "react-select";

import { FiLock } from "react-icons/fi";
import type { OptionI } from "../types/MenuStyles";

export const CustomPlaceholderSelectCpfs = (props: PlaceholderProps<OptionI>) => {
  return (
    <components.Placeholder {...props} className="flex items-center gap-2">
      <div className="flex items-center justify-between gap-2 flex-1">
        <span>Ilimitados</span>
        <FiLock size={20} color="#8F8F8F"/>
      </div>
    </components.Placeholder>
  );
};
