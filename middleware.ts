import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isPlayerRoute = createRouteMatcher(["/player(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims as any)?.metadata?.role as string | undefined;

  if ((isAdminRoute(request) || isPlayerRoute(request)) && !userId) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (isAdminRoute(request) && role !== "ADMIN") {
    return Response.redirect(new URL("/player", request.url));
  }

  if (isPlayerRoute(request) && role === "ADMIN") {
    return Response.redirect(new URL("/admin", request.url));
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
