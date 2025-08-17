import { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 caracter"),
    email: string().email("Email is not valid"),
    password: string().min(8, "Password must be more than 8 caracter").max(32, "Password must be less than 8 caracter"),
    ConfirmPassword: string().min(8, "Password must be more than 8 caracter").max(32, "Password must be less than 8 caracter"),
}).refine((data) => data.password === data.ConfirmPassword, {
    message: "Password do not match",
    path: ["ConfirmPassword"]
});


export const SignInSchema = object({
    username: string().min(8),
    password: string().min(8, "Password must be more than 8 caracter").max(32, "Password must be less than 8 caracter"),
});