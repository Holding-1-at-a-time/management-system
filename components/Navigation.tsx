/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 28/09/2024 - 01:57:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2024
    * - Author          : rrome
    * - Modification    : 
**/
// project="org-management-system" file="components/Navigation.tsx" type="react"
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Navigation() {
    const { isSignedIn } = useAuth();

    return (
        <nav className="bg-slate-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                {isSignedIn ? (
                    <>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href={`https://accounts.${process.env.NEXT_PUBLIC_CLERK_DOMAIN}/user?redirect_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL as string)}/dashboard`}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href={`https://accounts.${process.env.NEXT_PUBLIC_CLERK_DOMAIN}/organization?redirect_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL as string)}/dashboard`}>
                                Organization
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={`https://accounts.${process.env.NEXT_PUBLIC_CLERK_DOMAIN}/sign-in?redirect_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL as string)}/dashboard`}>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link href={`https://accounts.${process.env.NEXT_PUBLIC_CLERK_DOMAIN}/sign-up?redirect_url=${encodeURIComponent(process.env.NEXT_PUBLIC_APP_URL as string)}/onboarding`}>
                                Sign Up
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}