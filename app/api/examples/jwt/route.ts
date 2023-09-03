// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  return NextResponse.json(token);
}

export { handler as GET, handler as POST };
