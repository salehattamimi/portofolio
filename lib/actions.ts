"use server";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";


type RegisterForm = {
    name: string,
    email: string,
    password: string,
    ConfirmPassword: string,
}

type SignInForm = {
    username: string,
    password: string,
}

export const signUpCredential = async (values: RegisterForm) => {

    if (!values.password) {
        throw new Error("Password is required");
    }
    const hashedPassword = hashSync(values.password, 10);

    try {
        await prisma.user.create({
            data: {
                name: values.name,
                email: values.email,
                password: hashedPassword
            }
        })
    } catch (error) {
        throw new Error("error message" + error);
    }
    redirect("/login");
}


export const signInCredentials = async (values: SignInForm) => {

    try {
        await signIn("credentials", {
            username: values.username, password: values.password, redirect: false,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return { message: 'Login Gagal' }
        }
    }
    redirect("/dashboard") // gunakan helper redirect dari next/navigation
}
