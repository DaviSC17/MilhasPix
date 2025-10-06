import z, { type ZodTypeAny } from "zod/v3";
import { valueForApi } from "../utils/formatNumber";

export const schemaOfferYourMilles: ZodTypeAny = z.object({
  wantToReceive: z.string().min(1, "Selecione uma opção"),
  millesValue: z
    .string()
    .min(1, "Insira um valor")
    .refine((value) => {
      const numericValue  = valueForApi(value);
      return numericValue  >= 14 && numericValue  <= 16.56;
    }, {
      message: "O valor deve estar entre R$14,00 e R$16,56",
    }),
  milesPerPassenger: z.boolean().optional(),
});

