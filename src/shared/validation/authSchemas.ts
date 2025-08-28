import { z } from "zod";

export const signInSchema = z.object({
    login: z.string().email("Введите корректный email"),
    password: z.string()
        .min(4, "Минимум 4 символа")
        .regex(/^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{4,}$/, "Пароль должен содержать хотя бы одну заглавную букву и быть на английском"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
