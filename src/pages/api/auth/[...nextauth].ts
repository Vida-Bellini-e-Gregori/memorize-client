import NextAuth, {NextAuthOptions} from "next-auth"
import { decode, encode } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { api } from "../../../services/api";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      try{
        const response = await api.get(`/users/googleId/${user.id}`)
        const userData = response.data

        if(userData){
          console.log(userData)
        } else {
          if(user) {
            try{
              api.post('/users', {...user, googleId: user.id})
            }catch (error) {
              console.log(error)
            }
          }
        }

      }catch (error) {
        console.log(error)
      }


      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {




      // const tokenToEncode = {name: token.name, email: token.email}

      // const jwt = await encode({ token: tokenToEncode, secret: process.env.NEXTAUTH_SECRET as string})
      // const decodedJwt = await decode({ token: jwt, secret: process.env.NEXTAUTH_SECRET as string})
      // console.log('before', token)
      // console.log('encoded', jwt)
      // console.log('dencode', decodedJwt)
      // const isSignIn = (user) ? true : false 

      // if(isSignIn) {
      //   try {
      //     api.post('user')
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      return token

      // isso ja tava aqui num negocio que copiei
      // Add auth_time to token on signin in
      // if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
      //   return Promise.resolve(token)
      // } 
  }}
}
export default NextAuth(authOptions)