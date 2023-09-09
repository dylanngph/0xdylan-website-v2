import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextUrl.pathname === "/my") {
      console.log(req.nextUrl.pathname);
      return NextResponse.redirect("/my/profile");
    }
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
