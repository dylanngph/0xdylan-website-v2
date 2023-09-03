// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth";

import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

async function handler() {
  const session = await getServerSession(authOptions);
  return NextResponse.json(session);
}

export { handler as GET, handler as POST };
