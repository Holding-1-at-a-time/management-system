import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 28/09/2024 - 01:55:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2024
    * - Author          : rrome
    * - Modification    : 
**/
// project="org-management-system" file="middleware.ts" type="code"

    const _publicRoutes = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)", "/api/trpc/(.*)"]);

    export default clerkMiddleware()


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
