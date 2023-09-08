import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized({ req, token }) {
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/signin",
      // signOut: "/auth/signout",
      // error: "/auth/error", // Error code passed in query string as ?error=
      // verifyRequest: "/auth/verify-request", // (used for check email message)
      // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
    },
  }
);

export const config = { matcher: ["/dashboard:path*", "/cart", "/payment"] };
