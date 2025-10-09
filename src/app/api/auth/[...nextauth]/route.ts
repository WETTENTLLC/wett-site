
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
        // This is where you would add your user authentication logic.
        // For now, we'll just accept any user.
        if (credentials) {
          return { id: "1", name: "Test User", email: credentials.email }
        }
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }
