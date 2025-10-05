import z, { type ZodTypeAny } from "zod/v3";
import { valueForApi } from "../utils/formatNumber";

export const schemaOfferYourMilles: ZodTypeAny = z.object({
  wantToReceive: z.string().min(1, "Selecione uma opção"),
  millesValue: z
    .string()
    .min(1, "Insira um valor")
    .refine((val) => valueForApi(val) > 0, {
      message: "O valor deve ser maior que 0",
    }),
  milesPerPassenger: z.boolean().optional(),
});
