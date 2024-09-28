/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 28/09/2024 - 01:47:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2024
    * - Author          : rrome
    * - Modification    : 
**/
// project = "org-management-system" file = "app/(auth)/sign-in/[[...sign-in]]/page.tsx" type = "react"
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <SignIn
            appearance={{
                elements: {
                    formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
                }
            }}
        />
    );
}