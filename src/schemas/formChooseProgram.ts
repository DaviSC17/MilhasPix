import z, { type ZodTypeAny } from "zod/v3";

export const schemaChooseProgram: ZodTypeAny = z.object({
  program: z.string().min(1, "Selecione o programa para prosseguir"),
  product: z.string().min(1, "Selecione o produto para prosseguir"),
});
