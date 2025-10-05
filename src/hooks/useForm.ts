import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z, { type ZodTypeAny } from "zod/v3";

export const useFormValidation = (schema: ZodTypeAny) => {
  const { control, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return { control, handleSubmit };
};
