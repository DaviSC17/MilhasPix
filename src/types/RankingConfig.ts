import type { ComponentProps } from "react";

export interface RankingI extends ComponentProps<"ul"> {
  value: string;
  classNameTitle?: string;
}
