/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 28/09/2024 - 01:48:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2024
    * - Author          : rrome
    * - Modification    : 
**/
//project = "org-management-system" file = "app/(auth)/sign-up/[[...sign-up]]/page.tsx" type = "react"

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <SignUp
            appearance={{
                elements: {
                    formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
                }
            }}
        />
    );
}