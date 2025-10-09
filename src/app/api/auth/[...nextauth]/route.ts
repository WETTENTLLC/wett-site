
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Test user: demo@wett.com / password123
        if (credentials?.email === "demo@wett.com" && credentials?.password === "password123") {
          return { id: "1", name: "WETT Member", email: "demo@wett.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt"
  }
})

export { handler as GET, handler as POST }
