import z, { type ZodTypeAny } from "zod/v3";

export const programDataSchema: ZodTypeAny = z.object({
  Email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Digite um e-mail válido"),
});
