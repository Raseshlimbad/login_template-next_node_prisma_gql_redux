import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("login_token")?.value;
  const protectedRoutes = ["/"];
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
