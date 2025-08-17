"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form"; // ⬅️ dari react-hook-form
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignInSchema } from "@/lib/zod";
import { useState } from "react";
import { signInCredentials } from "@/lib/actions";
import { redirect } from "next/navigation";

export type SignInFormType = z.infer<typeof SignInSchema>;
type SignInForm = {
    username: string,
    password: string,
}

export default function Login() {

    const [error, setError] = useState("");

    const form = useForm<SignInForm>({
        resolver: zodResolver(SignInSchema),
    });
    const { isSubmitting } = form.formState;


    const handleFormAction = async (values: SignInFormType) => {
        const signInvalues = {
            ...values
        }
        const result = await signInCredentials(signInvalues);
        if (result?.message) {
            setError(result.message);
        } else {
            redirect('/dashboard')
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-xs w-full flex flex-col items-center">
                <p className="mt-4 text-xl font-bold tracking-tight pb-12">
                    Log in to Portofolio
                </p>
                <Form {...form}>
                    {error && <span className='text-sm text-red-500'>{error}</span>}
                    <form onSubmit={form.handleSubmit(handleFormAction)}
                        className="w-full space-y-4">
                        <FormField
                            name="username"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Username"
                                            className="w-full"
                                            {...form.register("username")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full"
                                            {...form.register("password")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {isSubmitting ? <Button type="submit" disabled className="mt-4 w-full">
                            Logining in ....
                        </Button> : <Button type="submit" className="mt-4 w-full">
                            Login
                        </Button>}

                    </form>
                </Form>
                <div className="mt-5 space-y-5">
                    <Link
                        href="#"
                        className="text-sm block underline text-muted-foreground text-center"
                    >
                        Forgot your password?
                    </Link>
                    <p className="text-sm text-center">
                        Don&apos;t have an account?
                        <Link href="#" className="ml-1 underline text-muted-foreground">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}