import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// to protect pages we have <Protect> component
// it protects api routes not your next js app router frontend routes/pages

const isProtectedRoute = createRouteMatcher(["/cms(.*)"]);

export default clerkMiddleware((auth, req) => {
  // Restrict admin routes to users with specific permissions
  if (isProtectedRoute(req)) {
    auth().protect()
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"
  ],
};
