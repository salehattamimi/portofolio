import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { SignInSchema } from "./lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials, req) => {
                const validatedFields = SignInSchema.safeParse(credentials);

                if (!validatedFields.success) {
                    return null;
                }

                const { username, password } = validatedFields.data;

                const user = await prisma.user.findUnique({
                    where: { username }
                });

                if (!user || !user.password) {
                    return null;
                }

                const passwordMatch = compareSync(password, user.password);

                if (!passwordMatch) {
                    return null;
                }

                return user;
            }

        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            //ditambahi tanda seru untuk boolean return nya true atau false
            const protectedRoutes = ["/dashboard", "/user", "/product"];

            if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
                return Response.redirect(new URL("/login", nextUrl))
            }

            if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
                return Response.redirect(new URL("/dashboard", nextUrl))
            }
            return true;
        },
        jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        session({ session, token }) {
            session.user.id = token.sub;
            session.user.role = token.role;
            return session;
        }
    }
})
