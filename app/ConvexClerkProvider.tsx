/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 28/09/2024 - 01:45:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2024
    * - Author          : rrome
    * - Modification    : 
**/
// project="org-management-system" file="app/ConvexClientProvider.tsx" type="react"
"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: { 
        socialButtonsVariant: 'iconButton',
      },
      variables: {
        colorBackground: '#15171c',
        colorPrimary: '',
        colorText: 'white',
        colorInputBackground: '#1b1f29',
        colorInputText: 'white',
      }
    }}

    afterSignOutUrl="/"
    signInUrl="/sign-in"
    signUpUrl="/sign-up"
  >
    
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;