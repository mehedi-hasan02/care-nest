import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/booking"];

export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const reqPath = req.nextUrl.pathname;

  // console.log(reqPath)

  const isAuthnticate = Boolean(token);
  const isPrivateReq = privateRoute.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (!isAuthnticate && isPrivateReq) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/booking/:path*"],
};
