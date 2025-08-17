import { object, string } from "zod";


export const SignInSchema = object({
    username: string().min(8),
    password: string().min(8, "Password must be more than 8 caracter").max(32, "Password must be less than 8 caracter"),
});